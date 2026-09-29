# Research og QA: statusbeskjed ved avklart steg

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-30, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Den samme datoen brukes gjennom hele kjøringen. Dette er nøyaktig én produksjonspakke for Kling Systems.
- Instagram-publisering er ikke autorisert. Ingen container skal opprettes, og `media_publish` skal ikke kalles.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-pakkeflyten og `imagegen`-instruksen ble lest før produksjon.

## Avgrenset research

Researchen ble gjennomført 29.09.2026 og avgrenset til tre aktuelle, offisielle produktkilder:

1. [Shopify Help Center: Store notifications](https://help.shopify.com/en/manual/fulfillment/setup/notifications) dokumenterer at kundevarsler kan utløses av bestemte hendelser som ordre, oppfyllelse, refusjon og bytte, og at innholdet kan tilpasses.
2. [WooCommerce: Order Statuses](https://woocommerce.com/document/managing-orders/order-statuses/) dokumenterer at en ordre har en status som viser hvor den er i behandlingen, og at bestemte statusendringer kan utløse e-post til kunden eller butikken.
3. [Microsoft Learn: Work with triggers and actions](https://learn.microsoft.com/en-us/power-automate/work-with-triggers-actions) forklarer det generelle mønsteret der en definert hendelse starter en flyt og en handling utføres etterpå, for eksempel å sende et varsel.

Shopify, WooCommerce og Microsoft Power Automate ble samtidig kontrollert som tre relevante produktmønstre. De dokumenterer muligheten for hendelsesstyrte varsler, men brukes ikke som bevis for at Kling leverer identiske standardfunksjoner. Ingen statistikk, kundecase, leveringsgaranti eller påstand om færre henvendelser er brukt.

## Valgt innsikt og budskap

- Problem: Kunden må spørre manuelt når en relevant status ikke blir kommunisert.
- Løsningseksempel: Et avklart statussteg, her «Klar for henting», utløser én konkret kundebeskjed. Avvik går til manuell vurdering før varsling.
- Forretningsverdi: Både kunde og bedrift får en tydelig beskjed knyttet til det faktiske steget, uten at innlegget lover sanntid, feilfri levering eller full automatisering.
- Hovedbudskap: «Må kunden spørre om statusen igjen?»
- Støttelinje: «La ett avklart steg utløse én tydelig beskjed.»
- Verdilinje: «Fra manuell statusjakt til tydelig beskjed.»
- CTA: `klingsystems.no/automatisering`.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer gjentatte e-poster, manuell oppfølging og systemer som ikke snakker sammen som typisk friksjon. Kling tilbyr automatisering, integrasjoner og skreddersydde systemer, med arbeidsflyten som utgangspunkt.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Graph API-oppsett ble brukt før produksjon mot `https://graph.instagram.com`.
- Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`.
- Dagens publiserte innlegg ble bekreftet som registeroppslagspakken for 29.09.2026, media-ID `18166326919487637`.
- De 14 siste publiserte mediene ble hentet med media-ID, caption, medietype, medie-URL, permalink og tidsstempel. Kontrollsettet dekket 11.09.2026 til 29.09.2026.
- Kontrollsettet omfattet: registeroppslag, dokumentuttrekk, duplikatvern, kundereisetest, kildesporing, endringshistorikk, kundesak, backup-test, integrasjonsfeil, tastaturskjema, returflyt, vedlikeholdsplan, responsive bilder og kvitteringskobling.
- Alle 34 eksisterende lokale PNG-pakker i `assets/ads/daily` og tilhørende researchlogger ble kontrollert før den nye PNG-filen ble laget.
- Konsepter om skjemakvittering, salgsoppfølging, kundeoppstart, bookingendring, systemoverganger og synlig kundesak ble avvist som nærliggende.
- Det valgte konseptet handler ikke om å opprette eller tildele en sak. Det viser at ett allerede avklart driftssteg utløser en konkret beskjed til kunden, med avvik holdt tilbake for vurdering.
- Komposisjoner med vertikal registerkanal, PDF-til-felt, nettlesertest, kampanjekilde, statustabell, sirkulær statusbane og horisontal trestegsflyt ble avvist.
- Den nye illustrasjonen bruker tre tydelige soner: gjentatte kundespørsmål, en kompakt ordrestatus og én utgående beskjed. Ingen maskot brukes, så ingen biepose gjentas.

## Bildeproduksjon og stilkontroll

- Sluttbildet rendres deterministisk i HTML og CSS med lokal Chrome, lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-ressursen.
- `imagegen`-instruksen peker på kodebasert rendering for enkle diagrammer som krever presis tekst og korrekt eksisterende logo. Ingen bildemodell får gjenskape logo, tekst eller maskot.
- Kling-paletten brukes med Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Den rene, lyse og forretningsorienterte komposisjonen viser problem, utløsende status, beskjed og avviksregel uten fotografi, neonpreg eller generisk AI-estetikk.

## QA-resultat

- Sluttbildet er visuelt kontrollert i original størrelse mot innleggene fra 29., 28., 25. og 24. september.
- Hovedbudskap, komposisjon, systemillustrasjon og statusbeskjed er nye i kontrollsettet. Bildet er ikke en størrelsesvariant eller kopi av et tidligere innlegg.
- Den ene tillatte korrigeringsrunden flyttet innholdet 18 piksler ned slik at den sentrerte 1:1-beskjæringen beholder hele logoen.
- Sluttformatet er nøyaktig 1080 × 1350 piksler, 8-bit RGB PNG uten alfa.
- Viktig tekst, korrekt logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, spørsmålene, statusen «Klar for henting», kundebeskjeden, avviksregelen og verdilinjen beholdes med mening intakt.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lav oppløsning, meningsløs maskotbruk, mørk eller fotografisk stil, neonpreg eller duplikatkomposisjon ble funnet etter korrigeringen.
- Captionen er på naturlig norsk, har én relevant CTA, tre emneknagger og ingen udokumenterte tall, garantier, kundecaser eller overdrevne løfter.
- SHA-256: `8b397535aa990aceeb102452aed45147529d3ce9f9f5672edca5e5bb78001f27`.
- Filstørrelse: 122 720 byte.

## Leveringskontroller

- Pakkevalideringen fant nøyaktig én komplett pakke for 2026-09-30 med 470 tegn i captionen og medie-ID `daily-2026-09-30-statusbeskjed`.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før commit.
- Commit, push og offentlig bytekontroll fylles inn etter utrulling.
