import "server-only";

import { attributionCoverage, moneyNet, safeRate, weightedCtr } from "@/lib/calculations";
import type { DashboardSummary, MetricComparison, RangeKey } from "@/lib/contracts";
import { DEMO_NOW, getRangeBoundaries, isInRange } from "@/lib/dates";
import {
  demoAlerts,
  demoAttributionAggregates,
  demoBookedCalls,
  demoCommissions,
  demoDeals,
  demoExpenses,
  demoInstagramContent,
  demoPayments,
  demoYouTubeVideos,
} from "@/server/repositories/demo-data";

function comparison(current: number, previous: number): MetricComparison {
  return {
    current,
    previous,
    absoluteChange: current - previous,
    percentageChange: previous === 0 ? null : (current - previous) / previous,
  };
}

function inPreviousRange(timestamp: string, range: Exclude<RangeKey, "all">): boolean {
  const current = getRangeBoundaries(range);
  if (!current.start) return false;
  const duration = current.end.getTime() - current.start.getTime();
  const end = new Date(current.start.getTime() - 1);
  const start = new Date(end.getTime() - duration);
  const value = new Date(timestamp);
  return value >= start && value <= end;
}

export function getDashboardSummary(range: Exclude<RangeKey, "all">): DashboardSummary {
  const calls = demoBookedCalls.filter((record) => isInRange(record.scheduledAt, range));
  const previousCalls = demoBookedCalls.filter((record) => inPreviousRange(record.scheduledAt, range));
  const payments = demoPayments.filter((record) => record.status === "succeeded" && isInRange(record.paidAt, range));
  const previousPayments = demoPayments.filter((record) => record.status === "succeeded" && inPreviousRange(record.paidAt, range));
  const deals = demoDeals.filter((record) => record.stage === "closed_won" && isInRange(record.closedAt, range));
  const previousDeals = demoDeals.filter((record) => record.stage === "closed_won" && inPreviousRange(record.closedAt, range));
  const cash = payments.reduce((sum, record) => sum + record.amountGross - record.refundAmount, 0);
  const previousCash = previousPayments.reduce((sum, record) => sum + record.amountGross - record.refundAmount, 0);
  const processors = [...new Set(payments.map((record) => record.providerKey))].map((providerKey) => {
    const records = payments.filter((record) => record.providerKey === providerKey);
    const grossCash = records.reduce((sum, record) => sum + record.amountGross - record.refundAmount, 0);
    const fees = records.reduce((sum, record) => sum + record.feeAmount, 0);
    return {
      providerKey,
      displayName: providerKey === "manual_bank" ? "Manuell bank" : providerKey[0].toUpperCase() + providerKey.slice(1),
      successfulPayments: records.length,
      grossCash,
      fees,
      netCash: grossCash - fees,
      shareOfCash: safeRate(grossCash, cash),
      syncStatus: "demo" as const,
    };
  });
  const buckets = range === "today" ? ["08", "10", "12", "14", "16"] : ["20. aug", "21. aug", "22. aug", "23. aug", "24. aug", "25. aug"];
  const trend = buckets.map((bucket, index) => ({
    bucket,
    bookedCalls: index % 2 === 0 ? Math.min(calls.length, 1) : 0,
    successfulPayments: index === buckets.length - 1 ? Math.min(payments.length, 1) : index === 2 && payments.length > 1 ? 1 : 0,
    cashCollected: index === buckets.length - 1 ? Math.min(cash, 13800) : index === 2 && cash > 13800 ? 20000 : 0,
    closes: index === buckets.length - 1 ? Math.min(deals.length, 1) : index === 1 && deals.length > 1 ? 1 : 0,
  }));
  const recentActivity = [
    ...calls.map((record) => ({ id: record.id, type: "call" as const, label: `Booket samtale med ${record.contactName}`, occurredAt: record.scheduledAt, href: "/crm" })),
    ...payments.map((record) => ({ id: record.id, type: "payment" as const, label: `Betaling fra ${record.payerName}`, occurredAt: record.paidAt, amount: record.amountGross, href: "/income" })),
    ...deals.map((record) => ({ id: record.id, type: "close" as const, label: `${record.name} vunnet`, occurredAt: record.closedAt, amount: record.value, href: "/analytics" })),
  ].sort((a, b) => b.occurredAt.localeCompare(a.occurredAt)).slice(0, 6);

  return {
    range,
    timezone: "Europe/Oslo",
    generatedAt: DEMO_NOW,
    mode: "demo",
    metrics: {
      bookedCalls: comparison(calls.length, previousCalls.length),
      successfulPayments: comparison(payments.length, previousPayments.length),
      cashCollected: comparison(cash, previousCash),
      closes: comparison(deals.length, previousDeals.length),
    },
    trend,
    processors,
    recentActivity,
    alerts: demoAlerts.map(({ id, severity, title, explanation, href }) => ({ id, severity, title, explanation, href })),
  };
}

export function getAnalyticsOverview(range: RangeKey, source?: string, campaign?: string) {
  const calls = demoBookedCalls.filter((record) => isInRange(record.scheduledAt, range) && (!source || record.source === source));
  const rows = demoAttributionAggregates.filter((record) => (!source || record.source === source) && (!campaign || record.campaign === campaign));
  const closes = range === "all" && !source && !campaign ? demoDeals.length : rows.reduce((sum, row) => sum + row.closes, 0);
  const revenue = rows.reduce((sum, row) => sum + row.revenue, 0);
  return {
    mode: "demo",
    range,
    metrics: { bookedCalls: calls.length, closes, bookingToCloseRate: safeRate(closes, calls.length), closedWonRevenue: revenue },
    funnel: rows,
    attributionCoverage: 0.62,
    closers: [
      { rank: 1, name: "Fredrik", callsAssigned: 4, callsCompleted: 4, closes: 3, closeRate: 0.75, revenue: 45000, commission: 0 },
      { rank: 2, name: "Marius", callsAssigned: 3, callsCompleted: 2, closes: 1, closeRate: 0.5, revenue: 20000, commission: 4500 },
      { rank: 3, name: "Demo Designer", callsAssigned: 0, callsCompleted: 0, closes: 0, closeRate: null, revenue: 0, commission: 0 },
    ],
  };
}

export function getIncomeSummary(month = "2026-08") {
  const payments = demoPayments.filter((record) => record.status === "succeeded" && record.paidAt.startsWith(month));
  const expenses = demoExpenses.filter((record) => record.status === "paid" && record.recognizedOn.startsWith(month));
  const commissions = demoCommissions.filter((record) => record.status === "recognized" && record.recognizedOn.startsWith(month));
  const gross = payments.reduce((sum, record) => sum + record.amountGross, 0);
  const refunds = payments.reduce((sum, record) => sum + record.refundAmount, 0);
  const fees = payments.reduce((sum, record) => sum + record.feeAmount, 0);
  const expenseTotal = expenses.reduce((sum, record) => sum + record.amount, 0);
  const commissionTotal = commissions.reduce((sum, record) => sum + record.amount, 0);
  return { mode: "demo", month, grossRevenue: gross, cashCollected: gross - refunds, refunds, processorFees: fees, expenses: expenseTotal, commissions: commissionTotal, netIncome: moneyNet({ gross, refunds, fees, expenses: expenseTotal, commissions: commissionTotal }), activeClients: 3, outstandingPaymentPlans: 25000 };
}

export function getYouTubeAnalysis() {
  const baseline = weightedCtr(demoYouTubeVideos) ?? 0;
  const newViewerThreshold = 0.7;
  const returningThreshold = 0.4;
  const newViewers = demoYouTubeVideos.map((video) => video.views * video.newViewerRatio);
  const returningViewers = demoYouTubeVideos.map((video) => video.views * video.returningViewerRatio);
  const sortedNew = [...newViewers].sort((a, b) => a - b);
  const sortedReturning = [...returningViewers].sort((a, b) => a - b);
  const p75 = (values: number[]) => values[Math.ceil(values.length * 0.75) - 1] ?? 0;
  return { mode: "demo", baseline, videos: demoYouTubeVideos.map((video, index) => ({ ...video, aboveAverage: video.ctr > baseline, newAudienceMagnet: video.newViewerRatio >= newViewerThreshold && newViewers[index] >= p75(sortedNew), audienceWarmer: video.returningViewerRatio >= returningThreshold && returningViewers[index] >= p75(sortedReturning), hookWinner: video.ctr >= baseline * 1.2 && video.impressions > 100000, bestSalesVideo: video.attributedRevenue >= 70000 || video.attributedBookings >= 9 || video.attributedCloses >= 3 })) };
}

export function getInstagramAnalysis() {
  const baseline = demoInstagramContent.reduce((sum, item) => sum + item.saves, 0) / demoInstagramContent.reduce((sum, item) => sum + item.reach, 0);
  const reaches = [...demoInstagramContent.map((item) => item.reach)].sort((a, b) => a - b);
  const median = (reaches[0] + reaches[reaches.length - 1]) / 2;
  return demoInstagramContent.map((item) => ({ ...item, saveRate: item.saves / item.reach, shareRate: item.shares / item.reach, leadRate: item.leads / item.reach, potentialAdCreative: item.saves / item.reach >= baseline * 1.5 && item.reach > median && !item.promoted }));
}

export function getAttributionQuality() {
  return attributionCoverage([
    { source: "youtube", campaign: "automation-guide", firstTouchAt: DEMO_NOW },
    { source: "instagram", campaign: "lead-followup-reel", firstTouchAt: DEMO_NOW },
    { source: "direct", campaign: null, firstTouchAt: DEMO_NOW },
    { source: "facebook", campaign: null, firstTouchAt: DEMO_NOW },
    { source: null, campaign: null, firstTouchAt: null },
  ]);
}
