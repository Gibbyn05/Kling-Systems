# Research- og QA-logg: 29. august 2026

Måldatoen ble låst ved kjørestart 28. august 2026 i Europe/Oslo: neste kalenderdag er 29. august 2026. Den samme datoen ble beholdt gjennom hele kjøringen. Dette er kun en produksjonspakke. Ingenting ble publisert på Instagram.

## Dagens kundeverdi

Innlegget viser en praktisk mobiltest for en bedriftsnettside: Hovedbudskapet må være tydelig, innholdet må tilpasse seg den smalere flaten, og den viktigste handlingen må være lett å finne og treffe. Innlegget lover ikke flere henvendelser, bedre rangering, juridisk etterlevelse eller en bestemt forretningsgevinst.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer nettsider som en av tre tjenester og beskriver målet om å gjøre tilbudet forståelig på få sekunder og lede relevante besøkende til en uforpliktende kartlegging. Kling kan bygge nettsider, men påstanden er avgrenset til en konkret design- og brukskvalitet.

## Valgt konsept

Hovedbudskapet er «Ser kunden neste steg på mobil?». Bildet viser en stående mobilflate med en kort forklaring og én stor kontaktknapp. En målskivebie peker mot den viktige handlingen, men skjermeksempelet bærer budskapet alene.

1. Problem: En desktop-layout kan bli trang og vanskelig å bruke når den bare krympes.
2. Løsning: Prioriter hovedbudskapet, la innholdet flyte og gi viktige handlinger tilstrekkelig størrelse og plass.
3. Forretningsverdi: «Enklere fra besøk til kontakt.»

Sammenhengen er forståelig uten caption. Skjermbildet er et illustrativt eksempel, ikke en kundecase eller et skjermbilde fra et eksisterende produkt.

## Avgrenset research

To aktuelle og troverdige primærkilder ble kontrollert 28.08.2026:

- [Google Search Central: Mobile-first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) anbefaler responsivt design og sier at hovedinnhold og tydelige overskrifter bør være likeverdige på mobil og desktop. Dette støtter budskapet om å tilpasse presentasjonen uten å miste det viktigste innholdet.
- [W3C WAI: Understanding Success Criterion 2.5.8, Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) beskriver et minimumsmål på 24 × 24 CSS-piksler eller tilstrekkelig avstand for trykkmål, med dokumenterte unntak. Dette støtter den avgrensede formuleringen om å gjøre viktige handlinger lette å treffe.

Kildene brukes som design- og brukskvalitetsgrunnlag. Innlegget gjengir ikke tekniske terskler eller gir en påstand om WCAG-samsvar.

## Konkurrenteksempler

Tre relevante norske webaktører ble kontrollert, innenfor grensen på tre:

- [Acendia](https://acendia.no/) markedsfører responsivt og mobilvennlig design som en generell del av nettsidepakkene.
- [Vendito](https://vendito.no/) beskriver nettsider som fungerer på mobil og datamaskin, med mobilvennlig design og tydelig struktur.
- [Skema](https://skema.no/tjenester/wordpress-nettside/) presenterer mobiltilpassede WordPress-nettsider og kontaktskjema som del av leveransen.

Aktørene bruker hovedsakelig mobilvennlighet som en generell egenskap ved leveransen. Klings innlegg kopierer ingen konkurrenttekst, skjermbilder, layout, priser eller resultatpåstander. Innholdsgapet er en enkel test som en leder kan forstå visuelt: Er neste steg fortsatt tydelig og lett å bruke på mobil?

## Kontroll av de siste Instagram-innleggene

Den eksisterende, skrivebeskyttede Instagram Graph API-oppsettet ble brukt 28.08.2026. Kontoen ble bekreftet som BUSINESS `@klingsystems`. Endepunktet ble forespurt med grense 14 og feltene media-ID, caption, medietype, medie-URL, permalink, tidsstempel og videominiatyr. Kontoen hadde tolv medier totalt, så kontrollen dekket alle tilgjengelige innlegg:

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

Alle aktive lokale pakker i `assets/ads/daily` ble også kontrollert. Konsepter om fakturaflyt, tilgangsavslutning, skjemakvittering, brede tjenester, rapportgrunnlag, avvikskontroll, systemoverganger og samtykke ble avvist. Komposisjoner med tabell, trinnvis oppgaveliste, stor kvittering, tre tjenestekort, mørk fullflate, rett arbeidsflyt, to systemmoduler og en-til-mange-forgrening ble avvist. Tidligere brukte database-, søke-, meldings-, arbeidsflyt- og sjekklisteposer ble også avvist.

Det nye innlegget bruker i stedet én stående mobilflate, én tydelig kontaktknapp og den tidligere ubrukte `kling-bee-target.png` som støttefigur. Hovedbudskap, systemillustrasjon, komposisjon, bilde og biepose er nye i feeden.

## Bildeproduksjon

Sluttbildet ble rendret deterministisk som en enkel, kodebasert systemillustrasjon. Dette følger beslutningsregelen i `imagegen`-ferdigheten for diagrammer og grensesnittgrafikk som egner seg bedre for presis kodebasert produksjon enn fri bildegenerering. Den faktiske `kling-logo-navy-transparent.png`-ressursen, lokal Geist-font og den eksisterende `kling-bee-target.png`-maskoten ble brukt direkte. Ingen bildemodell fikk gjenskape logo, tekst eller maskot.

Den ene korrigeringsrunden gjorde mobilflaten tydelig stående og flyttet logoen 20 piksler ned slik at den beholdes helt i den sentrerte 1:1-beskjæringen. Konsept, hovedtekst, systemillustrasjon og biepose ble ikke byttet.

## Format- og kvalitetskontroll

1. Sluttfilen er visuelt kontrollert i original størrelse og er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
2. Viktig tekst, logo og meningsbærende grafikk ligger innenfor x=90-990 og y=120-1230. Ingen tekst eller grafikk er avkuttet.
3. En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert. Korrekt logo, hovedbudskap, mobilflaten, kontaktknappen, målskivebien og verdilinjen er synlige og beholder meningen. Nettadressen ligger delvis utenfor kvadratets nedre kant, men er ikke nødvendig for å forstå budskapet.
4. Bildet bruker Kling Navy `#0F2940`, Kling Sky `#8CC0EB`, Kling Mist `#BFDDF0`, Kling Cream `#FFF9D2` og Bee Gold `#FFC640`, samt korrekt logoressurs.
5. Målskivebien peker mot den sentrale handlingen, dekker klart mindre enn 25 prosent av flaten og bærer ikke budskapet alene. Maskotfilen har ekte transparent bakgrunn uten hvite rester.
6. Sluttbildet er sammenlignet visuelt i original størrelse med innleggene fra 22., 23., 26. og 28. august. Ingen duplikatkomposisjon, overskrift, systemillustrasjon eller biepose ble funnet.
7. Ingen lavoppløste elementer, vannmerker, falsk typografi, avkuttet tekst, feil logo, mørk, fotografisk, neonpreget eller generisk AI-stil ble funnet.
8. Captionen er på naturlig norsk, inneholder én relevant CTA, tre emneknagger og ingen statistikk, kundecaser, garantier eller overdrevne resultatløfter.
9. Sluttfilens SHA-256 er `c0c744aab1819411cb8c4b615dd7ca5b27c1fa6af8a51444ba90162cf67c94c8`.
