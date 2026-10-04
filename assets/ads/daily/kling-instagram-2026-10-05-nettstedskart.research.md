# Research- og QA-logg: oppdatert XML-nettstedskart

- Låst måldato: 2026-10-05, beregnet én gang som kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Produksjonsdato: 2026-10-04.
- Publisering: Ikke autorisert og ikke utført. Denne pakken er kun klargjort.

## Konsept

Hovedbudskapet er «Er de viktigste sidene med på kartet?». Bildet viser tre eksempelmerkede nettsider som samles i en konkret `sitemap.xml`, før URL-ene blir synlige for en søkemotor som kan oppdage og kontrollere dem. Verdiløftet er «Fra spredte URL-er til et ryddig nettstedskart.»

Sammenhengen problem → løsning → forretningsverdi er synlig uten caption:

1. Problem: Viktige sider kan ligge spredt i nettstedets struktur uten en samlet URL-oversikt for søkemotorer.
2. Løsningseksempel: Et oppdatert XML-nettstedskart samler de kanoniske URL-ene virksomheten ønsker å gjøre synlige.
3. Verdi: Virksomheten får et konkret og kontrollerbart grunnlag for å vise søkemotorer hvilke sider som hører til nettstedet.

Innlegget lover ikke indeksering, plassering i søkeresultater, mer trafikk eller målbar effekt.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter med tre aktuelle, troverdige kilder. Tre relevante produktmønstre ble kontrollert.

1. [Google Search Central: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) dokumenterer at et nettstedskart forteller søkemotorer hvilke URL-er nettstedet foretrekker å vise, at kanoniske URL-er bør brukes, og at de fleste publiseringssystemer kan generere nettstedskart automatisk.
2. [Bing Webmaster Tools: Sitemaps](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed) dokumenterer at nettstedskart kan gjøre URL-er lettere å oppdage, hvilke formater Bing støtter, og at behandling og feil kan kontrolleres i verktøyet.
3. [WordPress.com Support: Find your sitemap](https://wordpress.com/support/sitemaps/) dokumenterer et praktisk CMS-mønster der XML-nettstedskart genereres og oppdateres automatisk når innhold endres.

Google Search Console, Bing Webmaster Tools og WordPress.com ble kontrollert som tre relevante produktmønstre. Ingen grensesnitt, produktnavn eller visuelle elementer er kopiert i innlegget. Bildet bruker bare det generelle mønsteret «nettsider → XML-nettstedskart → søkemotor».

## Graph- og duplikatkontroll

En skrivebeskyttet Graph API-kontroll mot konfigurert `https://graph.instagram.com` hentet de siste 14 innleggene fra BUSINESS-kontoen `@klingsystems`. Kontrollsettet dekket 20. september til 4. oktober 2026:

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
- 20.09: synlig håndtering av integrasjonsfeil

Graph viste ett publisert innlegg 4. oktober, media-ID `17909732439489061`, og ingen innlegg for den låste måldatoen 5. oktober på kontrolltidspunktet. Dagens publiserte innlegg hindrer ikke den eksplisitt bestilte produksjonen for neste kalenderdato. Ingen skriveoperasjon ble utført.

Alle 39 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til gjennom filnavn og researchlogger. Temaer om videresending, bildestørrelser, kundereisetest, kildesporing og generell systemflyt ble avvist som nærliggende. Det valgte konseptet handler særskilt om et oppdatert XML-nettstedskart som samlet, kontrollerbar URL-oversikt.

Komposisjoner med to nettleservinduer og en 301-markør, nestede bilderammer, nettlesertest med kontrollpunkter, tre kilder inn i ett resultat og lineære trestegsflyter ble avvist. Den nye komposisjonen bruker tre forskjøvede sidekort, en samlet mørk XML-fil og en smal søkemotorportal. Ingen bie brukes fordi søke- og analyseposer allerede er brukt i tidligere innhold, og en maskot ikke tilfører nødvendig informasjon til URL-strukturen.

## Visuell og teknisk QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildegenerering ble brukt til tekst eller logo.
- Førsterenderen besto visuell kontroll. Ingen korrigeringsrunde ble brukt.
- Originalen ble kontrollert i 1080 × 1350 piksler mot de godkjente innleggene `2026-10-01-utstyrsskann`, `2026-10-02-lagersynk`, `2026-10-03-videresending` og `2026-10-04-skjema-kontroll`.
- Stilen består: varm Cream-bakgrunn, Navy-typografi, Mist-, Sky- og Peach-systemflater, Gold-aksenter, korrekt Kling-logo, avrundede flater og tydelig problemoverskrift.
- Konsept, hovedbudskap, det mørke XML-kortet og kartkomposisjonen er nye i kontrollsettet. Bildet er ikke en størrelsesvariant eller kopi av et tidligere innlegg.
- All viktig tekst, logo og grafikk holder minst 90 piksler sideavstand og minst 120 piksler avstand fra topp og bunn.
- En sentrert 1:1-beskjæring fra y=135 til y=1215 ble visuelt kontrollert. Logo, hovedbudskap, nettstedskart, søkemotorportal og verdilinje beholdes med mening og uten avkuttet tekst.
- Ingen tekst er avkuttet. Logoen er korrekt. Bildet har ingen hvite bakgrunnsrester, lavoppløselige innslag eller meningsløs maskotbruk.
- Filformat: 1080 × 1350 PNG, 8-bit RGB, uten alfa.
- Lokal SHA-256: `4d287f44ec7d78d2a4323a07174b5833d907410fdb0ccd0e19a608faf03fee17`.

## Kontroll, deploy og offentlig bilde

- `findDailyPackage` fant nøyaktig én komplett pakke for 2026-10-05 og validerte PNG, caption og researchlogg.
- `npm run check`: bestått.
- `npm run build`: bestått.
- `npm run test:instagram-publish`: bestått, 6 av 6 tester.
- `git diff --check`: bestått før commit.
- Leveransecommit `a72212c` ble pushet til `origin/main` og utløste produksjonsdeploy.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-05-nettstedskart`.
- Første offentlige kontroll svarte HTTP 404 mens deployen fortsatt forplantet seg. Samme URL ble kontrollert på nytt uten å endre media-ID og svarte deretter HTTP 200 som `image/png`, 135 578 byte.
- Offentlig SHA-256 samsvarer byte for byte med lokalfilen: `4d287f44ec7d78d2a4323a07174b5833d907410fdb0ccd0e19a608faf03fee17`.
- Avsluttende `TARGET_DATE=2026-10-05 PUBLISH_MODE=dry-run` besto med status `dry-run` for BUSINESS-kontoen `@klingsystems`. Konto, pakke, caption, offentlig bilde og duplikatkontroll besto. Ingen container ble opprettet.
- Instagram-publisering: ikke utført. Ingen container er opprettet, og ingen skriveoperasjon er sendt til Graph API.
