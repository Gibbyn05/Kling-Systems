# Research- og QA-logg: 30. august 2026

Måldatoen ble låst ved kjørestart 29. august 2026 i Europe/Oslo: neste kalenderdag er 30. august 2026. Den samme datoen ble beholdt gjennom hele kjøringen. Dette er kun en produksjonspakke. Ingenting ble publisert på Instagram.

## Dagens kundeverdi

Innlegget viser et konkret datakvalitetsproblem: den samme kunden kan være registrert med ulike opplysninger i nettbutikk, CRM og regneark. Før en opplysning synkroniseres videre, bør kildene sammenlignes og virksomheten bør avklare hvilken post som skal være autoritativ. Innlegget lover ikke automatisk feilretting, juridisk etterlevelse, en bestemt tidsbesparelse eller et bestemt økonomisk resultat.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer spredt informasjon, manuell registrering og systemer som ikke snakker sammen som typiske problemer. Kling kan bygge integrasjoner og skreddersydde systemer, men den riktige kilden og reglene for sammenslåing må avklares med virksomheten.

## Valgt konsept

Hovedbudskapet er «Hvilke kundedata er riktige?». Bildet viser tre kilder med motstridende e-postadresser som sammenlignes før én kontrollert kundepost føres videre.

1. Problem: Den samme kunden har ulike opplysninger i flere kilder.
2. Løsning: Sammenlign avvikene, avklar hvilken post som er autoritativ, og synkroniser deretter.
3. Forretningsverdi: «Én oppdatert kilde videre i flyten.»

Sammenhengen er forståelig uten caption. Navnet, e-postadressene og telefonnummeret er illustrative grensesnittdata for den fiktive virksomheten Fjordbygg, ikke kundedata eller en påstand om et eksisterende Kling-produkt.

## Avgrenset research

To aktuelle og troverdige primærkilder ble kontrollert 29.08.2026:

- [Datatilsynet: Riktighet](https://www.datatilsynet.no/rettigheter-og-plikter/personvernprinsippene/grunnleggende-personvernprinsipper/riktighet/) sier at personopplysninger som behandles skal være korrekte og oppdateres når det er nødvendig. Kilden støtter behovet for å oppdage og rette motstridende kundedata. Innlegget gir ikke juridisk rådgivning eller en påstand om personvernsamsvar.
- [Microsoft Learn: Master data management in Microsoft Purview](https://learn.microsoft.com/en-us/purview/data-governance-master-data-management) beskriver en deduplisert, autoritativ kilde som grunnlag for å kontrollere sentrale data. Kilden støtter den generelle arbeidsflyten fra flere kilder til én kontrollert post, uten å gjøre Microsoft-produktet til en forutsetning.

Kildene brukes til å underbygge behovet for riktige, oppdaterte data og en definert autoritativ kilde. Innlegget påstår ikke at alle virksomheter bør sentralisere alle personopplysninger eller automatisere sammenslåing uten menneskelig kontroll.

## Konkurrenteksempel

Ett relevant produkteksempel ble kontrollert, innenfor grensen på tre:

- [HubSpot: Review and manage duplicate records](https://knowledge.hubspot.com/records/manage-duplicate-records) viser en arbeidsflyt der mulige duplikater sammenlignes, egenskaper vurderes og poster kan slås sammen eller avvises.

Klings innlegg kopierer ingen HubSpot-tekst, skjermbilder, layout, produktnavn eller resultatpåstander. Innholdsgapet er et verktøyuavhengig kontrollspørsmål for en mindre virksomhet: Vet dere hvilken kundepost som er riktig før endringen sendes videre?

## Kontroll av de siste Instagram-innleggene

Den eksisterende, skrivebeskyttede Instagram Graph API-oppsettet ble brukt 29.08.2026. Kontoen ble bekreftet som BUSINESS `@klingsystems`. Endepunktet ble forespurt med grense 14 og feltene media-ID, caption, medietype, medie-URL, permalink, tidsstempel og videominiatyr. Kontoen hadde tretten medier totalt, så kontrollen dekket alle tilgjengelige innlegg:

- 29.08.2026, media-ID `18036676454822225`: stående mobilflate, tydelig kontaktknapp og målskivebie.
- 28.08.2026, media-ID `17864291418658775`: fakturakø med ansvar, status og databasebie.
- 27.08.2026, media-ID `18129287761731417`: tilgangsavslutning startet av siste arbeidsdag, med ansvarsoppgaver og søkebie.
- 26.08.2026, media-ID `18073358681412309`: digital kvittering etter kontaktskjema, med tre informasjonsnivåer og meldingsbie.
- 25.08.2026, media-ID `18122287303846600`: bredt tjenestebudskap med tre tjenestekort og arbeidsflytbie.
- 24.08.2026, media-ID `18621631951027074`: mørk rapportkomposisjon med tre datakilder, samlet rapport og gult verdifelt.
- 23.08.2026, media-ID `17920119327426410`: fast rutine med kontrollert sidespor for avvik og sjekklistebie.
- 22.08.2026, media-ID `18132336493653240`: to systemmoduler, manuelt mellomledd og forbindelse.
- 21.08.2026, media-ID `18101872786969265`: samtykkesjekk med to like valg og tre kontroller.
- 21.08.2026, media-ID `18135903139614851`: generell automatisering med dokument, tannhjul, hake og flygende bie.
- 20.08.2026, media-ID `17903404722517974`: én henvendelse som forgrenes til fire oppgaver.
- 19.08.2026, media-ID `18205765591363632`: mørk Reel med generelt tjenestebudskap og flytende oppgavekort.
- 18.08.2026, media-ID `18161265598489008`: introduksjon med tre tjenestekort, stor sentrert logo og stor bie.

Alle aktive lokale pakker i `assets/ads/daily` ble også kontrollert. Konsepter om mobilflyt, fakturaflyt, tilgangsavslutning, skjemakvittering, brede tjenester, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist. Komposisjoner med stående mobil, tabell, trinnvis oppgaveliste, stor kvittering, tre tjenestekort, mørk fullflate, rett arbeidsflyt, to systemmoduler og en-til-mange-forgrening ble avvist. Tidligere brukte målskive-, database-, søke-, meldings-, arbeidsflyt- og sjekklisteposer ble også avvist.

Det nye innlegget bruker i stedet tre forskjøvede kildeposter med ett synlig avvik, en separat kontrollert kundepost og den tidligere ubrukte `kling-bee-analysis.png` som støttefigur. Hovedbudskap, sammenligningsflate, komposisjon, bilde og biepose er nye i feeden. Dette skiller seg også fra rapportinnlegget 24. august: der ble tre datakilder samlet til en rapport, mens dette innlegget viser motstridende verdier som må vurderes før én kundepost kan brukes videre.

## Bildeproduksjon

Sluttbildet ble rendret deterministisk som en enkel, kodebasert systemillustrasjon. Dette følger beslutningsregelen i `imagegen`-ferdigheten for enkle diagrammer og grensesnittgrafikk som krever presis typografi og bør bygges direkte. Den faktiske `kling-logo-navy-transparent.png`-ressursen, lokal Geist-font og den eksisterende `kling-bee-analysis.png`-maskoten ble brukt direkte. Ingen bildemodell fikk gjenskape logo, tekst eller maskot.

Første fullstendige render besto kontrollen i original størrelse og sentrert 1:1-beskjæring. Den ene tillatte korrigeringsrunden ble derfor ikke brukt.

## Format- og kvalitetskontroll

1. Sluttfilen er visuelt kontrollert i original størrelse og er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
2. Viktig tekst, logo og meningsbærende grafikk ligger innenfor x=90-990 og y=120-1230. Ingen tekst eller grafikk er avkuttet.
3. En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert. Korrekt logo, hovedbudskap, alle tre kildepostene, den kontrollert kundeposten, analysebien og verdilinjen er synlige og beholder meningen. Nettadressen ligger delvis utenfor kvadratets nedre kant, men er ikke nødvendig for å forstå budskapet.
4. Bildet bruker Kling Navy `#0F2940`, Kling Sky `#8CC0EB`, Kling Mist `#BFDDF0`, Kling Cream `#FFF9D2` og Bee Gold `#FFC640`, samt korrekt logoressurs.
5. Analysebien undersøker overgangen mellom kildepostene og den kontrollerte posten, dekker klart mindre enn 25 prosent av flaten og bærer ikke budskapet alene. Maskotfilen har ekte transparent bakgrunn uten hvite rester.
6. Sluttbildet er sammenlignet visuelt i original størrelse med innleggene fra 23., 27., 28. og 29. august. Ingen duplikatkomposisjon, overskrift, systemillustrasjon eller biepose ble funnet.
7. Ingen lavoppløste elementer, vannmerker, falsk typografi, avkuttet tekst, feil logo, mørk, fotografisk, neonpreget eller generisk AI-stil ble funnet.
8. Captionen er på naturlig norsk, inneholder én relevant CTA, tre emneknagger og ingen statistikk, kundecaser, garantier eller overdrevne resultatløfter.
9. Sluttfilens SHA-256 er `f6736eed28528aa97f091ea3b3f33ccf240380e8c4cf2d37f27c818b1914daa2`.
