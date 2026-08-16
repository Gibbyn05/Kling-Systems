# Kling Systems Design

## Visuell tese

Kling gjør arbeidsflyt synlig og forståelig. Grensesnittet bruker forbindelser, noder og bevegelige informasjonsstrømmer som et konkret bilde på hvordan Kling rydder opp i friksjon. Det unngår et generisk teknologibyrå med identiske kort og abstrakte AI-effekter.

## Fargesystem

- Kling Navy `#0F2940`: hovedtekst, navigasjon, mørke flater og primærknapper.
- Kling Sky `#8CC0EB`: forbindelser, støttende flater og interaksjon.
- Kling Mist `#BFDDF0`: rolige bakgrunner og diagramflater.
- Kling Cream `#FFF9D2`: primær lys bakgrunn og tekst på mørke flater.
- Kling Peach `#FFEBCC`: varm alternativ bakgrunn.
- Bee Gold `#FFC640`: kontrollert aksent hentet fra logoens i-prikk og maskoten.

Store flater eies av Cream, Peach eller Navy. Sky og Gold brukes for å vise retning, forbindelse og handling.

## Typografi

Hele grensesnittet bruker `Geist` med lokale fallbacks. Den variable vektbredden gir kompakte, brede overskrifter og en roligere brødtekst uten å introdusere en konkurrerende fontpersonlighet. Hovedoverskriften låses til to linjer på desktop, og brødtekst holdes under 72 tegn per linje.

## Form og komponenter

- Hjørner er tydelig avrundet, men med flere radier etter funksjon.
- Knapper er kapselrunde og har tydelige pressed-, hover- og fokusnivåer.
- Kort brukes kun for reelt avgrensede tjenester eller løsningseksempler.
- Tjenestene presenteres som tre sammenhengende horisontale paneler som utvider seg ved fokus eller pekerinteraksjon.
- Løsningsområdet er en gapless bento med navigasjon mellom fire sannferdige løsningseksempler.
- Arbeidsflyter bygges som forbindelser mellom konkrete oppgaver, ikke som dekorative dashboards.
- Skygger har både vertikal forskyvning og myk uttoning.
- Bie-maskoten brukes som guide eller forklaring i utvalgte flater, aldri som løs pynt eller i flere roller i samme seksjon.
- Forventede gevinster vises som et flatt, gapløst 2×2-register med konkrete forklaringer, ikke som svevende piller eller et dekorativt diagram.
- «Om Kling» bruker en rett, innrammet maskotflate og Phosphor-ikoner. Unngå roterte kort, gradientbakgrunner og flytende slagordmerker.

## Komposisjon

Første skjermbilde er asymmetrisk: et ultrabredt løfte på to linjer med en liten maskotillustrasjon inne i typografien, etterfulgt av CTA til venstre og et overlappende arbeidsflytkart til høyre. Videre veksler siden mellom store tekstflater, horisontale paneler, en lys før/etter-fortelling, en mørk posisjoneringsseksjon og en konsentrert kontaktavslutning.

## Bevegelse

Én sammenhengende bevegelsesidé brukes: informasjon beveger seg fra friksjon til flyt. GSAP og ScrollTrigger lar posisjoneringsteksten bli tydelig ord for ord, mens sentrale bilder skaleres og tones gjennom scrollforløpet. Noder pulserer kontrollert, linjer tegnes og maskoten vipper svakt. Alt stopper eller forenkles ved redusert bevegelse. Innhold er synlig før animasjon starter.

## Responsiv oppførsel

På mobil blir horisontale arbeidsflyter vertikale, navigasjonen blir en tilgjengelig meny, knapper får full bredde der det hjelper, og illustrasjoner får faste høydeforhold for å unngå layoutskift. Heroens diagram forenkles, men beholder samme fortelling.
