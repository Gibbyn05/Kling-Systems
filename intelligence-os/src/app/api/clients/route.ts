import { NextResponse } from "next/server";
import { demoClients } from "@/server/repositories/demo-data";
export async function GET() { return NextResponse.json({ mode: "demo", rows: demoClients }); }
