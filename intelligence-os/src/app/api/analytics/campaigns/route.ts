import { NextResponse, type NextRequest } from "next/server";
import { demoAttributionAggregates } from "@/server/repositories/demo-data";

export async function GET(request: NextRequest) {
  const page = Math.max(1, Number(request.nextUrl.searchParams.get("page") ?? 1));
  const pageSize = Math.min(100, Math.max(1, Number(request.nextUrl.searchParams.get("pageSize") ?? 50)));
  const start = (page - 1) * pageSize;
  return NextResponse.json({ mode: "demo", page, pageSize, total: demoAttributionAggregates.length, rows: demoAttributionAggregates.slice(start, start + pageSize) });
}
