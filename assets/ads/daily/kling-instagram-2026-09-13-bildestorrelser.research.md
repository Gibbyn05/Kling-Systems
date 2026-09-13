# Research og QA: responsive bildestørrelser

## Måldato og avgrensning

- Måldatoen ble låst til 2026-09-13 ved turn-start i Europe/Oslo. Datoen ble beholdt etter at kalenderen rullet over under kjøringen.
- Det er produsert nøyaktig ett ferdig innlegg for måldatoen.
- Jobben er kun forberedelse. Ingen Instagram-container er opprettet, og innlegget er ikke publisert.

## Problem og kjøperrelevans

Temaet er nettsider som sender samme store bildefil til alle skjermstørrelser. Det passer Klings dokumenterte tilbud fordi `PRODUCT.md` oppgir nettsider som én av tre tjenester og beskriver målet om å gjøre tilbudet tydelig og enkelt å bruke. Kling kan gjennomgå bildeleveransen og bygge responsive løsninger, men faktisk forbedring må måles på den konkrete nettsiden.

Tre aktuelle og troverdige kilder ble brukt i en avgrenset researchrunde:

1. [web.dev: Serve responsive images](https://web.dev/articles/serve-responsive-images) beskriver hvordan nettleseren kan velge en passende bildekandidat for enheten, og hvordan mindre bilder på mindre skjermer kan redusere datamengden som lastes.
2. [MDN: HTML performance optimization](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/HTML) forklarer hvordan `srcset` og `sizes` lar nettleseren velge en bildefil som passer skjermbredde og oppløsning, slik at større bilder enn nødvendig ikke lastes.
3. [web.dev: Image performance](https://web.dev/learn/performance/image-performance) beskriver riktig dimensjonering og moderne bildeformater som sentrale grep for å sende færre bytes og redusere lastetiden til bilder.

Kildene er brukt til å dokumentere arbeidsmønsteret, ikke til å love en bestemt hastighet, rangering, konvertering eller økonomisk gevinst. Ingen kundecaser, priser, resultatmålinger eller garantier er brukt. Ingen konkurrenteksempler var nødvendige for det valgte budskapet.

## Valgt budskap

- Hovedbudskap: «Et stort bilde passer ikke alle skjermer.»
- Støttelinje: «Lever riktig bildestørrelse til flaten den skal fylle.»
- Systemillustrasjon: Ett abstrakt motiv vises gjennom tre nestede rammer merket «Bred», «Mellom» og «Smal». En egen status viser at nettleseren velger passende versjon.
- Forretningsverdi: «Mindre å laste. Samme tydelige innhold.»
- CTA: Se hva som kan forbedres på `klingsystems.no/nettsider`.

## Graph- og duplikatkontroll

- De 14 siste publiserte mediene fra BUSINESS-kontoen `@klingsystems` ble hentet via prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett.
- Kontrollsettet dekket publiseringer fra 2026-08-27 til og med 2026-09-11. Caption, tidsstempel, medietype, permalink og bilde ble kontrollert for alle 14.
- Det fantes ingen publisering for den låste måldatoen 2026-09-13.
- Et midlertidig kontaktark av de 14 nedlastede Graph-bildene ble visuelt kontrollert. Alle aktive lokale PNG-pakker i `assets/ads/daily` ble også kontrollert i kontaktark og som enkeltbilder.
- Konsepter om kvitteringskobling, avtalefrister, lagergrense, prisgrunnlag, ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart, dokumentversjoner, salgsoppfølging, bookingendring, kundedata, mobilflyt, fakturagodkjenning, tilgangsavslutning, skjemakvittering, tjenesteoversikt, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist.
- Et innledende tema om feilhåndtering i automatisering ble forkastet fordi det lå for nær innlegget om kontrollert avvik fra 23. august.
- Responsive bildestørrelser, de tre nestede motivrammene og kodebien er ikke brukt i det kontrollerte innholdet. Komposisjonen unngår den stående mobilskjermen, dokumentkortene, tabellene, tidslinjene og systemkoblingene fra tidligere innlegg.

## Stil- og produksjonskontroll

- Korrekt `kling-logo-navy-transparent.png` brukes som separat prosjektressurs. Logoen er ikke generert eller skrevet av en bildemodell.
- Paletten følger `DESIGN.md`: Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate eller generisk AI-estetikk.
- Bildet er rendret deterministisk i HTML og CSS med lokal Geist-font, faktisk Kling-logo og den eksisterende maskotfilen `kling-bee-code.png`.
- Kodebien støtter nettsidetemaet, dekker klart mindre enn 25 prosent av flaten og bærer ikke budskapet alene. Maskotfilen har ekte transparent bakgrunn uten hvite rester.
- Førsterenderen ble avvist fordi logoens øverste del lå utenfor den sentrerte 1:1-beskjæringen, og statusetiketten ble delvis dekket av maskoten. Den ene korrigeringsrunden flyttet hovedinnholdet ned og etiketten fri fra maskoten. Konsept, tekst, illustrasjon og biepose ble beholdt.

## Format- og kvalitetskontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
- Viktig tekst, logo og grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, illustrasjon, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet eller dekket. Logoen er korrekt, og illustrasjonen har ingen hvite bakgrunnsrester eller synlig lavoppløst grafikk.
- Sluttbildet ble kontrollert i original størrelse mot de publiserte innleggene om kvitteringskobling 11. september, avtalefrist 9. september, lagergrense 8. september og prisgrunnlag 7. september, samt kontaktarkene for Graph-bildene og de lokale pakkene.
- Caption er naturlig norsk, under 2200 tegn, inneholder tre relevante emneknagger og CTA til `klingsystems.no/nettsider`.
- SHA-256 for sluttfilen: `fd14249415311baa357e86456386c715eaea17c46fa41b5426b08760e1b9dea1`.

## Sluttverifisering

- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-09-13. Captionen er 490 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- Push, offentlig bildeverifisering og avsluttende skrivebeskyttet dry-run føres inn etter distribusjon.
