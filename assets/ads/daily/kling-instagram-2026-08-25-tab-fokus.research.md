# Research- og QA-logg: 25. august 2026

Produksjon, research og kontroll ble fullført 24. august 2026 i Europe/Oslo. Måldatoen ble låst til neste kalenderdag ved kjørestart: 25. august 2026. Dette er kun en produksjonspakke. Ingenting ble publisert på Instagram.

## Dagens kundeverdi

En liten eller mellomstor bedrift kan gjøre en enkel førstesjekk av egen nettside uten spesialverktøy: Legg bort musen og bruk tastaturet. Hvis meny, skjema eller knapper ikke kan nås, fokusmarkeringen ikke er synlig, eller rekkefølgen er ulogisk, finnes det en konkret barriere som bør undersøkes. Dette er en avgrenset test, ikke en påstand om full WCAG-samsvar eller juridisk etterlevelse.

## Valgt konsept

Hovedbudskapet er «Kan nettsiden brukes uten mus?». En stor Tab-tast med en tydelig fokusramme viser løsningen direkte. Teksten «Trykk Tab. Følg fokuset.» kobler handlingen til verdien «Synlig fokus gjør veien til handling tydelig.» Sammenhengen mellom problem, løsning og forretningsverdi er forståelig uten caption.

Konseptet støtter Klings dokumenterte nettsidetjeneste og prinsippene om tydelighet, tilgjengelighet og praktisk verdi. Det lover ikke resultater, sertifisering eller en full tilgjengelighetskontroll.

## Avgrenset research

Tre aktuelle og troverdige kilder ble kontrollert 24.08.2026:

- [Tilsynet for universell utforming av ikt: 12 ting du som designer kan gjøre for å sikre tilgjengelighet](https://www.uutilsynet.no/uubloggen/gjesteblogg-12-ting-du-som-designer-kan-gjore-sikre-tilgjengelighet/3201), publisert 04.06.2026. Artikkelen anbefaler tastaturnavigasjon og kontroll av synlig fokus, logisk fokusrekkefølge og funksjonalitet med tastatur.
- [Tilsynet for universell utforming av ikt: Tastaturnavigasjon](https://www.uutilsynet.no/veiledning/tastaturnavigasjon/37), kontrollert 24.08.2026. Veiledningen beskriver hvorfor innhold skal kunne nås og brukes med tastatur.
- [W3C: Understanding Success Criterion 2.1.1, Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html), kontrollert 24.08.2026. W3Cs forklaring støtter prinsippet om at funksjonalitet skal kunne betjenes gjennom et tastaturgrensesnitt.

## Konkurrenteksempler

To relevante eksempler ble kontrollert, innenfor grensen på tre:

- [Uniweb: Universell utforming av nettsider](https://www.uniweb.no/nettside/universell-utforming-nettsider/) bruker en bred guide med sjekklister for flere typer testing. Tastaturtest er ett punkt blant mange.
- [Knowit: Universell utforming i Knowit](https://www.knowit.no/hva-vi-tilbyr/design-og-brukeropplevelse/universell-utforming-i-knowit/) presenterer tilgjengelighet som et bredt fag- og tjenesteområde gjennom prosjektløpet.

Innholdsgapet er ett enkelt spørsmål som en bedrift kan teste med en gang, uten at innlegget reduserer universell utforming til en garanti. Ingen konkurrenttekst, påstand eller layout er kopiert.

## Kontroll av de siste Instagram-innleggene

Den eksisterende, skrivebeskyttede Instagram Graph API-oppsettet ble brukt 24.08.2026. Endepunktet ble forespurt med grense 14 og feltene media-ID, caption, medietype, medie-URL, permalink, tidsstempel og videominiatyr. Kontoen `@klingsystems` hadde åtte medier totalt, så kontrollen dekket alle tilgjengelige innlegg:

- 24.08.2026, media-ID `18621631951027074`: mørk 4:5-komposisjon om gjentakende rapportering, med logo og kategori øverst, stor overskrift, lys illustrasjonsflate og verdifelt nederst.
- 23.08.2026, media-ID `17920119327426410`: kremfarget 4:5-innlegg om automatisert rutine med menneskelig kontrollpunkt for avvik.
- 22.08.2026, media-ID `18132336493653240`: ferskenfarget 4:5-innlegg om friksjon mellom systemer, med to systemmoduler og manuelt mellomledd.
- 21.08.2026, media-ID `18101872786969265`: kremfarget 4:5-sjekk av samtykkebanner, med to like valg og tre kontroller.
- 21.08.2026, media-ID `18135903139614851`: kvadratisk kremflate med sentrert logo, dokument, tannhjul, hake, tre fliser og flygende bie.
- 20.08.2026, media-ID `17903404722517974`: lys blå, stående arbeidsflyt der én henvendelse forgrenes til fire oppgaver.
- 19.08.2026, media-ID `18205765591363632`: mørk Reel med generelt tjenestebudskap og flytende oppgavekort.
- 18.08.2026, media-ID `18161265598489008`: kvadratisk introduksjon med tre tjenestekort, stor sentrert logo og stor bie.

Konsepter og budskap om rapportbygging, samtykke, systemoverganger, henvendelsesforgrening, generelt rutinearbeid, menneskelig avvikskontroll og generelle flytpåstander ble avvist. Komposisjoner med tre tjenestekort, fireveis forgrening, stor sentrert logo og gjenbruk av tidligere arbeidsflytmoduler ble også avvist.

En tidligere klargjort pakke for 25. august brukte en av disse komposisjonene. Den ble derfor tatt ut av aktiv mappe og bevart uendret under `assets/ads/daily/archive/2026-08-25-superseded-after-feed-check/`. En senere mørk variant ble også arkivert under `assets/ads/daily/archive/2026-08-25-superseded-brand-style/` fordi den brøt med den etablerte Kling-profilen. Den aktive pakken bruker i stedet den dokumenterte, lyse profilen med krembakgrunn, marineblå typografi, lyseblå systemgrafikk, gule detaljer og den faktiske bien. Selve motivet er fortsatt nytt: en nettleserflate med tre fokuspunkter, synlig fokusramme og Tab-tast.

## Bildeproduksjon

Den innebygde bildemodellen ble brukt til konseptutforsking av en tekstfri nettleser- og Tab-illustrasjon. Modellen klarte ikke kravet om transparent bakgrunn etter én korrigeringsrunde, og modellresultatet ble derfor avvist fra sluttfilen.

Sluttfilen ble rendret deterministisk med eksakt norsk tekst, Geist-typografi, den faktiske `kling-logo-navy-transparent.png`-ressursen og den faktiske `kling-bee-fast.png`-ressursen. Nettleserflaten, fokusrammen, Tab-tasten og navigasjonsbanen er bygget som rene grensesnittelementer. Én korrigeringsrunde flyttet verditekst og bie opp slik at den sentrerte 1:1-beskjæringen beholder hele budskapet.

## Format- og kvalitetskontroll

1. Sluttfilen er visuelt kontrollert i original størrelse og er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
2. Viktig tekst, logo og den forklarende nettleserflaten ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn. Bien og de korte fartslinjene er dekorative og kan ligge nærmere kanten uten at mening går tapt.
3. En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert. Hele logoen, hovedbudskapet, Tab-tasten, fokusrammen, instruksjonen og verdien er synlige og beholder meningen.
4. Bildet bruker Kling Navy `#0F2940`, Kling Sky `#8CC0EB`, Kling Cream `#FFF9E8` og Bee Gold `#FFC640`, samt riktig logoressurs. Det finnes ingen modellgenerert eller feil logo.
5. Den faktiske bien er brukt som et støttende merkeelement nederst til høyre. Den bærer ikke budskapet alene og dominerer ikke komposisjonen.
6. Ingen avkuttet tekst, hvite bakgrunnsrester, lavoppløste elementer, vannmerker, falsk typografi, meningsløs maskotbruk eller duplikatmotiver ble funnet.
7. Sluttfilens SHA-256 er `e289911387903f1ddd4216c862bf33d9bc7bafdd03da0c02e993714ce7449959`.
8. Captionen inneholder ingen statistikk, kundecaser, garantier, overdrevne løfter eller påstand om full WCAG-samsvar.
