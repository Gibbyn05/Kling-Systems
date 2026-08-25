import { NextResponse } from "next/server";
import { demoLeads } from "@/server/repositories/demo-data";
export async function GET() { return NextResponse.json({ mode: "demo", rows: demoLeads.slice(0, 20).map((lead, index) => ({ ...lead, warmthScore: lead.qualityScore, firstSource: lead.source, lastSource: index % 2 ? "direct" : lead.source, sourceContent: lead.utmCampaign, trackingLink: index % 2 ? "ig-flyt" : "yt-auto", attributedRevenue: lead.currentClient ? 20000 : 0 })) }); }
