import { NextResponse, type NextRequest } from "next/server";
import { demoInstagramThreads } from "@/server/repositories/demo-data";
export async function GET(request: NextRequest) { const quality = request.nextUrl.searchParams.get("quality"); return NextResponse.json({ mode: "demo", rows: demoInstagramThreads.filter((thread) => !quality || thread.qualityLabel === quality) }); }
