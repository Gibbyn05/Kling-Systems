# Research- og QA-logg: videresending ved sideflytting

- Låst måldato: 2026-10-03, beregnet én gang som kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Produksjonsdato: 2026-10-02.
- Publisering: Ikke autorisert og ikke utført. Denne pakken er kun klargjort.

## Konsept

Hovedbudskapet er «Siden er flyttet. Finner kunden fram?». Bildet viser en gammel sideadresse som ikke lenger inneholder siden, en eksempelmerket permanent videresending og den relevante nye siden. Verdiløftet er «Fra brutt lenke til riktig innhold.»

Sammenhengen problem → løsning → forretningsverdi er synlig uten caption:

1. Problem: En lagret eller delt lenke kan fortsatt peke til den gamle adressen etter at siden er flyttet.
2. Løsningseksempel: Den gamle adressen kartlegges og kobles til den relevante nye siden med en permanent videresending.
3. Verdi: Besøkende som bruker den gamle lenken kan fortsatt komme fram til riktig innhold.

Adressene og statuskoden i illustrasjonen er tydelig presentert som eksempel. Innlegget lover ikke uendret rangering, bevart trafikk, feilfri migrering eller at én videresending alene løser alle forhold rundt en sideflytting.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter med tre aktuelle, troverdige kilder. WordPress ble kontrollert som ett relevant konkurrent- og produktmønster.

1. [Google Search Central: Site Moves and Migrations](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) anbefaler å lage en presis kobling mellom gamle og nye URL-er, bruke permanente videresendinger på serversiden når det er mulig, unngå irrelevante mål og teste videresendingene. Kilden støtter illustrasjonens mønster «gammel adresse → definert ny adresse → kontrollert test».
2. [MDN Web Docs: Redirections in HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Redirections) dokumenterer at HTTP-videresendinger bruker en 3xx-respons og en `Location`-adresse, og at permanente videresendinger brukes når en ressurs har fått ny adresse. Kilden støtter bruken av en permanent videresending i eksemplet.
3. [WordPress.com Support: Edit a page or post link](https://wordpress.com/support/permalinks-and-slugs/) dokumenterer at en gammel sideadresse kan gi 404 etter at adressen endres, og at en eksplisitt videresending kan peke gammel adresse til ny. WordPress ble kontrollert som produktmønster, ikke som dokumentasjon av en Kling-funksjon.

Ingen produkttekst, skjermbilder, layout, rangeringseffekt eller resultatpåstand er kopiert. Kling-innlegget bruker bare det generelle, dokumenterte mønsteret «side flyttes → gammel adresse kartlegges → relevant ny side åpnes».

## Graph- og duplikatkontroll

En skrivebeskyttet Graph API-kontroll mot konfigurert `https://graph.instagram.com` hentet de siste 14 innleggene fra BUSINESS-kontoen `@klingsystems`. Kontrollsettet dekket 15. september til 2. oktober 2026:

- 02.10: lagersynk mellom salgskanaler
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
- 15.09: returflyt

Graph viste ett publisert innlegg 2. oktober, media-ID `17949925962320069`, og ingen innlegg for den låste måldatoen 3. oktober på kontrolltidspunktet. Ingen skriveoperasjon ble utført.

Alle 37 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til, både gjennom researchloggene og et samlet visuelt kontaktark. Konsepter om kundereisetest, systemoverganger, registeroppslag, dokumentdata, statusvarsling og generell kobling mellom systemer ble avvist som nærliggende.

Komposisjoner med to systemmoduler og manuelt mellomledd, nettlesertest med kontrollpunkter, tre kilder inn i ett resultat, skannehandling mellom to kort og en lineær trestegsflyt ble avvist. Den nye komposisjonen bruker to skråstilte nettleservinduer, en stor sentral 301-markør og en tydelig buet rute. Ingen bie brukes, fordi maskoten ikke tilfører nødvendig informasjon til videresendingshistorien og flere relevante støtteposer allerede er brukt.

## Visuell og teknisk QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildemodell fikk gjenskape tekst eller logo. Bildeferdighetens kodebaserte spor ble brukt fordi motivet er en enkel systemillustrasjon som krever eksakt typografi.
- Den ene tillatte korrigeringsrunden reduserte intern skriftstørrelse og avstand i nettleserkortene etter at statusetikettene var avskåret i første render. Ingen andre konsepter eller komposisjoner ble produsert.
- Originalen ble kontrollert i 1080 × 1350 piksler mot de godkjente innleggene `2026-09-30-statusbeskjed`, `2026-10-01-utstyrsskann` og `2026-10-02-lagersynk`, samt mot kontaktarket for alle lokale pakker.
- Stilen består: varm Cream-bakgrunn, Navy-typografi, Sky-, Mist- og Peach-systemflater, Gold-aksenter, korrekt Kling-logo, avrundede flater og tydelig problemoverskrift.
- Konsept, hovedbudskap, nettleservinduer, 301-markør og buet rute er nye i kontrollsettet. Bildet er ikke en størrelsesvariant eller kopi av et tidligere innlegg.
- All viktig tekst, logo og meningsbærende grafikk holder minst 90 piksler sideavstand og minst 120 piksler avstand fra topp og bunn.
- En sentrert 1:1-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, begge nettleservinduene, 301-markøren, verdilinjen og avsenderen beholdes med mening og uten avkuttet tekst.
- Ingen tekst er avkuttet. Logoen er korrekt. Bildet har ingen hvite bakgrunnsrester, lavoppløselige innslag, meningsløs maskotbruk, mørk fotografisk stil eller neonpreg.
- Filformat: 1080 × 1350 PNG, RGB, uten alfa.
- Lokal SHA-256: `562229cb1cc39b699506457824fe306cdc5da2c62e26c388d37bea95a246e967`.
- Produksjonsprompt/spesifikasjon: Kodebasert produktillustrasjon for Instagram med eksakt norsk tekst, korrekt Kling-logo, Cream-bakgrunn, Navy-typografi, Sky/Mist/Peach-systemflater, Gold-aksenter, to nettleservinduer og en sentral permanent videresending. Ingen maskot, fotografi, neon, generert logo eller alternativ versjon.

## Kontroll, deploy og offentlig bilde

- Pakkevalideringen fant nøyaktig én komplett pakke for 2026-10-03 med PNG, caption og researchlogg. Medie-ID-en er `daily-2026-10-03-videresending`, og captionen er 483 tegn.
- `npm run check` besto.
- `npm run build` besto.
- `npm run test:instagram-publish` besto med 6 av 6 tester.
- `git diff --check` besto.
- Leveransecommit `4419aac` ble pushet til `origin/main` uten å stage eller endre uvedkommende arbeidsfiler.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-03-videresending`.
- URL-en svarte først HTTP 404 rett etter push og deretter HTTP 200 med `Content-Type: image/png` og 161 585 byte etter deploy-propagasjon. Samme URL og medie-ID ble beholdt.
- Offentlig SHA-256 var `562229cb1cc39b699506457824fe306cdc5da2c62e26c388d37bea95a246e967` og matcher lokalfilen byte for byte.
- Avsluttende `TARGET_DATE=2026-10-03 PUBLISH_MODE=dry-run` besto for BUSINESS-kontoen `@klingsystems`, riktig måldato, komplett pakke, offentlig bilde og duplikatkontroll. Status var `dry-run`; ingen container ble opprettet og ingenting ble publisert.
