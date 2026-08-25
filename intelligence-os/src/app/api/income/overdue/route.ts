import { NextResponse } from "next/server";
import { overdueDays } from "@/lib/calculations";
import { demoOverdueInvoices } from "@/server/repositories/demo-data";

export async function GET() {
  const today = new Date("2026-08-25T00:00:00Z");
  const rows = demoOverdueInvoices.map((invoice) => ({ ...invoice, daysOverdue: overdueDays(new Date(`${invoice.dueOn}T00:00:00Z`), today) })).sort((a, b) => b.daysOverdue - a.daysOverdue);
  return NextResponse.json({ mode: "demo", unresolvedCount: rows.length, rows });
}
