# Research- og QA-logg: lagersynk

- Låst måldato: 2026-10-02, beregnet én gang som kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Produksjonsdato: 2026-10-01.
- Publisering: Ikke autorisert og ikke utført. Denne pakken er kun klargjort.

## Konsept

Hovedbudskapet er «Viser alle kanalene samme lagerstatus?». Bildet viser tre eksempelmerkede salgskanaler med samme vare-ID og ulike beholdningstall. De kobles til en kontrollert lagerpost der avviket er synlig før én avklart status føres videre. Verdiløftet er «Fra sprikende tall til synlig lagerstatus.»

Sammenhengen problem → løsning → forretningsverdi er synlig uten caption:

1. Problem: Samme vare vises med ulike beholdningstall i nettbutikk, butikk og markedsplass.
2. Løsningseksempel: Kanalhendelser knyttes til samme vare-ID og kontrolleres mot en definert lagerpost.
3. Verdi: Teamet får ett synlig avvik og en avklart status å arbeide videre med.

Alle navn, SKU-er og tall i illustrasjonen er tydelig merket som eksempel. Innlegget lover ikke sanntidssynkronisering, feilfri beholdning, hindret oversalg eller en bestemt økonomisk effekt.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter med tre aktuelle, troverdige primærkilder. Tre relevante produktmønstre ble kontrollert som konkurrenteksempler.

1. [Shopify Help Center: Adjusting inventory quantities](https://help.shopify.com/en/manual/products/inventory/adjusting-inventory/adjusting-inventory-quantities) dokumenterer lagerantall per lokasjon, historikk for justeringer og at lager kan håndteres i et eksternt system og synkroniseres til Shopify. Kilden støtter bare at beholdning, lokasjoner og eksterne synkroniseringer er reelle systemobjekter som må håndteres eksplisitt.
2. [WooCommerce Documentation: Product Editor settings](https://woocommerce.com/document/managing-products/product-editor-settings/) dokumenterer unik SKU, lagerstyring, beholdningsantall og lagerstatus per produkt eller variant. Kilden støtter illustrasjonens bruk av én vare-ID og et konkret lagerantall.
3. [Microsoft Learn: Commerce inventory management](https://learn.microsoft.com/en-us/dynamics365/commerce/work-with-store-inventory) dokumenterer lageroppslag for flere butikker og lagre, samt lagerbeholdning og validering av tellinger. Kilden støtter mønsteret med flere kanaler eller lokasjoner rundt en kontrollert lagerpost.

Shopify, WooCommerce og Dynamics 365 Commerce ble kontrollert som tre produktmønstre. Produktnavn, grensesnitt, formuleringer og effektpåstander er ikke kopiert. Kling-innlegget bruker bare det generelle, dokumenterte mønsteret «samme vare-ID i flere kanaler → kontrollert beholdning → synlig avvik».

## Graph- og duplikatkontroll

En skrivebeskyttet Graph API-kontroll mot konfigurert `https://graph.instagram.com` hentet de siste 14 innleggene fra BUSINESS-kontoen `@klingsystems`. Kontrollsettet dekket 14. september til 1. oktober 2026:

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
- 14.09: vedlikeholdsplan

Graph viste ett publisert innlegg 1. oktober, media-ID `17870934222637507`, og ingen innlegg for den låste måldatoen 2. oktober på kontrolltidspunktet. Ingen skriveoperasjon ble utført.

Alle 36 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til. Lagergrenseinnlegget 8. september viser en terskel som utløser et kontrollert innkjøpsforslag. Det valgte innlegget handler i stedet om sprikende beholdning for samme vare på tvers av tre salgskanaler. Temaer om rapportgrunnlag, kundedata, registeroppslag, statusvarsling, duplikatvern og generell systemovergang ble også avvist som nærliggende.

Komposisjoner med beholdningsmåler, tre kilder inn i en rapport, vertikal registerkanal, tabell, tidslinje og to kort på hver side av en skannehandling ble avvist. Den nye komposisjonen bruker tre stablede kanalposter, tre skrå forbindelser, en sentral kontrollpuls og én mørk lagerpost. Ingen bie brukes, fordi en maskot ikke tilfører nødvendig informasjon til lagerhistorien og relevante støtteposer allerede er brukt.

## Visuell og teknisk QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildegenerering ble brukt til tekst eller logo.
- Førsterenderen besto visuell kontroll. Ingen korrigeringsrunde ble brukt.
- Originalen ble kontrollert i 1080 × 1350 piksler mot de godkjente innleggene `2026-09-29-registeroppslag`, `2026-09-30-statusbeskjed` og `2026-10-01-utstyrsskann`.
- Stilen består: varm Cream-bakgrunn, Navy-typografi, Mist-, Sky- og Peach-systemflater, Gold-aksenter, korrekt Kling-logo, avrundede flater og tydelig problemoverskrift.
- Konsept, hovedbudskap, trekanals lagerillustrasjon, sentral kontrollpuls og radial kobling er nye i kontrollsettet. Bildet er ikke en størrelsesvariant eller kopi av et tidligere innlegg.
- All viktig tekst, logo og grafikk holder minst 90 piksler sideavstand og minst 120 piksler avstand fra topp og bunn.
- En sentrert 1:1-beskjæring fra y=135 til y=1215 ble visuelt kontrollert. Logo, hovedbudskap, hele lagerillustrasjonen, verdilinjen og avsenderen beholdes med mening og uten avkuttet tekst.
- Ingen tekst er avkuttet. Logoen er korrekt. Bildet har ingen hvite bakgrunnsrester, lavoppløselige innslag eller meningsløs maskotbruk.
- Filformat: 1080 × 1350 PNG, 8-bit RGB, uten alfa.
- Lokal SHA-256: `21c2102d34dfda8fa9b31b422274c27aff2fa88735b9f6f54388cfb1c7b94db3`.

## Kontroll, deploy og offentlig bilde

Prosjektkontroll, build, publiseringstest, gitkontroll og offentlig bildeverifisering føres inn etter at den komplette tre-filerspakken er kontrollert og sendt til `main`.
