import { NextResponse } from "next/server";
import { followupPreviewSchema } from "@/lib/validation/api";
import { previewFollowups } from "@/server/followups/demo-followups";
import { invalidRequest } from "@/server/repositories/http";
export async function POST(request: Request) { const parsed = followupPreviewSchema.safeParse(await request.json()); if (!parsed.success) return invalidRequest(parsed.error); try { return NextResponse.json(previewFollowups(parsed.data)); } catch (error) { return NextResponse.json({ error: { code: "RECIPIENT_REJECTED", message: error instanceof Error ? error.message : "Mottakeren ble avvist." } }, { status: 400 }); } }
