# Research og QA: synlig håndtering av integrasjonsfeil

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-20, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Dette er nøyaktig én produksjonspakke for Kling Systems. Ingen Instagram-container er opprettet, og ingenting er publisert.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet, Kling-pakkeflyten og `imagegen`-ferdigheten ble lest før produksjon.
- Innlegget bruker bare dokumenterte, generelle påstander om feilsynlighet, kjørehistorikk, ansvar og kontrollert ny kjøring. Ordreoverføringen i bildet er tydelig merket som et eksempel.

## Avgrenset research

Researchen ble gjennomført 19.09.2026 og avgrenset til to aktuelle, offisielle produktkilder:

1. [Microsoft Learn: Fix connection failures in cloud flows](https://learn.microsoft.com/en-us/power-automate/fix-connection-failures) beskriver hvordan en flyt kan stoppe på grunn av blant annet endrede ressurser, tillatelser eller forbindelser. Veiledningen anbefaler å undersøke kjørehistorikken og å sende feilvarsler til et sted der de ikke blir oversett.
2. [Zapier: What is replay?](https://help.zapier.com/hc/en-us/articles/19220226086797-What-is-replay) beskriver hvordan feilkjøringer vises i Zap-historikken og kan kjøres på nytt manuelt eller automatisk. Kilden dokumenterer også begrensninger ved ny kjøring, som støtter behovet for kontroll før handlingen gjentas.

Microsoft Power Automate og Zapier ble samtidig kontrollert som to relevante konkurrenteksempler. De ble brukt til å bekrefte et generelt mønster, ikke til å hevde at Kling leverer identiske produktfunksjoner. Ingen statistikk, kundecase, garanti eller målbart resultat er brukt.

## Valgt innsikt og budskap

- Problem: En automatisert overføring kan stoppe uten at feilen får en synlig eier eller et tydelig neste steg.
- Løsningseksempel: Samle feilen i en synlig avvikskø med årsak, ansvarlig og status, og krev kontroll før ny kjøring.
- Forretningsverdi: En skjult stopp blir til synlig oppfølging uten at innlegget lover feilfri drift eller automatisk retting.
- Hovedbudskap: «Automatiseringen stoppet. Hvem ser feilen?»
- Støttelinje: «Gjør feilen synlig, gi den en eier og kontroller før du kjører på nytt.»
- Verdilinje: «Fra skjult stopp til synlig oppfølging.»
- CTA: `klingsystems.no/automatisering`.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett ble brukt før produksjon.
- Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`.
- De 14 siste publiserte mediene ble hentet med media-ID, caption, medietype, offentlig medie-URL, permalink og tidsstempel. Kontrollsettet dekket 31.08.2026 til 16.09.2026.
- Kontrollsettet omfattet: tastaturskjema, returflyt, vedlikeholdsplan, responsive bildestørrelser, kvitteringskobling, avtalefrist, lagergrense, prisgrunnlag, ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart, salgsoppfølging og bookingendring.
- Et kontaktark av de 14 faktiske Graph-bildene ble kontrollert visuelt. Alle 25 eksisterende lokale PNG-pakker i `assets/ads/daily` ble kontrollert i et eget kontaktark før den nye filen ble lagt til.
- Konsepter om skjema, retur, vedlikehold, bilder, bilag, frister, lager, pris, ordreoppfylling, timer, møteoppgaver, kundeoppstart, salg og booking ble avvist som allerede brukt.
- Synlig feilhåndtering for en stoppet integrasjon er ikke brukt i kontrollsettet. Den skrå kildeposten, det frittstående feilpunktet og den høye avvikskøen med eier og kontrollhandling danner en ny komposisjon.
- Komposisjoner med sirkulær statusbane, kalendergrid, nestede nettleserrammer, to dokumentkort med midtakse, stående mobil, tabell og horisontal trestegsflyt ble avvist.
- `kling-bee-integration.png` brukes som en liten støttefigur ved feilpunktet. Denne bieposen var ikke brukt i de aktive lokale researchloggene eller i de 14 kontrollerte Graph-bildene. Maskoten dekker klart under 25 prosent av flaten og er ikke hovedmotivet.

## Produksjon og stilkontroll

- Sluttbildet er rendret deterministisk i HTML og CSS med lokal Chrome, lokal Geist-font, den faktiske `assets/kling-logo-navy-transparent.png`-ressursen og eksisterende `assets/mascot/kling-bee-integration.png`.
- `imagegen`-ferdigheten peker på kodebasert rendering for enkle diagrammer som krever presis tekst, korrekt logo og prosjektets eksisterende maskot. Ingen bildemodell fikk gjenskape logo, tekst eller maskot.
- Kling-paletten er brukt med Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate, vannmerke eller generisk AI-estetikk.
- Førsterenderen besto originalkontrollen og den sentrerte 1:1-kontrollen. Ingen korrigeringsrunde ble brukt.

## Visuell og teknisk QA

- Sluttformat: 1080 × 1350 piksler, PNG, 8-bit RGB i sRGB uten alfakanal.
- SHA-256: `dc6675e353c29b0c65cac2a2d6a3e67b30c48f2db58c00327e8e5bf697bd0af0`.
- Filstørrelse: 124 277 byte.
- Viktig tekst, logo og systemgrafikk ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn.
- En sentrert 1080 × 1080-beskjæring fra y=135 til y=1215 ble generert og kontrollert visuelt. Logo, hovedbudskap, støttelinje, hele feilflyten, verdilinjen og nettadressen er synlige og beholder meningen.
- Ingen tekst er avkuttet eller dekket. Feilpunkt, årsak, ansvarlig, status og kontrollhandling er lesbare. Logoen er korrekt, maskoten har ren transparent kant, og bildet har ingen hvite bakgrunnsrester eller lavoppløste elementer.
- Sluttbildet ble kontrollert i original størrelse mot innleggene om tastaturskjema 16. september, returflyt 15. september og vedlikeholdsplan 14. september, samt mot kontaktarkene for Graph-bildene og de lokale pakkene.
- Overskrift, integrasjonsfeiltema, skrå feilbane, vertikal avvikskø, biepose og bilde er forskjellige fra de kontrollerte Graph-mediene og lokale pakkene.

## Leveringskontroller

- Endelig pakke består av nøyaktig én PNG, én `.caption.txt` og én `.research.md` med felles datert slug `kling-instagram-2026-09-20-integrasjonsfeil`.
- Offentlig bilde-ID: `daily-2026-09-20-integrasjonsfeil`.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-20-integrasjonsfeil`.
- Pakkevalidering, `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto før levering.
- Leveransecommit `73cd447` ble pushet til `main`. Uvedkommende endringer i arbeidsområdet ble ikke staged eller committet.
- Den offentlige bilde-URL-en svarte HTTP 200 uten innlogging som `image/png`, 1080 × 1350 piksler, RGB uten alfa og 124 277 byte.
- Offentlig SHA-256 var `dc6675e353c29b0c65cac2a2d6a3e67b30c48f2db58c00327e8e5bf697bd0af0` og samsvarte med lokalfilen.
- Avsluttende kontroll med `TARGET_DATE=2026-09-20` og `PUBLISH_MODE=dry-run` besto for BUSINESS-kontoen `@klingsystems`. Riktig pakke, caption, offentlig bilde og duplikatstatus ble kontrollert. Ingen container ble opprettet, og ingenting ble publisert.
