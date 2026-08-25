import "server-only";

export function deduplicateOpenAlerts<T extends { organizationId: string; deduplicationKey: string; status: "open" | "acknowledged" | "snoozed" | "resolved" }>(alerts: T[]): T[] {
  const seen = new Set<string>();
  return alerts.filter((alert) => {
    if (alert.status === "resolved") return true;
    const key = `${alert.organizationId}:${alert.deduplicationKey}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
