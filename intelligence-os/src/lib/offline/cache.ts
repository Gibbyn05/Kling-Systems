"use client";

import { openDB } from "idb";

const DATABASE_NAME = "kling-intelligence-os";

async function database() {
  return openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      ["responses", "drafts", "outbox", "contextMetadata"].forEach((name) => {
        if (!db.objectStoreNames.contains(name)) db.createObjectStore(name);
      });
    },
  });
}

export async function cacheGetResponse<T>(key: string): Promise<{ value: T; cachedAt: string } | null> {
  const db = await database();
  return (await db.get("responses", key)) as { value: T; cachedAt: string } | null;
}

export async function cacheSetResponse<T>(key: string, value: T): Promise<void> {
  const db = await database();
  await db.put("responses", { value, cachedAt: new Date().toISOString() }, key);
}

export async function saveSafeDraft(kind: "followup" | "email" | "sop" | "task" | "note", id: string, value: unknown): Promise<void> {
  const db = await database();
  await db.put("drafts", { kind, value, updatedAt: new Date().toISOString() }, `${kind}:${id}`);
}

export async function queueSafeMutation(id: string, value: unknown): Promise<void> {
  const db = await database();
  await db.put("outbox", { value, createdAt: new Date().toISOString(), requiresReview: true }, id);
}
