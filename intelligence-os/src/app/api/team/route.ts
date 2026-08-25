import { NextResponse } from "next/server";
import { demoTeamMembers } from "@/server/repositories/demo-data";
export async function GET() { return NextResponse.json({ mode: "demo", rows: demoTeamMembers }); }
export async function POST(request: Request) { return NextResponse.json({ mode: "demo", row: { id: "team-demo-new", ...(await request.json() as Record<string, unknown>) }, audit: { action: "team.created" } }, { status: 201 }); }
