# Research- og QA-logg: kontrollert leverandørkonto

## Låst produksjonsramme

- Måldatoen ble låst én gang ved turn-start til 2026-10-16, kalenderdatoen i Europe/Oslo 2026-10-15 pluss én dag. Den samme datoen ble beholdt gjennom hele kjøringen.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, ingen Graph-skriveoperasjon ble utført, og ingenting ble publisert på Instagram.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet og Kling-ferdigheten for daglige Instagram-pakker ble lest før produksjon.
- Researchen var avgrenset til under 15 minutter, tre troverdige kilder og to relevante produktmønstre.

## Avgrenset research

1. [NorSIS: Trusler og trender 2018–19](https://norsis.no/content/uploads/2022/05/trusler-og-trender-2018-19-web.pdf) anbefaler interne rutiner for å kontrollere om meldinger om endret leverandørkontonummer er reelle. Avsenderen bør kontaktes i en annen kanal enn den opprinnelige meldingen.
2. [Microsoft Learn: Vendor bank account workflow](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/vendor-bank-account-workflow) dokumenterer et produktmønster der ny eller endret leverandørkonto sendes som en foreslått endring til godkjenning. Beskyttede felt blir ikke oppdatert før godkjenningen er fullført.
3. [Oracle: Internal Supplier Profile Bank Account Change](https://docs.oracle.com/en/cloud/saas/procurement/26a/oaprc/internal-supplier-profile-bank-account-change.html) dokumenterer et produktmønster der opprettelse og endring av leverandørkonto rutes som en endringsforespørsel til godkjenning, med mulighet for støttedokumentasjon.

Microsoft Dynamics 365 og Oracle Fusion Cloud Procurement ble kontrollert som to relevante produktmønstre. Innlegget kopierer ingen produkttekst, skjermbilder eller layout. Det lover ikke at en arbeidsflyt alene hindrer svindel, at kontoen er korrekt, eller at Kling leverer en bestemt standardintegrasjon. Uavhengig kontroll, roller, kontaktpunkt og godkjenningsregel må avklares for den aktuelle virksomheten.

## Valgt konsept

- Problem: En melding om nytt leverandørkontonummer kan ellers bli ført direkte fra e-post inn i leverandørregisteret og senere betaling.
- Løsningseksempel: Hold kontoen som en foreslått endring, bekreft opplysningen gjennom et kjent kontaktpunkt i en annen kanal, og krev en dokumentert godkjenning før registeret oppdateres.
- Forretningsverdi: «Fra e-postendring til godkjent leverandørkonto.»
- Hovedbudskap: «Er nytt kontonummer kontrollert?»
- Synlig forklaring: «La en kontoendring vente på uavhengig kontroll før den blir tatt i bruk.»
- CTA: Se `klingsystems.no/systemer` og finn ut hva som kan samles og følges opp.

Leverandørnavnet og kontonumrene i illustrasjonen er oppdiktede eksempeldata og er tydelig merket som eksempel. De beskriver et arbeidsmønster, ikke en faktisk leverandør, en utført kontroll eller en eksisterende standardfunksjon hos Kling.

## Graph- og duplikatkontroll

Prosjektets eksisterende, skrivebeskyttede Graph API-oppsett mot konfigurert `https://graph.instagram.com` ble brukt før produksjon. Kontoen ble bekreftet som BUSINESS `@klingsystems`. De siste 14 publiserte innleggene ble hentet med media-ID, caption, medietype, permalink og tidsstempel:

- 15.10.2026, `18146117833602813`: kontroll av dupliserte sidetitler.
- 14.10.2026, `18129480490826889`: lagringskontroll med behold eller slett.
- 13.10.2026, `18116093719944119`: fordeling av nye henvendelser.
- 12.10.2026, `18170980099466787`: tidsstyrt avtalepåminnelse.
- 11.10.2026, `18149223853478111`: periodisk tilgangsgjennomgang.
- 10.10.2026, `17938426908372948`: kontrollert dataimport.
- 09.10.2026, `18117838109078105`: lenkeforhåndsvisning og metadata.
- 08.10.2026, `18016812110744664`: KID-matching mellom betaling og faktura.
- 07.10.2026, `18484779445109066`: tekstalternativ valgt etter bildets formål.
- 06.10.2026, `18153424792523873`: kartlegging av e-postavsendere på domenet.
- 05.10.2026, `17879033988553987`: XML-nettstedskart.
- 04.10.2026, `17909732439489061`: serversidekontroll av kontaktskjema.
- 03.10.2026, `18078280679392755`: permanent videresending.
- 02.10.2026, `17949925962320069`: synkronisert lagerstatus.

Graph viste ingen publisering for den låste måldatoen 16. oktober. Ingen Graph-skriveoperasjon ble utført.

Alle 49 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn, captioner og researchlogger før den nye filen ble lagt til. Fakturaflyt, KID-matching, priskontroll, dokumentdata, leverandøransvar, tilgangskontroll og generelle kontrollpunkt ble vurdert som nærliggende temaer. Det valgte innlegget gjelder spesifikt endring av leverandørens betalingsopplysninger og kravet om uavhengig bekreftelse og godkjenning før registeroppdatering.

Komposisjoner med fakturakø, betaling–faktura-matching, dokumentstabel, sirkelkontroll, mottakerkort og brede inspeksjonstabeller ble avvist. Sluttbildet bruker i stedet to forskjøvede flater for foreslått endring og uavhengig kontroll, en mørk låseport mellom dem og en separat godkjent registeroppdatering. Ingen bie brukes fordi maskoten ikke tilfører nødvendig mening til sikkerhetskontrollen, og systemillustrasjonen bærer budskapet alene.

## Produksjon og visuell QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. `imagegen`-ferdigheten anbefaler kodebasert rendering for enkle systemdiagrammer som krever presis tekst og ekte merkeelementer, så ingen bildemodell fikk gjenskape tekst, logo eller maskot.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi og rammer, Sky- og Mist-systemflater, Peach-støtteflate og Gold-aksenter.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten foto, neon, mørk fullflate, gradientdominans eller generisk AI-estetikk.
- Førsterenderen ble avvist i kontrollen av sentrert 1:1-beskjæring fordi øvre del av logoen kom utenfor kvadratet. Den ene tillatte korrigeringsrunden flyttet hele komposisjonen 18 piksler ned. Ingen andre elementer eller budskap ble endret.
- Sluttbildet ble kontrollert i original størrelse mot de godkjente innleggene fra 13., 14. og 15. oktober. Kortpar, låseport, kontoendring og separat godkjenningsstatus er en ny komposisjon.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk, feil visuell stil eller duplikatkomposisjon ble funnet i sluttbildet.

## Format- og tryggsonekontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, 8-bit RGB PNG uten alfa.
- Viktig tekst, logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert etter korrigeringen. Hele logoen, hovedbudskapet, kontoendringen, den uavhengige kontrollen, godkjenningsstatusen, verdilinjen og meningen beholdes.
- SHA-256: `42e382b25eb7d9f4caeeee89043c2e0c6ced99842b555d318e153c2970e6fcf8`.
- Filstørrelse: 126 372 byte.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-10-16-leverandorkonto`.
- Offentlig medie-ID: `daily-2026-10-16-leverandorkonto`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-16-leverandorkonto`.
- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-10-16. Captionen er 537 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering. Alle 6 publiseringstester besto.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne produksjonsjobben.

## Sluttverifisering

- Leveransecommit `a7b4eea` ble pushet direkte til `main`. Bare de tre nye pakkefilene ble staged og committet. Eksisterende, uvedkommende endringer og ukjente mapper i arbeidskopien ble bevart urørt.
- Den første offentlige kontrollen svarte HTTP 404 med `x-vercel-cache: MISS` mens utrullingen fortsatt var under propagasjon. Den identiske URL-en ble kontrollert på nytt etter 15 sekunder og svarte HTTP 200 uten innlogging som `image/png`.
- Den offentlige filen er 126 372 byte, 1080 × 1350 piksler og RGB uten alfa.
- Offentlig SHA-256 samsvarer med lokalfilen: `42e382b25eb7d9f4caeeee89043c2e0c6ced99842b555d318e153c2970e6fcf8`.
- Avsluttende `TARGET_DATE=2026-10-16 PUBLISH_MODE=dry-run` besto med status `dry-run` for korrekt pakke, offentlig bilde, BUSINESS-kontoen `@klingsystems` og null innlegg på måldatoen. Resultatet hadde `mediaId: null` og `permalink: null`.
- Instagram-publisering er ikke utført. Ingen container ble opprettet, og `media_publish` ble ikke kalt.
