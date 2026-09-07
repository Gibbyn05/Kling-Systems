# Research og QA: lagergrense til innkjøpsforslag

## Måldato og avgrensning

- Måldatoen ble låst til 2026-09-08 ved turn-start i Europe/Oslo og beholdt gjennom hele kjøringen.
- Det er produsert nøyaktig ett ferdig innlegg for måldatoen.
- Jobben er kun forberedelse. Ingen Instagram-container ble opprettet, og innlegget er ikke publisert.

## Problem og kjøperrelevans

Temaet er overgangen fra lav beholdning til et konkret innkjøpsforslag. Dette passer Klings dokumenterte målgruppe og posisjonering fordi `PRODUCT.md` beskriver manuell registrering, spredt informasjon og systemer som ikke snakker sammen som typisk friksjon. Kling kan kartlegge flyten og bygge eller koble sammen en hensiktsmessig løsning. Virksomheten må fortsatt bestemme lagergrenser, leverandør, mengde og bestillingstidspunkt.

Tre aktuelle, troverdige produktkilder ble kontrollert i en avgrenset researchrunde:

1. [Microsoft Learn: Design details, handling reordering policies](https://learn.microsoft.com/en-ca/dynamics365/business-central/design-details-handling-reordering-policies) dokumenterer at et planleggingssystem kan overvåke beregnet beholdning mot et gjenbestillingspunkt og foreslå en ny forsyningsordre når nivået passerer grensen.
2. [Shopify Help Center: Purchase orders](https://help.shopify.com/en/manual/products/inventory/purchase-orders) dokumenterer at en innkjøpsordre samler produkter, antall, kostnader, betalingsvilkår og leverandør, og kan lagres som utkast før den markeres som bestilt.
3. [Odoo Documentation: Reordering rules](https://www.odoo.com/documentation/master/applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules.html) dokumenterer minimums- og maksimumsgrenser for beregnet lager og at en kjøpsregel kan opprette en forespørsel om tilbud når regelen utløses.

Kildene er brukt til å bekrefte arbeidsmønsteret, ikke til å markedsføre bestemte plattformer. Ingen tall, kundecaser, garantier, priser eller konkurrentpåstander er gjenbrukt som påstander om Kling.

## Valgt budskap

- Hovedspørsmål: «Lageret går ned. Er neste innkjøp klart?»
- Støttelinje: «Gjør lav beholdning synlig før varen mangler.»
- Systemillustrasjon: En lagerindikator viser fire enheter mot en avtalt minimumsgrense på åtte. Denne tilstanden kobles til ett innkjøpsforslag med antall, leverandør, behovsdato og statusen «Klar til kontroll».
- Forretningsverdi: «Fra lav beholdning til et kontrollert innkjøpsforslag.»
- CTA: Kartlegg flyten på `klingsystems.no/systemer`.
- Produktnavnet «Emballasje S», lagerstedet, leverandøren, antallet og datoen er illustrative grensesnittdata, ikke faktiske kunder, avtaler eller Kling-funksjoner.

## Konkurrenteksempler

Tre relevante produkteksempler ble kontrollert, innenfor grensen på tre:

- Microsoft Dynamics 365 Business Central viser terskelbasert planlegging og forslag til forsyningsordre.
- Shopify viser innkjøpsordre med leverandør, varer, antall og utkaststatus.
- Odoo viser gjenbestillingsregler med minimums- og maksimumsgrenser.

Klings innlegg kopierer ingen produkttekst, skjermbilder, layout, produktnavn eller resultatpåstander. Innholdsgapet er et verktøyuavhengig spørsmål for norske små og mellomstore bedrifter: Blir lav beholdning gjort om til et kontrollert forslag før noen må oppdage behovet manuelt?

## Graph- og duplikatkontroll

- De 14 siste publiserte mediene fra BUSINESS-kontoen `@klingsystems` ble hentet via den eksisterende, skrivebeskyttede Instagram Graph API-oppsettingen.
- Kontrollsettet dekket publiseringer fra 2026-08-24 til og med 2026-09-07. Captionens første linje, tidsstempel, medietype, permalink og bilde ble kontrollert for alle 14.
- De tre nyeste mediene var prisgrunnlag 7. september, ordregrunnlag 6. september og timegrunnlag 5. september. Det fantes ingen publisering for den låste måldatoen 8. september.
- Alle lokale PNG-pakker i `assets/ads/daily` ble kontrollert i et eget kontaktark.
- Konsepter om prisgrunnlag, ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart, dokumentversjoner, salgsoppfølging, bookingendring, kundedata, mobilflyt, fakturagodkjenning, tilgangsavslutning, skjemakvittering, tjenesteoversikt, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist.
- Lagergrense som hovedproblem, den horisontale åttedelte beholdningsmåleren, den åpne overlappskomposisjonen og `kling-bee-idea.png` er ikke brukt i kontrollsettet.
- Maskoten fungerer som en liten støttespiller ved det kontrollerbare forslaget, dekker klart under 25 prosent av flaten og er ikke hovedmotivet.

## Stil- og produksjonskontroll

- Korrekt `kling-logo-navy-transparent.png` brukes som separat prosjektressurs. Logoen er ikke generert eller skrevet av en bildemodell.
- Paletten følger `DESIGN.md`: Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate eller generisk AI-estetikk.
- Bildet er rendret deterministisk i HTML og CSS med lokal Geist-font, faktisk Kling-logo og eksisterende Kling-maskot. Dette følger beslutningsregelen i `imagegen`-ferdigheten for enkle diagrammer og kodebaserte grensesnittillustrasjoner som krever eksakt typografi.
- Førsterenderen ble avvist fordi overgangsteksten mellom kortene ble klemt og delvis skjult. Den ene tillatte korrigeringsrunden fjernet denne teksten og flyttet bien bort fra overgangen og de sentrale lagerdataene.

## Format- og kvalitetskontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
- Viktig tekst, logo og grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, lagerindikator, innkjøpsforslag, maskot, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet. Logoen er korrekt, maskoten har ingen hvite bakgrunnsrester, og illustrasjonen har ingen synlig lavoppløst grafikk.
- Sluttbildet ble kontrollert i original størrelse mot de publiserte innleggene om prisgrunnlag 7. september, ordregrunnlag 6. september og timegrunnlag 5. september, samt kontaktarkene for alle 14 Graph-bilder og alle lokale pakker.
- Caption er naturlig norsk, under 2200 tegn, inneholder tre emneknagger og CTA til `klingsystems.no/systemer`.
- SHA-256 for sluttfilen: `7e16faac76e556219053a46d19469009902aff5ebc5a6cc6fbc4a16a1e5c7ff4`.

## Sluttverifisering

- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-09-08. Captionen er 422 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- De tre leveransefilene ble committet som `3c2c818` og pushet til `main`. Uvedkommende endringer i arbeidsområdet ble ikke staged eller committet.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-08-lagergrense`.
- URL-en svarte HTTP 200 uten innlogging som `image/png`, 1080 × 1350 piksler, RGB uten alfa og 120 002 byte.
- Offentlig SHA-256 samsvarer med lokalfilen: `7e16faac76e556219053a46d19469009902aff5ebc5a6cc6fbc4a16a1e5c7ff4`.
- Avsluttende kontroll med `TARGET_DATE=2026-09-08` og `PUBLISH_MODE=dry-run` besto. Riktig pakke, offentlig bilde, BUSINESS-kontoen `@klingsystems` og duplikatstatus ble kontrollert. Ingen container ble opprettet og ingenting ble publisert.
