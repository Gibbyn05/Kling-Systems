# Research og QA: ordregrunnlag fra kjøp til utsending

## Måldato og avgrensning

- Måldatoen ble låst til 2026-09-06 ved turn-start i Europe/Oslo og ble brukt gjennom hele kjøringen.
- Det er produsert nøyaktig ett ferdig innlegg for måldatoen.
- Jobben er kun forberedelse. Innlegget er ikke publisert på Instagram.

## Problem og kjøperrelevans

Temaet er overgangen fra betalt ordre til plukk, pakking og utsending. Dette passer Klings dokumenterte målgruppe og posisjonering fordi `PRODUCT.md` beskriver manuell registrering, spredt informasjon og systemer som ikke snakker sammen som typisk friksjon. Kling kan kartlegge og koble sammen en hensiktsmessig arbeidsflyt, men virksomheten må selv definere betalingsregler, lageransvar, kontrollpunkter og fraktprosess.

Tre aktuelle, troverdige produktkilder ble kontrollert:

1. [Shopify Help Center: Order management and fulfillment](https://help.shopify.com/en/manual/fulfillment) beskriver ordrebehandling som en kjede fra innkommende ordre og betalingskontroll til plukk, pakking og forsendelse.
2. [Shopify Help Center: Managing orders](https://help.shopify.com/en/manual/fulfillment/managing-orders) dokumenterer at ordre kan spores etter betalings- og oppfyllingsstatus, og at ordredata vurderes før de klargjøres for oppfylling.
3. [WooCommerce: Order Statuses](https://woocommerce.com/document/managing-orders/order-statuses/) dokumenterer tydelige tilstander gjennom betaling, behandling og fullføring, inkludert at en betalt ordre kan vente på oppfylling.

Kildene er brukt til å bekrefte arbeidsmønsteret, ikke til å markedsføre bestemte plattformer. Ingen tall, kundecaser, garantier, priser eller konkurrentpåstander er gjenbrukt i Kling-innlegget.

## Valgt budskap

- Hovedspørsmål: «Ordren er betalt. Har lageret riktig grunnlag?»
- Systemillustrasjon: Ett skråstilt ordrekort føres inn i en samlet pakkestasjon med samsvarende varer, antall og kontrollert status.
- Forretningsverdi: «Samme ordregrunnlag fra kjøp til utsending.»
- CTA: Kartlegg flyten på `klingsystems.no/automatisering`.

## Graph- og duplikatkontroll

- De 14 siste publiserte mediene fra BUSINESS-kontoen `@klingsystems` ble hentet via den eksisterende, skrivebeskyttede Instagram Graph API-oppsettet.
- Kontrollsettet dekket publiseringer fra 2026-08-22 til og med 2026-09-05. Captionens første linje, tidsstempel, medietype og bilde ble kontrollert for alle 14.
- Alle aktive lokale PNG-pakker i `assets/ads/daily` ble kontrollert, inkludert pakker som ikke nødvendigvis var publisert i Graph-settet.
- Konsepter om timegrunnlag, møteoppgaver, kundeoppstart, dokumentversjoner, salgsoppfølging, bookingendring, kundedata, mobilflyt, fakturagodkjenning, tilgangsavslutning, skjemakvittering, tjenesteoversikt, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist.
- Tidligere komposisjoner med vertikal timeliste, rundt møtepunkt, horisontal oppstartsrail, dokumentbunke, oppfølgingsskive, før-og-etter-kalender, kildekort, mobilskjerm, fakturatabell, trinnliste, stor kvittering, tre tjenestekort, mørk fullflate og to systemmoduler ble avvist.
- Det nye innlegget bruker en arbeidsbenk-lignende pakkestasjon, et skråstilt ordrekort og varelinjer som samsvarer visuelt mellom ordre og plukk. Ordreoppfylling som hovedproblem og denne komposisjonen er ikke brukt i kontrollsettet.
- `kling-bee-email.png` brukes som liten støttefigur ved overleveringen. Denne bieposen er ikke brukt i de aktive lokale pakkene eller de 14 kontrollerte Graph-bildene. Maskoten dekker klart under 25 prosent av flaten og er ikke hovedmotivet.

## Stil- og produksjonskontroll

- Korrekt `kling-logo-navy-transparent.png` brukes som separat prosjektressurs. Logoen er ikke generert eller skrevet av en bildemodell.
- Paletten følger `DESIGN.md`: Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate eller generisk AI-estetikk.
- Bildet er rendret deterministisk i HTML og CSS med lokal Geist-font, faktisk Kling-logo og eksisterende Kling-maskot. Denne produksjonsformen følger `imagegen`-ferdighetens regel for enkle diagrammer og kodebaserte grensesnittillustrasjoner som krever eksakt typografi.
- Førsterenderen ble avvist fordi ingressen overlappet hovedoverskriften og maskoten dekket statusfeltet. Den ene tillatte korrigeringsrunden flyttet ingressen ned og plasserte maskoten mellom ordre og pakkestasjon. Konsept, hovedtekst og illustrasjonsidé ble beholdt.
- Sluttbildet ble visuelt sammenlignet med alle 14 Graph-bilder og spesielt de tre siste godkjente innleggene om timegrunnlag, møteoppgaver og kundeoppstart.

## Format- og kvalitetskontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
- Viktig tekst, logo og grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, ingress, ordre, pakkestasjon, maskot, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet. Logoen er korrekt, maskoten har ingen hvite bakgrunnsrester, og illustrasjonen har ingen synlig lavoppløst grafikk.
- Caption er naturlig norsk, under 2200 tegn, inneholder tre emneknagger og CTA til `klingsystems.no/automatisering`.
- SHA-256 for sluttfilen: `99c651aac907a40711ec262836709e639a80a09f38ada9706c9f7419fc33e5d0`.

## Sluttverifisering

- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-09-06. Captionen er 650 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto.
- Commit, push, offentlig bildeverifisering og avsluttende dry-run dokumenteres etter at de er utført.
