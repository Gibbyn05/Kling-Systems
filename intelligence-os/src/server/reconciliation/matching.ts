import "server-only";

export interface ReconciliationCandidate {
  paymentId: string;
  confidence: "exact" | "high" | "medium" | "low";
  reasons: string[];
  requiresConfirmation: boolean;
}

const normalize = (value: string | null | undefined) => (value ?? "").toLocaleLowerCase("nb-NO").normalize("NFKD").replace(/[^a-z0-9]/g, "");

export function findReconciliationCandidates(input: {
  invoice: { externalId?: string; amount: number; dueOn: string; clientName: string; clientEmail?: string };
  payments: Array<{ id: string; externalInvoiceId?: string; amount: number; paidOn: string; payerName?: string; payerEmail?: string }>;
  aliases: Array<{ name?: string; email?: string }>;
}): ReconciliationCandidate[] {
  return input.payments.map((payment) => {
    const reasons: string[] = [];
    const exactInvoice = Boolean(input.invoice.externalId && payment.externalInvoiceId === input.invoice.externalId);
    const email = normalize(payment.payerEmail);
    const exactEmail = Boolean(email && email === normalize(input.invoice.clientEmail));
    const alias = input.aliases.some((item) => (item.email && normalize(item.email) === email) || (item.name && normalize(item.name) === normalize(payment.payerName)));
    const exactAmount = payment.amount === input.invoice.amount;
    const closeDate = Math.abs(new Date(payment.paidOn).getTime() - new Date(input.invoice.dueOn).getTime()) <= 7 * 86_400_000;
    const payerName = normalize(payment.payerName);
    const clientName = normalize(input.invoice.clientName);
    const fuzzyName = payerName.length > 4 && clientName.length > 4 && (payerName.includes(clientName.slice(0, 5)) || clientName.includes(payerName.slice(0, 5)));
    if (exactInvoice) reasons.push("Eksakt ekstern faktura-ID");
    if (exactEmail) reasons.push("Eksakt normalisert e-post");
    if (alias) reasons.push("Bekreftet betaleralias");
    if (exactAmount) reasons.push("Eksakt beløp");
    if (closeDate) reasons.push("Nær betalings- og forfallsdato");
    if (fuzzyName) reasons.push("Liknende betalernavn");
    const confidence: ReconciliationCandidate["confidence"] = exactInvoice || alias ? "exact" : exactEmail && exactAmount ? "high" : exactAmount && (closeDate || fuzzyName) ? "medium" : "low";
    return { paymentId: payment.id, confidence, reasons, requiresConfirmation: confidence === "medium" || confidence === "low" };
  }).sort((a, b) => ["exact", "high", "medium", "low"].indexOf(a.confidence) - ["exact", "high", "medium", "low"].indexOf(b.confidence));
}
