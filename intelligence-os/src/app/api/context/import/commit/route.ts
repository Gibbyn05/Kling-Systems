import { NextResponse } from "next/server";
export async function POST(request: Request) { const input = await request.json() as { selectedPaths?: string[] }; return NextResponse.json({ mode: "demo", sourceId: "context-import-1", imported: input.selectedPaths?.length ?? 0, changed: 0, status: "ready" }); }
