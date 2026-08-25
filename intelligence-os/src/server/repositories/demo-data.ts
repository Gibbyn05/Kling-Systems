import { DEMO_NOW } from "@/lib/dates";

export { DEMO_NOW };

export const demoOrganization = {
  id: "00000000-0000-4000-8000-000000000001",
  name: "Kling Systems",
  slug: "kling-systems",
  timezone: "Europe/Oslo",
  currency: "NOK",
  locale: "nb-NO",
} as const;

export const demoTeamMembers = [
  { id: "10000000-0000-4000-8000-000000000001", name: "Fredrik", roleTitle: "Grunnlegger og systemansvarlig", teamType: "core", description: "Ansvarlig for retning, salg og leveranse.", primaryContribution: "Salg, systemarkitektur og leveranse", closedRevenue: 45000, commission: 0 },
  { id: "10000000-0000-4000-8000-000000000002", name: "Marius", roleTitle: "Salg og kundevekst", teamType: "core", description: "Kvalifiserer muligheter og følger opp kunder.", primaryContribution: "Leadkvalifisering og kundetilfang", closedRevenue: 20000, commission: 4500 },
  { id: "10000000-0000-4000-8000-000000000003", name: "Demo Designer", roleTitle: "Designer", teamType: "core", description: "Arbeider med nettsider og visuelle leveranser.", primaryContribution: "Web- og merkevaredesign", closedRevenue: 0, commission: 0 },
] as const;

export const demoBookedCalls = [
  { id: "call-1", scheduledAt: "2026-08-25T09:00:00+02:00", status: "completed", source: "instagram", contactName: "Anna Solheim" },
  { id: "call-2", scheduledAt: "2026-08-25T14:00:00+02:00", status: "booked", source: "youtube", contactName: "Jonas Berg" },
  { id: "call-3", scheduledAt: "2026-08-23T11:00:00+02:00", status: "completed", source: "youtube", contactName: "Conor Walsh" },
  { id: "call-4", scheduledAt: "2026-08-20T13:00:00+02:00", status: "completed", source: "linkedin", contactName: "Maria Strand" },
  { id: "call-5", scheduledAt: "2026-08-12T10:00:00+02:00", status: "completed", source: "facebook", contactName: "Lars Nilsen" },
  { id: "call-6", scheduledAt: "2026-07-30T15:00:00+02:00", status: "completed", source: "youtube", contactName: "Ida Hovde" },
  { id: "call-7", scheduledAt: "2026-07-01T12:00:00+02:00", status: "completed", source: "direct", contactName: "Ola Vik" },
] as const;

export const demoDeals = [
  { id: "deal-1", name: "AI-automatisering", value: 30000, stage: "closed_won", closedAt: "2026-08-25T10:00:00+02:00", owner: "Fredrik" },
  { id: "deal-2", name: "Bedriftsnettside", value: 20000, stage: "closed_won", closedAt: "2026-08-21T15:00:00+02:00", owner: "Marius" },
  { id: "deal-3", name: "CRM-integrasjon", value: 15000, stage: "closed_won", closedAt: "2026-08-05T15:00:00+02:00", owner: "Fredrik" },
  { id: "deal-4", name: "Landingsside", value: 12000, stage: "closed_won", closedAt: "2026-07-10T12:00:00+02:00", owner: "Marius" },
] as const;

export const demoPayments = [
  { id: "payment-1", providerKey: "stripe", amountGross: 13800, feeAmount: 300, refundAmount: 0, status: "succeeded", paidAt: "2026-08-25T10:15:00+02:00", payerName: "Nordvest Drift AS" },
  { id: "payment-2", providerKey: "fiken", amountGross: 20000, feeAmount: 400, refundAmount: 0, status: "succeeded", paidAt: "2026-08-22T13:30:00+02:00", payerName: "Molde Servicepartner AS" },
  { id: "payment-3", providerKey: "manual_bank", amountGross: 9900, feeAmount: 200, refundAmount: 0, status: "succeeded", paidAt: "2026-08-10T08:15:00+02:00", payerName: "Romsdal Byggtjenester AS" },
  { id: "payment-4", providerKey: "stripe", amountGross: 15000, feeAmount: 350, refundAmount: 0, status: "succeeded", paidAt: "2026-07-15T12:00:00+02:00", payerName: "Fjord Digital AS" },
] as const;

export const demoExpenses = [
  { id: "expense-1", vendor: "Kontraktsdesign", category: "contractors", amount: 8000, status: "paid", recognizedOn: "2026-08-08" },
  { id: "expense-2", vendor: "Programvare", category: "software", amount: 2500, status: "paid", recognizedOn: "2026-08-15" },
  { id: "expense-3", vendor: "Annonsering", category: "marketing", amount: 1200, status: "paid", recognizedOn: "2026-08-20" },
] as const;

export const demoCommissions = [
  { id: "commission-1", amount: 3000, status: "recognized", recognizedOn: "2026-08-21" },
  { id: "commission-2", amount: 1500, status: "recognized", recognizedOn: "2026-08-25" },
] as const;

export const demoOverdueInvoices = [
  { id: "invoice-overdue-92", clientName: "Nordvest Drift AS", invoiceNumber: "KS-2026-041", amount: 5000, dueOn: "2026-05-25", status: "overdue", graceNote: "Midlertidig utsettelse godkjent av eier.", lastReminder: "18.08.2026", possibleMatch: "Ingen" },
  { id: "invoice-overdue-55", clientName: "Molde Servicepartner AS", invoiceNumber: "KS-2026-052", amount: 12000, dueOn: "2026-07-01", status: "overdue", graceNote: null, lastReminder: "20.08.2026", possibleMatch: "Høy" },
  { id: "invoice-overdue-37", clientName: "Romsdal Byggtjenester AS", invoiceNumber: "KS-2026-058", amount: 8000, dueOn: "2026-07-19", status: "overdue", graceNote: null, lastReminder: "21.08.2026", possibleMatch: "Middels" },
] as const;

export const demoSubscriptions = [
  ["Vercel", "Hosting og utrulling", 220], ["Supabase", "Database og autentisering", 275], ["OpenAI", "AI-bruk", 700],
  ["Anthropic", "AI-bruk", 600], ["Fiken", "Regnskap og faktura", 199], ["Resend", "Transaksjons-e-post", 200],
  ["Canva", "Design", 149], ["Adobe", "Kreativ produksjon", 299], ["Google Workspace", "E-post og samarbeid", 180],
  ["GitHub", "Versjonskontroll", 120], ["Notion", "Dokumentasjon", 100], ["Cal.com", "Booking", 150],
  ["Analytics platform", "Trafikkanalyse", 250], ["Domain services", "Domener og DNS", 80], ["Automation platform", "Arbeidsflyt", 350],
].map(([vendor, purpose, amount], index) => ({ id: `subscription-${index + 1}`, vendor: String(vendor), purpose: String(purpose), amount: Number(amount), billingCycle: "monthly" as const, normalizedMonthlyAmount: Number(amount), status: "active" as const, owner: index % 2 === 0 ? "Fredrik" : "Marius", nextBillingOn: `2026-09-${String((index % 24) + 1).padStart(2, "0")}`, lastReviewedAt: index < 9 ? "2026-04-01" : "2026-08-01" }));

export const demoYouTubeVideos = [
  { id: "youtube-1", title: "Slik automatiserte Kling en komplett leadflyt", impressions: 200000, ctr: 0.07, views: 14000, avgViewSeconds: 420, subscribersGained: 876, endscreenClicks: 92, newViewerRatio: 0.75, returningViewerRatio: 0.25, retentionAtCta: 0.28, platformRevenue: 4200, attributedRevenue: 120000, attributedBookings: 18, attributedCloses: 4 },
  { id: "youtube-2", title: "AI-systemet bak en liten tjenestebedrift", impressions: 80000, ctr: 0.0985, views: 7880, avgViewSeconds: 510, subscribersGained: 420, endscreenClicks: 60, newViewerRatio: 0.64, returningViewerRatio: 0.36, retentionAtCta: 0.42, platformRevenue: 2400, attributedRevenue: 70000, attributedBookings: 9, attributedCloses: 3 },
  { id: "youtube-3", title: "Fem nettsidefeil", impressions: 150000, ctr: 0.028, views: 4200, avgViewSeconds: 180, subscribersGained: 70, endscreenClicks: 8, newViewerRatio: 0.71, returningViewerRatio: 0.29, retentionAtCta: 0.12, platformRevenue: 900, attributedRevenue: 0, attributedBookings: 1, attributedCloses: 0 },
  { id: "youtube-4", title: "Bedre systemer for eksisterende kunder", impressions: 100000, ctr: 0.055, views: 5500, avgViewSeconds: 460, subscribersGained: 210, endscreenClicks: 48, newViewerRatio: 0.45, returningViewerRatio: 0.55, retentionAtCta: 0.44, platformRevenue: 1600, attributedRevenue: 50000, attributedBookings: 8, attributedCloses: 2 },
] as const;

export const demoInstagramContent = [
  { id: "instagram-content-1", title: "Før og etter: automatisert leadoppfølging", reach: 10000, views: 13000, likes: 760, comments: 64, saves: 490, shares: 180, profileVisits: 420, linkClicks: 90, dmsStarted: 35, leads: 20, bookings: 12, closes: 5, attributedRevenue: 150000, promoted: false },
  { id: "instagram-content-2", title: "Tre vanlige nettsidefeil", reach: 8000, views: 9000, likes: 340, comments: 18, saves: 80, shares: 40, profileVisits: 100, linkClicks: 12, dmsStarted: 4, leads: 2, bookings: 0, closes: 0, attributedRevenue: 0, promoted: false },
] as const;

export const demoInstagramThreads = [
  { id: "thread-high", contactName: "Anna", handle: "@annasolheim", qualityScore: 82, qualityLabel: "high", lastMessage: "Hva koster en løsning, og kan den være klar i september?", lastMessageAt: "2026-08-25T09:30:00+02:00", buyingSignals: ["Spurte om pris", "Har en tydelig frist"], objections: ["Trenger intern godkjenning"], evidenceMessageIds: ["ig-msg-1", "ig-msg-2"] },
  { id: "thread-medium", contactName: "Jonas", handle: "@jonasbygger", qualityScore: 60, qualityLabel: "medium", lastMessage: "Vi mister oversikten når skjemaene kommer inn.", lastMessageAt: "2026-08-24T17:00:00+02:00", buyingSignals: ["Beskrev et konkret problem"], objections: ["Budsjett er ikke avklart"], evidenceMessageIds: ["ig-msg-3"] },
  { id: "thread-low", contactName: "Lars", handle: "@larsn", qualityScore: 20, qualityLabel: "low", lastMessage: "Kan du sende noen gratis tips?", lastMessageAt: "2026-08-23T13:00:00+02:00", buyingSignals: [], objections: ["Ber bare om gratis råd"], evidenceMessageIds: ["ig-msg-4"] },
  { id: "thread-unscored", contactName: "Maria", handle: "@mariastrand", qualityScore: null, qualityLabel: "unscored", lastMessage: "Hei!", lastMessageAt: "2026-08-22T12:00:00+02:00", buyingSignals: [], objections: [], evidenceMessageIds: ["ig-msg-5"] },
] as const;

export const demoAttributionAggregates = [
  { id: "attr-facebook", source: "facebook", medium: "paid_social", campaign: "august-lead-test", content: "ad-01", visits: 570, optins: 4, bookings: 2, closes: 0, revenue: 0, campaignStatus: "learning", campaignAgeDays: 3 },
  { id: "attr-youtube", source: "youtube", medium: "organic_video", campaign: "automation-guide", content: "youtube-1", visits: 100, optins: 26, bookings: 18, closes: 4, revenue: 120000, campaignStatus: "active", campaignAgeDays: 45 },
  { id: "attr-instagram", source: "instagram", medium: "organic_social", campaign: "lead-followup-reel", content: "instagram-content-1", visits: 200, optins: 20, bookings: 12, closes: 5, revenue: 150000, campaignStatus: "active", campaignAgeDays: 20 },
  { id: "attr-linkedin", source: "linkedin", medium: "organic_social", campaign: "founder-posts", content: "post-08", visits: 80, optins: 8, bookings: 3, closes: 1, revenue: 25000, campaignStatus: "active", campaignAgeDays: 30 },
] as const;

export const demoEmailCampaigns = [
  { id: "email-1", subject: "Den skjulte kostnaden ved manuell leadoppfølging", provider: "Resend", sentAt: "2026-08-20", delivered: 1000, uniqueOpens: 520, uniqueClicks: 110, unsubscribes: 5, attributedRevenue: 30000, body: "Mange henvendelser blir liggende fordi oppfølgingen mangler en tydelig flyt." },
  { id: "email-2", subject: "Slik kan en liten bedrift bruke AI-systemer", provider: "Kit", sentAt: "2026-08-16", delivered: 900, uniqueOpens: 405, uniqueClicks: 126, unsubscribes: 4, attributedRevenue: 15000, body: "AI er nyttig når den kobles til et konkret arbeid som allerede må gjøres." },
  { id: "email-3", subject: "Et nytt nettsidetilbud", provider: "Resend", sentAt: "2026-08-10", delivered: 950, uniqueOpens: 285, uniqueClicks: 38, unsubscribes: 20, attributedRevenue: 0, body: "Et avgrenset tilbud for bedrifter som trenger en tydeligere nettside." },
  { id: "email-4", subject: "Tre automatiseringer som sparer tid", provider: "Beehiiv", sentAt: "2026-08-05", delivered: 1100, uniqueOpens: 550, uniqueClicks: 143, unsubscribes: 6, attributedRevenue: 20000, body: "Start med oppgaver som gjentas og som stopper når noen glemmer neste steg." },
] as const;

export const demoFollowupCandidates = [
  { id: "client-conor", audienceType: "client", firstName: "Conor", fullName: "Conor Walsh", companyName: "Walsh Drift", service: "nettside", consentStatus: "confirmed", channel: "demo", lastFollowupAt: null, qualityScore: 78 },
  { id: "lead-anna", audienceType: "lead", firstName: "Anna", fullName: "Anna Solheim", companyName: "Solheim Studio", service: "automatisering", consentStatus: "confirmed", channel: "demo", lastFollowupAt: "2026-08-24T10:00:00+02:00", qualityScore: 82 },
  { id: "lead-jonas", audienceType: "lead", firstName: "Jonas", fullName: "Jonas Berg", companyName: "Berg Bygg", service: "CRM", consentStatus: "confirmed", channel: "demo", lastFollowupAt: "2026-08-23T16:00:00+02:00", qualityScore: 60 },
  { id: "client-maria", audienceType: "client", firstName: "Maria", fullName: "Maria Strand", companyName: "Strand Helse", service: "integrasjon", consentStatus: "confirmed", channel: "demo", lastFollowupAt: "2026-08-24T14:00:00+02:00", qualityScore: 86 },
] as const;

export const demoTasks = [
  { id: "task-1", title: "Følg opp forfalt faktura KS-2026-041", description: "Avklar grace-status og neste betalingsdato.", status: "open", priority: "critical", dueAt: "2026-08-25T15:00:00+02:00", sourceType: "alert", assignee: "Fredrik", related: "KS-2026-041" },
  { id: "task-2", title: "Rett manglende UTM-tagger", description: "62 prosent attribusjonsdekning gjør kanalresultater usikre.", status: "in_progress", priority: "high", dueAt: "2026-08-26T12:00:00+02:00", sourceType: "ai_ceo", assignee: "Marius", related: "Attribusjon" },
  { id: "task-3", title: "Gjennomgå abonnementer som ikke er kontrollert", description: "Ni aktive abonnementer har passert 90 dager.", status: "open", priority: "medium", dueAt: "2026-08-29T12:00:00+02:00", sourceType: "alert", assignee: "Fredrik", related: "Abonnementer" },
] as const;

export const demoClients = [
  { id: "client-1", name: "Nordvest Drift AS", contact: "Conor Walsh", service: "AI-automatisering", lifecycle: "active", startedOn: "2026-04-10", contractedValue: 50000, cashCollected: 30000, outstanding: 20000, overdue: 5000, lastContact: "2026-08-18", healthScore: 76, owner: "Fredrik", upsell: true },
  { id: "client-2", name: "Molde Servicepartner AS", contact: "Anna Solheim", service: "Nettside", lifecycle: "active", startedOn: "2026-05-12", contractedValue: 32000, cashCollected: 20000, outstanding: 12000, overdue: 12000, lastContact: "2026-08-20", healthScore: 61, owner: "Marius", upsell: false },
  { id: "client-3", name: "Romsdal Byggtjenester AS", contact: "Jonas Berg", service: "CRM-integrasjon", lifecycle: "paused", startedOn: "2026-02-03", contractedValue: 25000, cashCollected: 17000, outstanding: 8000, overdue: 8000, lastContact: "2026-07-12", healthScore: 43, owner: "Fredrik", upsell: false },
] as const;

export const demoLeads = Array.from({ length: 137 }, (_, index) => {
  const people = ["Anna Solheim", "Jonas Berg", "Lars Nilsen", "Maria Strand", "Ida Hovde", "Ola Vik", "Conor Walsh"];
  const sources = ["youtube", "instagram", "linkedin", "facebook", "direct"];
  const statuses = ["new", "contacted", "qualified", "booked", "proposal", "closed_won", "nurture"];
  const scores: Array<number | null> = [82, 60, 20, null, 77, 48, 35];
  const name = `${people[index % people.length]} ${index + 1}`;
  return {
    id: `lead-${index + 1}`,
    name,
    phone: `+47 900 ${String(10000 + index).slice(-5)}`,
    email: `lead${index + 1}@example.no`,
    preferredChannel: index % 2 === 0 ? "email" : "instagram",
    status: statuses[index % statuses.length],
    qualityScore: scores[index % scores.length],
    owner: index % 2 === 0 ? "Fredrik" : "Marius",
    source: sources[index % sources.length],
    utmCampaign: index % 3 === 0 ? "automation-guide" : "founder-posts",
    lastFollowupAt: index % 5 === 0 ? null : `2026-08-${String((index % 20) + 1).padStart(2, "0")}T10:00:00+02:00`,
    booked: index % 4 === 0,
    currentClient: index % 11 === 0,
    createdAt: `2026-07-${String((index % 27) + 1).padStart(2, "0")}T10:00:00+02:00`,
  };
});

export const demoSops = [
  ["Website Conversion Auditor", "Nettside", "Finn friksjon som hindrer henvendelser."],
  ["Offer Strategist", "Tilbud", "Gjør tilbudet tydelig og målbart."],
  ["ICP and Market Research Analyst", "Marked", "Avgrens kunder og dokumenter signaler."],
  ["One-Person AI Business Idea Engine", "Strategi", "Vurder ideer mot kapasitet og betalingsvilje."],
  ["Sales Call Analyst", "Salg", "Trekk ut behov, innvendinger og neste steg."],
  ["Lead Follow-up SOP", "Oppfølging", "Følg opp systematisk uten å overkommunisere."],
].map(([name, category, purpose], index) => ({ id: `sop-${index + 1}`, name, category, purpose, version: 1, active: true, updatedAt: "2026-08-20", body: `${purpose}\n\n1. Samle relevant evidens.\n2. Vurder status.\n3. Foreslå ett tydelig neste steg.` }));

export const demoTrackingLinks = [
  { id: "link-1", name: "YouTube automasjonsguide", slug: "yt-auto", destinationUrl: "https://klingsystems.no/kontakt?utm_source=youtube&utm_medium=organic_video&utm_campaign=automation-guide", source: "youtube", medium: "organic_video", campaign: "automation-guide", content: "youtube-1", visits: 100, optins: 26, bookings: 18, closes: 4, revenue: 120000, active: true },
  { id: "link-2", name: "Instagram leadoppfølging", slug: "ig-flyt", destinationUrl: "https://klingsystems.no/kontakt?utm_source=instagram&utm_medium=organic_social&utm_campaign=lead-followup-reel", source: "instagram", medium: "organic_social", campaign: "lead-followup-reel", content: "instagram-content-1", visits: 200, optins: 20, bookings: 12, closes: 5, revenue: 150000, active: true },
] as const;

export const demoAlerts = [
  { id: "alert-1", severity: "critical", type: "overdue_invoice", title: "Tre fakturaer er forfalt", explanation: "NOK 25 000 er forfalt. Eldste faktura er 92 dager over fristen.", href: "/income" },
  { id: "alert-2", severity: "high", type: "attribution_low", title: "Attribusjonsdekning er 62 %", explanation: "Kanalbaserte konverteringsrater kan være misvisende før UTM-tagger er rettet.", href: "/marketing/attribution" },
  { id: "alert-3", severity: "medium", type: "subscription_review", title: "Ni abonnementer må gjennomgås", explanation: "Disse har ikke blitt vurdert på minst 90 dager.", href: "/subscriptions" },
] as const;

export const demoIntegrations = [
  ["stripe", "Betaling", "Stripe", "demo"], ["fiken", "Betaling", "Fiken", "demo"], ["google_calendar", "Booking", "Google Calendar", "disconnected"],
  ["youtube", "Innhold", "YouTube", "demo"], ["instagram", "Innhold", "Instagram", "demo"], ["trackio", "Attribusjon", "Track / Trackio", "disconnected"],
  ["resend", "E-post", "Resend", "demo"], ["whatsapp", "Meldinger", "WhatsApp", "disconnected"], ["supabase", "Data", "Supabase", "disconnected"],
].map(([providerKey, category, displayName, status], index) => ({ id: `integration-${index + 1}`, providerKey, category, displayName, status, lastSuccessfulSyncAt: status === "demo" ? DEMO_NOW : null, lastAttemptedSyncAt: DEMO_NOW, lastError: status === "disconnected" ? "Ingen legitimasjon er konfigurert." : null, configured: false, secretLastFour: null }));
