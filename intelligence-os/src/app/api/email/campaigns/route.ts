import { NextResponse } from "next/server";
import { safeRate } from "@/lib/calculations";
import { demoEmailCampaigns } from "@/server/repositories/demo-data";
export async function GET() { return NextResponse.json({ mode: "demo", rows: demoEmailCampaigns.map((email) => ({ ...email, openRate: safeRate(email.uniqueOpens, email.delivered), clickRate: safeRate(email.uniqueClicks, email.delivered), unsubscribeRate: safeRate(email.unsubscribes, email.delivered), status: "sent" })) }); }
