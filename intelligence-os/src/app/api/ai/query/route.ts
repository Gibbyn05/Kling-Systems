import { NextResponse } from "next/server";
import { aiQuerySchema } from "@/lib/validation/api";
import { generateDemoAiCeoResponse } from "@/server/ai/demo-ai";
import { enforceRateLimit, invalidRequest } from "@/server/repositories/http";
export async function POST(request: Request) { enforceRateLimit("ai-query", 20); const parsed = aiQuerySchema.safeParse(await request.json()); if (!parsed.success) return invalidRequest(parsed.error); return NextResponse.json({ mode: "demo", insightId: `insight-${Date.now()}`, ...generateDemoAiCeoResponse(parsed.data.question) }); }
