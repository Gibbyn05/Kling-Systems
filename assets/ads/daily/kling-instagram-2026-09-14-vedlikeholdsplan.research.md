# Research og QA: planlagt vedlikehold

## Måldato og avgrensning

- Måldatoen ble låst til 2026-09-14 ved turn-start i Europe/Oslo og beholdes gjennom hele kjøringen.
- Det er produsert nøyaktig ett ferdig innlegg for måldatoen.
- Jobben er kun forberedelse. Ingen Instagram-container er opprettet, og innlegget er ikke publisert.

## Problem og kjøperrelevans

Temaet er gjentakende vedlikehold der servicehistorikk og intervall finnes, men neste oppgave ikke er samlet med dato og ansvar. Dette passer Klings dokumenterte målgruppe og posisjonering fordi `PRODUCT.md` beskriver manuell registrering, spredt informasjon og systemer som ikke snakker sammen som typisk friksjon. Kling kan kartlegge flyten og bygge eller koble sammen en hensiktsmessig løsning. Virksomheten må selv fastsette serviceintervall, sikkerhetsrutiner, ansvar og krav til kompetanse.

Tre aktuelle, troverdige kilder ble brukt i en avgrenset researchrunde:

1. [Arbeidstilsynet: Sikkert vedlikehold](https://www.arbeidstilsynet.no/risikofylt-arbeid/maskiner/sikkert-vedlikehold/) beskriver vedlikehold som en prosess som skal planlegges, utføres etter plan, sluttkontrolleres og dokumenteres.
2. [Microsoft Learn: Create work orders from an agreement](https://learn.microsoft.com/en-us/dynamics365/field-service/create-work-order-from-agreement) viser et konkret systemmønster der gjentakende serviceavtaler genererer arbeidsordrer før planlagte servicedatoer.
3. [Odoo 18 Documentation: Maintenance calendar](https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/maintenance/maintenance_calendar.html) viser hvordan forebyggende vedlikeholdsoppgaver kan knyttes til utstyr, planlagt dato, ansvarlig og status i en vedlikeholdskalender.

Microsoft Dynamics 365 Field Service og Odoo ble kontrollert som to relevante konkurrenteksempler. De brukes bare som dokumentasjon på etablerte arbeidsflytmønstre. Innlegget lover ikke færre driftsstans, lavere kostnader, juridisk etterlevelse, automatisk riktig intervall eller andre målbare resultater. Pakkemaskinen og datoene i illustrasjonen er tydelig merket som et eksempel, ikke en kunde eller faktisk leveranse.

## Valgt budskap

- Hovedbudskap: «Utstyret er i bruk. Når er neste service?»
- Støttelinje: «Koble serviceintervallet til en tydelig oppgave med dato og ansvar.»
- Systemillustrasjon: Ett utstyrskort med siste utførelse og intervall står ved siden av en septemberkalender. Datoen 14. september er markert, og en egen serviceoppgave viser dato, ansvar og planleggingsstatus.
- Forretningsverdi: «Fra historikk til synlig neste vedlikehold.»
- CTA: Kartlegg flyten på `klingsystems.no/systemer`.

## Graph- og duplikatkontroll

- De 14 siste publiserte mediene fra BUSINESS-kontoen `@klingsystems` ble hentet via prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett.
- Kontrollsettet dekket publiseringer fra 2026-08-28 til og med 2026-09-13. Caption, tidsstempel, medietype, permalink og bilde ble kontrollert for alle 14.
- Det fantes ingen publisering for den låste måldatoen 2026-09-14.
- Et midlertidig kontaktark av de 14 Graph-bildene ble visuelt kontrollert. Alle 22 aktive lokale PNG-pakker i `assets/ads/daily` ble også kontrollert i et eget kontaktark.
- Konsepter om responsive bildestørrelser, kvitteringskobling, avtalefrister, lagergrense, prisgrunnlag, ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart, dokumentversjoner, salgsoppfølging, bookingendring, kundedata, mobilflyt, fakturagodkjenning, tilgangsavslutning, skjemakvittering, tjenesteoversikt, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist.
- Planlagt vedlikehold som hovedtema er ikke brukt i kontrollsettet. Kalendergridet, kombinasjonen av utstyrskort og overlappende serviceoppgave, samt den tydelige eksempelmerkingen er nye.
- Komposisjonen ble særskilt sammenlignet med de godkjente innleggene om responsive bilder 13. september, kvitteringskobling 11. september og avtalefrist 9. september. Den kopierer ikke de nestede bilderammene, den tosidige dokumentkoblingen eller fristsøylen med oppgavekort.
- Kalenderbie og øvrige maskoter ble bevisst utelatt. Kalenderbien var allerede brukt i bookinginnlegget, og en ny maskotrolle ville ikke styrket vedlikeholdshistorien uten å bli dekorativ eller gjentatt.

## Stil- og produksjonskontroll

- Korrekt `kling-logo-navy-transparent.png` brukes som separat prosjektressurs. Logoen er ikke generert eller skrevet av en bildemodell.
- Paletten følger `DESIGN.md`: Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate eller generisk AI-estetikk.
- Bildet er rendret deterministisk i HTML og CSS med lokal Geist-font, faktisk Kling-logo og rene systemformer.
- Førsterenderen besto den visuelle layoutkontrollen. Den ene korrigeringsrunden erstattet den for spesifikke formuleringen «brukes hver dag» med «er i bruk» og merket utstyrskortet tydelig som eksempel. Komposisjon, illustrasjon og visuell retning ble beholdt.

## Format- og kvalitetskontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
- Viktig tekst, logo og grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, systemillustrasjon, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet eller dekket. Logoen er korrekt, og illustrasjonen har ingen hvite bakgrunnsrester eller synlig lavoppløst grafikk.
- Sluttbildet ble kontrollert i original størrelse mot minst tre tidligere godkjente Kling-innlegg og kontaktarkene for Graph-bildene og de lokale pakkene.
- Caption er naturlig norsk, under 2200 tegn, inneholder tre relevante emneknagger og CTA til `klingsystems.no/systemer`.
- SHA-256 for sluttfilen: `5f14ec30a4437b4b27072846b2574a74279323b643f094cf49ea4c1f9fbc3525`.

## Sluttverifisering

- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-09-14. Captionen er 499 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- Commit, push og offentlig bildeverifisering dokumenteres etter gjennomført levering.
