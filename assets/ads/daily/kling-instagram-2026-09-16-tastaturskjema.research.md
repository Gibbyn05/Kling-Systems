# Research og QA: tastaturtest av kontaktskjema

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-16, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Dette er nøyaktig én produksjonspakke for Kling Systems. Ingen Instagram-container er opprettet, og ingenting er publisert.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet og `imagegen`-ferdigheten ble lest før produksjon.
- Innlegget bruker bare dokumenterte, generelle påstander om tastaturbetjening, fokus og feilmeldinger. Skjemaet i bildet er tydelig merket som et eksempel.

## Avgrenset research

Researchen ble gjennomført 15.09.2026 og avgrenset til tre aktuelle, autoritative kilder:

1. [Tilsynet for universell utforming av ikt: Sjekk nettstedet ditt selv](https://www.uutilsynet.no/regelverk/sjekk-nettstedet-ditt-selv/708) anbefaler å teste Tab-rekkefølge, synlig fokus og om alle funksjonelle elementer kan nås og brukes med tastatur.
2. [W3C: Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) beskriver at funksjonalitet skal kunne betjenes med tastatur, at fokusrekkefølgen skal bevare mening og brukbarhet, og at tastaturfokus skal være synlig.
3. [W3C: Understanding Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) forklarer at automatisk oppdagede skjemafeil skal identifiseres og beskrives for brukeren med tekst.

Ingen konkurrenteksempler ble brukt. Offentlige norske veiledninger og W3C-standarden ga et mer presist grunnlag for denne konkrete kvalitetskontrollen. Ingen statistikk, kundecase, juridisk garanti eller resultatmåling er brukt i innlegget.

## Valgt innsikt og budskap

- Problem: Et kontaktskjema kan se ryddig ut ved bruk av mus, men ha ulogisk fokusrekkefølge, usynlig tastaturfokus eller uklare feilbeskjeder.
- Løsningseksempel: Test skjemaet fra første felt til sendeknappen med tastatur, vis aktivt fokus tydelig og forklar oppdagede feil med tekst.
- Forretningsverdi: Brukeren får en tydelig, forståelig vei gjennom skjemaet uten at innlegget lover en bestemt konvertering eller forretningsgevinst.
- Hovedbudskap: «Kan skjemaet brukes uten mus?»
- Støttelinje: «Følg fokus i riktig rekkefølge, vis hvor brukeren er og forklar feil med tekst.»
- Verdilinje: «En tydelig vei fra første felt til sendt skjema.»
- CTA: `klingsystems.no/nettsider`.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett ble brukt før produksjon.
- Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`.
- De 14 siste publiserte mediene ble hentet med media-ID, caption, medietype, offentlig medie-URL, permalink og tidsstempel. Kontrollsettet dekket 30.08.2026 til 15.09.2026.
- Kontrollsettet omfattet: returflyt, vedlikeholdsplan, responsive bildestørrelser, kvitteringskobling, avtalefrist, lagergrense, prisgrunnlag, ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart, salgsoppfølging, bookingendring og kundedata.
- Et kontaktark av de 14 faktiske Graph-bildene ble kontrollert visuelt. Alle 24 eksisterende lokale PNG-pakker i `assets/ads/daily` ble kontrollert i et eget kontaktark før den nye filen ble lagt til.
- Konsepter om retur, vedlikehold, responsive bilder, bilag, fakturaflyt, frister, lager, ordre, salgsoppfølging, skjemakvittering og generelle systemoverganger ble avvist som for nærliggende.
- Tastaturbetjening av kontaktskjema som hovedtema er ikke brukt i kontrollsettet. Den store fysiske Tab-tasten, den åpne fokusbanen og ett sammenhengende skjema med nummerert rekkefølge er en ny komposisjon.
- Komposisjoner med sirkulær statusbane, kalendergrid, nestede nettleserrammer, to dokumentkort med midtakse, stående mobil, tabell og en-til-mange-fordeling ble avvist.
- Alle synlige bieposer og bilder i kontrollsettene ble sammenlignet. Maskot ble bevisst utelatt fordi ingen ubrukt biepose styrket tastaturtesten uten å bli dekorativ eller konkurrere med skjemafokuset.

## Produksjon og stilkontroll

- Sluttbildet er rendret deterministisk i HTML og CSS med lokal Chrome og den faktiske `assets/kling-logo-navy-transparent.png`-ressursen.
- `imagegen`-ferdigheten peker på kodebasert rendering for enkle systemdiagrammer som krever presis tekst og korrekt logo. Ingen bildemodell fikk gjenskape logo, tekst eller maskot.
- Kling-paletten er brukt med Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate, vannmerke eller generisk AI-estetikk.
- Førsterenderen besto originalkontrollen og den sentrerte 1:1-kontrollen. Ingen korrigeringsrunde ble brukt.

## Visuell og teknisk QA

- Sluttformat: 1080 × 1350 piksler, PNG, 8-bit RGB uten alfakanal.
- SHA-256: `d9ad501a2d6a50464a3f25f5d291ea81533c220d6f897a9632f2ceefb7b16db5`.
- Filstørrelse: 109 479 byte.
- Viktig tekst, logo og systemgrafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, støttelinje, hele skjemafortellingen og verdilinjen er synlige og beholder meningen. Nettadressen ligger under kvadratets nedre kant, men er ikke nødvendig for å forstå budskapet.
- Ingen tekst er avkuttet eller dekket. Fokusmarkeringen, trinnrekkefølgen og feilteksten er lesbare. Logoen er korrekt, og bildet har ingen hvite bakgrunnsrester eller lavoppløste elementer.
- Sluttbildet ble kontrollert i original størrelse mot innleggene om returflyt 15. september, vedlikeholdsplan 14. september og responsive bilder 13. september, samt mot kontaktarkene for Graph-bildene og de lokale pakkene.
- Overskrift, tastaturtema, Tab-tast, fokusbane, skjemaillustrasjon og bilde er forskjellige fra de kontrollerte Graph-mediene og lokale pakkene.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-09-16-tastaturskjema`.
- Offentlig bilde-ID: `daily-2026-09-16-tastaturskjema`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-16-tastaturskjema`.
- Pakkevalidering, `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- Leveransecommit `41fbbce` ble pushet til `main`. Uvedkommende endringer i arbeidsområdet ble ikke staged eller committet.
- Den offentlige bilde-URL-en svarte HTTP 200 uten innlogging som `image/png`, 1080 × 1350 piksler, RGB uten alfa og 109 479 byte.
- Offentlig SHA-256 var `d9ad501a2d6a50464a3f25f5d291ea81533c220d6f897a9632f2ceefb7b16db5` og samsvarte med lokalfilen.
- Avsluttende kontroll med `TARGET_DATE=2026-09-16` og `PUBLISH_MODE=dry-run` besto for BUSINESS-kontoen `@klingsystems`. Riktig pakke, caption, offentlig bilde og duplikatstatus ble kontrollert. Ingen container ble opprettet, og ingenting ble publisert.
