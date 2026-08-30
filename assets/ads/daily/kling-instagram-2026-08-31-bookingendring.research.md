# Research- og QA-logg: 31. august 2026

Måldatoen ble låst ved kjørestart 30. august 2026 i Europe/Oslo: neste kalenderdag er 31. august 2026. Den samme datoen ble beholdt gjennom hele kjøringen. Dette er kun en produksjonspakke. Ingenting ble publisert på Instagram.

## Dagens kundeverdi

Innlegget viser et konkret koordineringsproblem: Når en avtale flyttes, kan kunden og virksomhetens kalender sitte med ulikt tidspunkt hvis oppdateringen må håndteres flere steder. En samlet bookingflyt kan knytte endringen til en kundebekreftelse og en oppdatert kalender. Innlegget lover ikke at Kling tilbyr et bestemt bookingprodukt, at alle systemer kan oppdateres automatisk, eller en bestemt tidsbesparelse.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer manuell registrering, gjentatte e-poster, spredt informasjon og systemer som ikke snakker sammen som typiske problemer. Kling kan bygge nettsider, automatiseringer, integrasjoner og skreddersydde systemer, men riktig bookingregel og hvilke mottakere som skal varsles må avklares med virksomheten.

## Valgt konsept

Hovedbudskapet er «Avtalen er flyttet. Hvem fikk beskjed?». Bildet viser ett gammelt tidspunkt, ett nytt tidspunkt og to tydelige utfall: kunden har fått ny tid bekreftet, og kalenderen har registrert den nye tiden.

1. Problem: En avtale flyttes, men endringen kan måtte koordineres flere steder.
2. Løsning: Knytt endringen til både kundebekreftelsen og kalenderoppdateringen i én definert bookingflyt.
3. Forretningsverdi: «Én endring. Samme tidspunkt hos alle.»

Sammenhengen er forståelig uten caption. Datoene og klokkeslettene er illustrative grensesnittdata, ikke en faktisk booking eller en påstand om et eksisterende Kling-produkt.

## Avgrenset research

To aktuelle og troverdige primærkilder ble kontrollert 30.08.2026:

- [Google Calendar Help: Edit your appointment schedule](https://support.google.com/calendar/answer/10730791?hl=en-GB) beskriver at bookede avtaler vises i kalenderen, at tilgjengelighet kan oppdateres automatisk, og at kunden, arrangøren og relevante medverter kan få e-post ved booking eller avbestilling. Kilden støtter at en bookingendring bør håndteres som en sammenhengende kalender- og varslingsflyt.
- [Microsoft Learn: How to let customers manage their booking](https://learn.microsoft.com/en-us/microsoft-365/bookings/customers-manage-booking?view=o365-worldwide) beskriver en kundestyrt flyt for å flytte eller avbestille en booking, der kalenderen og e-postvarsler oppdateres for relevante parter. Kilden støtter det generelle mønsteret, uten at Microsoft Bookings er en forutsetning for Klings løsning.

Kildene brukes bare til å underbygge at bookingendringer kan kobles til kalenderstatus og varsling. Innlegget gir ingen produktgaranti og påstår ikke at alle virksomheter trenger samme løsning.

## Konkurrenteksempler

To relevante produkteksempler ble kontrollert, innenfor grensen på tre:

- Google Calendar Appointment Schedules bruker bookingkalender, tilgjengelighet og e-postvarsler som én sammenhengende flyt.
- Microsoft Bookings gir kunder en administrasjonslenke for å flytte eller avbestille og kan varsle relevante parter om endringen.

Klings innlegg kopierer ingen produkttekst, skjermbilder, layout, produktnavn eller resultatpåstander. Innholdsgapet er et verktøyuavhengig kontrollspørsmål for små og mellomstore bedrifter: Når tidspunktet endres, får både kunden og den operative kalenderen riktig informasjon?

## Kontroll av de siste Instagram-innleggene

Den eksisterende, skrivebeskyttede Instagram Graph API-oppsettet ble brukt 30.08.2026. Kontoen ble bekreftet gjennom den eksisterende BUSINESS-konfigurasjonen for `@klingsystems`. Endepunktet ble forespurt med grense 14 og feltene media-ID, caption, medietype, medie-URL, permalink, tidsstempel og videominiatyr. Kontrollsettet var:

- 30.08.2026, media-ID `18098981876629093`: motstridende kundedata, kontrollert kundepost og analysebie.
- 29.08.2026, media-ID `18036676454822225`: stående mobilflate, kontaktknapp og målskivebie.
- 28.08.2026, media-ID `17864291418658775`: fakturakø med ansvar, status og databasebie.
- 27.08.2026, media-ID `18129287761731417`: tilgangsavslutning med oppgaveliste og søkebie.
- 26.08.2026, media-ID `18073358681412309`: skjemakvittering med tre informasjonsnivåer og meldingsbie.
- 25.08.2026, media-ID `18122287303846600`: bredt tjenestebudskap med tre tjenestekort og arbeidsflytbie.
- 24.08.2026, media-ID `18621631951027074`: mørk rapportkomposisjon med tre datakilder.
- 23.08.2026, media-ID `17920119327426410`: fast rutine med kontrollert sidespor og sjekklistebie.
- 22.08.2026, media-ID `18132336493653240`: to systemmoduler med manuelt mellomledd.
- 21.08.2026, media-ID `18101872786969265`: samtykkekontroll med tre sjekkpunkter.
- 21.08.2026, media-ID `18135903139614851`: generell automatiseringsgrafikk.
- 20.08.2026, media-ID `17903404722517974`: én henvendelse forgrenet til fire oppgaver.
- 19.08.2026, media-ID `18205765591363632`: mørk Reel med generelt tjenestebudskap og flytende oppgavekort.
- 18.08.2026, media-ID `18161265598489008`: introduksjon med tre tjenestekort, stor logo og stor bie.

Det fantes ingen innlegg for den låste måldatoen 31.08.2026. Alle aktive lokale pakker i `assets/ads/daily` ble også kontrollert. Konsepter om kundedata, mobilflyt, fakturaflyt, tilgangsavslutning, skjemakvittering, brede tjenester, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist. Komposisjoner med tre kildeposter, stående mobil, tabell, trinnvis oppgaveliste, stor kvittering, tre tjenestekort, mørk fullflate, rett arbeidsflyt, to systemmoduler og en-til-mange-forgrening ble avvist.

Det nye innlegget bruker i stedet et tydelig før- og etter-tidspunkt som er koblet til to bekreftede utfall i en samlet bookingflate. `kling-bee-calendar.png` var ikke brukt i de kontrollerte feedinnleggene eller aktive lokale pakkene. Hovedbudskap, bookingillustrasjon, datoendring og biepose er nye i feeden. Selv om eldre innhold nevner booking som ett mulig bruksområde, har ingen tidligere pakke bookingendring som hovedproblem eller kalenderendring som hovedillustrasjon.

## Bildeproduksjon

Sluttbildet ble rendret deterministisk som en enkel, kodebasert systemillustrasjon. Den faktiske `kling-logo-navy-transparent.png`-ressursen, lokal Geist-font og den eksisterende `kling-bee-calendar.png`-maskoten ble brukt direkte. Ingen bildemodell fikk gjenskape logo, tekst eller maskot.

Første fullstendige render besto kontrollen i original størrelse og sentrert 1:1-beskjæring. Den ene tillatte korrigeringsrunden ble derfor ikke brukt.

## Format- og kvalitetskontroll

1. Sluttfilen er visuelt kontrollert i original størrelse og er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
2. Viktig tekst, logo og meningsbærende grafikk ligger innenfor x=90-990 og y=120-1230. Ingen tekst eller grafikk er avkuttet.
3. En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert. Korrekt logo, hovedbudskap, begge tidspunktene, begge bekreftelsene, kalenderbien og verdilinjen er synlige og beholder meningen. Nettadressen ligger delvis utenfor kvadratets nedre kant, men er ikke nødvendig for å forstå budskapet.
4. Bildet bruker Kling Navy `#0F2940`, Kling Sky `#8CC0EB`, Kling Mist `#BFDDF0`, Kling Cream `#FFF9D2` og Bee Gold `#FFC640`, samt korrekt logoressurs.
5. Kalenderbien støtter bookinghistorien, dekker klart mindre enn 25 prosent av flaten og er ikke hovedmotivet. Maskotfilen har ekte transparent bakgrunn uten hvite rester.
6. Sluttbildet er sammenlignet visuelt i original størrelse med innleggene fra 27., 28., 29. og 30. august. Ingen duplikatkomposisjon, overskrift, systemillustrasjon eller biepose ble funnet.
7. Ingen lavoppløste elementer, vannmerker, falsk typografi, avkuttet tekst, feil logo, mørk, fotografisk, neonpreget eller generisk AI-stil ble funnet.
8. Captionen er på naturlig norsk, inneholder én relevant CTA, tre emneknagger og ingen statistikk, kundecaser, garantier eller overdrevne resultatløfter.
9. Sluttfilens SHA-256 er `ff85480dd77b1961c4562f2322b1764cf9ae108de0dbc403f5258679687430b2`.
