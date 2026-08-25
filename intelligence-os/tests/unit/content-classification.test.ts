import { describe, expect, it } from "vitest";
import { getInstagramAnalysis, getYouTubeAnalysis } from "@/server/analytics/demo-analytics";

describe("content classification", () => {
  it("BA-007 classifies new and returning audiences", () => {
    const videos = getYouTubeAnalysis().videos;
    expect(videos.find((video) => video.id === "youtube-1")?.newAudienceMagnet).toBe(true);
    expect(videos.find((video) => video.id === "youtube-4")?.audienceWarmer).toBe(true);
  });
  it("flags instagram-content-1 as a potential ad creative", () => expect(getInstagramAnalysis().find((item) => item.id === "instagram-content-1")?.potentialAdCreative).toBe(true));
});
