# Research og QA: duplikatvern for gjentatte innsendinger

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-27, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag. Den låste datoen ble beholdt da kalenderdatoen senere rullet over.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, og ingenting ble publisert.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-ferdigheten for daglige Instagram-pakker og `imagegen`-ferdigheten ble lest før produksjon.
- Researchen ble avgrenset til under 15 minutter, to troverdige primærkilder og to relevante produktmønstre.

## Avgrenset research

1. [Microsoft Learn: Troubleshoot Power Automate trigger problems and errors](https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-automate/flow-run-issues/triggers-troubleshoot) dokumenterer at en flyt eller handling kan bli kjørt flere ganger og gi dupliserte resultater. Microsoft anbefaler idempotent utforming som tar høyde for gjentatte inndata, for eksempel ved å kontrollere om et dokument allerede finnes eller bruke nøkkelbegrensninger for å hindre dupliserte poster.
2. [Stripe API Reference: Idempotent requests](https://docs.stripe.com/api/idempotent_requests) dokumenterer bruk av en unik idempotensnøkkel for å kjenne igjen en gjentatt forespørsel og unngå at samme opprettelse eller oppdatering utføres to ganger.

Microsoft Power Automate og Stripe API ble kontrollert som to relevante produktmønstre. Kildene dokumenterer et etablert teknisk prinsipp, men brukes ikke som påstander om en bestemt Kling-leveranse. Ingen statistikk, kundecase, garanti om fullstendig duplikatfjerning eller målbart resultat ble brukt.

## Valgt innsikt og budskap

- Problem: Den samme innsendingen kan nå en arbeidsflyt mer enn én gang og ellers utløse samme handling flere ganger.
- Løsningseksempel: Gi innsendingen en unik ID og kontroller om den allerede er behandlet før neste handling utføres.
- Forretningsverdi: En gjentatt innsending kan bli til én kontrollert sak i stedet for to parallelle oppfølgingsløp.
- Hovedbudskap: «Samme innsending kom to ganger. Blir den behandlet dobbelt?»
- Støttelinje: «La en unik ID stoppe gjentakelsen før neste handling.»
- Verdilinje: «Fra gjentatt innsending til én kontrollert sak.»
- CTA: «Har dere en flyt der samme sak kan opprettes to ganger? Se klingsystems.no og finn ut hva dere kan automatisere.»

Den unike ID-en må utformes for den faktiske kilden og arbeidsflyten. Innlegget lover ikke at alle duplikater kan oppdages, at ulike innsendinger alltid kan skilles automatisk, eller at menneskelig kontroll er unødvendig.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett mot `graph.instagram.com` ble brukt før produksjon.
- Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`.
- Det fantes ingen publisering 2026-09-26 eller for den låste måldatoen 2026-09-27.
- De siste 14 publiserte mediene, fra 2026-09-07 til 2026-09-25, ble hentet med media-ID, caption, medietype, medie-URL, permalink og tidsstempel.
- Kontrollsettet omfattet kundereisetest, kildesporing, endringshistorikk, kundesak, sikkerhetskopitest, integrasjonsfeil, tastaturskjema, returflyt, vedlikeholdsplan, responsive bilder, kvitteringskobling, avtalefrist, lagergrense og priskontroll.
- Alle 31 eksisterende lokale PNG-pakker og tilhørende researchlogger i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til.
- Konsepter om generell feilhåndtering, skjemakvittering, kundesak, integrasjonsstopp, datakvalitet og vanlige systemoverganger ble avvist som nærliggende.
- Det nye innlegget viser to fysisk atskilte, identiske ID-er som møtes i en rund likhetskontroll og gir ett resultatkort. Temaet, den todelte inngangen, ID-gjennomgangen og en-til-én-resultatet er nye i kontrollsettene.
- Maskot ble bevisst utelatt. Støttebien var brukt i innleggene om kundereisetest, kundesak og integrasjonsfeil, og ingen ubrukt biepose styrket duplikatkontrollen uten å bli dekorativ.

## Produksjon og visuell QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen.
- `imagegen`-ferdigheten peker på kodebasert produksjon når motivet er et enkelt systemdiagram med krav til presis typografi, korrekt logo og etablerte merkeelementer. Ingen bildegenerator fikk gjenskape tekst, logo eller maskot.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi, Sky- og Mist-systemflater, Peach-støtteflate og Gold-kontrollpunkt. Uttrykket er lyst, luftig, minimalt og forretningsorientert.
- Førsterenderen besto originalkontrollen og den sentrerte 1:1-kontrollen. Ingen korrigeringsrunde ble brukt.
- Sluttbildet ble kontrollert i original størrelse og mot de godkjente innleggene om kundereisetest 25. september, kildesporing 24. september, endringshistorikk 23. september og kundesak 22. september.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk, mørk eller fotografisk stil eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttformat: 1080 × 1350 piksler.
- PNG: 8-bit RGB uten alfa.
- Viktig tekst, logo og hovedgrafikk holder minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, begge innsendingene, ID-kontrollen, resultatkortet og verdilinjen beholdes med mening intakt.
- SHA-256: `dc1c9d1ba69babf0688150d9adf35c8bab9fc0f2aba75d3dd9d9446f9e1460d9`.
- Filstørrelse: 149 405 byte.

## Leveringskontroller

- Pakkevalidering, prosjektkontroll, build, publiseringstester, diffkontroll, commit, push og offentlig mediekontroll utføres etter at pakken er ferdigstilt.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne kjøringen.
