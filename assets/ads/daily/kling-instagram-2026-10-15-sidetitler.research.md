# Research- og QA-logg: sidetitler

## Låst produksjonsramme

- Måldatoen ble låst én gang ved turn-start til 2026-10-15, kalenderdatoen i Europe/Oslo 2026-10-14 pluss én dag. Den samme datoen ble beholdt gjennom hele kjøringen.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, ingen Graph-skriveoperasjon ble utført, og ingenting ble publisert på Instagram.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet og Kling-ferdigheten for daglige Instagram-pakker ble lest før produksjon.
- Researchen var avgrenset til under 15 minutter, tre aktuelle og troverdige kilder og to relevante plattformeksempler.

## Avgrenset research

1. [Google Search Central: Influencing title links in Google Search](https://developers.google.com/search/docs/appearance/title-link) anbefaler at hver side har en kort, beskrivende og særskilt `<title>`. Google opplyser også at tittellenken i søkeresultatet genereres automatisk fra flere mulige kilder, og at like standardtitler gjør sider vanskeligere å skille.
2. [MDN: `<title>` HTML document title element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title) dokumenterer at `<title>` angir dokumenttittelen som vises i nettleserens tittellinje eller fane.
3. [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a) anbefaler tydelig HTML-struktur og oppgir at manglende, dupliserte eller for korte titler kan svekke hvor pålitelig innholdet forstås og indekseres. Bing presiserer samtidig at SEO-tiltak ikke garanterer rangering eller trafikk.

Google Search og Bing ble kontrollert som to relevante plattformmønstre. MDN ble brukt som teknisk referanse. Innlegget kopierer ingen produkttekst, skjermbilder eller visuell utforming. Det lover ikke rangering, trafikk, klikkrate, indeksering eller at en søkemotor alltid viser den angitte sidetittelen.

## Valgt konsept

- Problem: Flere nettsider kan bruke samme generelle sidetittel og dermed bli vanskeligere å skille i nettleserfaner, bokmerker og søkeresultater.
- Løsningseksempel: Gi hver side en kort, beskrivende tittel som samsvarer med innholdet på den aktuelle siden.
- Forretningsverdi: «Fra like faner til tydelige sider.»
- Hovedbudskap: «Har alle sidene samme tittel?»
- Synlig forklaring: «Gi hver side en kort tittel som beskriver innholdet.»
- CTA: Se `klingsystems.no/nettsider` og finn ut hva som bør gjennomgås.

Eksempelstiene og titlene i illustrasjonen er illustrative grensesnittdata. De dokumenterer et arbeidsmønster, ikke et bestemt Kling-produkt eller en utført kundeanalyse.

## Graph- og duplikatkontroll

Prosjektets eksisterende, skrivebeskyttede Graph API-oppsett mot konfigurert `https://graph.instagram.com` ble brukt før produksjon. Kontoen ble bekreftet som BUSINESS `@klingsystems`. De siste 14 publiserte innleggene ble hentet med media-ID, caption, medietype, permalink og tidsstempel:

- 14.10.2026, `18129480490826889`: lagringskontroll med tre datakilder, vurderingspunkt og behold/slett-utfall.
- 13.10.2026, `18116093719944119`: henvendelsesfordeling med innboks, kapasitetskort og valgt mottaker.
- 12.10.2026, `18170980099466787`: avtalepåminnelse med kalenderkort, tidspunkt og meldingsflate.
- 11.10.2026, `18149223853478111`: tilgangsgjennomgang med person, system og beslutning.
- 10.10.2026, `17938426908372948`: dataimport med inspeksjonstabell og avviksrad.
- 09.10.2026, `18117838109078105`: lenkeforhåndsvisning med metadata og delingsvisning.
- 08.10.2026, `18016812110744664`: KID-matching mellom betaling og faktura.
- 07.10.2026, `18484779445109066`: tekstalternativ valgt etter bildets formål.
- 06.10.2026, `18153424792523873`: radialt kart over e-postavsendere på domenet.
- 05.10.2026, `17879033988553987`: nettstedskart med URL-er og XML-fil.
- 04.10.2026, `17909732439489061`: serversidekontroll av kontaktskjema.
- 03.10.2026, `18078280679392755`: permanent videresending fra gammel til ny sideadresse.
- 02.10.2026, `17949925962320069`: synkronisert lagerstatus på tvers av salgskanaler.
- 01.10.2026, `17870934222637507`: QR- eller strekkode som åpner riktig utstyrspost.

Det publiserte innlegget 14. oktober ble inkludert i kontrollsettet. Graph viste ingen publisering for den låste måldatoen 15. oktober. Ingen Graph-skriveoperasjon ble utført.

Alle 49 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn, captioner og researchlogger før den nye filen ble lagt til. Konsepter om nettstedskart, videresending, lenkeforhåndsvisning, responsive bilder, tekstalternativer, tastaturskjema, kundereisetest og generell nettsidekontroll ble avvist som nærliggende.

Det valgte innlegget gjelder spesifikt dupliserte HTML-sidetitler. Det bruker en mørk samling av tre like nettleserfaner, en gul kontrollmarkør og tre forskjøvede, unike tittelbaner. Overskriften, tittelfanen, kontrollmarkøren og den forskjøvede banekomposisjonen er ikke brukt i kontrollsettet. Ingen bie brukes fordi en maskot ikke tilfører nødvendig mening til sidetittelkontrollen, og systemillustrasjonen bærer budskapet alene.

## Produksjon og visuell QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildegenerator fikk gjenskape tekst, logo eller maskot.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi og rammer, Sky- og Mist-systemflater, Peach-støtteflate og Gold-aksenter.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten foto, neon, mørk fullflate eller generisk AI-estetikk.
- Førsterenderen besto originalkontrollen. Ingen korrigeringsrunde ble brukt.
- Sluttbildet ble kontrollert i original størrelse mot de godkjente innleggene fra 10., 13. og 14. oktober. Den mørke duplikatflaten, de tre forskjøvede tittelbanene og tittelfortellingen er en ny komposisjon.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk, feil visuell stil eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
- Viktig tekst, logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, hele sidetittelkontrollen, verdilinjen og meningen beholdes.
- SHA-256: `cc5b8828a00d8e37ca4be27ba694ccd349987e3031d74821d7d18535818549d4`.

## Leveringskontroller

- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-10-15. Captionen er 474 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- De tre leveransefilene ble committet som `9d8a440` og pushet til `main`. Eksisterende, uvedkommende endringer i arbeidsområdet ble bevart urørt.
- Offentlig medie-ID: `daily-2026-10-15-sidetitler`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-15-sidetitler`.
- Første offentlige forespørsel svarte HTTP 404 med `x-vercel-cache: MISS` mens den nye utrullingen fortsatt var under propagasjon. Den identiske URL-en ble kontrollert på nytt etter 15 sekunder og svarte HTTP 200 uten innlogging som `image/png`, 130 029 byte, 1080 × 1350 og RGB uten alfa.
- Offentlig SHA-256 samsvarer med lokalfilen: `cc5b8828a00d8e37ca4be27ba694ccd349987e3031d74821d7d18535818549d4`.
- Avsluttende kontroll med `TARGET_DATE=2026-10-15` og `PUBLISH_MODE=dry-run` besto for riktig konto, komplett pakke, offentlig bilde og null innlegg på måldatoen. Ingen Instagram-container ble opprettet.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne kjøringen.
