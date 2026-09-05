# Research og QA: timegrunnlag før fakturering

## Måldato og avgrensning

- Måldatoen ble låst til 2026-09-05 ved turn-start i Europe/Oslo og ble beholdt etter kalenderovergang.
- Det er produsert nøyaktig ett ferdig innlegg for måldatoen.
- Jobben er kun forberedelse. Innlegget er ikke publisert på Instagram.

## Problem og kjøperrelevans

Temaet er overgangen fra registrerte prosjekttimer til et kontrollert fakturagrunnlag. Dette passer Klings dokumenterte målgruppe og posisjonering fordi det konkretiserer manuell oppfølging, spredt status og en gjentakende overgang mellom system og fakturering. Innlegget lover ikke en bestemt integrasjon, tidsbesparelse eller økonomisk effekt.

Kildene viser et gjennomgående arbeidsmønster i norske økonomi- og prosjektverktøy:

1. [Tripletex: Hvordan endrer jeg antall fakturerbare timer på et timeprisprosjekt?](https://hjelp.tripletex.no/hc/no/articles/4406369763985-Hvordan-endrer-jeg-antall-fakturerbare-timer-p%C3%A5-et-timeprisprosjekt) beskriver oversikt over fakturerbare timer, godkjenning før fakturering og mulighet til å avklare eller endre timer før de går videre.
2. [PowerOffice: Opprett prosjekt i PowerOffice Go](https://hjelpesenter.poweroffice.no/opprett-prosjekt) dokumenterer at prosjekter kan faktureres med timer, timer og kostnader eller fastpris, og at kunde, aktivitet og ansatte kan styre timeføringen.
3. [Conta: Timeføring fra timer til faktura og regnskap](https://conta.no/regnskap/timeforing) er kontrollert som et markedseksempel på den samme kjeden: registrering, godkjenning og videreføring av godkjente timer til fakturautkast.

Conta er en kommersiell produktside. Påstander om deres produkt, priser, automatiske påminnelser eller økonomisk effekt er derfor ikke gjenbrukt i Kling-innlegget. Ingen tall, kundecaser, garantier eller konkurrentpåstander brukes i caption eller bilde.

## Valgt budskap

- Hovedspørsmål: «Er timene ført før fakturaen skal sendes?»
- Systemillustrasjon: En vertikal timeoversikt viser én manglende registrering, et tydelig kontrollpunkt og fakturagrunnlag som neste steg.
- Verdi: «Kontrollert grunnlag før fakturering.»
- CTA: Kartlegg flyten på `klingsystems.no/automatisering`.

## Stil- og duplikatkontroll

- De 14 siste publiserte mediene fra BUSINESS-kontoen `@klingsystems`, fra 2026-08-21 til 2026-09-04, ble hentet med skrivebeskyttet Instagram Graph API og kontrollert visuelt.
- Alle aktive lokale pakker i `assets/ads/daily` ble også kontrollert, inkludert den upubliserte pakken for 2026-09-02.
- Temaet timegrunnlag er ikke brukt i kontrollsettet. Komposisjonen skiller seg fra tidligere innlegg ved å bruke en vertikal timeliste med én markert manglende registrering og et separat, dreid kontrollkort. Den kopierer ikke møtepunktet, oppstartsrailen, salgsoppfølgingsskiven, bookingkortene, kundedatakildene eller fakturakøen.
- Korrekt eksisterende Kling-logo brukes som separat prosjektressurs. Logoen er ikke generert eller gjenskapt.
- Eksisterende `kling-bee-fast.png` brukes som støttespiller og dekker klart under 25 prosent av flaten. Maskoten er ikke hovedmotivet.
- Førsterenderen ble avvist fordi maskoten dekket deler av resultatkortet. Den ene tillatte korrigeringsrunden reduserte og flyttet maskoten, uten å endre konsept eller tekst.
- Paletten følger DESIGN.md: Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate eller generisk AI-estetikk.

## Format- og kvalitetskontroll

- Sluttfilen er visuelt kontrollert i original størrelse og er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
- Alle viktige elementer ligger innenfor x=90–990 og y=134–1215. Ingen tekst, logo eller systeminformasjon er klippet i originalformatet.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 er generert og visuelt kontrollert. Logo, hovedbudskap, timeoversikt, kontrollpunkt, resultat og verdilinje er synlige og beholder meningen. Nettadressen ligger delvis utenfor kvadratets nedre kant, men er ikke nødvendig for å forstå budskapet.
- Caption er naturlig norsk, under 2200 tegn, inneholder tre emneknagger og CTA til `klingsystems.no/automatisering`.
- SHA-256 for sluttfilen: `985b6b6142acd440d7ce040ad231ac091c3d80a97d36f52ac42c69c69f04f6bb`.
- Bildeproduksjonen er en deterministisk HTML/CSS-render med lokal Chromium og eksisterende prosjektressurser. Dette ble valgt fordi motivet er en enkel systemillustrasjon der tekstnøyaktighet og merkevarekontroll er viktigere enn rastergenerering.

## Verifisering som skal fullføres før publiseringsklar status

- Pakkevalidering for nøyaktig én PNG, caption og research for måldatoen.
- `npm run check`
- `npm run build`
- `npm run test:instagram-publish`
- `git diff --check`
- Commit og push av kun de tre leveransefilene til `main`.
- Offentlig bilde-URL skal svare uten innlogging med `image/png`, og offentlig SHA-256 skal samsvare med lokalfilen.
- Avsluttende Instagram-kontroll skal kjøres i `PUBLISH_MODE=dry-run`. Ingen container eller publisering skal opprettes.
