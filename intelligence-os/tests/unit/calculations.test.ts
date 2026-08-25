import { describe, expect, it } from "vitest";
import { attributionCoverage, leadQualityLabel, moneyNet, normalizeSubscription, overdueDays, safeRate, weightedCtr } from "@/lib/calculations";
import { getRangeBoundaries } from "@/lib/dates";
import { demoYouTubeVideos } from "@/server/repositories/demo-data";
import { personalizeTemplate } from "@/server/followups/demo-followups";

describe("BA-001 date ranges", () => {
  it("uses Europe/Oslo boundaries at the frozen time", () => {
    expect(getRangeBoundaries("today").start?.toISOString()).toBe("2026-08-24T22:00:00.000Z");
    expect(getRangeBoundaries("7d").start?.toISOString()).toBe("2026-08-18T22:00:00.000Z");
    expect(getRangeBoundaries("30d").start?.toISOString()).toBe("2026-07-26T22:00:00.000Z");
    expect(getRangeBoundaries("all").start).toBeNull();
  });
});

describe("canonical calculations", () => {
  it("BA-002 returns null for invalid rates", () => expect(safeRate(3, 0)).toBeNull());
  it("BA-003 calculates August net income", () => expect(moneyNet({ gross: 43700, refunds: 0, fees: 900, expenses: 11700, commissions: 4500 })).toBe(26600));
  it("BA-004 calculates 92, 55 and 37 overdue days", () => {
    const today = new Date("2026-08-25T00:00:00Z");
    expect(["2026-05-25", "2026-07-01", "2026-07-19"].map((date) => overdueDays(new Date(`${date}T00:00:00Z`), today))).toEqual([92, 55, 37]);
  });
  it("BA-005 labels lead scores", () => expect([82, 60, 20, null].map(leadQualityLabel)).toEqual(["high", "medium", "low", "unscored"]));
  it("BA-006 calculates a weighted YouTube baseline", () => {
    const baseline = weightedCtr(demoYouTubeVideos);
    expect(baseline).toBeCloseTo(0.0595849, 5);
    expect(demoYouTubeVideos.filter((video) => video.ctr > (baseline ?? 0)).map((video) => video.id)).toEqual(["youtube-1", "youtube-2"]);
    expect(demoYouTubeVideos.filter((video) => video.ctr < (baseline ?? 0)).map((video) => video.id)).toEqual(["youtube-3", "youtube-4"]);
  });
  it("BA-008 normalizes subscription cycles", () => {
    expect(normalizeSubscription(100, "monthly")).toBe(100);
    expect(normalizeSubscription(1200, "annual")).toBe(100);
    expect(normalizeSubscription(300, "quarterly")).toBe(100);
    expect(normalizeSubscription(120, "weekly")).toBe(520);
  });
  it("BA-009 lowers attribution coverage when tags are missing", () => expect(attributionCoverage([{ source: "direct", firstTouchAt: "2026-08-01" }, { source: "youtube", campaign: null, firstTouchAt: "2026-08-01" }])).toBe(0.5));
  it("BA-010 personalizes templates and rejects unresolved variables", () => {
    expect(personalizeTemplate("Hei {{first_name}}", { first_name: "Conor" })).toBe("Hei Conor");
    expect(() => personalizeTemplate("Hei {{first_name}} fra {{company_name}}", { first_name: "Conor" })).toThrow("company_name");
  });
});
