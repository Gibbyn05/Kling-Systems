import { NextResponse, type NextRequest } from "next/server";
import { getIncomeSummary } from "@/server/analytics/demo-analytics";

export async function GET(request: NextRequest) {
  return NextResponse.json(getIncomeSummary(request.nextUrl.searchParams.get("month") ?? "2026-08"));
}
