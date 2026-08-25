import { NextResponse } from "next/server";
import { demoTrackingLinks } from "@/server/repositories/demo-data";
export async function GET() { return NextResponse.json({ mode: "demo", canonicalBaseUrl: "https://klingsystems.no/r", rows: demoTrackingLinks.map((link) => ({ ...link, canonicalUrl: `https://klingsystems.no/r/${link.slug}` })) }); }
export async function POST(request: Request) { const input = await request.json() as Record<string, unknown>; return NextResponse.json({ mode: "demo", row: { id: "link-demo-new", canonicalUrl: "https://klingsystems.no/r/demo-new", active: true, ...input }, audit: { action: "tracking_link.created" } }, { status: 201 }); }
