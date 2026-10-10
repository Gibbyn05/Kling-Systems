# Research- og QA-logg: periodisk tilgangsgjennomgang

## Låst produksjonsramme

- Måldato ble låst til `2026-10-11` ved turn-start i Europe/Oslo og ble ikke beregnet på nytt.
- Oppgaven er produksjon, kontroll, commit, push og offentlig medieverifisering. Publisering på Instagram er ikke autorisert og skal ikke utføres.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md` og ferdigheten `kling-instagram-daily-package` ble lest før produksjon.
- Ett konsept og én sluttpakke er laget. Det ble brukt én korrigeringsrunde.

## Valgt innsikt og budskap

Hovedbudskapet er «Hvem har fortsatt behov for tilgang?». Bildet viser en eksempelmerket gjennomgang med person, system og beslutning for tre tilganger. To tilganger beholdes, mens en ekstern tilgang fjernes etter at eier har bekreftet behovet. Verdiløftet er «Fra spredte tilganger til dokumentert gjennomgang.»

Sammenhengen i bildet er:

1. Problem: Tilganger kan bli stående når roller, prosjekter eller samarbeid endres.
2. Løsning: Samle bruker, system og beslutning i én kontrollert gjennomgang med en navngitt eier.
3. Forretningsverdi: Virksomheten får et dokumentert grunnlag for hvilke tilganger som skal beholdes eller fjernes.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer spredt informasjon, manuell oppfølging og systemer som ikke snakker sammen som typisk friksjon. Kling tilbyr automatisering, integrasjoner og skreddersydde systemer, men innlegget lover ikke at alle tilganger kan samles eller endres automatisk.

## Avgrenset research

Researchen ble avgrenset til tre troverdige kilder og to produktmønstre:

1. [NSM: Reduser risiko under ansettelsesforhold](https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-personellsikkerhet/beskytte/reduser-risisko-under-ansattelsesforhold/) anbefaler tilgangsskiller etter behov og jevnlig opprydding i tilgangsrettigheter.
2. [Microsoft Learn: Plan a Microsoft Entra access reviews deployment](https://learn.microsoft.com/en-us/entra/id-governance/deploy-access-reviews) beskriver regelmessig gjennomgang av gruppe-, applikasjons- og rolletilganger, med angitte kontrollører og beslutning om fortsatt behov.
3. [Okta: Certification campaign reviews](https://help.okta.com/en-us/Content/Topics/identity-governance/access-certification/iga-ac-about-reviewing-campaigns.htm) beskriver periodiske kontrollkampanjer der kontrollører kan godkjenne eller trekke tilbake tilgang til ressurser.

Microsoft Entra og Okta ble kontrollert som to produktmønstre. Innlegget kopierer ikke produkttekst, skjermbilder, layout eller lisensavhengige funksjonsløfter. Kildene støtter bare den generelle arbeidsmåten «kartlegg tilgang → få en ansvarlig beslutning → dokumenter utfallet». Ingen statistikk, kundecase, garanti, juridisk etterlevelsesløfte eller automatisk fjerningspåstand brukes.

## Graph- og duplikatkontroll

Den skrivebeskyttede Graph API-kontrollen ble utført mot konfigurert `https://graph.instagram.com` før produksjon. Kontoen ble bekreftet som BUSINESS `@klingsystems`. De siste 14 publiserte innleggene ble hentet:

| Dato | Media-ID | Tema |
| --- | --- | --- |
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
| 2026-09-29 | `18166326919487637` | registeroppslag |
| 2026-09-28 | `17918578896244122` | dokumentdata |
| 2026-09-27 | `18018236660945648` | duplikatvern |

Alle 45 eksisterende lokale PNG-pakker i `assets/ads/daily` ble også kontrollert. Konsepter om avslutning av arbeidsforhold, kundedata, endringshistorikk, generell avvikskontroll, dokumentversjoner, systemoverganger og dataimport ble avvist som nærliggende.

Det eldre innlegget om tilgangsavslutning starter med én registrert sluttdato og viser en trinnvis offboarding-liste. Det nye innlegget gjelder en periodisk kontroll av eksisterende tilganger uavhengig av fratredelse. Det bruker tre brede tilgangsbånd med person, system og beslutning i stedet for en oppgaveliste. Komposisjonen, hovedbudskapet og systemillustrasjonen er derfor nye i kontrollsettet.

Ingen bie brukes. En maskot tilfører ikke nødvendig informasjon til tilgangsbeslutningen, og tidligere innlegg har allerede brukt søke-, analyse-, database- og sjekklisteposer i nærliggende kontrollroller.

## Produksjon og stilkontroll

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen.
- Ingen bildegenerator fikk gjenskape tekst, logo eller maskot. `imagegen`-ferdigheten peker på kodebasert produksjon for en enkel systemillustrasjon som krever presis typografi og eksisterende merkeelementer.
- Kling Cream, Navy, Sky, Mist og Bee Gold er brukt. Bildet har ingen foto, neon, gradient eller generisk AI-estetikk.
- Førsterenderen var lesbar, men logoen lå for høyt for den sentrerte 1:1-beskjæringen og bunnlinjen lå tre piksler utenfor tryggsonen. Den ene tillatte korrigeringsrunden flyttet logoen ned og bunnlinjen opp. Konsept, tekst og hovedkomposisjon ble beholdt.
- Sluttbildet ble kontrollert i original størrelse mot innleggene fra 8., 9. og 10. oktober. Det beholder den etablerte lyse Kling-stilen, men gjentar verken KID-matchens to-kort-komposisjon, delingsvisningens metadata-til-forhåndsvisning eller dataimportens inspeksjonstabell.

## Visuell og teknisk QA

- Fil: `assets/ads/daily/kling-instagram-2026-10-11-tilgangsgjennomgang.png`
- Format: 1080 × 1350 piksler, PNG, RGB uten alfa.
- Viktig tekst, logo og grafikk ligger minst 90 piksler fra sidene og 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og visuelt kontrollert. Logo, hovedbudskap, hele tilgangsgjennomgangen og verdilinjen beholdes med mening intakt.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk eller duplikatkomposisjon ble funnet.
- SHA-256: `b06b17c0f7673898d6402b75d4ac1077d0832cc3ede024c895f6cd130baca8c5`.

## Leveringskontroller

Resultatene for pakkevalidering, prosjektkontroll, build, publiseringstest, Git-kontroll, push og offentlig medieverifisering fylles inn etter fullført leveranse. Instagram-publisering skal ikke utføres.
