# Research- og QA-logg: kontrollert opprydding i lagrede data

## Låst produksjonsramme

- Måldatoen ble låst én gang ved turn-start til `2026-10-14`, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Datoen er brukt konsekvent i bilde, caption, researchlogg, medie-ID og offentlig URL.
- Oppgaven er begrenset til produksjon, kontroll, commit, push og offentlig medieverifisering. Instagram-publisering er ikke autorisert og skal ikke utføres.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-pakkeflyten og `imagegen`-ferdigheten ble lest før produksjon.
- Det er laget ett konsept og én sluttpakke. Førsterenderen besto, så ingen korrigeringsrunde ble brukt.

## Valgt innsikt og budskap

Hovedbudskapet er «Vet dere hvorfor gamle data fortsatt lagres?». Bildet viser et eksempel der kundeopplysninger fra CRM, skjema og support når et kontrollpunkt. Virksomheten må avklare formål, lagringstid, eventuelle krav og unntak før den bestemmer om opplysningene skal beholdes på et dokumentert grunnlag eller slettes. Verdiløftet er «Fra ukjent lagring til kontrollert opprydding.»

Sammenhengen i bildet er:

1. Problem: Kundeopplysninger kan bli liggende i flere systemer uten en synlig grunn eller avtalt vurdering.
2. Løsningseksempel: Koble datakilde, formål og lagringstid til et kontrollpunkt før en beslutning tas.
3. Forretningsverdi: Virksomheten får en avklart oppryddingsrutine i stedet for ukjent lagring.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer spredt informasjon, manuell registrering og systemer som ikke snakker sammen som vanlig friksjon. Kling tilbyr systemer, integrasjoner og automatisering, men innlegget lover ikke automatisk sletting, juridisk etterlevelse eller en bestemt lagringstid. Ordene CRM, skjema, support og kundeopplysninger er illustrative eksempeldata, ikke en eksisterende standardfunksjon eller en konkret juridisk vurdering.

## Avgrenset research

Researchen ble gjennomført innenfor grensen på 15 minutter og avgrenset til tre aktuelle, troverdige kilder:

1. [Lovdata: personvernforordningen artikkel 5](https://lovdata.no/nav/lov/2018-06-15-38/kapii) gjengir prinsippet om lagringsbegrensning: personopplysninger skal ikke lagres identifiserbart lenger enn det som er nødvendig for formålet. Kilden støtter behovet for å knytte lagring til et avklart formål, men gir ikke én universell lagringstid.
2. [Microsoft Learn: Create and configure retention policies](https://learn.microsoft.com/en-us/purview/create-retention-policies) dokumenterer et produktmønster der virksomheten velger om innhold skal beholdes, slettes eller beholdes og deretter slettes gjennom regler for valgte lagringssteder.
3. [Google Workspace Help: How retention works](https://knowledge.workspace.google.com/vault/retention/how-retention-works) dokumenterer regler som styrer hvor lenge data beholdes og når data kan fjernes, og advarer om at feil konfigurasjon kan føre til utilsiktet sletting.

Microsoft Purview og Google Vault ble kontrollert som to relevante produktmønstre, innenfor grensen på tre konkurrenteksempler. Innlegget kopierer ikke produkttekst, skjermbilder, layout eller lisensavhengige funksjonsløfter. Kildene støtter bare den generelle arbeidsmåten «datakilde og formål → kontrollpunkt → avklart behold eller slett». Regler, rettslig grunnlag, unntak og konkrete frister må vurderes for den aktuelle virksomheten før sletting utføres.

## Graph- og duplikatkontroll

Den eksisterende, skrivebeskyttede Graph API-oppsettingen ble brukt før produksjon mot konfigurert `https://graph.instagram.com`. Kontoen ble bekreftet som BUSINESS `@klingsystems`. De siste 14 publiserte innleggene ble hentet:

| Dato | Media-ID | Tema |
| --- | --- | --- |
| 2026-10-13 | `18116093719944119` | fordeling av nye henvendelser |
| 2026-10-12 | `18170980099466787` | avtalepåminnelse |
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

Dagens innlegg 13. oktober fantes og ble inkludert i kontrollsettet. Det har måldato 13. oktober og er ikke en duplikat av produksjonspakken for den låste måldatoen 14. oktober. Ingen Graph-skriveoperasjon ble utført.

Alle 48 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn, captioner og researchlogger før den nye filen ble lagt til. Konsepter om tilgangsavslutning, kundedata, dokumentversjoner, avtalefrist, endringshistorikk, dataimport og tilgangsgjennomgang ble avvist som nærliggende. Det nye innlegget handler ikke om tilgang, retting, import eller kontraktsfrist, men om å koble lagrede personopplysninger til formål og en kontrollert vurdering før behold eller slett.

Komposisjoner med brede inspeksjonstabeller, horisontale trestegsflyter, tilgangsrader, to nettleserkort, kalenderkort og mottakerkort ble avvist. Sluttbildet bruker i stedet en forskjøvet dokumentstabel fra tre datakilder, et rundt kontrollpunkt og to tydelig avgrensede utfall. Ingen bie brukes fordi maskoten ikke tilfører nødvendig mening til lagringsvurderingen, og systemillustrasjonen forklarer sammenhengen alene.

## Produksjon og stilkontroll

- Sluttbildet ble rendret deterministisk i HTML og CSS med prosjektets Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen.
- `imagegen`-ferdigheten peker på kodebasert rendering for enkle systemdiagrammer som krever presis tekst, korrekt logo og prosjektets eksisterende merkeelementer. Ingen bildemodell fikk gjenskape tekst, logo eller maskot.
- Kling Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Bee Gold `#FFC640` er brukt.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, gradient, vannmerke eller generisk AI-estetikk.
- Korrekt Kling-logo er brukt som separat prosjektressurs. Ingen ny eller gjenskapt logo er brukt.
- Førsterenderen besto den visuelle kontrollen. Ingen korrigeringsrunde ble brukt.

## Visuell og teknisk QA

- Sluttformat: 1080 × 1350 piksler, RGB PNG uten alfakanal.
- Viktig tekst, logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, systemfaner, dokumentstabel, kontrollpunkt, begge utfall, verdilinje og nettadresse er synlige og beholder meningen.
- Ingen tekst er avkuttet, tildekket eller gjengitt med feil tegn. Logoen er korrekt, og bildet har ingen hvite bakgrunnsrester, alfa eller lavoppløste innslag.
- Sluttbildet ble kontrollert i original størrelse mot de godkjente innleggene fra 3., 10., 11. og 13. oktober. Dokumentstabelen, kontrollpunktet og behold/slett-utfallene utgjør en ny komposisjon. Hovedbudskapet og illustrasjonen er ikke kopiert fra de kontrollerte innleggene.
- Ingen tidligere biepose eller generert maskot er brukt.
- Ingen korrigeringsrunde ble brukt.
- Lokal SHA-256: `6ff6777f81ea7e8ed74d1a123f5ed1390fd4f098285a95728c4f1cfc703895a5`.
- Filstørrelse: 138 481 byte.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-10-14-lagringskontroll`.
- Offentlig medie-ID: `daily-2026-10-14-lagringskontroll`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-14-lagringskontroll`.
- `findDailyPackage` fant nøyaktig én komplett pakke for 14. oktober med 1080 × 1350 PNG, caption og researchlogg. Captionen er 507 tegn.
- `npm run check`: bestått.
- `npm run build`: bestått.
- `npm run test:instagram-publish`: 6 av 6 tester bestått.
- `git diff --check`: bestått før commit.
- Commit, push og offentlig bytekontroll dokumenteres i sluttverifiseringen etter gjennomføring.
- Instagram-publisering er ikke utført og skal ikke utføres i denne produksjonsjobben.
