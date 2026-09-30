# Research- og QA-logg: utstyrsskann

- Låst måldato: 2026-10-01, beregnet én gang som kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Produksjonsdato: 2026-09-30.
- Publisering: Ikke autorisert og ikke utført. Denne pakken er kun klargjort.

## Konsept

Hovedbudskapet er «Hvilket utstyr gjelder saken?». Bildet viser et eksempelmerket utstyrsmerke for «Pumpe P-17», en avgrenset skannehandling og en servicehenvendelse der utstyr og sted allerede er valgt. Verdiløftet er formulert som «Fra uklar melding til riktig utstyrskort.»

Sammenhengen problem → løsning → forretningsverdi er synlig uten caption:

1. Problem: En servicehenvendelse kan beskrive feilen uten å identifisere hvilket utstyr den gjelder.
2. Løsningseksempel: En QR- eller strekkode åpner riktig utstyrspost før skjemaet fylles ut.
3. Verdi: Utstyrsidentifikator og plassering kan følge henvendelsen videre til vurdering.

Alle konkrete data i illustrasjonen er tydelig merket som eksempel. Innlegget lover ikke spart tid, færre feil, bestemt responstid eller automatisk prioritering.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter med tre aktuelle, troverdige kilder. To relevante produktmønstre ble kontrollert som konkurrenteksempler.

1. [Microsoft Learn: Barcode reader control in Power Apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-barcodereader) dokumenterer at en mobil kontroll kan skanne strekkoder, QR-koder og Data Matrix-koder, returnere den skannede verdien og starte en handling ved vellykket skann. Kilden støtter bare den tekniske muligheten til å bruke en skannet identifikator videre i en arbeidsflyt.
2. [MaintainX Help Center: Create a Work Request](https://help.getmaintainx.com/create-a-work-request) viser et konkret produktmønster der en bruker kan skanne koden til et utstyr eller sted for å starte en arbeidsforespørsel, med utstyr eller sted forhåndsutfylt.
3. [UpKeep Help: Configure the New UpKeep Request Portal](https://help.onupkeep.com/en/articles/12158452-configure-the-new-upkeep-request-portal) viser et annet produktmønster med QR-koder knyttet til utstyr eller steder og kontekstuelle skjemaer.

MaintainX og UpKeep ble kontrollert som to konkurrenteksempler. Produktnavn, grensesnitt, formuleringer og dokumenterte effektpåstander er ikke kopiert. Kling-innlegget bruker bare det generelle, dokumenterte mønsteret «skannet identifikator → riktig utstyrspost → henvendelse til vurdering».

## Graph- og duplikatkontroll

En skrivebeskyttet Graph API-kontroll mot konfigurert `https://graph.instagram.com` hentet de siste 14 innleggene fra BUSINESS-kontoen `@klingsystems`. Kontrollsettet dekket 13. til 30. september 2026:

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
- 14.09: vedlikeholdsplan
- 13.09: responsive bildestørrelser

Graph viste ett publisert innlegg 30. september, media-ID `17918948127242141`, og ingen innlegg for den låste måldatoen 1. oktober på kontrolltidspunktet. Ingen skriveoperasjon ble utført.

Alle 35 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til. Konsepter om statusvarsling, registeroppslag, dokumentuttrekk, duplikatvern, kundesak, preventivt vedlikehold og generelle kontrollpunkter ble avvist. Innlegget om vedlikeholdsplan 14. september handler om neste servicefrist; dette innlegget handler i stedet om å identifisere riktig utstyr idet en ny servicehenvendelse opprettes.

Komposisjoner med vertikal registerkanal, PDF-til-felt, trekolonners statusflyt, kalender, tabell, tidslinje, forstørrelsesglass og maskotstøtte ble avvist. Den nye komposisjonen bruker en bred skanneflate mellom et fysisk utstyrsmerke og ett servicekort. Ingen bie brukes, fordi en maskot ikke tilfører nødvendig informasjon til skannehistorien og flere relevante støtteposer allerede er brukt.

## Visuell og teknisk QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildemodell fikk gjenskape tekst, logo eller QR-grafikk. Denne produksjonsformen følger imagegen-instruksens anbefaling for enkle, kodebaserte diagrammer.
- Førsterenderen besto visuell kontroll. Ingen korrigeringsrunde ble brukt.
- Originalen ble kontrollert i 1080 × 1350 piksler mot de godkjente innleggene `2026-09-23-endringshistorikk`, `2026-09-29-registeroppslag` og `2026-09-30-statusbeskjed`.
- Stilen består: varm Cream-bakgrunn, Navy-typografi, Mist- og Sky-systemflater, Gold-aksenter, stiplet felt, korrekt Kling-logo, avrundede flater og tydelig problemoverskrift.
- Konsept, hovedbudskap, utstyrsmerke, skannelinjer, QR-motiv og side-til-side-komposisjon er nye i kontrollsettet. Bildet er ikke en størrelsesvariant eller kopi av et tidligere innlegg.
- All viktig tekst, logo og grafikk holder minst 90 piksler sideavstand og minst 120 piksler avstand fra topp og bunn.
- En sentrert 1:1-beskjæring fra y=135 til y=1215 ble visuelt kontrollert. Logo, hovedbudskap, hele serviceflyten og verdilinjen beholdes med mening og uten avkuttet tekst.
- Ingen tekst er avkuttet. Logoen er korrekt. Bildet har ingen hvite bakgrunnsrester, lavoppløselige innslag eller meningsløs maskotbruk.
- Filformat: 1080 × 1350 PNG, 8-bit RGB, uten alfa.
- Lokal SHA-256: `f8f5f81f882f9167d63f958fb177b96542ddcf145324fbede3e6086c858ff293`.

## Kontroll, deploy og offentlig bilde

- Pakkevalideringen fant nøyaktig én komplett pakke for 2026-10-01 med PNG, caption og researchlogg.
- `npm run check` besto.
- `npm run build` besto.
- `npm run test:instagram-publish` besto med 6 av 6 tester.
- `git diff --check` besto.
- Leveransecommit `56d0f69` ble pushet til `origin/main` uten å stage eller endre uvedkommende arbeidsfiler.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-01-utstyrsskann`.
- Den offentlige URL-en svarte HTTP 200 med `Content-Type: image/png` og 114 685 byte.
- Offentlig SHA-256 var `f8f5f81f882f9167d63f958fb177b96542ddcf145324fbede3e6086c858ff293` og matcher lokalfilen byte for byte.
- Avsluttende `PUBLISH_MODE=dry-run` besto for BUSINESS-kontoen `@klingsystems`, riktig måldato, komplett pakke og offentlig bilde. Status var `dry-run`; ingen container ble opprettet og ingenting ble publisert.
