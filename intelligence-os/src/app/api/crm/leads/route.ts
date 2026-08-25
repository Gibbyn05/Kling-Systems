import { NextResponse, type NextRequest } from "next/server";
import { leadQualityLabel } from "@/lib/calculations";
import { demoLeads } from "@/server/repositories/demo-data";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const page = Math.max(1, Number(query.get("page") ?? 1));
  const pageSize = Math.min(100, Math.max(1, Number(query.get("pageSize") ?? 50)));
  const search = (query.get("search") ?? "").toLowerCase();
  const status = query.get("status");
  const quality = query.get("quality");
  const source = query.get("source");
  const sort = query.get("sort") ?? "createdAt";
  const direction = query.get("direction") === "asc" ? 1 : -1;
  const filtered = demoLeads.filter((lead) => (!search || `${lead.name} ${lead.email} ${lead.phone}`.toLowerCase().includes(search)) && (!status || lead.status === status) && (!quality || leadQualityLabel(lead.qualityScore) === quality) && (!source || lead.source === source));
  const sorted = [...filtered].sort((a, b) => String(a[sort as keyof typeof a] ?? "").localeCompare(String(b[sort as keyof typeof b] ?? "")) * direction);
  const start = (page - 1) * pageSize;
  return NextResponse.json({ mode: "demo", page, pageSize, total: sorted.length, pageCount: Math.ceil(sorted.length / pageSize), rows: sorted.slice(start, start + pageSize).map((lead) => ({ ...lead, qualityLabel: leadQualityLabel(lead.qualityScore) })) });
}
