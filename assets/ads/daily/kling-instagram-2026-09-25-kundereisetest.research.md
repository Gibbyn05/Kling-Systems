# Research og QA: kontrollert kundereise på nettsiden

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-25, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, og ingenting ble publisert.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-ferdigheten for daglige Instagram-pakker og `imagegen`-ferdigheten ble lest før produksjon.
- Researchen var avgrenset til under 15 minutter, tre troverdige primærkilder og to relevante konkurrenteksempler.

## Avgrenset research

1. [Playwright: Writing tests](https://playwright.dev/docs/writing-tests) dokumenterer nettlesertester som utfører handlinger og kontrollerer forventet tilstand. Eksemplene omfatter blant annet klikk, utfylling og synlige resultater.
2. [Datadog: Browser Testing](https://docs.datadoghq.com/synthetics/browser_tests/) dokumenterer periodiske nettleserscenarioer som kontrollerer både at en applikasjon svarer, og at vilkår i den definerte brukerreisen er oppfylt.
3. [Google Cloud: Synthetic monitoring overview](https://docs.cloud.google.com/monitoring/uptime-checks/introduction) dokumenterer syntetiske kontroller av tilgjengelighet, konsistens og ytelse for tjenester, nettsider og API-er, inkludert validering av responsdata.

Datadog Synthetic Monitoring og Google Cloud Monitoring ble kontrollert som to konkurrenteksempler. Playwright ble kontrollert som et teknisk rammeverk, ikke som et konkurrerende tjenestetilbud. Kildene dokumenterer etablerte testmønstre, men brukes ikke som påstander om en bestemt Kling-leveranse. Ingen tall, kundecaser, oppetidsgarantier eller resultatløfter ble brukt.

## Valgt innsikt og budskap

- Problem: At en nettside svarer, viser ikke alene at en viktig kundehandling fungerer fra start til forventet resultat.
- Løsningseksempel: Kjør en definert nettlesertest som åpner siden, utfører den sentrale handlingen og kontrollerer forventet svar.
- Forretningsverdi: Virksomheten får et tydeligere grunnlag for å oppdage feil i en viktig kundereise.
- Hovedbudskap: «Nettsiden er oppe. Fungerer kundereisen?»
- Verdilinje: «Fra tilgjengelig side til testet kundereise.»
- CTA: «Vil dere kontrollere de viktigste veiene gjennom nettsiden? Se klingsystems.no/nettsider»

Testen må tilpasses den faktiske løsningen. Ett kontrollert løp dekker ikke alle brukere, enheter, nettverksforhold eller uforutsette feil, og innlegget lover ikke kontinuerlig tilgjengelighet eller automatisk feilretting.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett mot `graph.instagram.com` ble brukt før produksjon. Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`.
- De siste 14 publiserte mediene, fra 2026-09-06 til 2026-09-24, ble hentet med media-ID, caption, medietype, medie-URL, permalink og tidsstempel.
- Kontrollsettet omfattet kildesporing, endringshistorikk, kundesak, sikkerhetskopitest, integrasjonsfeil, tastaturskjema, returflyt, vedlikeholdsplan, responsive bilder, kvitteringskobling, avtalefrist, lagergrense, priskontroll og ordregrunnlag.
- Det fantes ingen publisering for den låste måldatoen 2026-09-25 i kontrollsettet.
- Alle 30 eksisterende aktive lokale PNG-pakker og tilhørende researchlogger i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til. Et kontaktark av de siste 14 Graph-bildene ble kontrollert visuelt.
- Temaer om skjemakvittering, tastaturnavigasjon, mobilvisning, responsive bilder, integrasjonsfeil og generelle kontrollpunkter ble avvist som nærliggende.
- Det nye innlegget skiller mellom enkel tilgjengelighetsstatus og en faktisk testløype gjennom tre handlinger. Den mørke statusposten overlapper en stor nettleserflate, mens en gul bane leder inn i tre nummererte kontrollpunkter. Denne hovedsammenhengen og komposisjonen er ikke brukt i kontrollsettene.
- `kling-bee-checklist.png` brukes som liten støttefigur ved testresultatet. Denne bieposen var ikke brukt i de aktive lokale researchloggene eller i de 14 Graph-bildene. Maskoten dekker klart under 25 prosent av flaten og er ikke hovedmotivet.

## Produksjon og visuell QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font, den faktiske `assets/kling-logo-navy-transparent.png`-logoen og den eksisterende `assets/mascot/kling-bee-checklist.png`-maskoten.
- `imagegen`-ferdigheten anbefaler direkte, kodebasert produksjon når motivet er et enkelt systemdiagram med krav til presis typografi, korrekt logo og eksisterende merkeelementer. Ingen bildegenerator fikk gjenskape tekst, logo eller maskot.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi og statusflate, Sky- og Mist-systemflater, Peach-støtteflate og Gold-forbindelser. Uttrykket er lyst, luftig, minimalt og forretningsorientert.
- Førsterenderen var tydelig, men logoens øvre kant lå 7 piksler utenfor den sentrerte 1:1-beskjæringen. Den ene tillatte korrigeringsrunden flyttet bare logoen 18 piksler ned. Budskap, komposisjon, systemillustrasjon og maskot ble beholdt.
- Sluttbildet ble kontrollert i original størrelse, i sentrert 1:1-beskjæring og mot de godkjente innleggene om kildesporing 24. september, endringshistorikk 23. september, kundesak 22. september og sikkerhetskopitest 21. september, i tillegg til kontaktarket for alle de siste 14 Graph-bildene.
- Ingen avkuttet tekst, feil logo, hvite maskotrester, lavoppløselige elementer, meningsløs maskotbruk, mørk eller fotografisk stil eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttformat: 1080 × 1350 piksler.
- PNG: 8-bit RGB uten alfa.
- Viktig tekst, logo og hovedgrafikk holder minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, hele testløypen, verdilinjen og maskoten beholdes med mening intakt.
- SHA-256: `89c30a3f1c35b466405f884c5d94382564e9c8e07dd5581c9e647e8f9a164265`.

## Leveringskontroller

- Pakkevalideringen fant nøyaktig én komplett pakke for 2026-09-25 med 467 tegn i captionen og medie-ID `daily-2026-09-25-kundereisetest`.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før commit.
- Uvedkommende brukerendringer i arbeidsområdet ble bevart urørt og skal ikke stages.
- Leveransecommit, push, offentlig bilde-URL og avsluttende dry-run føres inn etter at deploykontrollene er fullført.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne kjøringen.
