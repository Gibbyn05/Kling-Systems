# Research og QA: Bedre flyt

## Formål

Pakken erstatter det tidligere innlegget om tastaturnavigasjon for 25. august 2026. Det nye innlegget skal gi en bredere og mer nyttig forklaring av hva Kling tilbyr: nettsider, automatisering og systemer som reduserer manuelt arbeid og gjør bedrifter enklere å drive.

## Faktagrunnlag

Budskapet er hentet direkte fra `PRODUCT.md` og `DESIGN.md`. Det brukes ingen tall, kundepåstander, resultatløfter eller eksterne fakta. Tjenestene og eksemplene samsvarer med dokumentert posisjonering:

- Nettsider: leads, booking, salg og tydelige kundereiser.
- Automatisering: e-post, oppfølging og registrering.
- Systemer: CRM, oversikt og arbeidsflyt.

## Duplikatkontroll

Konseptet er sammenlignet med de publiserte og forberedte pakkene i `assets/ads/daily`. Det skiller seg fra innleggene om samtykke, systemoverganger, avvikskontroll, rapportgrunnlag og tastaturnavigasjon. Komposisjonen med tre tydelige tjenesteområder er ikke en størrelsesvariant eller kopi av et tidligere innlegg.

## Visuell retning

- Etablert Kling-stil med varm krembakgrunn, marineblå typografi, lyseblå systemflater og gule aksenter.
- Faktisk Kling-logo brukes som bildefil, ikke generert tekst.
- Eksisterende maskotfil brukes som støttende guide, ikke som hovedmotiv.
- Budskapet viser problem, løsning og verdi uten å være avhengig av captionen.

## Gjennomført bilde-QA

- Bekreftet 1080 × 1350 piksler.
- Bekreftet RGB PNG uten alfakanal.
- Tekst, logo og meningsbærende grafikk ligger innenfor trygg sone.
- Sentrert 1:1-beskjæring beholder logo, hovedbudskap, alle tre tjenesteområder og verdibudskapet.
- Visuell kontroll er gjennomført i både 4:5-format og sentrert 1:1-format.
- Maskoten støtter resultatlinjen uten å dekke tjenestetekst.

## Teknisk QA før publisering

- `npm run check`, `npm run build`, `npm run test:instagram-publish` og `git diff --check` besto 24. august 2026.
- Lokal fil og offentlig medie-URL skal ha identisk SHA-256 etter deploy.
- Publiseringsjobben skal gjøre ny duplikatkontroll rett før Instagram-kallet.

Status etter lokal QA: KLAR FOR DEPLOY OG OFFENTLIG MEDIEKONTROLL.
