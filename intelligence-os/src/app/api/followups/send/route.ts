import { NextResponse } from "next/server";
import { followupSendSchema } from "@/lib/validation/api";
import { sendDemoFollowups } from "@/server/followups/demo-followups";
import { enforceRateLimit, invalidRequest } from "@/server/repositories/http";
export async function POST(request: Request) { enforceRateLimit("followup-send", 10); const parsed = followupSendSchema.safeParse(await request.json()); if (!parsed.success) return invalidRequest(parsed.error); try { return NextResponse.json(sendDemoFollowups(parsed.data)); } catch (error) { return NextResponse.json({ error: { code: "SEND_REJECTED", message: error instanceof Error ? error.message : "Sendingen ble avvist." } }, { status: 400 }); } }
