# Research- og QA-logg: kontrollert e-postdomene

- Låst måldato: 2026-10-06, beregnet én gang som kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Produksjonsdato: 2026-10-05.
- Publisering: Ikke autorisert og ikke utført. Denne pakken er kun klargjort.

## Konsept

Hovedbudskapet er «Vet dere hvem som sender fra domenet?». Bildet viser et eksempelmerket avsenderkart der økonomisystem, kundesystem og nyhetsbrevløsning kobles til virksomhetens domene, mens et ukjent system holdes utenfor til det er avklart. Verdiløftet er «Fra ukjente avsendere til kontrollert e-postdomene.»

Sammenhengen problem → løsning → forretningsverdi er synlig uten caption:

1. Problem: Flere tjenester kan sende e-post med virksomhetens domene uten at alle avsenderne er samlet og kontrollert.
2. Løsningseksempel: Kartlegg avsenderne og kontroller autentisering, domenesamsvar og rapportering før DMARC-policyen strammes inn.
3. Verdi: Virksomheten får et konkret kontrollgrunnlag for hvilke systemer som skal kunne bruke domenet som avsender.

Innlegget lover ikke levering til innboksen, full beskyttelse mot misbruk, målbar effekt eller at én konfigurasjon passer alle virksomheter.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter med tre aktuelle, troverdige primærkilder. Google Workspace og Microsoft 365 ble kontrollert som to relevante produktmønstre.

1. [IETF RFC 9989: Domain-Based Message Authentication, Reporting, and Conformance](https://datatracker.ietf.org/doc/rfc9989/) er gjeldende DMARC-standard fra mai 2026. Den dokumenterer at domeneeieren kan angi håndtering av meldinger som feiler validering, og be om rapporter om bruken av domenet.
2. [Google: Email sender guidelines](https://support.google.com/mail/answer/81126?hl=en-GB) dokumenterer at SPF oppgir tillatte sendere, at DKIM signerer e-post, og at DMARC krever samsvar mellom domenet i synlig avsenderfelt og domenet som autentiseres. Google anbefaler DMARC-rapporter for å identifisere sendere som bruker eller ser ut til å bruke domenet.
3. [Microsoft Learn: Set up DMARC to validate email in Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/email-authentication-dmarc-configure) dokumenterer SPF- og DKIM-samsvar med avsenderdomenet, DMARC-policyer og aggregert rapportering.

Google Workspace og Microsoft 365 ble kontrollert som produktmønstre. Ingen produktgrensesnitt, formuleringer eller visuelle elementer er kopiert. Kling-innlegget bruker bare det generelle, dokumenterte mønsteret «kartlegg avsendere → kontroller autentisering og samsvar → vurder policy og rapporter».

## Graph- og duplikatkontroll

En skrivebeskyttet Graph API-kontroll mot konfigurert `https://graph.instagram.com` hentet de siste 14 innleggene fra BUSINESS-kontoen `@klingsystems`. Kontrollsettet dekket 21. september til 5. oktober 2026:

- 05.10: XML-nettstedskart for viktige URL-er
- 04.10: serverkontroll av skjemainnsendinger
- 03.10: permanent videresending ved flyttet side
- 02.10: lagerstatus på tvers av salgskanaler
- 01.10: utstyrsskann som åpner riktig utstyrspost
- 30.09: statusbeskjed ved avklart ordresteg
- 29.09: registeroppslag fra organisasjonsnummer
- 28.09: dokumentdata fra PDF
- 27.09: duplikatvern ved gjentatt innsending
- 25.09: kontrollert kundereisetest
- 24.09: kildesporing fra kampanjelenke
- 23.09: endringshistorikk for kundedata
- 22.09: kundesak med eier og status
- 21.09: test av sikkerhetskopi

Graph viste ett publisert innlegg 5. oktober, media-ID `17879033988553987`, og ingen innlegg for den låste måldatoen 6. oktober på kontrolltidspunktet. Dagens publiserte innlegg hindrer ikke den eksplisitt bestilte produksjonen for neste kalenderdato. Ingen skriveoperasjon ble utført.

Alle 40 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til gjennom filnavn og researchlogger. Konsepter om integrasjonsfeil, tilgangsavslutning, statusvarsling, generell systemkobling, serverkontroll og rapportgrunnlag ble avvist som nærliggende. Det valgte konseptet handler særskilt om å kartlegge tjenester som sender e-post med virksomhetens domene før autentisering og DMARC-policy strammes inn.

Komposisjoner med tre kilder inn i ett resultat, lineære systemoverganger, en sentral kontrollport, tre stablede kanaler og en mørk fil ble avvist. Den nye komposisjonen bruker et sentralt domene med en åpen, radial avsenderstruktur, tre godkjente systemkort, ett separat ukjent system og et kompakt kontrollgrunnlag. Ingen bie brukes fordi analyseposen allerede er brukt og en maskot ikke tilfører nødvendig informasjon til avsenderkartet.

## Visuell og teknisk QA

- `imagegen`-ferdigheten peker på direkte, kodebasert produksjon når motivet er et enkelt systemdiagram med krav til presis typografi, korrekt logo og etablerte merkeelementer. Sluttbildet ble derfor rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildegenerator fikk gjenskape tekst, logo eller maskot.
- Produksjonsspesifikasjon: annonseringsgrafikk i etablert Kling-stil med eksakt norsk tekst, varm Cream-bakgrunn, Navy-typografi, Sky-, Mist- og Peach-systemflater, Gold-aksenter, korrekt logo og et radialt kart over godkjente og uavklarte avsendere. Ingen foto, neon, generert logo, maskot eller alternativ versjon.
- Førsterenderen besto visuell kontroll. Ingen korrigeringsrunde ble brukt.
- Originalen ble kontrollert i 1080 × 1350 piksler mot de godkjente innleggene `2026-10-02-lagersynk`, `2026-10-03-videresending`, `2026-10-04-skjema-kontroll` og `2026-10-05-nettstedskart`.
- Stilen består: varm Cream-bakgrunn, Navy-typografi, Sky-, Mist- og Peach-systemflater, Gold-aksenter, korrekt Kling-logo, avrundede flater og tydelig typografisk hierarki.
- Konsept, hovedbudskap, radialt avsenderkart og komposisjon er nye i kontrollsettet. Bildet er ikke en størrelsesvariant eller kopi av et tidligere innlegg.
- All viktig tekst, logo og grafikk holder minst 90 piksler sideavstand og minst 120 piksler avstand fra topp og bunn.
- En sentrert 1:1-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, hele avsenderkartet, kontrollgrunnlaget og verdilinjen beholdes med mening og uten avkuttet tekst.
- Ingen tekst er avkuttet. Logoen er korrekt. Bildet har ingen hvite bakgrunnsrester, lavoppløselige innslag, meningsløs maskotbruk, mørk fotografisk stil eller neonpreg.
- Filformat: 1080 × 1350 PNG, RGB, uten alfa.
- Lokal SHA-256: `08350f603b9610961a88fdc649d11d82c86d944b30cf83b72a7a84e34c526f61`.

## Kontroll, deploy og offentlig bilde

- Pakkevalidering med `findDailyPackage`: bestått for `daily-2026-10-06-epostdomene`. Nøyaktig én komplett pakke ble funnet, og captionen er 609 tegn.
- `npm run check`: bestått.
- `npm run build`: bestått.
- `npm run test:instagram-publish`: bestått, 6 av 6 tester.
- `git diff --check`: bestått.
- Leveransecommit: registreres i avsluttende QA-oppdatering etter commit.
- Push til `origin/main`: venter.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-06-epostdomene`, venter på deploy og bytekontroll.
- Instagram-publisering: ikke utført. Ingen container er opprettet, og ingen skriveoperasjon er sendt til Graph API.
