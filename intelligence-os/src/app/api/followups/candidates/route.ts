import { NextResponse, type NextRequest } from "next/server";
import { demoFollowupCandidates } from "@/server/repositories/demo-data";
export async function GET(request: NextRequest) { const age = request.nextUrl.searchParams.get("age") ?? "never"; const rows = demoFollowupCandidates.filter((candidate) => age !== "never" || candidate.lastFollowupAt === null); return NextResponse.json({ mode: "demo", age, rows }); }
