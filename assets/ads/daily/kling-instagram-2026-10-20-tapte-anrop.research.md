# Research- og QA-logg: synlig oppfølging av tapte anrop

## Låst produksjonsramme

- Måldatoen ble låst én gang ved turn-start til 2026-10-20, kalenderdatoen i Europe/Oslo 2026-10-19 pluss én dag. Den samme datoen ble beholdt gjennom hele kjøringen.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, ingen Graph-skriveoperasjon ble utført, og ingenting ble publisert på Instagram.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-ferdigheten for daglige Instagram-pakker og `imagegen`-ferdigheten ble lest før produksjon.
- Researchen var avgrenset til under 15 minutter, tre aktuelle og troverdige kilder og tre relevante produktmønstre.

## Avgrenset research

1. [Twilio: Call resource](https://www.twilio.com/docs/voice/api/call-resource) dokumenterer anropsstatuser som blant annet `completed`, `busy`, `failed` og `no-answer`, og at statusoppdateringer kan sendes til et konfigurert callback-endepunkt. Dokumentasjonen presiserer også at `completed` betyr at en forbindelse ble opprettet, men at dette kan være en person, en talemenu eller en telefonsvarer.
2. [HubSpot: Receive calls in the HubSpot browser](https://knowledge.hubspot.com/calling/receive-calls-in-hubspot?tab=tab-crm) dokumenterer at ubesvarte innkommende anrop kan logges som tapte, og at brukeren etter et anrop kan registrere utfall og opprette en oppfølgingsoppgave.
3. [Microsoft Support: View call history in the Queues app in Microsoft Teams](https://support.microsoft.com/en-us/teams/calling/view-call-history-in-the-queues-app-in-microsoft-teams) dokumenterer delt anropshistorikk for en kø, inkludert tapte anrop, og statusene unresolved, in progress og resolved for å koordinere oppfølging.

Twilio, HubSpot og Microsoft Teams Queues ble kontrollert som tre relevante produktmønstre. Innlegget kopierer ingen produkttekst, skjermbilder eller grensesnitt. Det lover ikke at alle telefoniløsninger gir de samme hendelsene, at et tapt anrop alltid kan kobles automatisk til en kjent kontakt, eller at Kling har en bestemt standardintegrasjon. Telefonikilde, datatilgang, matching, ansvar og fristregler må avklares for løsningen virksomheten bruker.

## Valgt konsept

- Problem: Et ubesvart anrop kan bli liggende i en personlig anropslogg uten en synlig eier eller avtalt frist for oppfølging.
- Løsningseksempel: Når telefoniløsningen gir en egnet status, kan hendelsen kobles til riktig kontakt og opprette en oppgave med eier, frist og status.
- Forretningsverdi: «Fra tapt anrop til avtalt oppfølging.»
- Hovedbudskap: «Hvem følger opp det tapte anropet?»
- Synlig forklaring: «Gjør et ubesvart anrop til en oppgave med eier og frist.»
- CTA: Se `klingsystems.no/automatisering` og finn ut hva dere kan automatisere.

Virksomhetsnavnet, personen, klokkeslettet og fristen i illustrasjonen er eksempeldata. Bildet beskriver et mulig arbeidsmønster, ikke en eksisterende Kling-standardfunksjon eller en konkret kundeløsning.

## Graph- og duplikatkontroll

Prosjektets eksisterende, skrivebeskyttede Graph API-oppsett mot konfigurert `https://graph.instagram.com` ble brukt før produksjon. Kontoen ble bekreftet som BUSINESS `@klingsystems`. De siste 14 publiserte innleggene ble hentet med media-ID, caption, medietype, permalink og tidsstempel:

- 19.10.2026, `18637011214063788`: kontroll av automatiserte skjemainnsendinger.
- 18.10.2026, `18646114933058314`: synlig leveringsretur for e-post.
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

Graph viste ett publisert innlegg 19. oktober og ingen publisering for den låste måldatoen 20. oktober. Ingen Graph-skriveoperasjon ble utført.

Alle 54 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn, captioner og researchlogger før den nye filen ble lagt til. Salgsoppfølging, fordeling av henvendelser, kundesak, statusbeskjed, møteoppgaver og avtalepåminnelse ble vurdert som nærliggende temaer. Det valgte innlegget gjelder særskilt et innkommende, ubesvart anrop som blir en synlig tilbakeringingsoppgave med eier og frist.

Komposisjoner med skjemavindu og kontrollport, leveringskvittering, skrå nøkkelkort, dokumentstabel, inspeksjonstabell, kalenderkort, mottakerkort og lineære trestegsflyter ble avvist. Sluttbildet bruker i stedet konsentriske anropsringer, én mørk sirkulær anropsstatus, et lite avsenderkort og en separat oppgaveflate med eier og frist. Ingen bie brukes fordi anropsikonet og oppgaveflaten forklarer sammenhengen uten maskot, og en støttefigur ville gjort motivet mindre presist.

## Produksjon og visuell QA

- `imagegen`-ferdigheten avgrenser enkle diagrammer, grensesnittgrafikk og etablerte logo- og ikonsystemer til direkte, kodebasert produksjon. Sluttbildet ble derfor rendret deterministisk i HTML og CSS med lokal Geist-font, den faktiske `assets/kling-logo-navy-transparent.png`-logoen og Phosphor-ikonet `phone-call`. Ingen bildemodell fikk gjenskape tekst, logo, ikon eller maskot.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi og anropsflate, Sky- og Mist-systemflater, Peach-støtteflate og Gold-aksenter.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate, vannmerke eller generisk AI-estetikk.
- Førsterenderen besto originalkontrollen og den sentrerte 1:1-kontrollen. Ingen korrigeringsrunde ble brukt.
- Sluttbildet ble kontrollert i original størrelse mot de godkjente innleggene fra 17., 18. og 19. oktober. De konsentriske anropsringene, den mørke sirkulære anropsstatusen, avsenderkortet og oppgaveflaten utgjør en ny komposisjon.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk, feil visuell stil eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG og RGB uten alfakanal.
- Viktig tekst, logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, anropsstatus, avsenderkort, oppgave med eier og frist og verdibudskap beholdes med mening og uten avkuttet tekst.
- Lokal SHA-256: `aa195b5241a59dc6adb56961e76cf5ad8c04a02204a51dfd78e8401f544ee1fa`.
- Filstørrelse: 144 730 byte.

## Leveringskontroller

- Endelig pakke skal bestå av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-10-20-tapte-anrop`.
- Offentlig medie-ID: `daily-2026-10-20-tapte-anrop`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-20-tapte-anrop`.
- Pakkevalidering, prosjektkontroll, build, publiseringstester, diffkontroll, commit, push, offentlig bytekontroll og avsluttende dry-run dokumenteres i sluttverifiseringen.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne produksjonsjobben.

## Sluttverifisering

- Leveransecommit `a6f758c` ble pushet direkte til `main`. Bare de tre nye pakkefilene ble staged og committet. Eksisterende, uvedkommende endringer og ukjente mapper i arbeidskopien ble bevart urørt.
- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-10-20. `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto. Alle 6 publiseringstester besto.
- Den første offentlige kontrollen svarte HTTP 404 med `x-vercel-cache: MISS` mens utrullingen fortsatt var under propagasjon. Den identiske URL-en ble kontrollert på nytt etter 15 sekunder og svarte HTTP 200 uten innlogging som `image/png`.
- Den offentlige filen er 144 730 byte, 1080 × 1350 piksler og RGB uten alfa.
- Offentlig SHA-256 samsvarer byte for byte med lokalfilen: `aa195b5241a59dc6adb56961e76cf5ad8c04a02204a51dfd78e8401f544ee1fa`.
- Avsluttende `TARGET_DATE=2026-10-20 PUBLISH_MODE=dry-run` besto med status `dry-run` for korrekt pakke, offentlig bilde, BUSINESS-kontoen `@klingsystems` og null innlegg på måldatoen. Resultatet hadde `mediaId: null` og `permalink: null`.
- Instagram-publisering er ikke utført. Ingen container ble opprettet, og `media_publish` ble ikke kalt.
