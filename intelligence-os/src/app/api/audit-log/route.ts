import { NextResponse } from "next/server";
import { listAuditLogs } from "@/server/repositories/demo-store";
export async function GET() { return NextResponse.json({ mode: "demo", rows: listAuditLogs() }); }
