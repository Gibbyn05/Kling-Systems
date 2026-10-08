# Research- og QA-logg: kontrollert lenkeforhåndsvisning

- Låst måldato: 2026-10-09, beregnet én gang som kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Produksjonsdato: 2026-10-08.
- Publisering: Ikke autorisert og ikke utført. Denne pakken er kun klargjort.

## Konsept

Hovedbudskapet er «Ser lenken riktig ut når den deles?». Bildet viser tre konkrete metadatafelt på en nettside, `og:title`, `og:image` og `og:description`, som samles i én eksempelmerket lenkeforhåndsvisning med riktig tittel, bilde og beskrivelse.

Sammenhengen problem → løsning → forretningsverdi er synlig uten caption:

1. Problem: En delt lenke kan få en ufullstendig eller utdatert forhåndsvisning.
2. Løsningseksempel: Relevante metadata velges på siden, og forhåndsvisningen kontrolleres etter endringer.
3. Verdi: «Fra tilfeldig lenkevisning til kontrollert forhåndsvisning.»

Innlegget lover ikke økt trafikk, høyere konvertering eller lik visning i alle kanaler. Eksempelvisningen er illustrativ, og hver tjeneste kan tolke, beskjære og mellomlagre metadata på sin egen måte.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter med tre aktuelle, troverdige fagkilder. LinkedIn var det eneste produktmønsteret i kontrollen, innenfor grensen på tre konkurrenteksempler.

1. [The Open Graph protocol](https://ogp.me/), kontrollert 08.10.2026, dokumenterer at `og:title`, `og:type`, `og:image` og `og:url` er grunnleggende metadata, mens `og:description` er et anbefalt valgfritt felt. Kilden støtter metadatafeltene i illustrasjonen.
2. [LinkedIn Help: Share articles or links](https://www.linkedin.com/help/linkedin/answer/a525301), kontrollert 08.10.2026, beskriver at en delt URL kan få en forhåndsvisning med bilde, og at manglende forhåndsvisningsinformasjon kan forekomme dersom URL-en ikke oppfyller kravene.
3. [LinkedIn Help: Use Post Inspector to refresh URL](https://www.linkedin.com/help/linkedin/answer/a6233775), kontrollert 08.10.2026, beskriver at et tidligere delt bilde kan være mellomlagret, og at Post Inspector kan brukes til å hente URL-en på nytt og kontrollere forhåndsvisningen for nye innlegg.

Kildene er brukt til å dokumentere arbeidsmønsteret «velg metadata → hent forhåndsvisning → kontroller resultatet». Ingen produkttekst, skjermbilder, layout, priser eller resultatpåstander er kopiert.

## Graph- og duplikatkontroll

En skrivebeskyttet Graph API-kontroll mot konfigurert `https://graph.instagram.com` hentet de siste 14 innleggene fra BUSINESS-kontoen `@klingsystems`. Kontrollsettet dekket 24. september til 8. oktober 2026:

- 08.10: KID-matching fra bankinnbetaling til fakturastatus
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
- 24.09: kildesporing fra kampanjelenke til henvendelse

Kontoen ble bekreftet som BUSINESS `@klingsystems`. Nyeste medie-ID var `18016812110744664`, publisert 08.10.2026. Det fantes ingen publisering for den låste måldatoen 9. oktober på kontrolltidspunktet. Ingen skriveoperasjon ble utført.

Alle 43 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til gjennom filnavn, researchlogger og visuell sammenligning. Temaer om nettstedskart, videresending, responsive bilder, tekstalternativer, kundereisetest, kildesporing og generell systemflyt ble avvist som nærliggende.

Det nye konseptet gjelder spesifikt hva som vises når en konkret nettsidelenke deles. Komposisjonen bruker en venstrestilt metadata-stabel som kobles inn i ett stort forhåndsvisningskort. Den kopierer ikke nettstedskartets mange URL-er inn i en XML-fil, tekstalternativets bilde-til-tekst-vurdering, e-postinnleggets radiale kart eller KID-innleggets tosidige matching.

Ingen bie brukes. En maskot ville ikke forklart sammenhengen mellom metadata og forhåndsvisningen, og de tilgjengelige analyse- og nettstedsposene er allerede brukt i nærliggende innlegg.

## Bildeproduksjon

`imagegen` ble brukt én gang til å lage et tekstfritt, flatt nettstedsmotiv for selve miniatyrbildet inne i forhåndsvisningskortet. Motivet ble rendret i 1733 × 907 og brukt nedskalert, uten logo, maskot eller meningsbærende tekst. Prompten ba om et rent skandinavisk B2B-uttrykk med varm krembakgrunn, lyseblå systemflate, marineblå former og én gul aksent, samt å unngå mørk bakgrunn, neon, 3D, personer, vannmerke og pseudotekst.

All meningsbærende tekst, forbindelsesgrafikk, grensesnitt, resultatlinje og Kling-logo er lagt på deterministisk med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen.

## Visuell og teknisk QA

- Førsterenderen ble godkjent uten korrigeringsrunde. Ingen ekstra variant ble laget.
- Originalen ble kontrollert i 1080 × 1350 piksler mot de godkjente innleggene `2026-10-05-nettstedskart`, `2026-10-06-epostdomene`, `2026-10-07-tekstalternativ` og `2026-10-08-kid-matching`.
- Stilen består: varm Cream-bakgrunn, Navy-typografi, Sky- og Mist-systemflater, Gold-aksenter, korrekt Kling-logo, avrundede flater og tydelig typografisk hierarki.
- All viktig tekst, logo og meningsbærende grafikk ligger innenfor x=90–990 og y=142–1102. Ingen tekst eller grafikk er avkuttet.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, metadatafeltene, forhåndsvisningen og verdibudskapet beholdes.
- Ingen hvite bakgrunnsrester, lavoppløselige innslag, feil logo, meningsløs maskotbruk, mørk fotografisk stil, neonpreg eller visuell duplisering ble funnet.
- Filformat: 1080 × 1350 PNG, 8-bit RGB, uten alfa.
- Lokal SHA-256: `ec95a19565738116136f1b4a5c681d44a1023892d864220860c177e7ea9645ea`.

## Kontroll, deploy og offentlig bilde

- Pakkevalidering, prosjektkontroller, build, commit, push, offentlig bytekontroll og avsluttende dry-run dokumenteres etter gjennomføring.
- Instagram-publisering: ikke utført. Ingen container er opprettet, og ingen skriveoperasjon er sendt til Graph API.
