# Research- og QA-logg: serverkontroll av skjemainnsendinger

- Låst måldato: 2026-10-04, beregnet én gang som kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Produksjonsdato: 2026-10-03.
- Publisering: Ikke autorisert og ikke utført. Denne pakken er kun klargjort.

## Konsept

Hovedbudskapet er «Er kontaktskjemaet fullt av støy?». Bildet viser flere ukontrollerte innsendinger som møter en tydelig serverkontroll før én eksempelmerket henvendelse går videre til behandling. Verdiløftet er «Fra åpent skjema til kontrollert innsending.»

Sammenhengen problem → løsning → forretningsverdi er synlig uten caption:

1. Problem: Et åpent kontaktskjema kan motta automatiserte eller ugyldige innsendinger som skaper støy i oppfølgingen.
2. Løsningseksempel: Innsendingen får et kontrolltoken som valideres på serveren før videre behandling.
3. Verdi: Teamet får en kontrollert inngang til den videre arbeidsflyten, med avviste eller ugyldige forsøk håndtert før de blir en ordinær henvendelse.

Illustrasjonen er merket som eksempel. Innlegget lover ikke at all spam, misbruk eller uønsket trafikk fjernes, og hevder ikke en målbar reduksjon.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter med tre troverdige primærkilder. To relevante produktmønstre ble kontrollert som konkurrenteksempler.

1. [Cloudflare Turnstile: Validate the token](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/) dokumenterer at klientwidgeten alene ikke beskytter skjemaet, og at tokenet må valideres på serveren før innsendingen behandles videre. Kilden dokumenterer også at tokenet er tidsbegrenset og kun kan brukes én gang.
2. [Google for Developers: Verifying the user's response](https://developers.google.com/recaptcha/docs/verify) dokumenterer det samme generelle mønsteret for reCAPTCHA: klienten leverer et svartoken, og applikasjonens backend verifiserer tokenet før videre behandling.
3. [OWASP: Automated Threats to Web Applications](https://wiki.owasp.org/images/a/a2/Automated-threats.pdf) beskriver automatisert misbruk av webapplikasjoner, inkludert form-to-email-spam. Kilden støtter problemstillingen, men ikke en påstand om at ett kontrolltiltak alene stopper alt misbruk.

Cloudflare Turnstile og Google reCAPTCHA ble kontrollert som to produktmønstre. Produktnavn, grensesnitt og formuleringer er ikke kopiert i bildet. Kling-innlegget bruker bare det generelle, dokumenterte mønsteret «skjemainnsending → servervalidering → kontrollert videre behandling».

## Graph- og duplikatkontroll

En skrivebeskyttet Graph API-kontroll mot konfigurert `https://graph.instagram.com` hentet de siste 14 innleggene fra BUSINESS-kontoen `@klingsystems`. Kontrollsettet dekket 16. september til 3. oktober 2026:

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
- 20.09: synlig håndtering av integrasjonsfeil
- 16.09: tastaturskjema

Graph viste ett publisert innlegg 3. oktober, media-ID `18078280679392755`, og ingen innlegg for den låste måldatoen 4. oktober på kontrolltidspunktet. Dagens publiserte innlegg hindrer ikke den eksplisitt bestilte produksjonen for neste kalenderdato. Ingen skriveoperasjon ble utført.

Alle 38 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til, både gjennom filnavn, researchlogger og visuelt kontaktark. Temaer om skjemakvittering, tastaturbruk, kundereisetest, duplikatvern, integrasjonsfeil og generell avvikskontroll ble avvist som nærliggende. Det valgte konseptet handler særskilt om serversidevalidering av en åpen skjemainnsending før den blir en ordinær sak.

Komposisjoner med stor kvittering, nummerert skjemaflate, to identiske ID-er som møtes i en kontroll, nettlesertest, skrå feilbane og lineær systemovergang ble avvist. Den nye komposisjonen bruker tre forskjøvede innsendinger, en høy bueformet kontrollport og ett mørkt resultatkort. Ingen bie brukes, fordi maskoten ikke tilfører informasjon til kontrollmekanismen og flere relevante støtteposer allerede er brukt.

## Visuell og teknisk QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildegenerering ble brukt til tekst eller logo.
- Førsterenderen besto visuell kontroll. Ingen korrigeringsrunde ble brukt.
- Originalen ble kontrollert i 1080 × 1350 piksler mot de godkjente innleggene `2026-10-01-utstyrsskann`, `2026-10-02-lagersynk` og `2026-10-03-videresending`, samt kontaktarket for alle 38 tidligere lokale PNG-pakker.
- Stilen består: varm Cream-bakgrunn, Navy-typografi, Mist-, Sky- og Peach-systemflater, Gold-aksenter, korrekt Kling-logo, avrundede flater og tydelig problemoverskrift.
- Konsept, hovedbudskap, bueformet kontrollport og filterkomposisjon er nye i kontrollsettet. Bildet er ikke en størrelsesvariant eller kopi av et tidligere innlegg.
- All viktig tekst, logo og grafikk holder minst 90 piksler sideavstand og minst 120 piksler avstand fra topp og bunn.
- En sentrert 1:1-beskjæring fra y=135 til y=1215 ble visuelt kontrollert. Logo, hovedbudskap, kontrollport, resultatkort og verdilinje beholdes med mening og uten avkuttet tekst.
- Ingen tekst er avkuttet. Logoen er korrekt. Bildet har ingen hvite bakgrunnsrester, lavoppløselige innslag eller meningsløs maskotbruk.
- Filformat: 1080 × 1350 PNG, 8-bit RGB, uten alfa.
- Lokal SHA-256: `4098d397cb69a15cca09f4b6d80dbf4c9e06d8b02998dffcb9c0fe4d7c97535a`.

## Kontroll, deploy og offentlig bilde

Prosjektkontroll, build, publiseringstest, gitkontroll og offentlig bildeverifisering føres inn etter at den komplette tre-filerspakken er kontrollert og sendt til `main`.
