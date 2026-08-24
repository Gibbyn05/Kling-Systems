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

Konsepter og budskap om rapportbygging, samtykke, systemoverganger, henvendelsesforgrening, generelt rutinearbeid, menneskelig avvikskontroll og generelle flytpåstander ble avvist. Komposisjoner med tre tjenestekort, fireveis forgrening, arbeidsflyt på lys flate, stor sentrert logo, kategori og logo øverst med illustrasjonskort og verdifelt nederst ble også avvist.

En tidligere klargjort pakke for 25. august brukte den siste av disse komposisjonene. Den ble derfor tatt ut av aktiv mappe og bevart uendret under `assets/ads/daily/archive/2026-08-25-superseded-after-feed-check/`. Den aktive pakken har en klart annen komposisjon: mørk fullflate, én stor Tab-tast med fokusramme, typografi integrert i motivet, liten logo nederst og ingen kortpanel, bunnstripe, kategori, maskot eller arbeidsflytmoduler.

## Bildeproduksjon

Den innebygde bildemodellen ble brukt én gang til en tekstfri motivkomponent. Modellen fikk beskjed om å lage én blank Tab-tast og én fokusramme på mørk marine flate i Kling-paletten, uten tekst, logo, maskot, nettsidekort, dashboard, dokumenter, diagrammer, tannhjul, avkryssingsmerker, mus, personer eller vannmerke.

Eksakt norsk tekst, `TAB`, Geist-typografi og den faktiske `kling-logo-cream-transparent.png`-ressursen ble rendret deterministisk. Én korrigeringsrunde skalerte motivet inn i tryggsonen og plasserte verditekst og logo slik at den sentrerte 1:1-beskjæringen beholdt hele budskapet.

## Format- og kvalitetskontroll

1. Sluttfilen er visuelt kontrollert i original størrelse og er nøyaktig 1080 × 1350 piksler, PNG, RGB uten alfa.
2. Viktig tekst, logo og hovedmotiv ligger minst 90 piksler fra sidene og minst 120 piksler fra topp og bunn. Den blå linjen som går ut av motivflaten er dekorativ og bærer ingen mening alene.
3. En sentrert 1080 × 1080-beskjæring ble generert og visuelt kontrollert. Hele logoen, hovedbudskapet, Tab-tasten, fokusrammen, instruksjonen og verdien er synlige og beholder meningen.
4. Bildet bruker Kling Navy `#0F2940`, Kling Sky `#8CC0EB`, Kling Cream `#FFF9D2` og Bee Gold `#FFC640`, samt riktig logoressurs. Det finnes ingen modellgenerert eller feil logo.
5. Ingen bie er brukt. Motivet fungerer uten maskot og oppfyller dermed grensen om at maskoten ikke skal dominere.
6. Ingen avkuttet tekst, hvite bakgrunnsrester, lavoppløste elementer, vannmerker, falsk typografi, meningsløs maskotbruk eller duplikatmotiver ble funnet.
7. Sluttfilens SHA-256 er `a09cca42a1a399256613ed24aacbd6f042afadf863c49b95157b9a7ffa8e8c02`.
8. Captionen inneholder ingen statistikk, kundecaser, garantier, overdrevne løfter eller påstand om full WCAG-samsvar.
