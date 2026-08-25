# Research- og QA-logg: 26. august 2026

Måldatoen ble låst ved kjørestart 25. august 2026 i Europe/Oslo: neste kalenderdag er 26. august 2026. Denne datoen ble beholdt gjennom hele kjøringen. Dette er kun en produksjonspakke. Ingenting ble publisert på Instagram.

## Dagens kundeverdi

Etter innsending av et kontaktskjema bør kunden få en tydelig bekreftelse på hva som skjedde, hva som skjer videre og hvilken oppfølging som kan forventes. Det reduserer unødvendig usikkerhet og gjør kundereisen enklere å forstå. Innlegget lover ikke flere henvendelser, høyere konvertering eller en bestemt svartid.

## Valgt konsept

Hovedbudskapet er «Sendt. Mottatt. Hva nå?». Bildet viser én stor digital kvittering med tre informasjonsnivåer:

1. Problem: En Send-knapp forteller ikke alene om henvendelsen faktisk ble mottatt.
2. Løsning: Vis tydelig status, neste steg og en ærlig ramme for oppfølging.
3. Forretningsverdi: «Tydelig bekreftelse. Mindre usikkerhet.»

Sammenhengen er forståelig uten caption. Konseptet støtter Klings dokumenterte nettsidetjeneste og prinsippene om tydelige kundereiser, tilgjengelighet og praktisk verdi.

## Avgrenset research

Tre troverdige og relevante kilder ble kontrollert 25.08.2026:

- [W3C WAI: Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/), oppdatert 27.03.2026. Veiledningen anbefaler at brukeren varsles om vellykket fullføring, feil og hvordan feil kan rettes.
- [W3C WAI: User Notification](https://www.w3.org/WAI/tutorials/forms/notifications/), kontrollert 25.08.2026. Kilden beskriver at resultatet av en skjemainnsending må kommuniseres tydelig, både ved suksess og feil.
- [Designsystemet: Brukerutløste feilmeldinger](https://designsystemet.no/no/patterns/errors), oppdatert 28.06.2024 og kontrollert 25.08.2026. Designsystemet anbefaler lett forståelige, synlige feilmeldinger som forklarer hva brukeren må gjøre for å komme videre.

Kildene brukes som design- og tilgjengelighetsveiledning. Innlegget påstår ikke juridisk etterlevelse eller full WCAG-samsvar.

## Konkurrenteksempler

Tre relevante eksempler ble kontrollert, innenfor grensen på tre:

- [Uniweb: Legg til et kontaktskjema](https://support.uniweb.no/hc/nb/articles/34662856075281-Hvordan-legger-jeg-til-et-kontaktskjema-p%C3%A5-siden-min-i-Nettsidebygger), publisert i 2026. Nettsidebyggeren viser en redigerbar suksessmelding etter innsending.
- [Trium Consulting](https://triumconsulting.no/), kontrollert 25.08.2026. Tjenestesiden viser automatisk bekreftelse etter booking og samling av henvendelser i en lead-oversikt.
- [Webador: Legg til et skjema](https://help.webador.com/hc/no/articles/29426716274321-Legg-til-et-skjema), kontrollert 25.08.2026. Verktøyet lar brukeren tilpasse bekreftelsesmeldingen etter innsending.

Innholdsgapet er å gå ett steg lenger enn en generell «takk»-melding: Bekreft mottak, forklar neste steg og sett en ærlig forventning til oppfølging. Ingen konkurrenttekst, resultatpåstand eller layout er kopiert.

## Kontroll av de siste Instagram-innleggene

Den eksisterende, skrivebeskyttede Instagram Graph API-oppsettet ble brukt 25.08.2026. Endepunktet ble forespurt med grense 14 og feltene media-ID, caption, medietype, medie-URL, permalink, tidsstempel og videominiatyr. Kontoen `@klingsystems` hadde ni medier totalt, så kontrollen dekket alle tilgjengelige innlegg:

- 25.08.2026, media-ID `18122287303846600`: kremfarget 4:5-innlegg med bredt tjenestebudskap, tre tjenestekort, resultatlinje og liten arbeidsflytbie.
- 24.08.2026, media-ID `18621631951027074`: mørk 4:5-komposisjon om gjentakende rapportering, med lys illustrasjonsflate og gult verdifelt.
- 23.08.2026, media-ID `17920119327426410`: kremfarget 4:5-innlegg om automatisert rutine med menneskelig kontrollpunkt for avvik.
- 22.08.2026, media-ID `18132336493653240`: ferskenfarget 4:5-innlegg om friksjon mellom systemer, med to systemmoduler og manuelt mellomledd.
- 21.08.2026, media-ID `18101872786969265`: kremfarget 4:5-sjekk av samtykkebanner, med to like valg og tre kontroller.
- 21.08.2026, media-ID `18135903139614851`: kvadratisk kremflate med sentrert logo, dokument, tannhjul, hake, tre fliser og flygende bie.
- 20.08.2026, media-ID `17903404722517974`: lys blå, stående arbeidsflyt der én henvendelse forgrenes til fire oppgaver.
- 19.08.2026, media-ID `18205765591363632`: mørk Reel med generelt tjenestebudskap og flytende oppgavekort.
- 18.08.2026, media-ID `18161265598489008`: kvadratisk introduksjon med tre tjenestekort, stor sentrert logo og stor bie.

Lokale aktive pakker og arkiver i `assets/ads/daily` ble også kontrollert. Konsepter om generelle tjenester, rapportbygging, avvikskontroll, systemoverganger, samtykke, henvendelsesforgrening og tastaturnavigasjon ble avvist. Komposisjoner med tre tjenestekort, mørk fullflate, en-til-mange-flyt, to systemmoduler, sjekkliste, stor sentrert logo og bie som hovedmotiv ble også avvist.

Det nye innlegget bruker i stedet en stor digital kvittering på en lyseblå systemflate. Hovedbudskap, problemstilling, bilde, biepose og kvitteringskomposisjon er nye i feeden.

## Bildeproduksjon

Den innebygde bildemodellen ble brukt til én tekstfri illustrasjonskomponent med prompt om en digital mottakskvittering i Kling-paletten, uten tekst, logo, maskot eller bakgrunn. Førsteutkastet fikk svart bakgrunn og et kalenderlignende symbol. Den ene tillatte korrigeringsrunden fjernet kalendermotivet, men ga fortsatt en innbakt sjakkmønstret bakgrunn uten alfakanal. Modellkomponenten ble derfor avvist og brukes ikke i sluttfilen.

Sluttfilen ble rendret deterministisk med eksakt norsk tekst, lokal Geist-font, den faktiske `kling-logo-navy-transparent.png`-ressursen og den eksisterende `kling-bee-message.png`-maskoten. Dette sikrer korrekt logo, presis typografi og en ren kremfarget bakgrunn.

## Format- og kvalitetskontroll

1. Sluttfilen er visuelt kontrollert i original størrelse og er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
2. Viktig tekst, logo og grafikk ligger innenfor x=90–990 og y=120–1230. Ingen tekst eller meningsbærende grafikk er avkuttet.
3. En sentrert 1080 × 1080-beskjæring er generert og visuelt kontrollert. Logo, hovedbudskap, mottakskvittering og verdilinje er synlige og beholder meningen.
4. Bildet bruker Kling Navy `#0F2940`, Kling Sky `#8CC0EB`, Kling Mist `#BFDDF0`, Kling Cream `#FFF9D2` og Bee Gold `#FFC640`, samt korrekt logoressurs.
5. Den eksisterende meldingsbien støtter historien som avsender av bekreftelsen, dekker klart mindre enn 25 prosent av flaten og bærer ikke budskapet alene.
6. Sluttbildet er sammenlignet visuelt med minst innleggene fra 22., 23., 24. og 25. august. Ingen duplikatkomposisjon, overskrift, systemillustrasjon eller biepose ble funnet.
7. Ingen hvite bakgrunnsrester, lavoppløste elementer, vannmerker, falsk typografi, avkuttet tekst eller feil logo ble funnet.
8. Captionen inneholder ingen statistikk, kundecaser, garantier, overdrevne løfter eller påstand om juridisk etterlevelse.
9. Sluttfilens SHA-256 er `3df879b0d166ff8e31ab7cb96f7902d13f6bc7e9bab9993b2582d97c645fe612`.
