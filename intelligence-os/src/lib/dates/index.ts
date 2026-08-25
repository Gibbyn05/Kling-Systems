import type { RangeKey } from "@/lib/contracts";

export const DEMO_NOW = "2026-08-25T12:00:00+02:00";

export function getRangeBoundaries(range: RangeKey, now = new Date(DEMO_NOW)): { start: Date | null; end: Date } {
  const osloParts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Oslo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) => osloParts.find((item) => item.type === type)?.value ?? "";
  const localMidnight = new Date(`${part("year")}-${part("month")}-${part("day")}T00:00:00+02:00`);
  const localEndOfDay = new Date(localMidnight.getTime() + 86_400_000 - 1);
  if (range === "all") return { start: null, end: localEndOfDay };
  const days = range === "today" ? 0 : range === "7d" ? 6 : 29;
  return { start: new Date(localMidnight.getTime() - days * 86_400_000), end: localEndOfDay };
}

export function isInRange(timestamp: string, range: RangeKey, now = new Date(DEMO_NOW)): boolean {
  const { start, end } = getRangeBoundaries(range, now);
  const value = new Date(timestamp);
  return value <= end && (start === null || value >= start);
}
