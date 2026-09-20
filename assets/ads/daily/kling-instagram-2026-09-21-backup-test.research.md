# Research og QA: test av sikkerhetskopi

## Låst produksjonsramme

- Måldatoen ble låst én gang ved starten av kjøringen til 2026-09-21, kalenderdatoen i Europe/Oslo ved turn-start pluss én dag.
- Dette er nøyaktig én produksjonspakke for Kling Systems. Ingen Instagram-container ble opprettet, og ingenting ble publisert.
- `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, automasjonsminnet og Kling-ferdigheten for daglige Instagram-pakker ble lest før produksjon.
- Budskapet bruker dokumenterte, generelle råd om sikkerhetskopiering og gjenoppretting. Det lover ikke sikkerhet, oppetid, gjenopprettingstid eller et bestemt økonomisk resultat.

## Avgrenset research

Researchen ble gjennomført 20.09.2026 og avgrenset til tre troverdige kilder:

1. [NSM: Sikkerhetstiltak mot digital utpressing og andre angrep](https://nsm.no/fagomrader/digital-sikkerhet/rad-og-anbefalinger-innenfor-digital-sikkerhet/digital-utpressing/sikkerhetstiltak-mot-digital-utpressing-og-andre-angrep) anbefaler rutiner for sikkerhetskopiering og gjenoppretting, og at virksomheten øver på og måler arbeidet med gjenoppretting.
2. [NSM: Grunnprinsipper for IKT-sikkerhet, versjon 2.1](https://nsm.no/getfile.php/1313975-1717589722/NSM/Filer/Dokumenter/Veiledere/NSMs%20Grunnprinsipper%20for%20IKT-sikkerhet%20v2.1.pdf) anbefaler regelmessige gjenopprettingstester for å verifisere at sikkerhetskopien fungerer.
3. [Microsoft Learn: Architecture strategies for designing a reliability testing strategy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/reliability-test) beskriver at sikkerhetskopi- og gjenopprettingstester bør validere både gjenopprettingsprosessen og integriteten og fullstendigheten i dataene, helst i et miljø adskilt fra produksjon.

Kildene støtter det generelle kontrollpunktet i innlegget. Microsofts veiledning ble også kontrollert som ett relevant produkteksempel. Ingen produkttekst, skjermbilder, layout, tall eller resultatpåstander er kopiert. Ingen andre konkurrenteksempler var nødvendige.

## Valgt innsikt og budskap

- Problem: En fullført sikkerhetskopiering bekrefter ikke alene at kopien kan gjenopprettes og brukes.
- Løsningseksempel: Gjennomfør en planlagt test i et avgrenset miljø og kontroller både gjenoppretting og utvalgte data.
- Forretningsverdi: Virksomheten får et synlig kontrollpunkt før kopien må brukes i en reell hendelse.
- Hovedbudskap: «Sikkerhetskopien finnes. Kan den gjenopprettes?»
- Verdilinje: «Fra lagret kopi til testet gjenoppretting.»
- CTA: Kartlegg kontrollpunktene rundt kritiske systemer på `klingsystems.no/systemer`.

## Graph- og duplikatkontroll

- Prosjektets eksisterende, skrivebeskyttede Instagram Graph API-oppsett mot `graph.instagram.com` ble brukt før produksjon.
- Kontoen ble bekreftet som BUSINESS-kontoen `@klingsystems`.
- De 14 siste publiserte mediene ble hentet med media-ID, caption, medietype, medie-URL, permalink og tidsstempel. Kontrollsettet dekket publiseringer fra 01.09.2026 til og med 20.09.2026.
- Kontrollsettet omfattet integrasjonsfeil, tastaturtest av skjema, returflyt, vedlikeholdsplan, responsive bilder, kvitteringskobling, avtalefrist, lagergrense, priskontroll, ordregrunnlag, timegrunnlag, møteoppgaver, kundeoppstart og salgsoppfølging.
- De 14 faktiske Graph-bildene ble lastet ned og kontrollert visuelt. Alle 26 eksisterende lokale PNG-pakker i `assets/ads/daily` ble også kontrollert før den nye filen ble lagt til.
- Konsepter om integrasjonsfeil, avvik, generelle systemoverganger, vedlikeholdsfrister og dokumentkontroll ble avvist som for nærliggende.
- Gjenopprettingstest, den mørke kopibeholdningen, den gule uttrekkbare datastripen og det avgrensede testpanelet er ikke brukt i kontrollsettet. Komposisjonen unngår nylige sirkulære statusbaner, kalenderflater, skjemaer, dokumentpar, fremdriftsrailer og en-til-mange-flyter.
- Maskot ble bevisst utelatt. Ingen biepose styrket historien uten å bli dekorativ eller gjenta en tidligere rolle.
- Det fantes ingen publisering for den låste måldatoen 2026-09-21 da kontrollen ble utført.

## Produksjon og visuell QA

- Sluttbildet er rendret deterministisk i HTML og CSS med lokal Geist-font og den faktiske `assets/kling-logo-navy-transparent.png`-ressursen. Logo og tekst er ikke generert av en bildemodell.
- Paletten følger `DESIGN.md`: Cream `#FFF9D2`, Navy `#0F2940`, Sky `#8CC0EB`, Mist `#BFDDF0`, Peach `#FFEBCC` og Gold `#FFC640`.
- Uttrykket er lyst, luftig, minimalt og forretningsorientert, uten fotografi, neon, mørk fullflate eller generisk AI-estetikk.
- Førsterenderen ble avvist fordi forbindelsen gikk over teksten i testresultatet. Den ene korrigeringsrunden la forbindelsen bak resultatpanelet og flyttet innholdet slik at hele logoen beholdes i sentrert 1:1-beskjæring.
- Sluttbildet ble kontrollert i original størrelse mot publiserte innlegg fra 13., 14., 15., 16. og 20. september. Det har samme etablerte merkevaresystem, men annet hovedbudskap, annen systemillustrasjon og annen komposisjon.
- Ingen tekst er avkuttet, logoen er korrekt, og bildet har ingen hvite bakgrunnsrester eller lavoppløselige elementer.

## Format- og tryggsonekontroll

- PNG: 1080 × 1350 piksler, RGB uten alfa.
- Sidekantene for viktig innhold er minst 94 piksler, over kravet på 90 piksler.
- Logoen starter 140 piksler fra toppen. Alt viktig innhold holder minst 120 piksler fra topp og bunn i originalformatet.
- En sentrert 1080 × 1080-beskjæring ble generert og kontrollert visuelt. Logo, hovedbudskap, systemillustrasjon, verdilinje og mening beholdes.
- Pakken inneholder én PNG, én caption-fil og denne research- og QA-loggen for 2026-09-21.

## Bygg, deploy og offentlig kontroll

- Pakkevalideringen i `scripts/publish-instagram.mjs`, `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto.
- De tre leveransefilene ble committet som `6d9408c` og pushet til `main`. Eksisterende, uvedkommende arbeidsfiler ble ikke lagt til eller endret av leveransen.
- Offentlig bilde-URL: `https://www.klingsystems.no/api/instagram-media?id=daily-2026-09-21-backup-test`.
- Den offentlige URL-en svarte HTTP 200 som `image/png`, 122 941 byte, uten innlogging.
- Lokal og offentlig SHA-256 er identisk: `80f88b326b77a085d07aff6cd661d01fc576f0b5ddd4d8f42c19c8027d9ef21d`.
- Avsluttende `PUBLISH_MODE=dry-run` besto for BUSINESS-kontoen `@klingsystems`, korrekt pakke og måldato. Ingen container ble opprettet, og ingenting ble publisert på Instagram.
