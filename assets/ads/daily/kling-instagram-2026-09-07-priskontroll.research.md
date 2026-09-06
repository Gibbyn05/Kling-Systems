# Research og QA: prisgrunnlag før tilbud

## Måldato og avgrensning

- Måldatoen ble låst til 2026-09-07 ved turn-start i Europe/Oslo og ble brukt gjennom hele kjøringen.
- Det er produsert nøyaktig ett ferdig innlegg for måldatoen.
- Jobben er kun forberedelse. Innlegget er ikke publisert på Instagram.

## Problem og kjøperrelevans

Temaet er overgangen fra en endret prisliste til åpne tilbud som fortsatt kan inneholde en eldre pris. Dette passer Klings dokumenterte målgruppe og posisjonering fordi `PRODUCT.md` beskriver manuell registrering, spredt informasjon og systemer som ikke snakker sammen som typisk friksjon. Kling kan kartlegge arbeidsflyten og bygge eller koble sammen en hensiktsmessig løsning, men virksomheten må fortsatt bestemme hvilke priser, rabatter, avtaler og virkningstidspunkt som gjelder.

Tre aktuelle, troverdige produktkilder ble kontrollert i en avgrenset researchrunde:

1. [PowerOffice: Pris- og rabattmatrise for produkter](https://hjelpesenter.poweroffice.no/prismatrise-rabatt) dokumenterer at prisregler kan brukes på tilbud og ordre eller faktura, og at priser i et ordreutkast kan beregnes på nytt. Dette støtter behovet for et tydelig kontrollpunkt når prisgrunnlaget endres.
2. [Microsoft Learn: Product and price list FAQs](https://learn.microsoft.com/en-us/dynamics365/sales/faq-product-price-list) dokumenterer hvordan prisendringer i en prisliste påvirker ordrelinjer forskjellig avhengig av blant annet om prisen er låst og om standardpris eller overstyrt pris brukes. Dette støtter at en prisendring ikke bør behandles som en blind overskriving.
3. [Shopify Help Center: Creating draft orders](https://help.shopify.com/en/manual/fulfillment/managing-orders/create-orders/create-draft) dokumenterer at en prislås kan beholde den avtalte prisen i et ordreutkast selv om produktprisen endres senere, og at opplåsing kan hente nyere prisgrunnlag. Dette støtter behovet for å skille mellom bevisst låst pris og et utkast som bør vurderes på nytt.

Kildene er brukt til å bekrefte arbeidsmønsteret, ikke til å markedsføre bestemte plattformer. Ingen tall, kundecaser, garantier, priser eller konkurrentpåstander er gjenbrukt som påstander om Kling.

## Valgt budskap

- Hovedspørsmål: «Prislisten er endret. Bruker tilbudet riktig pris?»
- Systemillustrasjon: Ett produktregister med ny pris føres mot to åpne tilbud. Ett eldre utkast markeres for kontroll, mens et nyere utkast viser det oppdaterte grunnlaget.
- Forretningsverdi: «Riktig prisgrunnlag før tilbudet sendes.»
- CTA: Kartlegg flyten på `klingsystems.no/systemer`.
- «Serviceavtale», prisene og tilbudsnumrene er illustrative grensesnittdata, ikke faktiske kunder, avtaler eller Kling-funksjoner.

## Konkurrenteksempler

Tre relevante produkteksempler ble kontrollert, innenfor grensen på tre:

- PowerOffice viser at prisregler kan slå inn i tilbud og ordreutkast, med en egen handling for ny prisberegning.
- Microsoft Dynamics 365 viser at en oppdatert prisliste kan påvirke linjeprisen forskjellig avhengig av prislås og prisregel.
- Shopify viser at et ordreutkast kan beholde en tidligere avtalt pris med prislås eller oppdateres mot nyere produktpris etter en eksplisitt handling.

Klings innlegg kopierer ingen produkttekst, skjermbilder, layout, produktnavn eller resultatpåstander. Innholdsgapet er et verktøyuavhengig spørsmål for norske små og mellomstore bedrifter: Hvilke åpne tilbud skal beholde avtalt pris, og hvilke skal vurderes mot et nytt prisgrunnlag?

## Graph- og duplikatkontroll

- De 14 siste publiserte mediene fra BUSINESS-kontoen `@klingsystems` ble hentet via den eksisterende, skrivebeskyttede Instagram Graph API-oppsettet.
- Kontrollsettet dekket publiseringer fra 2026-08-23 til og med 2026-09-06. Captionens første linje, tidsstempel, medietype og bilde ble kontrollert for alle 14.
- De tre nyeste mediene var ordregrunnlag 6. september, timegrunnlag 5. september og møteoppgaver 4. september. Det fantes ingen publisering for den låste måldatoen 7. september.
- Alle aktive lokale PNG-pakker i `assets/ads/daily` ble også kontrollert.
- Konsepter om ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart, dokumentversjoner, salgsoppfølging, bookingendring, kundedata, mobilflyt, fakturagodkjenning, tilgangsavslutning, skjemakvittering, tjenesteoversikt, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist.
- Det nye innlegget bruker ett skråstilt produktregister, én kort overgang og to stablede tilbudstilstander som viser forskjellen mellom en eldre pris og et oppdatert grunnlag. Prisendring som hovedproblem, denne asymmetriske en-til-to-kontrollen og `kling-bee-analytics.png` er ikke brukt i kontrollsettet.
- Maskoten fungerer som en liten støttefigur ved kontrollpunktet, dekker klart under 25 prosent av flaten og er ikke hovedmotivet.

## Stil- og produksjonskontroll

- Korrekt `kling-logo-navy-transparent.png` brukes som separat prosjektressurs. Logoen er ikke generert eller skrevet av en bildemodell.
- Paletten følger `DESIGN.md`: Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate eller generisk AI-estetikk.
- Bildet er rendret deterministisk i HTML og CSS med lokal Geist-font, faktisk Kling-logo og eksisterende Kling-maskot. Denne produksjonsformen følger `imagegen`-ferdighetens regel for enkle diagrammer og kodebaserte grensesnittillustrasjoner som krever eksakt typografi.
- Førsterenderen besto originalkontroll og sentrert 1:1-kontroll. Ingen korrigeringsrunde ble nødvendig.

## Format- og kvalitetskontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
- Viktig tekst, logo og grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, produktregister, begge tilbudstilstander, maskot, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet. Logoen er korrekt, maskoten har ingen hvite bakgrunnsrester, og illustrasjonen har ingen synlig lavoppløst grafikk.
- Caption er naturlig norsk, under 2200 tegn, inneholder tre emneknagger og CTA til `klingsystems.no/systemer`.
- SHA-256 for sluttfilen: `d442d0d036d91a86e6bb08b0ce1b0b596c14bcce90f225dafc7e65ebbaffda0e`.

## Sluttverifisering

- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-09-07. Captionen er 590 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- De tre leveransefilene ble committet som `8e21937` og pushet til `main`. Uvedkommende endringer i arbeidsområdet ble ikke staged eller committet.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-07-priskontroll`.
- URL-en svarte først 404 mens produksjonsutrullingen pågikk, deretter HTTP 200 uten innlogging som en 1080 × 1350 RGB PNG uten alfa på 145 317 byte.
- Offentlig SHA-256 samsvarer med lokalfilen: `d442d0d036d91a86e6bb08b0ce1b0b596c14bcce90f225dafc7e65ebbaffda0e`.
- Avsluttende kontroll med `TARGET_DATE=2026-09-07` og `PUBLISH_MODE=dry-run` besto. Riktig pakke, offentlig bilde, BUSINESS-kontoen `@klingsystems` og duplikatstatus ble kontrollert. Ingen container ble opprettet og ingenting ble publisert.
