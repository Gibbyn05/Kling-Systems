import { NextResponse } from "next/server";
const thresholds = { attributionCoverage: 0.8, leadHigh: 75, leadMedium: 45, youtubeNewAudience: 0.7, youtubeReturningAudience: 0.4, contentOutlierMultiplier: 1.5, subscriptionReviewDays: 90, followupAges: [3, 7, 14, 30], clientUpsellHealth: 70, maxAutomaticSends: 50, quietHours: { start: "20:00", end: "08:00", timezone: "Europe/Oslo" } };
export async function GET() { return NextResponse.json({ mode: "demo", ...thresholds }); }
export async function PUT(request: Request) { return NextResponse.json({ mode: "demo", ...thresholds, ...(await request.json() as Record<string, unknown>), audit: { action: "thresholds.updated" } }); }
