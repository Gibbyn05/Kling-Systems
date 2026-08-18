import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const contactHtml = readFileSync(new URL("../kontakt.html", import.meta.url), "utf8");
const thanksHtml = readFileSync(new URL("../takk.html", import.meta.url), "utf8");
const privacyHtml = readFileSync(new URL("../personvern.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const js = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const contactJs = readFileSync(new URL("../kontakt.js", import.meta.url), "utf8");
const contactApi = readFileSync(new URL("../api/contact.js", import.meta.url), "utf8");
const analyticsConsent = readFileSync(new URL("../analytics-consent.js", import.meta.url), "utf8");
const robots = readFileSync(new URL("../public/robots.txt", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const allPages = [html, contactHtml, thanksHtml, privacyHtml];
const checks = [
  [html.includes('lang="no"'), "HTML-språk er norsk"],
  [(html.match(/<h1\b/g) || []).length === 1, "Siden har nøyaktig én H1"],
  [html.includes('name="description"'), "Metabeskrivelse finnes"],
  [allPages.every((page) => page.includes('rel="canonical"')), "Alle sider har canonical-lenke"],
  [html.includes('type="application/ld+json"') && html.includes('"@type": "Organization"'), "Forsiden har strukturdata for virksomheten"],
  [allPages.every((page) => page.includes("NERLANDSREM SYSTEMS") && page.includes("938 135 371")), "Juridisk navn og organisasjonsnummer vises på alle sider"],
  [html.includes('"legalName": "NERLANDSREM SYSTEMS"') && html.includes('"value": "938135371"') && html.includes('"streetAddress": "Julsundet 237C"'), "Strukturdata inneholder verifisert juridisk identitet"],
  [html.includes("Molde") && html.includes("resten av Norge"), "Geografisk dekning er tydelig på forsiden"],
  [robots.includes("Sitemap: https://www.klingsystems.no/sitemap.xml"), "Robots-filen peker til sitemap"],
  [sitemap.includes("https://www.klingsystems.no/") && sitemap.includes("https://www.klingsystems.no/kontakt.html") && sitemap.includes("https://www.klingsystems.no/personvern.html"), "Sitemap inneholder offentlige sider"],
  [!sitemap.includes("takk.html"), "Sitemap utelater noindex-siden"],
  [
    ["web-enquiry", "automation-flow", "systems-workspace"].every((name) => html.includes(`kling-illustration-${name}.webp`)),
    "Tjenesteillustrasjonene bruker komprimert WebP",
  ],
  [allPages.every((page) => !page.includes("googletagmanager.com/gtag/js")), "Ingen side laster analyse før samtykke"],
  [allPages.every((page) => page.includes("./analytics-consent.js")), "Personvernvalg finnes på alle sider"],
  [allPages.every((page) => !page.includes("fonts.googleapis.com") && !page.includes("fonts.gstatic.com")), "Ingen side laster skrifter fra tredjepart"],
  [analyticsConsent.includes('const measurementId = "G-EPXJSXY17W"') && analyticsConsent.includes("document.createElement(\"script\")"), "Analyse lastes dynamisk etter samtykke"],
  [analyticsConsent.includes("consentLifetime") && analyticsConsent.includes("removeAnalyticsCookies"), "Samtykke utløper og analysekapsler kan fjernes"],
  [analyticsConsent.includes('"Tillat analyse"') && analyticsConsent.includes('"Kun nødvendige"'), "Analysevalget er tydelig og norsk"],
  [html.includes('aria-label="Åpne meny"'), "Mobilmenyen har tilgjengelig navn"],
  [html.includes('href="./kontakt.html"'), "Hoved-CTA peker til kontaktsiden"],
  [css.includes("prefers-reduced-motion"), "Redusert bevegelse støttes"],
  [css.includes(":focus-visible"), "Synlig tastaturfokus finnes"],
  [contactHtml.includes('lang="no"'), "Kontaktsiden er på norsk"],
  [(contactHtml.match(/<h1\b/g) || []).length === 1, "Kontaktsiden har nøyaktig én H1"],
  [contactHtml.includes('class="contact-form"'), "Kontaktsiden inneholder skjemaet"],
  [contactHtml.includes("./personvern.html#kontaktskjema") && contactHtml.includes("Ikke skriv sensitive personopplysninger"), "Kontaktskjemaet forklarer personvern før innsending"],
  [!html.includes('class="contact-form"'), "Forsiden inneholder ikke kontaktskjemaet"],
  [contactJs.includes("setCustomValidity"), "Skjemaet har norsk validering"],
  [contactJs.includes('fetch("/api/contact"'), "Skjemaet sender til kontaktfunksjonen"],
  [contactApi.includes("RESEND_API_KEY"), "Kontaktfunksjonen bruker sikker API-nøkkel"],
  [contactApi.includes("CONTACT_RECIPIENT_EMAIL"), "Mottaker konfigureres via miljøvariabel"],
  [contactApi.includes("reply_to: email"), "Svar går til avsenderens e-postadresse"],
  [contactApi.includes("to: [email]"), "Kunden får automatisk e-postbekreftelse"],
  [contactApi.includes('reply_to: recipient'), "Kunden kan svare direkte til Kling"],
  [contactApi.includes("Vi har mottatt henvendelsen din"), "E-postbekreftelsen har norsk innhold"],
  [contactApi.includes('"Cache-Control", "no-store, max-age=0"'), "Kontaktfunksjonen forhindrer mellomlagring"],
  [privacyHtml.includes('lang="no"'), "Personvernsiden er på norsk"],
  [(privacyHtml.match(/<h1\b/g) || []).length === 1, "Personvernsiden har nøyaktig én H1"],
  [privacyHtml.includes('id="kontaktskjema"') && privacyHtml.includes('id="informasjonskapsler"') && privacyHtml.includes('id="rettigheter"'), "Personvernsiden dekker skjema, informasjonskapsler og rettigheter"],
  [privacyHtml.includes("Vercel") && privacyHtml.includes("Resend") && privacyHtml.includes("Microsoft 365") && privacyHtml.includes("Google Analytics"), "Personvernsiden oppgir sentrale leverandører"],
  [privacyHtml.includes("Julsundet 237C, 6409 Molde"), "Personvernsiden oppgir behandlingsansvarliges adresse"],
  [allPages.every((page) => page.includes("personvern.html") && page.includes("data-open-consent")), "Alle sider har varig tilgang til personvernvalg"],
  [thanksHtml.includes('lang="no"'), "Bekreftelsessiden er på norsk"],
  [(thanksHtml.match(/<h1\b/g) || []).length === 1, "Bekreftelsessiden har nøyaktig én H1"],
  [thanksHtml.includes('name="robots" content="noindex, follow"'), "Bekreftelsessiden er skjult fra søkeresultater"],
];

let failed = false;
for (const [ok, label] of checks) {
  console.log(`${ok ? "✓" : "✗"} ${label}`);
  failed ||= !ok;
}
if (failed) process.exit(1);
