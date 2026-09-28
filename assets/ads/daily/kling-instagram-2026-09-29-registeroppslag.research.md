# Research- og QA-logg: 29. september 2026

Måldatoen ble låst ved kjørestart 28. september 2026 i Europe/Oslo: neste kalenderdag er 29. september 2026. Den samme datoen ble brukt gjennom hele kjøringen. Dette er kun en produksjonspakke. Ingenting ble publisert på Instagram.

## Dagens kundeverdi

Når en virksomhet registreres som kunde eller leverandør, kan navn, organisasjonsform og adresse bli tastet inn manuelt selv om organisasjonsnummeret allerede identifiserer virksomheten entydig. En integrasjon kan bruke organisasjonsnummeret til å slå opp avtalte virksomhetsfelt og fylle dem inn eller foreslå dem i det aktuelle systemet.

Innlegget lover ikke at alle felter alltid finnes, at registerdata alene er nok for kundekontroll, eller at eksisterende data bør overskrives uten regler og kontroll. Løsningen må håndtere ugyldige nummer, manglende verdier, endringer og virksomhetens valgte feltmapping.

Konseptet er relevant for Kling fordi `PRODUCT.md` dokumenterer manuell registrering, spredt informasjon og systemer som ikke snakker sammen som typiske problemer. Kling tilbyr integrasjoner, automatisering og skreddersydde systemer, og starter med den faktiske arbeidsflyten.

## Valgt konsept

Hovedbudskapet er «Skrives firmadata fortsatt inn for hånd?» Bildet viser en vertikal, eksempelmerket oppslagsflyt:

1. Problem: Firmadata skrives inn felt for felt selv om organisasjonsnummeret allerede finnes.
2. Løsning: Bruk organisasjonsnummeret til å hente avtalte felter fra Enhetsregisteret.
3. Forretningsverdi: «Fra organisasjonsnummer til utfylt firmakort.»

Budskapet kan forstås uten caption. Formuleringen «avtalte felter» avgrenser løsningen til opplysninger virksomheten faktisk har valgt å hente og bruke.

## Avgrenset research

Researchen ble avgrenset til tre aktuelle, troverdige kilder og gjennomført innenfor grensen på 15 minutter:

- [Brønnøysundregistrene: Enhetsregisterets dokumentasjon for åpne data](https://data.brreg.no/enhetsregisteret/api/dokumentasjon/no/index.html) beskriver søk etter enheter og oppslag på en spesifikk enhet med organisasjonsnummer gjennom REST-endepunktene `/api/enheter` og `/api/enheter/{orgnr}`. Dokumentasjonen viser at API-et kan levere strukturerte virksomhetsopplysninger.
- [Brønnøysundregistrene: Data om virksomheter](https://www.brreg.no/bruke-data-fra-bronnoysundregistrene/datasett-og-api/data-om-virksomheter/) opplyser at tjenesten gir et utvalg opplysninger om registrerte virksomheter, tilbyr direkte oppslag og at oppslagstjenesten leverer data i sanntid.
- [Felles datakatalog: Enhetsregisteret](https://data.norge.no/nb/datasets/fa1db7c8-209b-3654-b636-c8b4f68fd85a/enhetsregisteret) beskriver Enhetsregisteret som et register for grunndata om virksomheter og organisasjonsnummeret som en nisifret, entydig identifikator. Datasettet har åpne distribusjoner uten personopplysninger.

Kildene støtter muligheten for oppslag og maskinell gjenbruk av virksomhetsdata. Innlegget bruker ingen statistikk, kundecase, garanti eller påstand om at alle registre eller CRM-systemer kan kobles til uten tilpasning.

## Konkurrenteksempler

Tre relevante produktmønstre ble kontrollert, innenfor grensen på tre:

- [Proff API](https://apidocs.proff.no/guide/using-proffapi.html) viser et API for søk og oppslag i norske virksomheter og har en egen veiledning for CRM-integrasjon.
- [Orgdata](https://orgdata.no/) beskriver matching av organisasjonsnummer fra Brønnøysundregistrene mot bedrifter i HubSpot og konfigurerbar feltberikelse.
- [Nora CRM](https://www.noracrm.no/) beskriver et produktspecifikt mønster der firmasøk fyller et kundekort med data fra Brønnøysundregistrene.

Disse eksemplene viser at registeroppslag og CRM-berikelse er etablerte produktmønstre. Kling-innlegget kopierer ingen konkurrenttekst, layout, produktpåstand eller resultatpåstand. Det viser i stedet et nøkternt, systemuavhengig eksempel med ett organisasjonsnummer, ett definert oppslag og tre avtalte felt.

## Kontroll av de siste Instagram-innleggene

Den eksisterende, skrivebeskyttede Instagram Graph API-oppsettet ble brukt 28.09.2026 mot `https://graph.instagram.com`. Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`. De siste 14 innleggene ble hentet med media-ID, caption, medietype, medie-URL, permalink og tidsstempel:

1. 28.09, `17918578896244122`: PDF til kontrollert systemdata.
2. 27.09, `18018236660945648`: duplikatvern for gjentatt innsending.
3. 25.09, `18104109737615631`: kontrollert nettlesertest av kundereisen.
4. 24.09, `17959115856236244`: kampanjekilde inn i kundeoppfølgingen.
5. 23.09, `17874269646582579`: endringshistorikk for kundedata.
6. 22.09, `17983948482096930`: e-post til kundesak med synlig ansvar.
7. 21.09, `18244497178312011`: testet gjenoppretting fra sikkerhetskopi.
8. 20.09, `18112934824840365`: synlig oppfølging av integrasjonsfeil.
9. 16.09, `18117017515787940`: tastaturbetjening av kontaktskjema.
10. 15.09, `18091807664157779`: returflyt med lager- og refusjonsstatus.
11. 14.09, `18137200933622528`: planlagt vedlikeholdsoppgave.
12. 13.09, `18201470710372866`: responsive bildestørrelser.
13. 11.09, `18126944212764366`: kobling av kortkjøp og kvittering.
14. 09.09, `18172739419448120`: synlig avtalefrist og planlagt vurdering.

Alle 33 tidligere lokale PNG-pakker i `assets/ads/daily` og deres captions ble kontrollert før produksjon. Konsepter om motstridende kundedata, kildesporing, kundeoppstart, dokumentuttrekk, duplikatvern, systemoverganger og generell dataflyt ble avvist som nærliggende.

Det valgte konseptet skiller seg fra kundedata-innlegget 30. august: Det tidligere innlegget viser tre motstridende kilder som samles til én kontrollert kundepost. Dette innlegget viser førstegangsutfylling av et firmakort fra én definert, offentlig registerkilde. Den vertikale oppslagskanalen, den store organisasjonsnummerstripen og det utfylte firmakortet er ikke brukt i de kontrollerte innleggene. Ingen maskot brukes, så ingen biepose gjentas.

## Bildeproduksjon

Sluttbildet ble rendret deterministisk som HTML/CSS i stedet for å bruke bildegenerering. Denne metoden følger imagegen-instruksens anbefaling for enkle, kodebaserte diagrammer og sikrer eksakt norsk typografi, korrekt lokal logo og rene systemflater. Den faktiske `assets/kling-logo-navy-transparent.png`-ressursen og lokal Geist-font ble brukt direkte. Ingen modell fikk gjenskape logo eller tekst.

Førsterenderen besto den visuelle kontrollen. Ingen korrigeringsrunde ble brukt.

## Format- og kvalitetskontroll

1. Sluttfilen er visuelt kontrollert i original størrelse og er nøyaktig 1080 × 1350 piksler, 8-bit PNG, RGB uten alfa.
2. Viktig tekst, logo og meningsbærende grafikk ligger innenfor x=90–990 og y=120–1230. Ingen tekst eller grafikk er avkuttet.
3. En sentrert 1080 × 1080-forhåndsvisning ble generert og visuelt kontrollert. Logo, hovedbudskap, organisasjonsnummer, oppslagssteg, firmakort og verdibudskap er synlige og forståelige i beskjæringen.
4. Bildet bruker Kling Navy `#0F2940`, Kling Sky `#8CC0EB`, Kling Mist `#BFDDF0`, Kling Cream `#FFF9D2`, Bee Gold `#FFC640` og korrekt Kling-logo.
5. Bildet ble sammenlignet visuelt i original størrelse med innleggene fra 28. september, 24. september, 23. september og 30. august. Ingen lik overskrift, identisk komposisjon, gjenbrukt systemillustrasjon eller skalert duplikat ble funnet.
6. Ingen maskot brukes. Budskapet bæres av den konkrete systemillustrasjonen, ikke av dekorasjon.
7. Ingen hvite bakgrunnsrester, lavoppløste elementer, vannmerker, neonpreg, fotografisk uttrykk, feil logo eller uleselig tekst ble funnet.
8. Captionen er på naturlig norsk, har én relevant CTA, tre emneknagger og ingen udokumenterte tall, kundecaser, garantier eller overdrevne resultatløfter.
9. Sluttfilens SHA-256 er `7dc53ed4ac3d935ca4e3cc19d467382dcb29b85f7963a6fea9a6847d441f0315`.

## Verifisering

Den komplette pakken ble validert med `findDailyPackage` for måldatoen. `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto. Pakkevalideringen bekreftet én PNG, én caption og én researchlogg med media-ID `daily-2026-09-29-registeroppslag`.

Leveransecommit `cd31196` ble pushet til `main`. Den offentlige bilde-URL-en `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-29-registeroppslag` svarte først 404 under utrulling og deretter HTTP 200 som `image/png`. Den offentlige filen er 1080 × 1350, RGB uten alfa, 104 435 byte og har samme SHA-256 som lokalfilen.

Avsluttende `TARGET_DATE=2026-09-29 PUBLISH_MODE=dry-run` returnerte `status: dry-run` for riktig pakke. `mediaId` og `permalink` var `null`, ingen Instagram-container ble opprettet, og `media_publish` ble ikke kalt.
