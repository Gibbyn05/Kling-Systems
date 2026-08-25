import "server-only";

import { demoFollowupCandidates } from "@/server/repositories/demo-data";

const messageLog = new Map<string, DemoMessage>();

interface DemoMessage {
  id: string;
  recipientId: string;
  recipientName: string;
  body: string;
  idempotencyKey: string;
  status: "demo_sent";
  sentAt: string;
}

const allowedVariables = ["first_name", "full_name", "company_name", "service", "owner_name", "last_contact_date", "booking_link", "recent_result"] as const;

export function personalizeTemplate(template: string, variables: Record<string, string | undefined>): string {
  const unresolved: string[] = [];
  const output = template.replace(/{{\s*([a-z_]+)\s*}}/g, (_match, name: string) => {
    if (!allowedVariables.includes(name as (typeof allowedVariables)[number]) || !variables[name]) {
      unresolved.push(name);
      return `{{${name}}}`;
    }
    return variables[name] ?? "";
  });
  if (unresolved.length > 0) throw new Error(`Mangler verdi for: ${[...new Set(unresolved)].join(", ")}`);
  return output;
}

function resolveRecipient(id: string) {
  const recipient = demoFollowupCandidates.find((candidate) => candidate.id === id);
  if (!recipient) throw new Error(`Ukjent mottaker: ${id}`);
  if ((recipient.consentStatus as string) === "opted_out") throw new Error(`${recipient.fullName} har reservert seg.`);
  return recipient;
}

export function previewFollowups(input: { recipientIds: string[]; templateBody: string }) {
  const messages = input.recipientIds.map((id) => {
    const recipient = resolveRecipient(id);
    return {
      recipientId: id,
      recipientName: recipient.fullName,
      body: personalizeTemplate(input.templateBody, {
        first_name: recipient.firstName,
        full_name: recipient.fullName,
        company_name: recipient.companyName,
        service: recipient.service,
        owner_name: "Fredrik",
        booking_link: "https://klingsystems.no/kontakt",
      }),
    };
  });
  return { mode: "demo", eligible: messages.length, rejected: 0, previews: messages.slice(0, 5), recipients: messages };
}

export function sendDemoFollowups(input: { recipientIds: string[]; templateBody: string; batchIdempotencyKey: string; confirmationRecipientCount: number }) {
  const preview = previewFollowups(input);
  if (preview.eligible !== input.confirmationRecipientCount) throw new Error("Mottakerantallet er endret. Forhåndsvis sendingen på nytt.");
  const results = preview.recipients.map((recipient) => {
    const key = `${input.batchIdempotencyKey}:${recipient.recipientId}`;
    const existing = messageLog.get(key);
    if (existing) return existing;
    const message: DemoMessage = { id: `message-${messageLog.size + 1}`, ...recipient, idempotencyKey: key, status: "demo_sent", sentAt: new Date().toISOString() };
    messageLog.set(key, message);
    return message;
  });
  return { mode: "demo", requested: input.recipientIds.length, eligible: preview.eligible, sent: results.length, failed: 0, results };
}

export function resetDemoMessages(): void {
  messageLog.clear();
}
