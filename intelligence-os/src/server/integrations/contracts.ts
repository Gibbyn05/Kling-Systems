import "server-only";

export interface SyncResult {
  inserted: number;
  updated: number;
  skipped: number;
  failed: number;
  cursor?: string;
  errors: Array<{ externalId?: string; code: string; message: string }>;
}

export interface IntegrationAdapter<TRecord = unknown> {
  providerKey: string;
  testConnection(): Promise<{ ok: boolean; message: string }>;
  sync(input: { organizationId: string; cursor?: string; since?: string }): Promise<SyncResult>;
  normalize(record: unknown): TRecord;
}

export interface MessagingRecipient {
  id: string;
  displayName: string;
  phone?: string;
  email?: string;
  externalHandle?: string;
  consentStatus: "confirmed" | "unknown" | "opted_out";
}

export interface MessagingProvider {
  providerKey: "whatsapp" | "imessage_bridge" | "demo";
  send(input: { recipient: MessagingRecipient; body: string; idempotencyKey: string }): Promise<{ status: "sent" | "queued" | "failed"; externalMessageId?: string; errorCode?: string; errorMessage?: string }>;
}
