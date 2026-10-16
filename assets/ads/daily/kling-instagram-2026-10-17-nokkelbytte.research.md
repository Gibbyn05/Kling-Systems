# Research- og QA-logg: planlagt bytte av integrasjonsnøkkel

## Låst produksjonsramme

- Måldatoen ble låst én gang ved turn-start til 2026-10-17, kalenderdatoen i Europe/Oslo 2026-10-16 pluss én dag. Den samme datoen ble beholdt gjennom hele kjøringen.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, ingen Graph-skriveoperasjon ble utført, og ingenting ble publisert på Instagram.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-ferdigheten for daglige Instagram-pakker og `imagegen`-ferdigheten ble lest før produksjon.
- Researchen var avgrenset til under 15 minutter, tre aktuelle og troverdige kilder og tre relevante produktmønstre.

## Avgrenset research

1. [Microsoft Learn: Use client secrets with Microsoft.Identity.Web](https://learn.microsoft.com/en-us/entra/msidweb/authentication/client-secrets) dokumenterer at klienthemmeligheter har utløpsdato, må roteres, og bør overvåkes før utløp. Microsoft beskriver også en overgang med både ny og gammel legitimasjon før den gamle fjernes. Kilden anbefaler sterkere autentiseringsformer enn klienthemmeligheter i produksjon.
2. [Google Cloud: Service account key rotation](https://docs.cloud.google.com/iam/docs/key-rotation) dokumenterer et bytteløp der ny nøkkel opprettes, tas i bruk, testes, og gammel nøkkel deretter deaktiveres og slettes. Google beskriver også varsling til riktig team når nøkler må roteres, og advarer om at utløp kan føre til driftsavbrudd hvis byttet ikke er planlagt.
3. [GitHub Docs: Token expiration and revocation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation) dokumenterer at utløpte eller tilbakekalte tokener ikke lenger kan brukes til Git- eller API-autentisering, og at et nytt token må opprettes.

Microsoft Entra, Google Cloud IAM og GitHub ble kontrollert som tre relevante produktmønstre. Innlegget kopierer ingen produkttekst, skjermbilder eller layout. Det lover ikke at alle integrasjoner bruker nøkler, at alle løsninger støtter overlappende legitimasjon, eller at Kling leverer automatisk rotasjon som standard. Riktig autentiseringsform, sikker lagring, varsling og bytteprosedyre må avklares for hver løsning.

## Valgt konsept

- Problem: En integrasjon kan stoppe når legitimasjonen utløper eller tilbakekalles dersom utløpsdato, ansvar og bytteplan ikke er synlig.
- Løsningseksempel: Samle system, eier og utløpsdato i en oppfølgingsoversikt, og test ny legitimasjon før gammel legitimasjon fjernes når løsningen støtter et kontrollert overlappsvindu.
- Forretningsverdi: «Fra skjult utløpsdato til planlagt nøkkelbytte.»
- Hovedbudskap: «Når utløper integrasjonens nøkkel?»
- Synlig forklaring: «Samle utløpsdato, eier og bytteplan før forbindelsen stopper.»
- CTA: Se `klingsystems.no/automatisering` og finn ut hva dere kan automatisere.

Datoen 31. oktober, rollen «Driftsansvarlig», nøkkelnavnene og tilkoblingsstatusen er illustrative eksempeldata. Selve nøkkelverdien vises ikke og skal ikke lagres i oppfølgingsoversikten. Illustrasjonen beskriver et arbeidsmønster, ikke en eksisterende Kling-standardfunksjon eller en konkret kundeløsning.

## Graph- og duplikatkontroll

Prosjektets eksisterende, skrivebeskyttede Graph API-oppsett mot konfigurert `https://graph.instagram.com` ble brukt før produksjon. Kontoen ble bekreftet som BUSINESS `@klingsystems`. De siste 14 publiserte innleggene ble hentet med media-ID, caption, medietype, permalink og tidsstempel:

- 16.10.2026, `18118814983963637`: kontrollert endring av leverandørkonto.
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

Graph viste ingen publisering for den låste måldatoen 17. oktober. Ingen Graph-skriveoperasjon ble utført.

Alle 51 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn, captioner, researchlogger og visuell sammenligning før den nye filen ble lagt til. Integrasjonsfeil, systemoverganger, tilgangsavslutning, tilgangsgjennomgang, e-postdomene, avtalepåminnelse og generell kontrollflyt ble vurdert som nærliggende temaer. Det valgte innlegget gjelder spesifikt utløp, eierskap og kontrollert bytte av legitimasjon som brukes av en integrasjon.

Komposisjoner med en feilbane, lineære trestegsflyter, tilgangsrader, kalenderkort, radialt avsenderkart, fakturakø, kontrollport og dokumentstabel ble avvist. Sluttbildet bruker i stedet to skråstilte nøkkelkort med et kompakt overlappsvindu, én mørk bekreftelseslinje og en liten arbeidsflytbie til høyre. `assets/mascot/kling-bee-workflow.png` var ikke brukt i de lokale researchloggene og dekker klart under 25 prosent av flaten. Maskoten støtter bytteflyten, men er ikke hovedmotivet.

## Produksjon og visuell QA

- `imagegen`-ferdigheten peker på direkte, kodebasert produksjon når motivet er et enkelt systemdiagram med krav til presis tekst, korrekt logo og etablerte merkeelementer. Sluttbildet ble derfor rendret deterministisk i HTML og CSS med lokal Geist-font, den faktiske `assets/kling-logo-navy-transparent.png`-logoen og den eksisterende arbeidsflytbien. Ingen bildemodell fikk gjenskape tekst, logo eller maskot.
- Produksjonsspesifikasjon: Instagram-grafikk i etablert Kling-stil med eksakt norsk tekst, varm Cream-bakgrunn, Navy-typografi, Sky-, Mist- og Peach-systemflater, Gold-aksenter, ekte logo, to overlappende nøkkelkort, et kontrollert testvindu og eksisterende arbeidsflytbie. Ingen foto, neon, generert logo, generert maskot eller alternativ versjon.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi og rammer, Sky- og Mist-systemflater, Peach-støtteflate og Gold-aksenter.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate, vannmerke eller generisk AI-estetikk.
- Førsterenderen besto originalkontrollen og den sentrerte 1:1-kontrollen. Ingen korrigeringsrunde ble brukt.
- Sluttbildet ble kontrollert i original størrelse og i et samlet kontaktark mot de godkjente innleggene fra 14., 15. og 16. oktober. De skråstilte nøkkelkortene, A + B-testvinduet, den mørke bekreftelseslinjen og arbeidsflytbien utgjør en ny komposisjon.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk, feil visuell stil eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG og RGB uten alfakanal.
- Viktig tekst, logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Hele logoen, hovedbudskapet, begge nøkkelkortene, testvinduet, maskoten, bekreftelseslinjen, verdibudskapet og nettadressen beholdes.
- Lokal SHA-256: `f3edacd396dd08cd6c8a7e104e972dd250f36d07d7d10b3dea852517f49e7572`.
- Filstørrelse: 173 048 byte.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-10-17-nokkelbytte`.
- Offentlig medie-ID: `daily-2026-10-17-nokkelbytte`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-17-nokkelbytte`.
- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-10-17. Captionen er 553 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering. Alle 6 publiseringstester besto.
- Commit, push og offentlig bytekontroll dokumenteres i sluttverifiseringen.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne produksjonsjobben.

## Sluttverifisering

Fylles ut etter ferdig lokal kontroll, push og offentlig medieverifisering.
