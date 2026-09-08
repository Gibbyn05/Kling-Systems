# Research og QA: avtalefrist til planlagt vurdering

## Måldato og avgrensning

- Måldatoen ble låst til 2026-09-09 ved turn-start i Europe/Oslo og beholdt gjennom hele kjøringen.
- Det er produsert nøyaktig ett ferdig innlegg for måldatoen.
- Jobben er kun forberedelse. Ingen Instagram-container ble opprettet, og innlegget er ikke publisert.

## Problem og kjøperrelevans

Temaet er avtaler der sluttdato eller oppsigelsesfrist finnes i et dokument, men ikke er koblet til en ansvarlig vurdering. Dette passer Klings dokumenterte målgruppe og posisjonering fordi `PRODUCT.md` beskriver spredt informasjon, gjentatte e-poster og manuelt arbeid som typisk friksjon. Kling kan kartlegge flyten og bygge eller koble sammen en hensiktsmessig løsning. Virksomheten beholder beslutningen om avtalen skal videreføres, endres eller avsluttes.

Tre aktuelle og troverdige kilder ble kontrollert i en avgrenset researchrunde:

1. [Anskaffelser.no: Følge opp bestilling og leveranse av anskaffelsen](https://anskaffelser.no/anskaffelsesprosess/anskaffelsesprosessen-steg-steg/kontraktsoppfolging/forvalte-avtalen/folge-opp-bestilling-og-leveranse-av-anskaffelsen) beskriver kontraktsregister med kontraktsperiode, kontraktsansvarlig og automatiske varslinger for frister.
2. [Anskaffelser.no: Kontraktsoppfølging](https://www.anskaffelser.no/veileder-om-beste-praksis-kontraktsoppfolging/4-kontraktsoppfolging) beskriver at vurdering av opsjon må skje i god tid før kontrakten utløper.
3. [Microsoft Learn: Manage contracts using a Microsoft 365 solution](https://learn.microsoft.com/en-us/microsoft-365/contentunderstanding/solution-manage-contracts-in-microsoft-365) viser hvordan kontraktsdata kan samles og føres gjennom en dokumentert godkjenningsprosess med status og varsling.

Kildene er brukt til å bekrefte arbeidsmønsteret, ikke til å hevde en bestemt funksjon i et ferdig Kling-produkt. Ingen tall, kundecaser, garantier, priser eller konkurrentpåstander er brukt som påstander om Kling.

## Valgt budskap

- Hovedspørsmål: «Avtalen utløper snart. Er vurderingen i gang?»
- Støttelinje: «Gjør sluttdato, ansvar og beslutningspunkt synlig i tide.»
- Systemillustrasjon: Ett avtaledokument viser ansvarlig, sluttdato og oppsigelsesfrist. En vertikal fristsøyle kobler avtalen til registrering, varsling og planlagt beslutning.
- Forretningsverdi: «Fra skjult frist til en planlagt vurdering.»
- CTA: Kartlegg flyten på `klingsystems.no/automatisering`.
- «Driftsavtale», Ingrid og datoene er illustrative grensesnittdata, ikke faktiske kunder, avtaler eller Kling-funksjoner.

## Produkt- og konkurrenteksempler

Innenfor grensen på tre ble to relevante produktmønstre kontrollert:

- Microsoft 365 viser en samlet kontraktsflate med uthentede nøkkeldata, status og arbeidsflyt.
- Microsoft Power Automate viser hvordan en godkjenningsoppgave kan opprettes, besvares og få oppdatert status.

Anskaffelser.no ble brukt som fagkilde, ikke som konkurrent. Kling-innlegget kopierer ingen produkttekst, skjermbilder, layout, produktnavn eller resultatpåstander. Innholdsgapet er et verktøyuavhengig spørsmål for norske små og mellomstore bedrifter: Er viktige avtalefrister koblet til ansvar og en planlagt vurdering?

## Graph- og duplikatkontroll

- De 14 siste publiserte mediene fra BUSINESS-kontoen `@klingsystems` ble hentet via den eksisterende, skrivebeskyttede Instagram Graph API-oppsettingen.
- Kontrollsettet dekket publiseringer fra 2026-08-25 til og med 2026-09-08. Captionens første linje, tidsstempel, medietype, permalink og bilde ble kontrollert for alle 14.
- De tre nyeste mediene var lagergrense 8. september, prisgrunnlag 7. september og ordregrunnlag 6. september. Det fantes ingen publisering for den låste måldatoen 9. september.
- Alle 20 lokale PNG-pakker i `assets/ads/daily`, inkludert dagens nye pakke, ble kontrollert i et eget kontaktark.
- Konsepter om lagergrense, prisgrunnlag, ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart, dokumentversjoner, salgsoppfølging, bookingendring, kundedata, mobilflyt, fakturagodkjenning, tilgangsavslutning, skjemakvittering, tjenesteoversikt, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist.
- Avtalefrist som hovedproblem, den vertikale fristsøylen og kombinasjonen av ett mappeliknende avtaledokument med tre forskjøvede beslutningssteg er ikke brukt i kontrollsettet.
- Maskot ble bevisst utelatt. De tilgjengelige posene som kunne tolkes som analyse, støtte eller integrasjon lå for nær tidligere bruk eller styrket ikke kontrakthistorien. Systemillustrasjonen bærer budskapet alene uten meningsløs maskotbruk.

## Stil- og produksjonskontroll

- Korrekt `kling-logo-navy-transparent.png` brukes som separat prosjektressurs. Logoen er ikke generert eller skrevet av en bildemodell.
- Paletten følger `DESIGN.md`: Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate eller generisk AI-estetikk.
- Bildet er rendret deterministisk i HTML og CSS med lokal Geist-font og faktisk Kling-logo.
- Førsterenderen ble avvist fordi små systemetiketter i høyre kolonne lå for tett på hovedteksten. Den ene tillatte korrigeringsrunden fjernet etikettene og beholdt de tre tydelige stegene.

## Format- og kvalitetskontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
- Viktig tekst, logo og grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, avtaledokument, fristsøyle, beslutningssteg, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet. Logoen er korrekt, og illustrasjonen har ingen hvite bakgrunnsrester eller synlig lavoppløst grafikk.
- Sluttbildet ble kontrollert i original størrelse mot de publiserte innleggene om lagergrense 8. september, prisgrunnlag 7. september og ordregrunnlag 6. september, samt kontaktarkene for alle 14 Graph-bilder og alle lokale pakker.
- Caption er naturlig norsk, under 2200 tegn, inneholder tre emneknagger og CTA til `klingsystems.no/automatisering`.
- SHA-256 for sluttfilen: `78db502f57ef0ec2e951a38c966d54452ab12ca40020e66f7dc464fcc3dec2b6`.

## Sluttverifisering

- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-09-09. Captionen er 493 byte.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- De tre leveransefilene ble committet som `9725d82` og pushet til `main`. Uvedkommende endringer i arbeidsområdet ble ikke staged eller committet.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-09-avtalefrist`.
- URL-en svarte HTTP 200 uten innlogging som `image/png`, 1080 × 1350 piksler, RGB uten alfa og 126 308 byte.
- Offentlig SHA-256 samsvarer med lokalfilen: `78db502f57ef0ec2e951a38c966d54452ab12ca40020e66f7dc464fcc3dec2b6`.
- Avsluttende kontroll med `TARGET_DATE=2026-09-09` og `PUBLISH_MODE=dry-run` besto. Riktig pakke, offentlig bilde, BUSINESS-kontoen `@klingsystems` og duplikatstatus ble kontrollert. Ingen container ble opprettet og ingenting ble publisert.
