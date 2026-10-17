# Research- og QA-logg: synlig leveringsretur for e-post

## Låst produksjonsramme

- Måldatoen ble låst én gang ved turn-start til 2026-10-18, kalenderdatoen i Europe/Oslo 2026-10-17 pluss én dag. Den samme datoen ble beholdt gjennom hele kjøringen.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, ingen Graph-skriveoperasjon ble utført, og ingenting ble publisert på Instagram.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-ferdigheten for daglige Instagram-pakker og `imagegen`-ferdigheten ble lest før produksjon.
- Researchen var avgrenset til under 15 minutter, tre aktuelle og troverdige kilder og tre relevante produktmønstre.

## Avgrenset research

1. [Microsoft Learn: Email nondelivery reports and SMTP errors in Exchange Online](https://learn.microsoft.com/en-us/troubleshoot/exchange/email-delivery/ndr/non-delivery-reports-in-exchange-online) dokumenterer at en ikke-leveringsrapport varsler om at en melding ikke ble levert. Rapporten inneholder en feilkode, årsak og informasjon som kan peke på hvem som må rette problemet.
2. [Amazon SES: Setting up event notifications](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html) dokumenterer hendelser for blant annet levering, retur og klage, og at disse kan formidles som varsler eller sending events til andre systemer.
3. [Gmail Help: Fix bounced or rejected emails](https://support.google.com/mail/answer/6596?hl=en) dokumenterer at en avvist melding gir en automatisk retur med feilmelding, og at årsaken blant annet kan være ugyldig adresse eller et midlertidig problem hos mottakeren.

Microsoft Exchange Online, Amazon SES og Gmail ble kontrollert som tre relevante produktmønstre. Innlegget kopierer ingen produkttekst, skjermbilder eller layout. Det lover ikke at alle e-postsystemer leverer samme hendelser, at en sendt melding er lest, eller at automatisert behandling alene avgjør riktig oppfølging. Hendelsestyper, integrasjonsmuligheter og regler må avklares for e-postløsningen virksomheten bruker.

## Valgt konsept

- Problem: En melding kan være registrert som sendt i et system selv om mottakersystemet senere avviser den, og returen kan bli liggende som en teknisk melding uten tydelig eier.
- Løsningseksempel: Koble en permanent leveringsretur til riktig kontakt, marker adressen for kontroll, og la ny utsending vente til kontaktopplysningen er avklart.
- Forretningsverdi: «Fra sendt til synlig leveringsstatus.»
- Hovedbudskap: «Sendt betyr ikke alltid levert.»
- Synlig forklaring: «Fang returer og gjør neste handling synlig.»
- CTA: Se `klingsystems.no/automatisering` og finn ut hva dere kan automatisere.

Navnet, e-postadressen, klokkeslettet og returstatusen i illustrasjonen er illustrative eksempeldata. «Permanent retur» beskriver et mulig leveringsutfall, ikke en faktisk kunde, en utført utsending eller en eksisterende standardfunksjon hos Kling.

## Graph- og duplikatkontroll

Prosjektets eksisterende, skrivebeskyttede Graph API-oppsett mot konfigurert `https://graph.instagram.com` ble brukt før produksjon. Kontoen ble bekreftet som BUSINESS `@klingsystems`. De siste 14 publiserte innleggene ble hentet med media-ID, caption, medietype, permalink og tidsstempel:

- 17.10.2026, `18113489774027174`: planlagt bytte av integrasjonsnøkkel.
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

Graph viste ingen publisering for den låste måldatoen 18. oktober. Ingen Graph-skriveoperasjon ble utført.

Alle 52 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn, captioner og researchlogger før den nye filen ble lagt til. E-postdomene, statusbeskjed, skjemakvittering, kundedata, salgsoppfølging og integrasjonsfeil ble vurdert som nærliggende temaer. Det valgte innlegget gjelder spesifikt leveringsretur etter en e-postutsending og synlig oppfølging på kontaktkortet.

Komposisjoner med avsenderkart, lineære trestegsflyter, mottakerkort, kontrollporter, inspeksjonstabeller, dokumentstabler og skrå nøkkelkort ble avvist. Sluttbildet bruker i stedet en skråstilt, mørk leveringskvittering med et tydelig returstempel, en perforert skillelinje og et lyseblått kontaktkort med oppdatert status. Ingen bie brukes fordi maskoten ikke tilfører nødvendig mening til leveringsreturen, og systemillustrasjonen bærer budskapet alene.

## Produksjon og visuell QA

- `imagegen`-ferdigheten avgrenser enkle diagrammer, grensesnittgrafikk og etablerte logo- og illustrasjonssystemer til direkte, kodebasert produksjon. Sluttbildet ble derfor rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildemodell fikk gjenskape tekst, logo eller maskot.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi og returface, Sky- og Mist-systemflater, Peach-støtteflate og Gold-aksenter.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate, vannmerke eller generisk AI-estetikk.
- Førsterenderen besto originalkontrollen og den sentrerte 1:1-kontrollen. Ingen korrigeringsrunde ble brukt.
- Sluttbildet ble kontrollert i original størrelse mot de godkjente innleggene fra 14., 15., 16. og 17. oktober. Returkvitteringen, stempelet, den perforerte overgangen og kontaktkortet utgjør en ny komposisjon.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk, feil visuell stil eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG og RGB uten alfakanal.
- Viktig tekst, logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Hele logoen, hovedbudskapet, leveringsreturen, kontaktstatusen, verdibudskapet og nettadressen beholdes.
- Lokal SHA-256: `747163a78d848459613071fc96a5a9853b7759dc2efdb3112e2f826d43da8086`.
- Filstørrelse: 134 945 byte.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-10-18-leveringsretur`.
- Offentlig medie-ID: `daily-2026-10-18-leveringsretur`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-18-leveringsretur`.
- Pakkevalideringen skal finne nøyaktig én PNG, én caption og én researchfil for 2026-10-18. Captionen er 600 tegn.
- Prosjektkontroll, build, publiseringstester, diffkontroll, commit, push og offentlig bytekontroll dokumenteres i sluttverifiseringen.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne produksjonsjobben.

## Sluttverifisering

- Fullføres etter kontroll, commit, push og offentlig verifisering.
