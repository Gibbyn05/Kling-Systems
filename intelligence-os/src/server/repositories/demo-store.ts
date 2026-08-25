import "server-only";

import { demoTasks } from "@/server/repositories/demo-data";

export interface MutableTask {
  id: string;
  title: string;
  description: string;
  status: "open" | "in_progress" | "completed" | "cancelled";
  priority: "critical" | "high" | "medium" | "low";
  dueAt: string | null;
  sourceType: string;
  assignee: string;
  related: string;
  updatedAt: string;
}

const tasks: MutableTask[] = demoTasks.map((task) => ({ ...task, status: task.status as MutableTask["status"], priority: task.priority as MutableTask["priority"], dueAt: task.dueAt, updatedAt: new Date().toISOString() }));
const auditLogs: Array<{ id: string; action: string; entityType: string; entityId: string; createdAt: string; metadata: Record<string, unknown> }> = [];

export function listTasks() {
  return [...tasks];
}

export function createTask(input: Omit<MutableTask, "id" | "updatedAt">) {
  const task: MutableTask = { ...input, id: `task-${tasks.length + 1}`, updatedAt: new Date().toISOString() };
  tasks.unshift(task);
  writeAudit("task.created", "task", task.id, { title: task.title });
  return task;
}

export function updateTask(id: string, patch: Partial<Pick<MutableTask, "status" | "priority" | "dueAt" | "assignee">>) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return null;
  Object.assign(task, patch, { updatedAt: new Date().toISOString() });
  writeAudit("task.updated", "task", task.id, patch);
  return task;
}

export function writeAudit(action: string, entityType: string, entityId: string, metadata: Record<string, unknown>) {
  const record = { id: `audit-${auditLogs.length + 1}`, action, entityType, entityId, createdAt: new Date().toISOString(), metadata };
  auditLogs.unshift(record);
  return record;
}

export function listAuditLogs() {
  return [...auditLogs];
}
