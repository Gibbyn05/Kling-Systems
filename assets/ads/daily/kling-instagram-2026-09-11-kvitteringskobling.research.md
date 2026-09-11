# Research og QA: korttransaksjon koblet til kvittering

## Måldato og avgrensning

- Måldatoen ble låst til 2026-09-11 ved turn-start i Europe/Oslo og beholdt gjennom hele kjøringen.
- Det er produsert nøyaktig ett ferdig innlegg for måldatoen.
- Jobben er kun forberedelse. Ingen Instagram-container er opprettet, og innlegget er ikke publisert.

## Problem og kjøperrelevans

Temaet er firmakorttransaksjoner der betalingen er registrert, men kvitteringen ikke er koblet til kjøpet. Dette passer Klings dokumenterte målgruppe og posisjonering fordi `PRODUCT.md` beskriver manuell registrering, spredt informasjon og systemer som ikke snakker sammen som typisk friksjon. Kling kan kartlegge flyten mellom kortbruk, dokumentasjon og regnskapssystem, og bygge eller koble sammen en hensiktsmessig løsning.

Tre aktuelle og troverdige kilder ble kontrollert i en avgrenset researchrunde:

1. [Skatteetaten: Regnskap](https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/rutiner-regnskap-og-kassasystem/gode-rutiner-for-daglig-drift/regnskap/) beskriver at dokumentasjon som en betalt regning eller utsendt faktura skal legges ved regnskapet, og at en kvittering dokumenterer et kjøp med blant annet dato, beløp, varebeskrivelse og butikkens navn.
2. [DNB: Årsoppgaver og bilag](https://www.dnb.no/bedrift/hjelp-og-veiledning/aarsoppgaver-og-bilag) presiserer at kvitteringen ved kjøpet er bilaget ved kortbruk, mens banken bare har beskrivelsesteksten til korttransaksjonen.
3. [Fiken: Slik bruker du Fiken med Folio](https://hjelp.fiken.no/fiken-folio) beskriver et arbeidsmønster der opplastede kvitteringer og kontotransaksjoner kobles sammen, og manglende bilag kan følges opp før kjøp bokføres.

Kildene er brukt til å bekrefte arbeidsmønsteret, ikke til å hevde en bestemt funksjon i et ferdig Kling-produkt. Ingen tall, kundecaser, garantier, priser eller resultatpåstander er brukt som påstander om Kling.

## Valgt budskap

- Hovedspørsmål: «Kortkjøpet er registrert. Hvor er kvitteringen?»
- Støttelinje: «Koble transaksjonen til bilaget før regnskapet skal kontrolleres.»
- Systemillustrasjon: En korttransaksjon og en kvittering står på hver sin side av en vertikal koblingsrygg. Tre gule kontrollpunkter knytter dato, beløp og leverandør sammen før statusen viser at kjøp og kvittering er samlet.
- Forretningsverdi: «Færre løse bilag. Bedre kontroll før bokføring.»
- CTA: Kartlegg flyten på `klingsystems.no/automatisering`.
- «Kontorrekvisita», datoen og beløpet er illustrative grensesnittdata, ikke en faktisk kunde, transaksjon eller Kling-funksjon.

## Produkt- og konkurrenteksempler

Innenfor grensen på tre ble to relevante produktmønstre kontrollert:

- DNB Regnskap viser opplasting og registrering av kvitteringer i en utgiftsinnboks.
- Fiken og Folio viser kobling mellom opplastet bilag og banktransaksjon før bokføring.

Skatteetaten ble brukt som myndighetskilde, ikke som konkurrent. Kling-innlegget kopierer ingen produkttekst, skjermbilder, layout, produktnavn eller resultatpåstander. Innholdsgapet er et verktøyuavhengig spørsmål for norske små og mellomstore bedrifter: Er kortkjøpet koblet til dokumentasjonen før regnskapet skal kontrolleres?

## Graph- og duplikatkontroll

- De 14 siste publiserte mediene fra BUSINESS-kontoen `@klingsystems` ble hentet via den eksisterende, skrivebeskyttede Instagram Graph API-oppsettingen.
- Kontrollsettet dekket publiseringer fra 2026-08-26 til og med 2026-09-09. Captionens første linje, tidsstempel, medietype, permalink og bilde ble kontrollert for alle 14.
- De tre nyeste mediene var avtalefrist 9. september, lagergrense 8. september og prisgrunnlag 7. september. Det fantes ingen publisering for den låste måldatoen 11. september.
- Alle 20 eksisterende lokale PNG-pakker i `assets/ads/daily` ble kontrollert i et eget kontaktark før den nye pakken ble laget.
- Konsepter om avtalefrist, lagergrense, prisgrunnlag, ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart, dokumentversjoner, salgsoppfølging, bookingendring, kundedata, mobilflyt, fakturagodkjenning, tilgangsavslutning, skjemakvittering, tjenesteoversikt, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist.
- Korttransaksjon med manglende kvittering, den vertikale koblingsryggen og kombinasjonen av to dokumentflater med tre samsvarspunkter er ikke brukt i kontrollsettet.
- Maskot ble bevisst utelatt. Ingen tilgjengelig biepose styrket dokumentasjonskoblingen uten å bli dekorativ eller gjenta tidligere bruk.

## Stil- og produksjonskontroll

- Korrekt `kling-logo-navy-transparent.png` brukes som separat prosjektressurs. Logoen er ikke generert eller skrevet av en bildemodell.
- Paletten følger `DESIGN.md`: Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate eller generisk AI-estetikk.
- Bildet er rendret deterministisk i HTML og CSS med lokal Geist-font og faktisk Kling-logo.
- Førsterenderen ble avvist fordi bunnens verdilinje lå for nær nedre grense i den sentrerte 1:1-beskjæringen. Den ene tillatte korrigeringsrunden flyttet bunnfeltet 30 piksler opp.

## Format- og kvalitetskontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
- Viktig tekst, logo og grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, koblingsillustrasjon, resultatstatus, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet. Logoen er korrekt, og illustrasjonen har ingen hvite bakgrunnsrester eller synlig lavoppløst grafikk.
- Sluttbildet ble kontrollert i original størrelse mot de publiserte innleggene om avtalefrist 9. september, lagergrense 8. september og prisgrunnlag 7. september, samt kontaktarkene for alle 14 Graph-bilder og alle eksisterende lokale pakker.
- Caption er naturlig norsk, under 2200 tegn, inneholder tre emneknagger og CTA til `klingsystems.no/automatisering`.
- SHA-256 for sluttfilen: `db6d1677d582546e659d09044fc223423aa4584a9162f50fb8dfa5e561264910`.

## Sluttverifisering

- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-09-11. Captionen er 501 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- De tre leveransefilene ble committet som `c108199` og pushet til `main`. Uvedkommende endringer i arbeidsområdet ble ikke staged eller committet.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-11-kvitteringskobling`.
- URL-en svarte HTTP 200 uten innlogging som `image/png`, 1080 × 1350 piksler, RGB uten alfa og 135 669 byte.
- Offentlig SHA-256 samsvarer med lokalfilen: `db6d1677d582546e659d09044fc223423aa4584a9162f50fb8dfa5e561264910`.
- Avsluttende kontroll med `TARGET_DATE=2026-09-11` og `PUBLISH_MODE=dry-run` besto. Riktig pakke, offentlig bilde, BUSINESS-kontoen `@klingsystems` og duplikatstatus ble kontrollert. Ingen container ble opprettet og ingenting ble publisert.
