# Research- og QA-logg: fordeling av nye henvendelser

## Låst produksjonsramme

- Måldatoen ble låst én gang ved turn-start til `2026-10-13`, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Datoen er brukt konsekvent i bilde, caption, researchlogg, medie-ID og offentlig URL.
- Oppgaven er begrenset til produksjon, kontroll, commit, push og offentlig medieverifisering. Instagram-publisering er ikke autorisert og skal ikke utføres.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet og Kling-pakkeflyten ble lest før produksjon.
- Det er laget ett konsept og én sluttpakke. Én korrigeringsrunde ble brukt.

## Valgt innsikt og budskap

Hovedbudskapet er «Hvem får neste henvendelse?». Bildet viser en eksempelmerket prisforespørsel i en felles innboks. En definert regel vurderer tilgjengelighet og avtalt kapasitet før henvendelsen får en tydelig eier. Hvis ingen mottaker er ledig, skal saken forbli synlig i kø. Verdiløftet er «Fra felles innboks til tydelig fordeling.»

Sammenhengen i bildet er:

1. Problem: En felles innboks samler henvendelser, men avgjør ikke alene hvem som skal ta neste sak.
2. Løsningseksempel: En avtalt fordelingsregel kan velge blant tilgjengelige mottakere som har ledig kapasitet.
3. Forretningsverdi: Virksomheten får synlig eierskap til nye henvendelser og en eksplisitt kø når ingen kan tildeles.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer manuell oppfølging, spredt informasjon og systemer som ikke snakker sammen som vanlig friksjon. Kling tilbyr automatisering, integrasjoner og skreddersydde systemer. Innlegget lover ikke en bestemt responstid, jevnere arbeidsbelastning, automatisk kompetansematching eller støtte for alle kanaler og systemer.

Navnene, prisforespørselen, tidspunktet og kapasitetstallene er illustrative eksempeldata. De beskriver ikke en eksisterende Kling-standardfunksjon.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter og avgrenset til tre aktuelle, offisielle produktkilder:

1. [Zendesk: About omnichannel routing](https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing) dokumenterer et produktmønster der nye saker fra flere kanaler kan rutes etter blant annet tilgjengelighet og kapasitet. Hvis ingen kvalifisert mottaker er tilgjengelig, legges saken i en kø.
2. [Intercom: Workload management explained](https://www.intercom.com/help/en/articles/6560715-workload-management-explained) dokumenterer balansert fordeling til aktive medarbeidere med ledig kapasitet, og beskriver at mottakere på kapasitetsgrensen ikke får nye samtaler gjennom denne fordelingsmåten.
3. [HubSpot: Assign and rotate record owners using workflows](https://knowledge.hubspot.com/workflows/assign-and-rotate-record-owners-using-workflows) dokumenterer arbeidsflyter som kan fordele poster mellom valgte eiere, med blant annet jevn rotasjon og egne fordelingsvalg for enkelte posttyper.

Zendesk, Intercom og HubSpot ble kontrollert som tre relevante produktmønstre. Innlegget kopierer ikke produkttekst, skjermbilder, layout eller lisensavhengige funksjonsløfter. Kildene støtter bare den generelle arbeidsmåten «ny henvendelse → avtalt fordelingsregel → tydelig eier eller synlig kø».

## Graph- og duplikatkontroll

Den eksisterende, skrivebeskyttede Graph API-oppsettingen ble brukt før produksjon mot konfigurert `https://graph.instagram.com`. Kontoen ble bekreftet som BUSINESS `@klingsystems`. De siste 14 publiserte innleggene ble hentet:

| Dato | Media-ID | Tema |
| --- | --- | --- |
| 2026-10-11 | `18149223853478111` | periodisk tilgangsgjennomgang |
| 2026-10-10 | `17938426908372948` | kontrollert dataimport |
| 2026-10-09 | `18117838109078105` | lenkeforhåndsvisning |
| 2026-10-08 | `18016812110744664` | KID-matching |
| 2026-10-07 | `18484779445109066` | tekstalternativer |
| 2026-10-06 | `18153424792523873` | e-postdomene |
| 2026-10-05 | `17879033988553987` | XML-nettstedskart |
| 2026-10-04 | `17909732439489061` | serverkontroll av skjema |
| 2026-10-03 | `18078280679392755` | videresending |
| 2026-10-02 | `17949925962320069` | lagersynk |
| 2026-10-01 | `17870934222637507` | utstyrsskann |
| 2026-09-30 | `17918948127242141` | statusbeskjed |
| 2026-09-29 | `18166326919487637` | registeroppslag |
| 2026-09-28 | `17918578896244122` | dokumentdata |

Graph viste ingen publisert post datert 12. oktober på kontrolltidspunktet. Det var derfor ingen dagsduplikat som stoppet produksjonen for måldato 13. oktober. Ingen Graph-skriveoperasjon ble utført.

Alle 47 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn, captioner, researchlogger og et visuelt kontaktark før den nye filen ble lagt til. Konsepter om kundesak med eier og status, salgsoppfølging, møteoppgaver, statusbeskjed, avtalepåminnelse og generell integrasjonsflyt ble avvist som nærliggende.

Det eldre kundesakinnlegget fra 22. september viser én eksisterende e-post og en sak med ansvarlig, status og frist. Det nye innlegget gjelder selve fordelingen av en ny henvendelse før den har fått eier. Salgsoppfølgingsinnlegget fra 1. september starter med et allerede sendt tilbud, mens det nye innlegget starter i felles innboks.

Komposisjoner med lineære trestegsflyter, to kort med en sentral markør, brede inspeksjonstabeller, tilgangsbånd og maskot som saksbehandler ble avvist. Sluttbildet bruker i stedet en mørk innboksmodul, én eksplisitt rute til valgt mottaker og tre separate kapasitetskort. Ingen bie brukes fordi systemillustrasjonen forklarer fordelingen alene, og nærliggende innlegg allerede har brukt maskoten i kundeoppfølging og saksbehandling.

## Produksjon og stilkontroll

- Sluttbildet ble rendret deterministisk i HTML og CSS med prosjektets Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen.
- Ingen bildegenerator fikk gjenskape tekst, logo eller maskot.
- Kling Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Bee Gold `#FFC640` er brukt.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, gradient, vannmerke eller generisk AI-estetikk.
- Korrekt Kling-logo er brukt som separat prosjektressurs. Ingen ny eller gjenskapt logo er brukt.
- Førsterenderen hadde forbindelseslinjer som krysset teksten i regelmerket. Den ene tillatte korrigeringsrunden erstattet disse med én ren linje direkte til valgt mottaker og flyttet mottakerkortene slik at kapasitet og rute samsvarer. Konsept, tekst og hovedbudskap ble beholdt.

## Visuell og teknisk QA

- Sluttformat: 1080 × 1350 piksler, RGB PNG uten alfakanal.
- Viktig tekst, logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, regel, innboks, valgt mottaker, køforklaring, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet, tildekket eller gjengitt med feil tegn. Logoen er korrekt, og bildet har ingen hvite bakgrunnsrester, alfa eller lavoppløste innslag.
- Sluttbildet ble kontrollert i original størrelse mot de godkjente innleggene fra 10., 11. og 12. oktober, samt et kontaktark med alle 47 tidligere lokale bilder.
- Innboksmodulen, kapasitetskortene og den direkte tildelingsruten er en ny komposisjon. Hovedbudskapet og illustrasjonen er ikke kopiert fra de kontrollerte innleggene.
- Ingen tidligere biepose eller generert maskot er brukt.
- Én korrigeringsrunde ble brukt. Ingen flere bildeendringer ble gjort etter bestått original- og 1:1-kontroll.
- Lokal SHA-256: `2d62163b79831e4346b0c24a612e6bc29bc6398b3c334d86bfa56a83d068f5ea`.
- Filstørrelse: 120 110 byte.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-10-13-henvendelsesfordeling`.
- Offentlig medie-ID: `daily-2026-10-13-henvendelsesfordeling`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-13-henvendelsesfordeling`.
- `findDailyPackage` fant nøyaktig én komplett pakke for 13. oktober med 1080 × 1350 PNG, caption og researchlogg. Captionen er 553 tegn.
- `npm run check`: bestått.
- `npm run build`: bestått.
- `npm run test:instagram-publish`: 6 av 6 tester bestått.
- `git diff --check`: bestått før commit.
- Commit, push og offentlig bytekontroll dokumenteres i sluttverifiseringen etter gjennomføring.
- Instagram-publisering er ikke utført og skal ikke utføres i denne produksjonsjobben.

## Sluttverifisering

- Leveransecommit `8067475` ble pushet direkte til `main`. Bare de tre nye pakkefilene ble staged og committet. Eksisterende, uvedkommende endringer og ukjente mapper i arbeidskopien ble bevart urørt.
- Vercel-deployment `dpl_8u24iusXLPtnPDpAC3NWqpvJrEhx` for leveransecommiten nådde status `READY` og fikk produksjonsaliasene `www.klingsystems.no` og `klingsystems.no`.
- Den første offentlige kontrollen svarte HTTP 404 mens deployen fortsatt var under oppstart. Samme URL og samme medie-ID ble kontrollert på nytt etter `READY` og svarte HTTP 200 uten innlogging som `image/png`.
- Den offentlige filen er 120 110 byte, 1080 × 1350 piksler og RGB uten alfa.
- Offentlig SHA-256 er `2d62163b79831e4346b0c24a612e6bc29bc6398b3c334d86bfa56a83d068f5ea` og samsvarer byte for byte med lokalfilen.
- Avsluttende `TARGET_DATE=2026-10-13 PUBLISH_MODE=dry-run` besto med status `dry-run` for korrekt pakke, offentlig bilde, BUSINESS-kontoen `@klingsystems` og duplikatvernet. Resultatet hadde `mediaId: null` og `permalink: null`.
- Instagram-publisering er ikke utført. Ingen container ble opprettet, og `media_publish` ble ikke kalt.
