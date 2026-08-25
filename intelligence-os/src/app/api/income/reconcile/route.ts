import { NextResponse } from "next/server";
import { z } from "zod";
import { writeAudit } from "@/server/repositories/demo-store";

const schema = z.object({ invoiceId: z.string(), paymentId: z.string(), confirmed: z.literal(true), reason: z.string().min(3) });
export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: { code: "CONFIRMATION_REQUIRED", message: "Avstemmingen krever eksplisitt bekreftelse." } }, { status: 400 });
  writeAudit("payment.reconciled", "invoice", parsed.data.invoiceId, { paymentId: parsed.data.paymentId, reason: parsed.data.reason, mode: "demo" });
  return NextResponse.json({ mode: "demo", status: "reconciled", ...parsed.data });
}
