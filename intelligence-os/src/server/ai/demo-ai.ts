import "server-only";

import type { AiCeoResponse } from "@/lib/contracts";

export function generateDemoAiCeoResponse(question: string): AiCeoResponse {
  return {
    answer: `Det største dokumenterte likviditetstapet akkurat nå er NOK 25 000 i tre forfalte fakturaer. Den eldste er 92 dager over fristen. Før du endrer kanalbudsjettet bør attribusjonsdekningen på 62 % rettes, fordi kanalbaserte slutninger ellers er usikre. Spørsmålet var: «${question}»`,
    confidence: 0.88,
    findings: [
      { title: "NOK 25 000 er forfalt", explanation: "Tre uavklarte fakturaer binder kontantstrøm. Start med den eldste.", severity: "critical", evidence: [{ entityType: "invoice", entityId: "invoice-overdue-92", label: "KS-2026-041", href: "/income", metric: "Dager forfalt", value: 92 }] },
      { title: "Attribusjonen er ikke beslutningsklar", explanation: "38 prosent av leadene mangler nødvendig kildeinformasjon.", severity: "high", evidence: [{ entityType: "data_quality", entityId: "attribution-coverage", label: "Attribusjonsdekning", href: "/marketing/attribution", metric: "Dekning", value: "62 %" }] },
      { title: "Conor er aldri fulgt opp", explanation: "En aktiv kunde mangler dokumentert innsjekk.", severity: "medium", evidence: [{ entityType: "client", entityId: "client-conor", label: "Conor Walsh", href: "/followups" }] },
    ],
    dataQualityWarnings: [{ area: "Attribusjon", message: "Dekningen er under terskelen på 80 %.", impact: "Nøyaktig kanalrangering og close-rate er usikker." }],
    recommendedActions: [
      { id: "ai-action-1", actionType: "review_invoice", title: "Avklar KS-2026-041", rationale: "Dette er den eldste og mest presserende fordringen.", payload: { invoiceId: "invoice-overdue-92" }, requiresConfirmation: true },
      { id: "ai-action-2", actionType: "create_task", title: "Rett manglende UTM-tagger", rationale: "Bedre datakvalitet kreves før kanalbeslutninger.", payload: { title: "Rett manglende UTM-tagger", priority: "high" }, requiresConfirmation: true },
    ],
  };
}
