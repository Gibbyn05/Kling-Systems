# Research og QA: returflyt

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-15, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Dette er én produksjonspakke for Kling Systems. Ingen Instagram-container ble opprettet, og ingenting ble publisert.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, `imagegen`-ferdigheten og Kling-ferdigheten for daglige Instagram-pakker ble lest før produksjon.
- Konseptet bruker bare dokumenterte, generelle arbeidsflytpåstander. Bildet er tydelig merket som et eksempel.

## Avgrenset research

Researchen ble gjennomført 14.09.2026 og avgrenset til tre aktuelle primærkilder:

1. [Shopify Help Center: Processing and managing returns](https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/processing-returns). Shopify beskriver mottak og kontroll av returnerte varer, valgfri tilbakeføring til lager og behandling av refusjon som deler av returprosessen.
2. [WooCommerce: Order Statuses](https://woocommerce.com/document/managing-orders/order-statuses/). WooCommerce dokumenterer at ordre-, lager- og refusjonsstatus kan ha ulike overganger, og at enkelte tilstander krever videre oppfølging.
3. [Microsoft Learn: Sales returns](https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/sales-returns). Dynamics 365 beskriver returordre, varemottak, lagerpåvirkning og økonomisk behandling som sammenhengende deler av returflyten.

De samme tre kildene ble brukt som konkurrenteksempler. Shopify samler returbehandling i ordreadministrasjonen, WooCommerce viser statusavhengige ordre- og lagerhandlinger, og Dynamics 365 viser en formell returordreprosess. Ingen konkurrentpåstand, resultatmåling eller produktgaranti er brukt i innlegget.

## Valgt innsikt og budskap

- Problem: En fysisk retur kan være mottatt selv om lagerstatus og refusjonsstatus fortsatt er uklare eller ligger i ulike arbeidssteg.
- Løsningseksempel: Koble mottak, varevurdering og registrert oppgjør i én kontrollert flyt med synlige statuser.
- Forretningsverdi: Den ansvarlige kan se hva som er gjort og hva som gjenstår uten at innlegget lover et bestemt økonomisk resultat.
- Hovedbudskap: «Returen er mottatt. Er lager og refusjon oppdatert?»
- Verdilinje: «Fra mottatt retur til synlig lager- og refusjonsstatus.»

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett ble brukt før produksjon.
- Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`.
- De 14 siste publiserte mediene ble hentet med media-ID, caption, medietype, offentlig medie-URL, permalink og tidsstempel. Kontrollsettet dekket 29.08.2026 til 14.09.2026.
- Kontrollsettet omfattet: vedlikeholdsplan, responsive bildestørrelser, kvitteringskobling, avtalefrist, lagergrense, prisgrunnlag, ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart, salgsoppfølging, bookingendring, kundedata og mobilflyt.
- Et kontaktark av de 14 faktiske Graph-bildene ble kontrollert visuelt. De 23 eksisterende lokale PNG-pakkene i `assets/ads/daily` ble kontrollert i et eget kontaktark før den nye filen ble lagt til.
- Konsepter om frister, lagergrense, ordre til utsending, kvitteringskobling, kundedata og generelle systemoverganger ble forkastet som for nærliggende.
- Det valgte konseptet handler spesifikt om mottatt retur, varevurdering og refusjonsstatus. Den sirkulære statusbanen med tre radiale eksempelstatuser er ikke brukt i kontrollsettet.
- Komposisjoner med kalender, nestede nettleserrammer, to dokumentkort med midtakse, rett fremdriftsrail, tabell, stående mobil, stor dokumentbunke og en-til-mange-fordeling ble avvist.
- Maskot ble bevisst utelatt. Ingen ubrukt biepose styrket returhistorien uten å bli dekorativ eller gjenta en tidligere rolle. Budskapet og systemillustrasjonen bærer meningen alene.

## Produksjon

- Sluttbildet er rendret deterministisk i HTML og CSS med lokal Chromium, lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-ressursen.
- Denne produksjonsformen følger `imagegen`-ferdighetens unntak for enkle systemdiagrammer som krever presis typografi og korrekt merkevarebruk.
- Ingen bildemodell fikk gjenskape logo, tekst eller maskot.
- Kling-paletten er brukt med kremfarget bakgrunn, marineblå tekst og konturer, lyseblå systemflate, ferskenfarget støtteflate og gule aksenter.
- Førsterenderen besto originalkontrollen og den sentrerte 1:1-kontrollen. Ingen korrigeringsrunde ble brukt.

## Visuell og teknisk QA

- Sluttformat: 1080 × 1350 piksler, PNG, RGB uten alfakanal.
- SHA-256: `f8ec3074b89b126605d0017b0246cd17661ad9fab80886d864b961248fd42391`.
- Filstørrelse: 140 913 byte.
- Viktig tekst, logo og systemgrafikk ligger minst 90 piksler fra sidene og 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, ingress, hele returillustrasjonen og verdilinjen er synlige og beholder meningen. Nettadressen ligger utenfor kvadratets nedre kant, men er ikke nødvendig for å forstå budskapet.
- Ingen tekst er avkuttet. Logoen er korrekt. Bildet har ingen hvite bakgrunnsrester, vannmerker, lavoppløste elementer eller meningsløs maskotbruk.
- Sluttbildet ble kontrollert i original størrelse mot innleggene om vedlikeholdsplan 14. september, responsive bilder 13. september og kvitteringskobling 11. september, samt mot begge kontaktarkene.
- Overskrift, returtema, sirkulær statusbane, radial komposisjon og bilde er forskjellige fra de kontrollerte Graph-mediene og lokale pakkene.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-09-15-returflyt`.
- Offentlig bilde-ID: `daily-2026-09-15-returflyt`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-15-returflyt`.
- Pakkevalidering, `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- Leveransecommit `3cbf773` ble pushet til `main`.
- Den offentlige bilde-URL-en svarte HTTP 200 med `image/png` og 140 913 byte etter utrulling. Offentlig SHA-256 var `f8ec3074b89b126605d0017b0246cd17661ad9fab80886d864b961248fd42391` og samsvarte med lokalfilen.
- Avsluttende kontroll med `TARGET_DATE=2026-09-15` og `PUBLISH_MODE=dry-run` besto for BUSINESS-kontoen `@klingsystems`. Riktig pakke, caption, offentlig bilde og duplikatstatus ble kontrollert. Ingen container ble opprettet, og ingenting ble publisert.
