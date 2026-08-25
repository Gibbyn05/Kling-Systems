import { NextResponse } from "next/server";
import { demoAttributionAggregates } from "@/server/repositories/demo-data";
export async function GET() { return NextResponse.json({ mode: "demo", activeModel: "first_touch", campaignOptimizationModel: "last_touch", summary: { visits: 950, optins: 58, bookings: 35, closes: 10, revenue: 295000, coverage: 0.62 }, rows: demoAttributionAggregates }); }
