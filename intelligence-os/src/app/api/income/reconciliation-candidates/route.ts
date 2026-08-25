import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ mode: "demo", candidates: [{ invoiceId: "invoice-overdue-55", paymentId: "payment-2", confidence: "high", reasons: ["Lik e-post", "Eksakt beløp", "Nær dato"], requiresConfirmation: true }, { invoiceId: "invoice-overdue-37", paymentId: "payment-3", confidence: "medium", reasons: ["Nært betalernavn", "Eksakt beløp"], requiresConfirmation: true }] });
}
