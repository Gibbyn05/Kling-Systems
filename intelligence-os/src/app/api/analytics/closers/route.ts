import { NextResponse } from "next/server";
import { getAnalyticsOverview } from "@/server/analytics/demo-analytics";

export async function GET() {
  return NextResponse.json({ mode: "demo", rows: getAnalyticsOverview("all").closers });
}
