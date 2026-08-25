import { NextResponse } from "next/server";
import { leadQualityLabel } from "@/lib/calculations";
import { demoLeads } from "@/server/repositories/demo-data";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const lead = demoLeads.find((item) => item.id === id);
  if (!lead) return NextResponse.json({ error: { code: "NOT_FOUND", message: "Leadet finnes ikke." } }, { status: 404 });
  return NextResponse.json({ mode: "demo", row: { ...lead, qualityLabel: leadQualityLabel(lead.qualityScore), lifecycle: [{ state: "visit", at: lead.createdAt }, { state: "lead", at: lead.createdAt }, ...(lead.booked ? [{ state: "booked_call", at: "2026-08-20T10:00:00+02:00" }] : [])] } });
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const input = await request.json() as Record<string, unknown>;
  return NextResponse.json({ mode: "demo", row: { id, ...input }, audit: { action: "lead.updated" } });
}
