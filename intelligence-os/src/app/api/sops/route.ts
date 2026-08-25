import { NextResponse } from "next/server";
import { demoSops } from "@/server/repositories/demo-data";
export async function GET() { return NextResponse.json({ mode: "demo", rows: demoSops }); }
export async function POST(request: Request) { return NextResponse.json({ mode: "demo", row: { id: "sop-demo-new", version: 1, active: true, ...(await request.json() as Record<string, unknown>) }, audit: { action: "sop.created" } }, { status: 201 }); }
