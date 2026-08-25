export type RangeKey = "today" | "7d" | "30d" | "all";
export type Severity = "critical" | "high" | "medium" | "low";
export type QualityLabel = "high" | "medium" | "low" | "unscored";

export interface MetricComparison {
  current: number;
  previous: number;
  absoluteChange: number;
  percentageChange: number | null;
}

export interface DashboardSummary {
  range: Exclude<RangeKey, "all">;
  timezone: string;
  generatedAt: string;
  mode: "demo" | "live";
  metrics: {
    bookedCalls: MetricComparison;
    successfulPayments: MetricComparison;
    cashCollected: MetricComparison;
    closes: MetricComparison;
  };
  trend: Array<{
    bucket: string;
    bookedCalls: number;
    successfulPayments: number;
    cashCollected: number;
    closes: number;
  }>;
  processors: Array<{
    providerKey: string;
    displayName: string;
    successfulPayments: number;
    grossCash: number;
    fees: number;
    netCash: number;
    shareOfCash: number | null;
    syncStatus: "healthy" | "stale" | "error" | "demo";
  }>;
  recentActivity: Array<{
    id: string;
    type: "call" | "payment" | "close" | "followup" | "task";
    label: string;
    occurredAt: string;
    amount?: number;
    href: string;
  }>;
  alerts: Array<{
    id: string;
    severity: Severity;
    title: string;
    explanation: string;
    href: string;
  }>;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface AiCeoResponse {
  answer: string;
  confidence: number;
  findings: Array<{
    title: string;
    explanation: string;
    severity: Severity;
    evidence: Array<{
      entityType: string;
      entityId: string;
      label: string;
      href: string;
      metric?: string;
      value?: number | string;
    }>;
  }>;
  dataQualityWarnings: Array<{
    area: string;
    message: string;
    impact: string;
  }>;
  recommendedActions: Array<{
    id: string;
    actionType: "create_task" | "create_sop_draft" | "draft_followup" | "review_invoice" | "fix_utm" | "review_subscription" | "inspect_content";
    title: string;
    rationale: string;
    payload: Record<string, unknown>;
    requiresConfirmation: true;
  }>;
}
