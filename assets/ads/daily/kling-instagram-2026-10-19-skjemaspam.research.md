# Research- og QA-logg: kontroll av automatiserte skjemainnsendinger

## Låst produksjonsramme

- Måldatoen ble låst én gang ved turn-start til 2026-10-19, kalenderdatoen i Europe/Oslo 2026-10-18 pluss én dag. Den samme datoen ble beholdt gjennom hele kjøringen.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, ingen Graph-skriveoperasjon ble utført, og ingenting ble publisert på Instagram.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet og Kling-ferdigheten for daglige Instagram-pakker ble lest før produksjon.
- Researchen var avgrenset til under 15 minutter, tre aktuelle og troverdige kilder og tre relevante produktmønstre.

## Avgrenset research

1. [Cloudflare Turnstile: Get started](https://developers.cloudflare.com/turnstile/get-started/) dokumenterer en todelt flyt der en kontroll i nettleseren oppretter et token, og serveren deretter validerer tokenet. Cloudflare presiserer at servervalidering er nødvendig for å kontrollere at tokenet er gyldig og ikke manipulert.
2. [Google reCAPTCHA: Verifying the user's response](https://developers.google.com/recaptcha/docs/verify) dokumenterer at responstokenet skal sendes til leverandørens kontrollendepunkt fra applikasjonens backend, og at tokenet er tidsbegrenset og bare kan verifiseres én gang.
3. [W3C: Inaccessibility of CAPTCHA](https://www.w3.org/TR/turingtest/) beskriver hvordan tradisjonelle interaktive CAPTCHA-oppgaver kan skape barrierer for personer med funksjonsnedsettelser. Notatet anbefaler å vurdere formål og behov nøye, bruke minst mulig nødvendig interaksjon og foretrekke ikke-interaktive tilnærminger når det er forsvarlig.

Cloudflare Turnstile, Google reCAPTCHA og W3Cs beskrevne CAPTCHA-alternativer ble kontrollert som tre relevante mønstre. Innlegget kopierer ingen produkttekst, skjermbilder eller leverandørlayout. Det lover ikke at én kontroll stopper alle roboter eller all spam, og det påstår ikke at Kling har en bestemt standardintegrasjon. Valg av kontroll, personvern, tilgjengelighet, feilhåndtering og serveroppsett må vurderes for hvert nettsted.

## Valgt konsept

- Problem: Et offentlig kontaktskjema kan motta automatiserte innsendinger som skaper støy i samme kanal som reelle kundehenvendelser.
- Løsningseksempel: La nettleseren opprette et kontrollsignal og valider dette på serveren før innsendingen sendes videre til innboksen. Bruk minst mulig nødvendig friksjon og test tilgjengeligheten.
- Forretningsverdi: «Fra åpent skjema til kontrollert mottak.»
- Hovedbudskap: «Er skjemaet åpent for roboter?»
- Synlig forklaring: «Kontroller innsendingen på serveren før den når innboksen.»
- CTA: Se `klingsystems.no/nettsider` og finn ut hva som kan forbedres.

Feltene, kontrollstatusen og innboksen i illustrasjonen er illustrative eksempeldata. Bildet beskriver et arbeidsmønster, ikke en eksisterende Kling-standardfunksjon eller en konkret kundeløsning.

## Graph- og duplikatkontroll

Prosjektets eksisterende, skrivebeskyttede Graph API-oppsett mot konfigurert `https://graph.instagram.com` ble brukt før produksjon. Kontoen ble bekreftet som BUSINESS `@klingsystems`. De siste 14 publiserte innleggene ble hentet med media-ID, caption, medietype, permalink og tidsstempel:

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
- 05.10.2026, `17879033988553987`: XML-nettstedskart.

Graph viste ett publisert innlegg 18. oktober og ingen publisering for den låste måldatoen 19. oktober. Ingen Graph-skriveoperasjon ble utført.

Alle 53 tidligere lokale PNG-pakker i `assets/ads/daily` ble kontrollert gjennom filnavn, captioner, researchlogger og visuell sammenligning før den nye filen ble lagt til. Serverside validering av obligatoriske skjemafelt, skjemakvittering, tastaturnavigasjon, duplikatvern, kundereisetest og generell integrasjonsfeil ble vurdert som nærliggende temaer. Det valgte innlegget gjelder særskilt vurdering av automatiserte innsendinger med et kontrollsignal som valideres på serveren før meldingen når innboksen.

Komposisjoner med valideringstabell, lineære trestegsflyter, mottakerkort, inspeksjonstabeller, dokumentstabler, skrå nøkkelkort og leveringskvittering ble avvist. Sluttbildet bruker i stedet et skråstilt skjemavindu, en sentral gul kontrollport og to ulike utfall mot innboks eller stopp. Ingen bie brukes fordi kontrollporten forklarer flyten uten maskot, og maskoten ville gjort motivet mindre presist.

## Produksjon og visuell QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. Ingen bildegenerering ble brukt til tekst, logo eller illustrasjon.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi og rammer, Sky- og Mist-systemflater, Peach-støtteflate og Gold-kontrollport.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate, vannmerke eller generisk AI-estetikk.
- Førsterenderen ble avvist fordi toppen av logoen ville blitt beskåret i en sentrert 1:1-versjon. Den ene tillatte korrigeringsrunden flyttet hovedkomposisjonen 20 piksler ned. Sluttrenderen besto originalkontrollen og 1:1-kontrollen.
- Sluttbildet ble kontrollert i original størrelse og i et samlet kontaktark mot de godkjente innleggene fra 16., 17. og 18. oktober. Det skrå skjemavinduet, den gule kontrollporten og det todelte utfallet utgjør en ny komposisjon.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk, feil visuell stil eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttfilen er nøyaktig 1080 × 1350 piksler, PNG og RGB uten alfakanal.
- Viktig tekst, logo og meningsbærende grafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Hele logoen, hovedbudskapet, skjemavinduet, kontrollporten, begge utfallene og verdibudskapet beholdes med mening og uten avkuttet tekst.
- Lokal SHA-256: `1fb0396bde361ec0224b3e8337348d73059e005e9ba20941ef1a2eae9a913c3f`.
- Filstørrelse: 136 708 byte.

## Leveringskontroller

- Endelig pakke skal bestå av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-10-19-skjemaspam`.
- Offentlig medie-ID: `daily-2026-10-19-skjemaspam`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-10-19-skjemaspam`.
- Pakkevalideringen fant nøyaktig én PNG, én caption og én researchfil for 2026-10-19. Captionen er 520 tegn.
- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering. Alle 6 publiseringstester besto.
- Commit, push og offentlig bytekontroll dokumenteres i sluttverifiseringen.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne produksjonsjobben.

## Sluttverifisering

- Venter på commit, push og offentlig kontroll.
