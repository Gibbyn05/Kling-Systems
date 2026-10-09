# Research- og QA-logg: kontrollert dataimport

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-10-10, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Datoen ble brukt konsekvent i bilde, caption, researchlogg, medie-ID og offentlig URL.
- Dette er nøyaktig én produksjonspakke for Kling Systems. Ingen Instagram-container ble opprettet, og ingenting ble publisert på Instagram.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet og Kling-pakkeflyten ble lest før produksjon.

## Valgt innsikt og budskap

Kling dokumenterer spredt informasjon og manuell registrering som vanlig friksjon hos små og mellomstore bedrifter. Et regneark kan inneholde riktige opplysninger i feil kolonner, uventede datatyper eller rader uten nødvendig identifikator. Før filen brukes til å opprette eller oppdatere poster, kan en kontrollflyt koble kolonner til avtalte felt, kontrollere format og skille ut avvik til retting.

- Problem: En fil kan se ryddig ut uten å passe kravene i målsystemet.
- Løsningseksempel: Kontroller kolonner, formater og unik identifikator før import, og hold avviksrader utenfor til de er rettet.
- Forretningsverdi: Virksomheten får et synlig kontrollpunkt før data endrer systemet.
- Hovedbudskap: «Er filen klar før den importeres?»
- Støttelinje: «Kontroller felter og avvik før data endrer systemet.»
- Verdilinje: «Fra uoversiktlig fil til kontrollert dataimport.»
- CTA: `klingsystems.no/systemer`.

Filnavn, bedrifter, e-postadresser og radverdier i bildet er tydelig presentert som eksempeldata. Innlegget lover ikke feilfri import, automatisk opprydding, spart tid eller et målbart økonomisk resultat.

## Avgrenset research

Researchen ble gjennomført 9. oktober 2026 og avgrenset til tre aktuelle, offisielle kilder:

1. [Microsoft Learn: Best practices when working with Power Query](https://learn.microsoft.com/en-us/power-query/best-practices) dokumenterer at riktige datatyper er viktige for CSV- og tekstkilder, og at kolonnestatus kan vise gyldige verdier, feil og tomme verdier før videre behandling.
2. [Odoo 18 Documentation: Export and import data](https://www.odoo.com/documentation/18.0/applications/essentials/export_import_data.html) dokumenterer mapping mellom filkolonner og systemfelt, kontroll av feil og en egen test før importen gjennomføres.
3. [HubSpot Knowledge Base: Format import files](https://knowledge.hubspot.com/import-and-export/set-up-your-import-file) dokumenterer krav til kolonneoverskrifter, feltformater og unik identifikator ved oppdatering av eksisterende poster.

Microsoft Power Query, Odoo og HubSpot ble kontrollert som tre relevante produktmønstre. Kildene er brukt til å bekrefte generelle importkontroller, ikke til å hevde at Kling leverer identiske produktfunksjoner. Ingen produkttekst, skjermbilder, layout, kundecase, statistikk eller resultatpåstand er kopiert.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett på `graph.instagram.com` ble brukt før research og produksjon.
- Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`.
- De 14 siste publiserte mediene ble hentet med media-ID, caption, medietype, permalink og tidsstempel. Kontrollsettet dekket 25. september til 9. oktober 2026.
- Kontrollsettet omfattet lenkeforhåndsvisning, KID-matching, tekstalternativer, e-postdomene, nettstedskart, serverkontroll av skjema, videresending, lagersynk, utstyrsskann, statusbeskjed, registeroppslag, dokumentdata, duplikatvern og kundereisetest.
- Media-ID-ene i kontrollsettet var `18117838109078105`, `18016812110744664`, `18484779445109066`, `18153424792523873`, `17879033988553987`, `17909732439489061`, `18078280679392755`, `17949925962320069`, `17870934222637507`, `17918948127242141`, `18166326919487637`, `17918578896244122`, `18018236660945648` og `18104109737615631`.
- De tilsvarende 14 lokale originalbildene ble kontrollert visuelt. Alle 44 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn, caption og researchlogg før den nye filen ble lagt til.
- Temaer om dokumentuttrekk, registeroppslag, duplikatvern, integrasjonsfeil, kundedata og generell systemovergang ble avvist som nærliggende. Det valgte konseptet handler særskilt om å validere en hel importfil før den endrer målsystemet.
- Førsterenderens venstre-til-høyre-port lignet komposisjonen i skjemakontrollen 4. oktober og ble avvist. Den ene tillatte korrigeringsrunden endret sluttbildet til en bred inspeksjonstabell med to separate utfall under tabellen.
- Sluttkomposisjonen, overskriften, importtabellen og avviksmarkeringen er forskjellige fra de kontrollerte innleggene. Ingen bie brukes fordi systemillustrasjonen forklarer kontrollpunktet uten maskot, og fordi en støttefigur ikke tilfører nødvendig informasjon.

## Produksjon og stilkontroll

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-ressursen.
- Imagegen-instruksen peker på kodebasert rendering for enkle diagrammer som krever presis tekst, korrekt logo og prosjektets eksisterende merkeelementer. Ingen bildemodell fikk gjenskape logo eller typografi.
- Kling-paletten er brukt med Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate, vannmerke eller generisk AI-estetikk.
- Korrekt Kling-logo er plassert som en separat ressurs. Ingen ny eller gjenskapt logo er brukt.

## Visuell og teknisk QA

- Sluttformat: 1080 × 1350 piksler, 8-bit RGB PNG uten alfakanal.
- Viktig tekst, logo og systemgrafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, importtabell, begge utfall, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet eller dekket. Logoen er korrekt, og bildet har ingen hvite bakgrunnsrester, alfa eller lavoppløste elementer.
- Sluttbildet ble kontrollert i original størrelse mot innleggene fra 25. september til 9. oktober, med særskilt sammenligning mot skjemakontroll 4. oktober, dokumentdata 28. september, registeroppslag 29. september, KID-matching 8. oktober og lenkeforhåndsvisning 9. oktober.
- Sluttbildet bruker ingen tidligere biepose eller generert maskot.
- Én korrigeringsrunde ble brukt. Ingen flere endringer ble gjort etter bestått original- og 1:1-kontroll.
- Lokal SHA-256: `9e89e3f8f08a0330c1e89ef1e584607a5f55e379a167ede8ff25fb28f0932195`.
- Filstørrelse: 128 595 byte.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-10-10-dataimport`.
- Offentlig medie-ID: `daily-2026-10-10-dataimport`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-10-dataimport`.
- Pakkevalideringen fant nøyaktig én komplett pakke for 2026-10-10 med PNG, caption og researchlogg. Medie-ID-en er `daily-2026-10-10-dataimport`, og captionen er 531 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før commit.

## Sluttverifisering

Denne delen oppdateres etter fullført commit, push og offentlig verifisering.
