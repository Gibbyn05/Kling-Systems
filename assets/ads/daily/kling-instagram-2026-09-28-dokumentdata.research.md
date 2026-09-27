# Research og QA: dokumentdata med kontroll

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-28, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, og ingenting ble publisert.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet og `imagegen`-ferdigheten ble lest før produksjon.
- Researchen ble avgrenset til under 15 minutter, tre troverdige primærkilder og tre relevante produktmønstre.

## Avgrenset research

1. [Microsoft Learn: Document processing model overview](https://learn.microsoft.com/en-us/ai-builder/form-processing-model-overview) dokumenterer at dokumentbehandling kan lese og lagre informasjon fra standarddokumenter, og at definerte felt kan trekkes ut og brukes videre i Power Automate eller Power Apps.
2. [Google Cloud Documentation: Document AI overview](https://cloud.google.com/document-ai/docs/overview) dokumenterer hvordan ustrukturert dokumentinnhold kan gjøres om til strukturerte felt som egner seg for videre bruk i databaser og arbeidsflyter.
3. [Amazon Textract Documentation: Analyzing Documents](https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html) dokumenterer uttrekk av tekst, nøkkel-verdi-par, tabeller og andre dokumentelementer til strukturerte resultater.

Microsoft AI Builder, Google Document AI og Amazon Textract ble kontrollert som tre relevante produktmønstre. Kildene viser at feltuttrekk fra dokumenter er en etablert teknisk mulighet, men brukes ikke som påstander om en bestemt Kling-leveranse. Ingen statistikk, kundecaser, nøyaktighetsgarantier eller løfter om helautomatisk behandling ble brukt.

## Valgt innsikt og budskap

- Problem: Et vedlegg kan inneholde felter som fortsatt må registreres manuelt før dataene kan brukes i et system.
- Løsningseksempel: Hent ut avtalte felt fra dokumentet, og send usikre eller manglende verdier til kontroll før de brukes videre.
- Forretningsverdi: Vedlegget blir til strukturert systemdata med et synlig kontrollpunkt, uten at innlegget lover feilfritt uttrekk eller fjerner behovet for vurdering.
- Hovedbudskap: «Dokumentet kom som PDF. Må alt tastes inn?»
- Støttelinje: «Hent ut felter automatisk, og send usikre verdier til kontroll.»
- Verdilinje: «Fra vedlegg til kontrollert systemdata.»
- CTA: «Har dere vedlegg som fortsatt tastes inn felt for felt? Se klingsystems.no og finn ut hva dere kan automatisere.»

Hvilke dokumenter, felt og valideringsregler som er egnet, må vurderes i den faktiske arbeidsflyten. Innlegget lover ikke at alle dokumenttyper kan behandles, at alle felt blir lest riktig, eller at menneskelig kontroll er unødvendig.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett mot `graph.instagram.com` ble brukt før produksjon.
- De siste 14 publiserte mediene fra BUSINESS-kontoen `@klingsystems`, fra 2026-09-08 til 2026-09-27, ble hentet med media-ID, caption, medietype, medie-URL, permalink og tidsstempel.
- Kontrollsettet omfattet duplikatvern, kundereisetest, kildesporing, endringshistorikk, kundesak, sikkerhetskopitest, integrasjonsfeil, tastaturskjema, returflyt, vedlikeholdsplan, responsive bilder, kvitteringskobling, avtalefrist og lagergrense.
- Alle 32 eksisterende lokale PNG-pakker og tilhørende researchlogger i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til.
- Temaer om dokumentversjon, fakturakø, kvitteringskobling, kundedata og generell systemovergang ble avvist som nærliggende.
- Det nye innlegget viser ett skråstilt PDF-vedlegg, en separat leseskinne og et strukturert feltkort der ett usikkert felt går til kontroll. Problemstillingen, kontrollpunktet og den venstre-til-høyre dokumentflyten er nye i kontrollsettene.
- Maskot ble bevisst utelatt. En analysebie med forstørrelsesglass ville ligge for nær den nylige forstørrelseskomposisjonen i innlegget om endringshistorikk og ville ikke styrke feltkontrollen.

## Produksjon og visuell QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen.
- `imagegen`-ferdigheten peker på kodebasert produksjon når motivet er et enkelt systemdiagram med krav til presis typografi, korrekt logo og etablerte merkeelementer. Ingen bildegenerator fikk gjenskape tekst, logo eller maskot.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi, Sky- og Mist-systemflater, Peach-støtteflate og Gold-kontrollpunkter. Uttrykket er lyst, luftig, minimalt og forretningsorientert.
- Sluttbildet ble kontrollert i original størrelse og mot de godkjente innleggene om duplikatvern 27. september, kildesporing 24. september og kvitteringskobling 11. september.
- Den ene tillatte korrigeringsrunden flyttet den roterte PDF-flaten ti piksler inn for å sikre side-tryggsonen.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk, mørk eller fotografisk stil eller duplikatkomposisjon ble funnet etter korrigeringen.

## Format- og tryggsonekontroll

- Sluttformat: 1080 × 1350 piksler.
- PNG: 8-bit RGB uten alfa.
- Viktig tekst, logo og hovedgrafikk holder minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, PDF-vedlegg, leseskinne, feltkort, kontrollpunkt og verdilinje beholdes med mening intakt.
- SHA-256: `c6f0d453287f55679589ab69c766bfaa4734931dd1237285dd4855caca2d8604`.
- Filstørrelse: 117 737 byte.

## Leveringskontroller

- Pakkevalideringen fant nøyaktig én komplett pakke for 2026-09-28 med 464 tegn i captionen og medie-ID `daily-2026-09-28-dokumentdata`.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto.
- Offentlig bilde-URL etter produksjonsdeploy: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-28-dokumentdata`.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne kjøringen.
