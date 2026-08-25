import { beforeEach, describe, expect, it } from "vitest";
import { getAnalyticsOverview, getDashboardSummary, getIncomeSummary } from "@/server/analytics/demo-analytics";
import { demoOverdueInvoices } from "@/server/repositories/demo-data";
import { overdueDays } from "@/lib/calculations";
import { findReconciliationCandidates } from "@/server/reconciliation/matching";
import { deduplicateOpenAlerts } from "@/server/alerts/deduplicate";
import { resetDemoMessages, sendDemoFollowups } from "@/server/followups/demo-followups";
import { generateDemoAiCeoResponse } from "@/server/ai/demo-ai";
import { demoMessagingProvider } from "@/server/integrations/demo-adapter";
import { demoInstagramThreads } from "@/server/repositories/demo-data";

describe("business integrations", () => {
  beforeEach(() => resetDemoMessages());
  it("BA-101 returns required dashboard values", () => {
    expect(getDashboardSummary("today").metrics).toMatchObject({ bookedCalls: { current: 2 }, successfulPayments: { current: 1 }, cashCollected: { current: 13800 }, closes: { current: 1 } });
    expect(getDashboardSummary("7d").metrics).toMatchObject({ bookedCalls: { current: 4 }, successfulPayments: { current: 2 }, cashCollected: { current: 33800 }, closes: { current: 2 } });
    expect(getDashboardSummary("30d").metrics).toMatchObject({ bookedCalls: { current: 6 }, successfulPayments: { current: 3 }, cashCollected: { current: 43700 }, closes: { current: 3 } });
  });
  it("BA-102 applies source and campaign filters across metrics", () => {
    const all = getAnalyticsOverview("all");
    const youtube = getAnalyticsOverview("all", "youtube", "automation-guide");
    expect(all.metrics.bookedCalls).toBe(7);
    expect(all.metrics.closes).toBe(4);
    expect(youtube.metrics.bookedCalls).toBe(3);
    expect(youtube.metrics.closedWonRevenue).toBe(120000);
  });
  it("BA-103 returns all six income components", () => expect(getIncomeSummary("2026-08")).toMatchObject({ grossRevenue: 43700, refunds: 0, processorFees: 900, expenses: 11700, commissions: 4500, netIncome: 26600 }));
  it("BA-104 orders overdue invoices descending", () => {
    const today = new Date("2026-08-25T00:00:00Z");
    const rows = demoOverdueInvoices.map((item) => ({ id: item.invoiceNumber, days: overdueDays(new Date(`${item.dueOn}T00:00:00Z`), today) })).sort((a,b) => b.days-a.days);
    expect(rows.map((row) => row.days)).toEqual([92,55,37]);
  });
  it("BA-105 treats aliases as exact and fuzzy matches as confirmable", () => {
    const candidates = findReconciliationCandidates({ invoice: { amount: 5000, dueOn: "2026-08-20", clientName: "Nordvest Drift AS" }, aliases: [{ name: "N. Drift" }], payments: [{ id: "alias", amount: 5000, paidOn: "2026-08-20", payerName: "N. Drift" }, { id: "fuzzy", amount: 5000, paidOn: "2026-08-22", payerName: "Nordvest Drft" }] });
    expect(candidates.find((item) => item.paymentId === "alias")?.confidence).toBe("exact");
    expect(candidates.find((item) => item.paymentId === "fuzzy")?.requiresConfirmation).toBe(true);
  });
  it("BA-109 keeps demo sends idempotent", () => {
    const input = { recipientIds: ["client-conor"], templateBody: "Hei {{first_name}}", batchIdempotencyKey: "batch-key-long-enough", confirmationRecipientCount: 1 };
    const first = sendDemoFollowups(input); const second = sendDemoFollowups(input);
    expect(first.results[0].id).toBe(second.results[0].id);
    expect(second.results).toHaveLength(1);
  });
  it("BA-107 keeps evidence IDs with Instagram scores", () => expect(demoInstagramThreads.find((thread) => thread.id === "thread-high")?.evidenceMessageIds).toEqual(["ig-msg-1", "ig-msg-2"]));
  it("BA-110 blocks opted-out recipients", async () => expect(await demoMessagingProvider.send({ recipient: { id: "opted", displayName: "Opted Out", consentStatus: "opted_out" }, body: "Hei", idempotencyKey: "opted-out-test" })).toMatchObject({ status: "failed", errorCode: "OPTED_OUT" }));
  it("BA-111 warns when attribution is below 80 percent", () => {
    const answer = generateDemoAiCeoResponse("Hvor taper vi penger?");
    expect(answer.dataQualityWarnings[0].message).toContain("80 %");
    expect(answer.answer).toContain("62 %");
  });
  it("BA-113 deduplicates unresolved alerts", () => {
    const alerts = deduplicateOpenAlerts([{ organizationId: "o", deduplicationKey: "invoice:1", status: "open" as const }, { organizationId: "o", deduplicationKey: "invoice:1", status: "acknowledged" as const }, { organizationId: "o", deduplicationKey: "invoice:1", status: "resolved" as const }]);
    expect(alerts).toHaveLength(2);
  });
});
