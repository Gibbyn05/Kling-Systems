import { NextResponse } from "next/server";
import { demoAlerts } from "@/server/repositories/demo-data";
export async function GET() { return NextResponse.json({ mode: "demo", unresolved: demoAlerts.length, rows: demoAlerts }); }
