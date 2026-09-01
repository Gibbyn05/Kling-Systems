# Research- og QA-logg: 1. september 2026

Måldatoen ble låst ved kjørestart 31. august 2026 i Europe/Oslo: neste kalenderdag er 1. september 2026. Den samme datoen ble beholdt etter at kalenderdatoen rullet over under kjøringen. Dette er kun en produksjonspakke. Ingenting ble publisert på Instagram.

## Dagens kundeverdi

Innlegget viser et konkret salgsproblem: Et tilbud kan være sendt uten at neste oppfølging har en dato eller en ansvarlig. Når neste aktivitet lagres sammen med saken, blir det enklere å se hva som skal skje videre. Innlegget lover ikke økt salg, en bestemt svarprosent, automatisk kundekontakt eller at Kling tilbyr et bestemt CRM-produkt.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer mangelfull leadoppfølging, gjentatte e-poster og spredt informasjon som typiske problemer. Kling kan kartlegge salgsflyten og bygge eller koble sammen en hensiktsmessig løsning, men virksomheten må selv definere hvem som skal følge opp, når det skal skje og hvordan kunden skal kontaktes.

## Valgt konsept

Hovedbudskapet er «Tilbudet er sendt. Er oppfølgingen avtalt?». Bildet viser ett sendt tilbud som kobles til en tydelig oppfølgingsaktivitet med dato, klokkeslett og ansvarlig.

1. Problem: Tilbudet er sendt, men videre oppfølging er ikke nødvendigvis planlagt.
2. Løsning: Knytt neste aktivitet til en konkret dato og en ansvarlig i samme salgsoversikt.
3. Forretningsverdi: «Én salgsoversikt. Tydelig neste steg.»

Sammenhengen er forståelig uten caption. Tilbudsnummeret, datoen, klokkeslettet og navnet er illustrative grensesnittdata, ikke en faktisk kunde, medarbeider eller salgsaktivitet.

## Avgrenset research

To aktuelle og troverdige produktkilder ble kontrollert ved kjøringen:

- [HubSpot Knowledge Base: Create tasks](https://knowledge.hubspot.com/tasks/create-tasks) var oppdatert 3. april 2026 og beskriver oppgaver knyttet til kontakter, selskaper og avtaler. Dokumentasjonen viser at en oppfølgingsoppgave kan opprettes i forbindelse med en aktivitet og gis en egen forfallsdato.
- [Pipedrive Knowledge Base: Pipeline view, how to prioritize deals](https://support.pipedrive.com/en/article/how-are-deals-ordered-in-the-pipeline-view) var oppdatert 9. april 2026 og beskriver prioritering av saker etter neste aktivitetsdato. Dokumentasjonen skiller mellom forfalte aktiviteter, aktiviteter i dag, saker uten aktivitet og fremtidige aktiviteter.

Kildene brukes bare til å underbygge det generelle arbeidsflytmønsteret: En salgssak kan knyttes til en planlagt oppfølgingsaktivitet med tidspunkt. Innlegget kopierer ingen produkttekst og gir ingen produktgaranti.

## Konkurrenteksempler

To relevante produkteksempler ble kontrollert, innenfor grensen på tre:

- HubSpot lar brukere opprette oppfølgingsoppgaver på CRM-poster og angi en forfallsdato.
- Pipedrive bruker neste aktivitetsdato til å synliggjøre hvilke åpne saker som trenger oppmerksomhet.

Klings innlegg kopierer ingen skjermbilder, layout, produktnavn eller resultatpåstander. Innholdsgapet er et verktøyuavhengig kontrollspørsmål for norske små og mellomstore bedrifter: Har hvert sendt tilbud et synlig neste steg med dato og ansvar?

## Kontroll av de siste Instagram-innleggene

Den eksisterende, skrivebeskyttede Instagram Graph API-oppsettet ble brukt ved kjøringen. Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`. Endepunktet ble forespurt med grense 14 og feltene media-ID, caption, medietype, medie-URL, permalink, tidsstempel og videominiatyr. Kontrollsettet var:

- 31.08.2026, media-ID `18062045681769917`: bookingendring med gammelt og nytt tidspunkt, to bekreftede utfall og kalenderbie.
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

Det fantes ingen innlegg for den låste måldatoen 01.09.2026. Alle aktive lokale pakker i `assets/ads/daily` ble også kontrollert. Konsepter om bookingendring, kundedata, mobilflyt, fakturaflyt, tilgangsavslutning, skjemakvittering, brede tjenester, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist. Komposisjoner med før og etter-tidspunkt, tre kildeposter, stående mobil, tabell, trinnvis oppgaveliste, stor kvittering, tre tjenestekort, mørk fullflate, to systemmoduler og en til mange-forgrening ble avvist.

Det nye innlegget bruker i stedet ett skråstilt tilbudsdokument og en stor sirkulær oppfølgingsskive. Dato, klokkeslett og ansvar vises samlet inne i skiven, mens en buet, stiplet forbindelse viser overgangen fra sendt tilbud til planlagt aktivitet. `kling-bee-presentation.png` var ikke brukt i de aktive lokale pakkene fra 21. til 31. august. Hovedbudskap, tilbudsillustrasjon, oppfølgingsskive og biepose er nye i kontrollsettet.

## Bildeproduksjon

Sluttbildet ble rendret deterministisk som en enkel HTML- og CSS-basert systemillustrasjon. Dette følger beslutningsregelen i `imagegen`-ferdigheten for enkle diagrammer som krever presis typografi og bør bygges direkte. Den faktiske `kling-logo-navy-transparent.png`-ressursen, lokal Geist-font og den eksisterende `kling-bee-presentation.png`-maskoten ble brukt direkte. Ingen bildemodell fikk gjenskape logo, tekst eller maskot.

Den ene tillatte korrigeringsrunden flyttet nettadressen 12 piksler opp, slik at hele teksten ligger innenfor den påkrevde bunnmarginen. Ingen andre endringer ble gjort etter korrigeringsrunden.

## Format- og kvalitetskontroll

1. Sluttfilen er visuelt kontrollert i original størrelse og er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
2. Viktig tekst, logo og meningsbærende grafikk ligger innenfor x=90-990 og y=120-1230. Ingen tekst eller viktig grafikk er avkuttet.
3. En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert. Korrekt logo, hovedbudskap, tilbudet, oppfølgingsaktiviteten, dato, ansvarlig, presentasjonsbien og verdilinjen er synlige og beholder meningen. Nettadressen ligger delvis utenfor kvadratets nedre kant, men er ikke nødvendig for å forstå budskapet.
4. Bildet bruker Kling Navy `#0F2940`, Kling Sky `#8CC0EB`, Kling Mist `#BFDDF0`, Kling Cream `#FFF9D2` og Bee Gold `#FFC640`, samt korrekt logoressurs.
5. Presentasjonsbien peker mot oppfølgingsinformasjonen, dekker klart mindre enn 25 prosent av flaten og er ikke hovedmotivet. Maskotfilen har ekte transparent bakgrunn uten hvite rester.
6. Sluttbildet er sammenlignet visuelt i original størrelse med innleggene fra 28., 29., 30. og 31. august. Ingen duplikatkomposisjon, overskrift, systemillustrasjon eller biepose ble funnet.
7. Ingen lavoppløste elementer, vannmerker, falsk typografi, avkuttet tekst, feil logo, mørk, fotografisk, neonpreget eller generisk AI-stil ble funnet.
8. Captionen er på naturlig norsk, inneholder én relevant CTA, tre emneknagger og ingen statistikk, kundecaser, garantier eller overdrevne resultatløfter.
9. Sluttfilens SHA-256 er `f7b9ba5cc2062cb2f72aa7591255b4b3f27f078920c1b32553916971eff096dd`.
