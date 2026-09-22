# Research og QA: sporbar endringshistorikk

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-23, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Dette er nøyaktig én produksjonspakke. Ingen Instagram-container ble opprettet, og ingenting ble publisert.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-ferdigheten for daglige Instagram-pakker og `imagegen`-ferdigheten ble lest før produksjon.
- Researchen var avgrenset til under 15 minutter, tre troverdige kilder og tre relevante konkurrenteksempler.

## Avgrenset research

1. [Microsoft Learn: Manage Dataverse auditing](https://learn.microsoft.com/en-us/power-platform/admin/manage-dataverse-auditing) dokumenterer at revisjonslogger kan vise hvem som opprettet eller oppdaterte en post, når det skjedde, hvilke felt som ble endret og tidligere feltverdi.
2. [HubSpot Knowledge Base: View a record's property history](https://knowledge.hubspot.com/records/view-record-property-history) dokumenterer historikk med egenskap, endret verdi, dato og kilde, samt filtrering på egenskap, kilde og dato.
3. [Salesforce Help: Field History Tracking](https://help.salesforce.com/s/articleView?id=tracking_field_history.htm&language=en_US) dokumenterer sporing av feltendringer og historikk med tidligere og ny verdi, dato og brukeren som gjorde endringen.

Microsoft Dataverse, HubSpot CRM og Salesforce ble kontrollert som tre konkurrenteksempler. Kildene ble brukt for å dokumentere et etablert arbeidsflytmønster, ikke som påstander om Kling eller som visuelle forbilder. Ingen tall, kundecaser, compliance-løfter eller resultatgarantier ble brukt.

## Valgt innsikt og budskap

- Problem: Et felt i en kundepost kan være endret uten at den synlige nåverdien alene forklarer hva som skjedde.
- Løsningseksempel: Samle felt, tidligere og ny verdi, tidspunkt og kilde i en sporbar endringshistorikk.
- Forretningsverdi: Teamet får et konkret grunnlag når det må forstå en dataendring.
- Hovedbudskap: «Kundedata ble endret. Kan dere se hva som skjedde?»
- Verdilinje: «Fra ukjent endring til dokumentert historikk.»
- CTA: «Vil dere gjøre viktige dataendringer lettere å følge? Se klingsystems.no/systemer»

Virksomheten må selv avklare hvilke felt som skal logges, hvem som skal ha tilgang og hvor lenge historikken skal beholdes. Innlegget lover ikke full sporbarhet, automatisk feilretting, oppfyllelse av regelverk eller et målbart økonomisk resultat.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett mot `graph.instagram.com` ble brukt før produksjon.
- De siste 14 publiserte mediene fra BUSINESS-kontoen `@klingsystems`, fra 2026-09-04 til 2026-09-22, ble hentet med media-ID, caption, medie-URL, permalink og tidsstempel og kontrollert visuelt.
- Kontrollsettet omfattet kundesak, sikkerhetskopitest, integrasjonsfeil, tastaturskjema, returflyt, vedlikeholdsplan, responsive bilder, kvitteringskobling, avtalefrist, lagergrense, priskontroll, ordregrunnlag, timegrunnlag og møteoppgaver.
- Det fantes ingen publisering for den låste måldatoen 2026-09-23 i kontrollsettet.
- Alle 28 eksisterende lokale PNG-pakker i `assets/ads/daily` ble kontrollert før den nye filen ble lagt til.
- Temaer om motstridende kundedata, dokumentversjon, kontrollpunkt, avvik og priskontroll ble avvist som nærliggende. Innlegget om kundedata 30. august handlet om å velge riktig verdi mellom flere kilder. Dagens konsept handler i stedet om å følge én faktisk endring over tid.
- Den store forstørrelsesringen over en lineær før- og etterverdi, med en separat rad for bruker, tidspunkt og kilde, er ny i kontrollsettene. Overskrift, illustrasjon og bilde er nye.
- Maskot ble bevisst utelatt. Analysebien var brukt i det tidligere innlegget om motstridende kundedata, og en ny bie ville gjort skillet mellom temaene svakere.

## Produksjon og visuell QA

- Sluttbildet ble rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-logoen. `imagegen`-ferdigheten anbefaler direkte produksjon for enkle systemdiagrammer med krav til presis typografi og korrekt logo.
- Paletten følger `DESIGN.md`: Cream-bakgrunn, Navy-typografi, Sky- og Mist-systemflater og Gold-aksenter. Uttrykket er lyst, luftig, minimalt og forretningsorientert.
- Førsterenderen var lesbar og besto tryggsonene, men manglet den etablerte lyseblå hjørneformen. Den ene tillatte korrigeringsrunden gjeninnførte dette faste merkeelementet uten å endre budskap eller hovedkomposisjon.
- Sluttbildet ble kontrollert i original størrelse og mot de godkjente innleggene om kundesak 22. september, sikkerhetskopitest 21. september og integrasjonsfeil 20. september.
- Ingen avkuttet tekst, feil logo, hvite bakgrunnsrester, lavoppløselige elementer, meningsløs maskotbruk eller duplikatkomposisjon ble funnet.

## Format- og tryggsonekontroll

- Sluttformat: 1080 × 1350 piksler.
- PNG: RGB uten alfa.
- Viktig tekst, logo og hovedgrafikk holder minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert. Logo, hovedbudskap, systemillustrasjon og verdilinje beholdes med mening intakt.
- SHA-256: `f691603107b1e9e020eb4791b46e6a10308dbc0b54490a28266186c88e440a1f`.

## Leveringskontroller

- Pakkevalidering, prosjektkontroll, build, publiseringstest, git-kontroll, commit, push og offentlig bildeverifisering registreres etter at de er gjennomført.
- Instagram-publisering er ikke autorisert og skal ikke utføres i denne kjøringen.
