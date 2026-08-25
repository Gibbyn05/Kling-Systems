import { NextResponse } from "next/server";
import { z } from "zod";
import { updateTask } from "@/server/repositories/demo-store";

const schema = z.object({ status: z.enum(["open", "in_progress", "completed", "cancelled"]).optional(), priority: z.enum(["critical", "high", "medium", "low"]).optional(), dueAt: z.string().nullable().optional(), assignee: z.string().max(100).optional() });
export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: { code: "INVALID_REQUEST", message: "Oppdateringen er ugyldig." } }, { status: 400 });
  const task = updateTask(id, parsed.data);
  return task ? NextResponse.json({ mode: "demo", row: task }) : NextResponse.json({ error: { code: "NOT_FOUND", message: "Oppgaven finnes ikke." } }, { status: 404 });
}
