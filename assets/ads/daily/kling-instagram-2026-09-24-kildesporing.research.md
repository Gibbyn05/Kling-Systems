# Research og QA: kilde fra kampanjelenke til henvendelse

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-24, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag. Datoen ble beholdt etter kalenderovergang.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, og ingenting ble publisert.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-ferdigheten for daglige Instagram-pakker og `imagegen`-ferdigheten ble lest før produksjon.
- Researchen var avgrenset til under 15 minutter, tre troverdige produktkilder og tre relevante konkurrenteksempler.

## Avgrenset research

1. [Google Analytics Help: Campaigns and traffic sources](https://support.google.com/analytics/answer/11242841?hl=en) dokumenterer at kampanjeparametere som kilde, medium og kampanjenavn kan samles inn fra en lenke og brukes som dimensjoner i rapportering.
2. [HubSpot Knowledge Base: Understand Original and Latest traffic source properties](https://knowledge.hubspot.com/properties/understand-traffic-source-properties) dokumenterer at kontaktposter kan ha original og siste kjente trafikkilde, med mer spesifikke detaljer som kampanjenavn eller nettstedadresse. Kilden presiserer også at sporingsblokkering kan påvirke verdiene.
3. [Pipedrive Knowledge Base: Lead source in deals](https://support.pipedrive.com/en/article/lead-source-deals) dokumenterer kildefelt på leads og avtaler, blant annet opprinnelse og mer spesifikke kildeverdier fra skjemaer eller kampanjer.

Google Analytics, HubSpot og Pipedrive ble kontrollert som tre konkurrenteksempler. Kildene dokumenterer et etablert mønster for kildeinformasjon, men brukes ikke som påstander om en bestemt Kling-leveranse. Ingen tall, kundecaser, attribusjonsgarantier eller resultatløfter ble brukt.

## Valgt innsikt og budskap

- Problem: En mottatt henvendelse viser ikke nødvendigvis hvilken kampanje eller kanal som førte kunden til skjemaet.
- Løsningseksempel: Bruk konsekvente kildeverdier i kampanjelenken og før relevant kilde, medium og kampanje videre til kundeoppfølgingen.
- Forretningsverdi: Teamet får et tydeligere grunnlag for å se hvor henvendelsen kom fra.
- Hovedbudskap: «Henvendelsen kom inn. Vet dere hvorfra?»
- Verdilinje: «Fra innsendt skjema til synlig kilde.»
- CTA: «Vil dere få bedre sammenheng mellom nettsiden og kundeoppfølgingen? Se klingsystems.no/systemer»

Sporingen må tilpasses nettsiden, samtykkene og systemene virksomheten bruker. Blokkering av sporing, manglende merking eller andre begrensninger kan gi ufullstendige data. Innlegget lover ikke full attribusjon, identifisering av alle kundereiser eller et målbart økonomisk resultat.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett mot `graph.instagram.com` ble brukt før produksjon.
- De siste 14 publiserte mediene fra BUSINESS-kontoen `@klingsystems`, fra 2026-09-05 til 2026-09-23, ble hentet med media-ID, caption, medie-URL, permalink og tidsstempel.
- Kontrollsettet omfattet endringshistorikk, kundesak, sikkerhetskopitest, integrasjonsfeil, tastaturskjema, returflyt, vedlikeholdsplan, responsive bilder, kvitteringskobling, avtalefrist, lagergrense, priskontroll, ordregrunnlag og timegrunnlag.
- Det fantes ingen publisering for den låste måldatoen 2026-09-24 i kontrollsettet.
- Alle 29 eksisterende aktive lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til.
- Konsepter om kundedata, skjemakvittering, salgsoppfølging, rapportgrunnlag og generelle systemoverganger ble avvist som nærliggende.
- Det nye innlegget viser én kampanjelenke som en sammenhengende sporingsstråd gjennom skjemaet og inn i en egen kildeflate på kundekortet. Temaet, den bøyde tråden, kampanjekortet og kildegridet er nye i kontrollsettene.
- Maskot ble bevisst utelatt. Ingen ubrukt biepose styrket kildesporingen uten å bli dekorativ eller konkurrere med systemillustrasjonen.

## Produksjon og visuell QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. `imagegen`-ferdigheten anbefaler kodebasert produksjon for enkle diagrammer med krav til presis typografi og korrekt logo.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi og hovedflate, Sky- og Mist-systemflater og Gold-aksenter. Uttrykket er lyst, luftig, minimalt og forretningsorientert.
- Førsterenderen var lesbar og distinkt, men sporingslinjen koblet ikke skjemaflaten tydelig nok til kundekortet. Den ene tillatte korrigeringsrunden delte linjen i to kontrollerte forbindelser fra kampanjelenke til skjema og fra skjema til kundekort. Budskap, hovedkomposisjon og stil ble beholdt.
- Sluttbildet ble kontrollert i original størrelse og mot de godkjente innleggene om endringshistorikk 23. september, kundesak 22. september og sikkerhetskopitest 21. september.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttformat: 1080 × 1350 piksler.
- PNG: 8-bit RGB uten alfa.
- Viktig tekst, logo og hovedgrafikk holder minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert. Logo, hovedbudskap, hele systemillustrasjonen og verdilinjen beholdes med mening intakt.
- SHA-256: `2f7b2f64b21c4f6d15d690676ee22725f91d5748d0435d60bdd1b5e4c656e61b`.

## Leveringskontroller

- Pakkevalideringen fant nøyaktig én komplett pakke for 2026-09-24 med 596 tegn i captionen.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto.
- Leveransecommit `189b125` ble pushet til `main`. Eksisterende, uvedkommende arbeidsfiler ble ikke staged eller endret.
- Offentlig medie-ID: `daily-2026-09-24-kildesporing`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-24-kildesporing`.
- Den offentlige URL-en svarte HTTP 200 som `image/png`, 109 068 byte, uten innlogging. Offentlig SHA-256 samsvarer med lokalfilen.
- Avsluttende `PUBLISH_MODE=dry-run` besto for riktig konto, måldato, pakke, offentlig bilde og duplikatvern. Ingen container ble opprettet.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne kjøringen.
