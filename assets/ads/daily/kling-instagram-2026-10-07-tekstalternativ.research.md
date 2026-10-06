# Research- og QA-logg: meningsfulle tekstalternativer

- Låst måldato: 2026-10-07, beregnet én gang som kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Produksjonsdato: 2026-10-06.
- Publisering: Ikke autorisert og ikke utført. Denne pakken er kun klargjort.

## Konsept

Hovedbudskapet er «Gir bildene mening uten å bli sett?». Bildet viser et eksempelmerket informativt bilde der et filnavn ikke formidler den synlige informasjonen. En funksjonsvurdering leder til et tekstalternativ som gjengir åpningstiden. Verdiløftet er «Fra skjult bildeinnhold til forståelig tekst.»

Sammenhengen problem → løsning → forretningsverdi er synlig uten caption:

1. Problem: Et informativt bilde kan formidle innhold som ikke blir tilgjengelig når tekstalternativet mangler eller bare består av et filnavn.
2. Løsningseksempel: Vurder først bildets formål og skriv et kort tekstalternativ som formidler den samme informasjonen. Rent dekorative bilder markeres med tomt `alt`-attributt.
3. Verdi: Flere brukere kan få tilgang til meningen i innholdet, også når bildet ikke kan ses eller vises.

Innlegget lover ikke juridisk etterlevelse, et bestemt tilgjengelighetsnivå, bedre rangering, flere kunder eller målbar effekt. En faktisk gjennomgang må vurdere hvert bilde i sin konkrete sammenheng.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter med tre aktuelle, troverdige fagkilder. Ingen konkurrenteksempler var nødvendige for budskapet.

1. [W3C: Web Content Accessibility Guidelines 2.2, kriterium 1.1.1](https://www.w3.org/TR/WCAG22/#non-text-content) krever at ikke-tekstlig innhold har et tekstalternativ som tjener et tilsvarende formål, med egne unntak blant annet for ren dekorasjon.
2. [W3C WAI: Images Tutorial](https://www.w3.org/WAI/tutorials/images/) forklarer at informative bilder trenger et alternativ som formidler den vesentlige informasjonen, at funksjonelle bilder bør beskrive handlingen, og at rent dekorative bilder skal ha tomt tekstalternativ.
3. [MDN: HTML img element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#accessibility) beskriver `alt` som en klar og kort teksterstatning for bildeinnholdet og anbefaler å lese teksten sammen med omkringliggende innhold for å kontrollere at meningen bevares.

Kildene er brukt til å dokumentere arbeidsmønsteret «vurder formål → velg riktig tekstalternativ → kontroller meningen i sammenheng». Ingen produktgrensesnitt, formuleringer eller visuelle elementer er kopiert.

## Graph- og duplikatkontroll

En skrivebeskyttet Graph API-kontroll mot konfigurert `https://graph.instagram.com` hentet de siste 14 innleggene fra BUSINESS-kontoen `@klingsystems`. Kontrollsettet dekket 23. september til 6. oktober 2026:

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
- 22.09: kundesak med eier og status

Graph viste ett publisert innlegg 6. oktober, media-ID `18153424792523873`, og ingen innlegg for den låste måldatoen 7. oktober på kontrolltidspunktet. Dagens publiserte innlegg hindrer ikke den eksplisitt bestilte produksjonen for neste kalenderdato. Ingen skriveoperasjon ble utført.

Alle 41 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til gjennom filnavn, researchlogger og visuell sammenligning. Temaer om tastaturnavigasjon, kundereisetest, responsive bildestørrelser, nettstedskart, skjemakontroll og generelle nettsideforbedringer ble avvist som nærliggende. Det valgte konseptet handler særskilt om å velge tekstalternativ etter bildets formål og sammenheng.

Komposisjoner med stående mobil, nestede bilderammer, nettlesertest, tre sidekort inn i én fil, sentral kontrollport og radialt systemkart ble avvist. Den nye komposisjonen bruker ett illustrert åpningstidsbilde, et sirkulært funksjonsspørsmål og et mørkt tekstalternativkort. Ingen bie brukes fordi en maskot ikke tilfører nødvendig informasjon til vurderingen og flere relevante støtteposer allerede er brukt.

## Visuell og teknisk QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildegenerator fikk gjenskape tekst, logo eller maskot.
- Førsterenderen besto visuell kontroll. Ingen korrigeringsrunde ble brukt.
- Originalen ble kontrollert i 1080 × 1350 piksler mot de godkjente innleggene `2026-10-04-skjema-kontroll`, `2026-10-05-nettstedskart` og `2026-10-06-epostdomene`.
- Stilen består: varm Cream-bakgrunn, Navy-typografi, Sky-, Mist- og Peach-systemflater, Gold-aksenter, korrekt Kling-logo, avrundede flater og tydelig typografisk hierarki.
- Konsept, hovedbudskap, funksjonsspørsmål, åpningstidsillustrasjon og tekstalternativkort er nye i kontrollsettet. Bildet er ikke en størrelsesvariant eller kopi av et tidligere innlegg.
- All viktig tekst, logo og grafikk holder minst 90 piksler sideavstand og minst 120 piksler avstand fra topp og bunn.
- En sentrert 1:1-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, hele funksjonsvurderingen, tekstalternativet, verdilinjen og meningen beholdes uten avkuttet tekst.
- Ingen tekst er avkuttet eller dekket. Logoen er korrekt. Bildet har ingen hvite bakgrunnsrester, lavoppløselige innslag, meningsløs maskotbruk, mørk fotografisk stil eller neonpreg.
- Filformat: 1080 × 1350 PNG, RGB, uten alfa.
- Lokal SHA-256: `fdb15472faee00f988c070994daf1135f3528982a7c19b02e1f62f216ccee2d1`.

## Kontroll, deploy og offentlig bilde

- Pakkevalidering med `findDailyPackage`: bestått for `daily-2026-10-07-tekstalternativ`. Nøyaktig én komplett pakke ble funnet, og captionen er 523 tegn.
- `npm run check`: bestått.
- `npm run build`: bestått.
- `npm run test:instagram-publish`: bestått, 6 av 6 tester.
- `git diff --check`: bestått.
- Leveransecommit og push: avventer sluttkontroll.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-07-tekstalternativ`, avventer deploy og bytekontroll.
- Instagram-publisering: ikke utført. Ingen container er opprettet, og ingen skriveoperasjon er sendt til Graph API.
