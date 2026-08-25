import { NextResponse } from "next/server";
import { demoIntegrations } from "@/server/repositories/demo-data";
export async function GET() { return NextResponse.json({ mode: "demo", rows: demoIntegrations.map(({ secretLastFour, ...integration }) => ({ ...integration, configured: false, secretLastFour })) }); }
