import type { QualityLabel } from "@/lib/contracts";

export function safeRate(numerator: number, denominator: number): number | null {
  if (!Number.isFinite(numerator) || denominator <= 0) return null;
  return numerator / denominator;
}

export function moneyNet(input: {
  gross: number;
  refunds: number;
  fees: number;
  expenses: number;
  commissions: number;
}): number {
  return input.gross - input.refunds - input.fees - input.expenses - input.commissions;
}

export function overdueDays(dueDate: Date, localToday: Date): number {
  const utcDue = Date.UTC(dueDate.getUTCFullYear(), dueDate.getUTCMonth(), dueDate.getUTCDate());
  const utcToday = Date.UTC(localToday.getUTCFullYear(), localToday.getUTCMonth(), localToday.getUTCDate());
  return Math.max(0, Math.floor((utcToday - utcDue) / 86_400_000));
}

export function leadQualityLabel(score: number | null): QualityLabel {
  if (score === null) return "unscored";
  if (score >= 75) return "high";
  if (score >= 45) return "medium";
  return "low";
}

export function normalizeSubscription(amount: number, cycle: "weekly" | "monthly" | "quarterly" | "annual"): number {
  if (cycle === "annual") return amount / 12;
  if (cycle === "quarterly") return amount / 3;
  if (cycle === "weekly") return (amount * 52) / 12;
  return amount;
}

export function weightedCtr(records: ReadonlyArray<{ impressions: number; ctr: number }>): number | null {
  const impressions = records.reduce((sum, record) => sum + record.impressions, 0);
  const clicks = records.reduce((sum, record) => sum + record.impressions * record.ctr, 0);
  return safeRate(clicks, impressions);
}

export function percentile(values: number[], quantile: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.ceil(quantile * sorted.length) - 1;
  return sorted[Math.max(0, Math.min(index, sorted.length - 1))];
}

export function attributionCoverage(records: ReadonlyArray<{ source?: string | null; campaign?: string | null; firstTouchAt?: string | null }>): number | null {
  if (records.length === 0) return null;
  const complete = records.filter((record) => record.source && (record.campaign || record.source === "direct") && record.firstTouchAt).length;
  return complete / records.length;
}
