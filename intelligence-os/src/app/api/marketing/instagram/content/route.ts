import { NextResponse } from "next/server";
import { getInstagramAnalysis } from "@/server/analytics/demo-analytics";
export async function GET() { return NextResponse.json({ mode: "demo", rows: getInstagramAnalysis() }); }
