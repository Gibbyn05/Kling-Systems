import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ mode: "demo", rows: [{ id: "context-demo", providerKey: "manual_upload", displayName: "Kling forretningskontekst", status: "ready", selectedPaths: ["PRODUCT.md", "DESIGN.md"], lastImportedAt: "2026-08-25T10:00:00Z" }] }); }
