import { NextResponse } from "next/server";
import { taskMutationSchema } from "@/lib/validation/api";
import { createTask, listTasks } from "@/server/repositories/demo-store";
import { invalidRequest } from "@/server/repositories/http";

export async function GET() { return NextResponse.json({ mode: "demo", rows: listTasks() }); }
export async function POST(request: Request) {
  const parsed = taskMutationSchema.safeParse(await request.json());
  if (!parsed.success) return invalidRequest(parsed.error);
  return NextResponse.json({ mode: "demo", row: createTask({ title: parsed.data.title, description: parsed.data.description ?? "", status: parsed.data.status, priority: parsed.data.priority, dueAt: parsed.data.dueAt ?? null, sourceType: "user", assignee: "Fredrik", related: "" }) }, { status: 201 });
}
