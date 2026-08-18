import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const contactHtml = readFileSync(new URL("../kontakt.html", import.meta.url), "utf8");
const thanksHtml = readFileSync(new URL("../takk.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const js = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const contactJs = readFileSync(new URL("../kontakt.js", import.meta.url), "utf8");
const contactApi = readFileSync(new URL("../api/contact.js", import.meta.url), "utf8");
const checks = [
  [html.includes('lang="no"'), "HTML-språk er norsk"],
  [(html.match(/<h1\b/g) || []).length === 1, "Siden har nøyaktig én H1"],
  [html.includes('name="description"'), "Metabeskrivelse finnes"],
  [html.includes('aria-label="Åpne meny"'), "Mobilmenyen har tilgjengelig navn"],
  [html.includes('href="./kontakt.html"'), "Hoved-CTA peker til kontaktsiden"],
  [css.includes("prefers-reduced-motion"), "Redusert bevegelse støttes"],
  [css.includes(":focus-visible"), "Synlig tastaturfokus finnes"],
  [contactHtml.includes('lang="no"'), "Kontaktsiden er på norsk"],
  [(contactHtml.match(/<h1\b/g) || []).length === 1, "Kontaktsiden har nøyaktig én H1"],
  [contactHtml.includes('class="contact-form"'), "Kontaktsiden inneholder skjemaet"],
  [!html.includes('class="contact-form"'), "Forsiden inneholder ikke kontaktskjemaet"],
  [contactJs.includes("setCustomValidity"), "Skjemaet har norsk validering"],
  [contactJs.includes('fetch("/api/contact"'), "Skjemaet sender til kontaktfunksjonen"],
  [contactApi.includes("RESEND_API_KEY"), "Kontaktfunksjonen bruker sikker API-nøkkel"],
  [contactApi.includes("CONTACT_RECIPIENT_EMAIL"), "Mottaker konfigureres via miljøvariabel"],
  [contactApi.includes("reply_to: email"), "Svar går til avsenderens e-postadresse"],
  [contactApi.includes("to: [email]"), "Kunden får automatisk e-postbekreftelse"],
  [contactApi.includes('reply_to: recipient'), "Kunden kan svare direkte til Kling"],
  [contactApi.includes("Vi har mottatt henvendelsen din"), "E-postbekreftelsen har norsk innhold"],
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
