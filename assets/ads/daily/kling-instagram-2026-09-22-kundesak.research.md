# Research og QA: kundehenvendelse til eid sak

## Låst produksjonsramme

- Måldatoen ble låst til 2026-09-22 ved kjøringsstart, basert på Europe/Oslo 2026-09-21.
- Dette er én produksjonspakke. Ingenting ble publisert på Instagram.
- Researchen var avgrenset til under 15 minutter, tre troverdige kilder og to relevante konkurrenteksempler.
- Konseptet bruker bare dokumenterte, generelle arbeidsflytpåstander og er tydelig merket som et eksempel.

## Avgrenset research

1. [Microsoft Learn: Automatically create a case from an email](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/automatically-create-case-from-email) dokumenterer at innkommende e-post kan konverteres til en sak etter definerte betingelser, og at saken kan få egenskaper og eier eller kø.
2. [Microsoft Learn: Create a case in Customer Service](https://learn.microsoft.com/en-us/dynamics365/customer-service/customer-service-hub-user-guide-create-a-case) dokumenterer at en sak kan ha prioritet, status og eier, og kan tildeles eller legges i kø.
3. [Atlassian Support: Manage your incoming requests with queues](https://support.atlassian.com/jira-service-management-cloud/docs/manage-your-incoming-requests-with-queues/) dokumenterer at køer brukes til å håndtere, sortere og tildele innkommende kundeforespørsler.

Konkurrenteksemplene var Microsoft Dynamics 365 Customer Service og Jira Service Management. De ble brukt som dokumentasjon på etablerte arbeidsflytmønstre, ikke som påstander om Kling eller som visuelle forbilder.

## Valgt innsikt og budskap

Problemet er at en kundehenvendelse kan ligge i en felles innboks uten synlig type, prioritet, eier eller status. Løsningen som illustreres, er en definert flyt som gjør e-posten om til en sak og registrerer disse feltene. Forretningsverdien er bedre oversikt over hvem som følger opp og hvilke henvendelser som venter på svar.

Synlig tekst i bildet:

- «Kundens e-post er mottatt. Hvem eier saken?»
- «Gjør henvendelser om til saker med type, prioritet, eier og status.»
- «Fra felles innboks til synlig ansvar.»

Kling kan kartlegge arbeidsflyten og bygge eller koble sammen en hensiktsmessig løsning. Virksomheten må fortsatt definere sakstyper, prioriteringsregler, eierskap og hva de ulike statusene betyr. Innlegget lover ikke automatisk korrekte svar, bestemte svartider, redusert bemanning eller et målbart økonomisk resultat.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett mot `graph.instagram.com` ble brukt før produksjon. Kontoen ble bekreftet gjennom de faktiske mediene fra `@klingsystems`.
- De siste 14 publiserte bildene, fra 2026-09-03 til 2026-09-21, ble hentet og kontrollert visuelt. Kontrollsettet omfattet sikkerhetskopitest, integrasjonsfeil, tastaturskjema, returflyt, vedlikeholdsplan, responsive bilder, kvitteringskobling, avtalefrist, lagergrense, priskontroll, ordregrunnlag, timegrunnlag, møteoppgaver og kundeoppstart.
- Det fantes ingen publisering for den låste måldatoen 2026-09-22 i kontrollsettet.
- Alle 27 eksisterende lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til. Temaer om skjemarespons, salgsoppfølging, møteoppgaver, integrasjonsfeil, fakturaflyt og generelle systemoverganger ble avvist som nærliggende.
- Kundeservicehenvendelsen skiller seg fra skjemakvitteringen 26. august ved å handle om intern saksfordeling etter mottak, ikke bekreftelse til avsender. Den skiller seg fra møteoppgaver og salgsoppfølging ved å bruke sakstype, prioritet, eier og status i en kundeservicekontekst.
- Den vertikale flyten fra e-post via sortering til ett samlet sakskort er ikke brukt i kontrollsettene. Overskrift, hovedbudskap, illustrasjon og bilde er nye.
- `kling-bee-support-pro.png` brukes som en liten støttefigur ved den eide saken. Denne bieposen var ikke brukt i de aktive lokale researchloggene eller i de 14 Graph-bildene. Maskoten dekker klart under 25 prosent av flaten og er ikke hovedmotivet.

## Produksjon og visuell QA

- Bildet ble rendret deterministisk i HTML/CSS med lokal Geist-font, den faktiske `kling-logo-navy-transparent.png`-logoen og den eksisterende `kling-bee-support-pro.png`-maskoten. Ingen bildegenerator fikk gjenskape tekst, logo eller maskot.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi og rammer, Sky-systemflate, Mist-støtteflater og Gold-aksenter. Komposisjonen er lys, luftig og forretningsorientert.
- Førsterenderen besto original- og 1:1-kontrollen. Ingen korrigeringsrunde ble brukt.
- Sluttbildet ble kontrollert i original størrelse mot de publiserte innleggene om sikkerhetskopitest 21. september, integrasjonsfeil 20. september og tastaturskjema 16. september, samt mot kontaktarkene for alle Graph-bildene og lokale pakker.
- Ingen avkuttet tekst, feil logo, hvite maskotrester, lavoppløselige elementer, meningsløs maskotbruk eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttformat: 1080 × 1350 piksler.
- PNG: 8-bit RGB uten alfa.
- Venstre og høyre kant for viktig innhold er minst 90 piksler fra bildekanten.
- Øvre og nedre kant for viktig innhold er minst 120 piksler fra bildekanten.
- En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert. Hele logoen, hovedbudskapet, problem-løsning-verdi-fortellingen og systemillustrasjonen beholdes.
- SHA-256: `15681517e2a76853512b5dc5a5dfe71eddbeb32c5e10f1a4a0a7d97f10c09f4c`.

## Leveringskontroller

- Pakkevalidering, prosjektkontroll, build, publiseringstest, diffkontroll, push og offentlig mediekontroll logges etter at de er kjørt.
- Offentlig medie-ID: `daily-2026-09-22-kundesak`.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne kjøringen.
