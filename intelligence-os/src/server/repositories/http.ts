import "server-only";

import { NextResponse } from "next/server";
import type { ZodError } from "zod";

export function invalidRequest(error: ZodError) {
  return NextResponse.json({ error: { code: "INVALID_REQUEST", message: "Forespørselen er ugyldig.", details: error.flatten() } }, { status: 400 });
}

export function routeError(error: unknown) {
  const message = error instanceof Error ? error.message : "Ukjent serverfeil.";
  const status = message === "AUTH_REQUIRED" ? 401 : message === "ORGANIZATION_ACCESS_DENIED" ? 403 : 500;
  const safeMessage = status === 500 ? "Forespørselen kunne ikke fullføres." : message;
  return NextResponse.json({ error: { code: status === 401 ? "AUTH_REQUIRED" : status === 403 ? "ACCESS_DENIED" : "SERVER_ERROR", message: safeMessage } }, { status });
}

const requests = new Map<string, { count: number; resetAt: number }>();

export function enforceRateLimit(key: string, limit: number, windowMs = 60_000): void {
  const now = Date.now();
  const state = requests.get(key);
  if (!state || state.resetAt <= now) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }
  if (state.count >= limit) throw new Error("RATE_LIMITED");
  state.count += 1;
}
