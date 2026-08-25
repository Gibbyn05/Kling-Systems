import "server-only";

import type { IntegrationAdapter, MessagingProvider } from "@/server/integrations/contracts";

export class DemoIntegrationAdapter<TRecord> implements IntegrationAdapter<TRecord> {
  constructor(public providerKey: string, private readonly normalizer: (record: unknown) => TRecord) {}

  async testConnection() {
    return { ok: true, message: "Demo-adapteren er klar. Ingen ekstern tilkobling ble brukt." };
  }

  async sync() {
    return { inserted: 0, updated: 0, skipped: 1, failed: 0, errors: [] };
  }

  normalize(record: unknown): TRecord {
    return this.normalizer(record);
  }
}

export const demoMessagingProvider: MessagingProvider = {
  providerKey: "demo",
  async send(input) {
    if (input.recipient.consentStatus === "opted_out") return { status: "failed", errorCode: "OPTED_OUT", errorMessage: "Mottakeren har reservert seg." };
    return { status: "sent", externalMessageId: `demo:${input.idempotencyKey}` };
  },
};
