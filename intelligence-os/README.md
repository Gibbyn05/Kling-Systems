# Kling Intelligence OS

Internt Business Intelligence-system for Kling Systems. Appen samler drift, inntekt, CRM, kunder, abonnementer, team, markedsføring, oppfølginger og AI-støttede lederbeslutninger i ett grensesnitt.

## Lokal oppstart

```bash
npm install
npm run dev
```

Åpne `http://localhost:3000`. Uten Supabase-variabler starter appen i tydelig merket demo-modus med deterministiske data. Kopier `.env.example` til `.env.local` for å aktivere autentisering og Supabase-klienten.

## Kvalitetssikring

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

`npm run verify` kjører lint, TypeScript, Vitest og produksjonsbygg. Playwright kjøres separat fordi testen starter en lokal webserver og krever installert Chromium.

## Database

- Migrasjon: `supabase/migrations/20260824232522_intelligence_os_core.sql`
- Deterministisk seed: `supabase/seed.sql`
- TypeScript-referanse for seeddata: `supabase/seed.ts`

Migrasjonen oppretter organisasjonsavgrensede tabeller, eksplisitte RLS-policyer for lesing og skriving, medlemskapskontroll og sikkerhetsinvokerende rapportvisninger. Bruk Supabase CLI mot valgt lokalt eller eksternt prosjekt for å anvende og verifisere migrasjonen før live-modus tas i bruk.

## Integrasjonsstatus

Integrasjonsadapterne for Tripletex, Stripe, YouTube, Instagram, Google Ads, Meta Ads, LinkedIn Ads, Resend og WhatsApp har felles kontrakter og deterministiske demoimplementasjoner. Ingen av dem sender eller henter live-data før egne leverandørnøkler og varig webhook-idempotens er konfigurert. Webhook-endepunktet krever HMAC-signatur via `WEBHOOK_SIGNING_SECRET`.
