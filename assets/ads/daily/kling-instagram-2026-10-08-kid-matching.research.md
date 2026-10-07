# Research- og QA-logg: KID-matching av innbetaling

- Låst måldato: 2026-10-08, beregnet én gang som kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Produksjonsdato: 2026-10-07.
- Publisering: Ikke autorisert og ikke utført. Denne pakken er kun klargjort.

## Konsept

Hovedbudskapet er «Kom pengene inn, men står fakturaen åpen?». Bildet viser en eksempelmerket bankinnbetaling og en utgående faktura med samme KID. Den like referansen kobler innbetalingen til riktig faktura og oppdaterer statusen til betalt. En egen kontrollinje viser at ukjent eller manglende KID skal sendes til vurdering, ikke kobles blindt.

Sammenhengen problem → løsning → forretningsverdi er synlig uten caption:

1. Problem: En betaling kan være mottatt i banken selv om den riktige fakturaen fortsatt står åpen i systemet.
2. Løsningseksempel: KID og OCR-data brukes til å matche innbetalingen med fakturaen som har samme referanse. Avvik går til kontroll.
3. Verdi: «Fra bankinnbetaling til oppdatert fakturastatus.»

Beløpet, fakturanummeret og KID-nummeret er illustrative grensesnittdata. Innlegget lover ikke at alle innbetalinger kan matches, at bokføringen blir fullstendig automatisk, eller en bestemt tids- eller kostnadsbesparelse. Det faktiske oppsettet avhenger av bank, avtaler og regnskapssystem.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter med to aktuelle, troverdige produktkilder. De to kildene er samtidig de eneste konkurrenteksemplene i kontrollen, innenfor grensen på tre.

1. [Tripletex: Hvordan mottar jeg innbetalinger fra banken?](https://hjelp.tripletex.no/hc/no/articles/15817735549457-Hvordan-mottar-jeg-innbetalinger-fra-banken), oppdatert 18.08.2026, beskriver at en OCR-avtale gjør det mulig å bruke KID på faktura og lese inn informasjon om innbetalinger fra banken. Kilden støtter sammenhengen mellom bankdata, KID og automatisk matching av fakturainnbetalinger.
2. [Tripletex: Hvorfor får jeg innbetalinger med ukjent KID, og hvordan løser jeg det?](https://hjelp.tripletex.no/hc/no/articles/4819025452433-Hvorfor-f%C3%A5r-jeg-innbetalinger-med-ukjent-KID-og-hvordan-l%C3%B8ser-jeg-det), kontrollert 07.10.2026, beskriver at OCR-filer med KID kobles til utgående faktura med tilsvarende KID, mens feil eller manglende KID krever særskilt håndtering.
3. [Fiken: Prøveperioden i Fiken, delen «Fakturere med KID-nummer»](https://hjelp.fiken.no/proeveperioden-i-fiken), kontrollert 07.10.2026, opplyser at en kundebetaling registreres automatisk i Fiken når fakturaen er sendt med KID-nummer. Kilden brukes som et andre produktmønster, ikke som dokumentasjon på en ferdig Kling-funksjon.

Klings innlegg kopierer ingen produkttekst, skjermbilder, layout, priser eller resultatpåstander. Det valgte innholdsgapet er et verktøyuavhengig spørsmål for norske små og mellomstore bedrifter: Blir en mottatt betaling knyttet til riktig faktura, og blir avvik synlige for kontroll?

## Graph- og duplikatkontroll

En skrivebeskyttet Graph API-kontroll mot konfigurert `https://graph.instagram.com` hentet de siste 14 innleggene fra BUSINESS-kontoen `@klingsystems`. Kontrollsettet dekket 23. september til 7. oktober 2026:

- 07.10: tekstalternativer etter bildets funksjon
- 06.10: kartlegging av avsendere på eget e-postdomene
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

Kontoen ble bekreftet som BUSINESS `@klingsystems`. Nyeste medie-ID var `18484779445109066`. Det fantes ingen publisering for den låste måldatoen 8. oktober på kontrolltidspunktet. Ingen skriveoperasjon ble utført.

Alle 42 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til gjennom filnavn, researchlogger og visuell sammenligning. Temaer om fakturagodkjenning, kvitteringskobling, dokumentdata, prisgrunnlag, ordregrunnlag, rapportgrunnlag, systemoverganger og generelle integrasjonsfeil ble avvist som nærliggende.

Det nye konseptet gjelder spesifikt koblingen mellom mottatt bankinnbetaling og status på en utgående faktura. Komposisjonen bruker to tydelige eksempelposter med identisk KID, et sentralt matchsegl og en separat kontrollinje for ukjent KID. Den kopierer ikke den vertikale dokumentkoblingen fra kvitteringsinnlegget, fakturakøen fra godkjenningsinnlegget, det radiale avsenderkartet, nettstedskartets mange-til-én-flyt eller tekstalternativets bilde-til-tekst-vurdering.

Ingen bie brukes. Tilgjengelige analyse-, database- og arbeidsflytposer er allerede brukt i nærliggende økonomi- og systeminnlegg, og en maskot ville ikke forklart KID-matchingen bedre.

## Visuell og teknisk QA

- Sluttbildet ble rendret deterministisk med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildegenerator fikk gjenskape tekst, logo eller maskot.
- Førsterenderen ble avvist fordi spørsmålstegnet gikk utenfor side-tryggsonen og piltegnet ikke ble støttet av fonten. Den ene tillatte korrigeringsrunden reduserte overskriften og tegnet pilen som enkel grafikk. Ingen andre elementer eller konsepter ble endret.
- Originalen ble kontrollert i 1080 × 1350 piksler mot de godkjente innleggene `2026-10-05-nettstedskart`, `2026-10-06-epostdomene`, `2026-10-07-tekstalternativ` og `2026-09-11-kvitteringskobling`.
- Stilen består: varm Cream-bakgrunn, Navy-typografi, Sky-, Mist- og Peach-systemflater, Gold-aksenter, korrekt Kling-logo, avrundede flater og tydelig typografisk hierarki.
- All viktig tekst, logo og meningsbærende grafikk ligger innenfor x=90–990 og y=120–1230. Ingen tekst eller grafikk er avkuttet etter korrigeringsrunden.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, begge KID-postene, matchingen, avvikslinjen, verdibudskapet og meningen beholdes.
- Ingen hvite bakgrunnsrester, lavoppløselige innslag, feil logo, meningsløs maskotbruk, mørk fotografisk stil eller neonpreg ble funnet.
- Filformat: 1080 × 1350 PNG, RGB, uten alfa.
- Lokal SHA-256: `eec0037b3eb57ec41be07360bece9db34f815c4c41fcdf915ffd56033ac26484`.

## Kontroll, deploy og offentlig bilde

- Pakkevalidering med `findDailyPackage`: bestått for `daily-2026-10-08-kid-matching`. Nøyaktig én komplett pakke ble funnet, og captionen er 539 tegn.
- `npm run check`: bestått.
- `npm run build`: bestått.
- `npm run test:instagram-publish`: bestått, 6 av 6 tester.
- `git diff --check`: bestått.
- Leveransecommit `b1e6ce2` ble pushet til `origin/main` uten å stage eller endre uvedkommende arbeidsfiler.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-08-kid-matching`.
- URL-en svarte først 404 mens produksjonsutrullingen pågikk, deretter HTTP 200 uten innlogging som `image/png`, 84 344 byte.
- Offentlig SHA-256 var `eec0037b3eb57ec41be07360bece9db34f815c4c41fcdf915ffd56033ac26484` og matcher lokalfilen byte for byte.
- Avsluttende `TARGET_DATE=2026-10-08 PUBLISH_MODE=dry-run` besto med status `dry-run` for BUSINESS-kontoen `@klingsystems`. Konto, pakke, caption, offentlig bilde og duplikatkontroll besto. Ingen container ble opprettet.
- Instagram-publisering: ikke utført. Ingen container er opprettet, og ingen skriveoperasjon er sendt til Graph API.
