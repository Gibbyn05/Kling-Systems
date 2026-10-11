# Research- og QA-logg: påminnelse før avtale

## Låst produksjonsramme

- Måldatoen ble låst én gang ved turn-start til `2026-10-12`, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Datoen er brukt konsekvent i bilde, caption, researchlogg, medie-ID og offentlig URL.
- Oppgaven er begrenset til produksjon, kontroll, commit, push og offentlig medieverifisering. Instagram-publisering er ikke autorisert og skal ikke utføres.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-pakkeflyten og `imagegen`-instruksen ble lest før produksjon.
- Det er laget ett konsept og én sluttpakke. Førsterenderen ble godkjent, så ingen korrigeringsrunde ble brukt.

## Valgt innsikt og budskap

Hovedbudskapet er «Kommer påminnelsen før avtalen?». Bildet viser en eksempelmerket kundesamtale som er booket til et konkret tidspunkt. En definert regel sender en påminnelse 24 timer før, med tid og handlingene «Bekreft» og «Endre tid». Verdiløftet er «Fra booket tid til tydelig påminnelse.»

Sammenhengen i bildet er:

1. Problem: En booket avtale kan fortsatt kreve manuell oppfølging før oppmøte.
2. Løsningseksempel: Bruk avtaletidspunktet til å utløse en definert påminnelse til riktig mottaker på avtalt tidspunkt.
3. Forretningsverdi: Virksomheten får en tydelig og kontrollert kommunikasjonsflyt knyttet til den faktiske avtalen.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer gjentatte e-poster, manuell oppfølging, spredt informasjon og systemer som ikke snakker sammen som vanlig friksjon. Kling tilbyr automatisering, integrasjoner og skreddersydde systemer, men innlegget lover ikke færre uteblivelser, bestemt tidsbesparelse, SMS-støtte eller at alle bookingløsninger kan kobles sammen.

Datoen, klokkeslettet, kundesamtalen, sendetidspunktet og handlingsknappene er illustrative eksempeldata. De beskriver ikke en eksisterende Kling-standardfunksjon.

## Avgrenset research

Researchen ble gjennomført 11. oktober 2026 og avgrenset til tre aktuelle, offisielle produktkilder:

1. [Microsoft Learn: Add email reminders and follow-up](https://learn.microsoft.com/en-us/microsoft-365/bookings/add-email-reminder?view=o365-worldwide) dokumenterer at en e-postpåminnelse i Microsoft Bookings kan knyttes til en møtetype, få et valgt tidsintervall før møtet og inneholde en tilpasset melding og lenke.
2. [Google Calendar Help: Create an appointment schedule](https://support.google.com/calendar/answer/10729749?hl=en-7) dokumenterer at en timebestillingsplan kan konfigureres med bekreftelser og opptil fem e-postpåminnelser, avhengig av abonnement.
3. [Calendly Help Center: Calendly best practices by industry](https://help.calendly.com/hc/en-us/articles/13049972554007-10-things-you-can-do-with-Calendly-1-1s) dokumenterer et produktmønster der Workflows kan sende automatiske e-post- og SMS-påminnelser og dele relevant informasjon før eller etter et møte.

Microsoft Bookings, Google Calendar Appointment Schedules og Calendly Workflows ble kontrollert som tre relevante produktmønstre. Kildene støtter bare den generelle arbeidsmåten «booket tidspunkt → definert regel → påminnelse til avtalt mottaker». Innlegget kopierer ingen produkttekst, skjermbilder, layout eller lisensavhengige funksjonsløfter.

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

Alle 46 eksisterende lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn og researchlogger før den nye filen ble lagt til. Nærliggende konsepter om bookingendring, avtalefrist, statusbeskjed, møteoppgaver, salgsoppfølging og kundesak ble avvist.

Det eldre bookinginnlegget fra 31. august starter med at en allerede booket avtale er flyttet og viser at kunden og kalenderen får samme nye tidspunkt. Det nye innlegget starter med en uendret, fremtidig avtale og viser en tidsstyrt påminnelse før oppmøte. Avtalefrist-innlegget gjelder vurdering av en kontrakt før utløp, mens det nye innlegget gjelder kundekommunikasjon før en booket time.

Komposisjoner med gammelt og nytt tidspunkt, to bekreftede utfall, en bred inspeksjonstabell, tre tilgangsbånd og metadata inn i en forhåndsvisning ble avvist. Sluttbildet bruker i stedet et kalenderkort, et sentralt klokkesignal og én kompakt meldingsflate. Ingen bie brukes fordi kalenderbien allerede er brukt i bookinginnlegget fra 31. august, og systemillustrasjonen bærer budskapet uten maskot.

## Produksjon og stilkontroll

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen.
- `imagegen`-instruksen peker på kodebasert produksjon for en enkel systemillustrasjon som krever presis tekst, korrekt logo og eksisterende merkeelementer. Ingen bildemodell fikk gjenskape logo, typografi eller maskot.
- Kling Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Bee Gold `#FFC640` er brukt.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, gradient, vannmerke eller generisk AI-estetikk.
- Korrekt Kling-logo er brukt som separat prosjektressurs. Ingen ny eller gjenskapt logo er brukt.

## Visuell og teknisk QA

- Sluttformat: 1080 × 1350 piksler, 8-bit RGB PNG uten alfakanal.
- Viktig tekst, logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, kalenderkort, klokkesignal, påminnelsesmelding, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet eller dekket. Logoen er korrekt, og bildet har ingen hvite bakgrunnsrester, alfa eller lavoppløste innslag.
- Sluttbildet ble kontrollert i original størrelse mot de godkjente innleggene fra 9., 10. og 11. oktober, samt bookinginnlegget fra 31. august.
- Kalenderkortet, klokkesignalet og meldingsflaten er en ny komposisjon. Hovedbudskap, illustrasjon og støttetekst er ikke kopiert fra de kontrollerte innleggene.
- Ingen tidligere biepose eller generert maskot er brukt.
- Førsterenderen besto. Ingen korrigeringsrunde ble brukt.
- Lokal SHA-256: `eeeb56bd5fad6bd6dc144bf876dcdef2d786a84aa46b5404487e3828c597ec5d`.
- Filstørrelse: 123 687 byte.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-10-12-avtalepaminnelse`.
- Offentlig medie-ID: `daily-2026-10-12-avtalepaminnelse`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-12-avtalepaminnelse`.
- Prosjektkontroll, build, pakkevalidering, push, offentlig bytekontroll og avsluttende dry-run dokumenteres etter at de er fullført.
- Instagram-publisering er ikke utført. Ingen container skal opprettes, og `media_publish` skal ikke kalles.
