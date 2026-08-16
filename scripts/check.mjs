import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const js = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const checks = [
  [html.includes('lang="no"'), "HTML-språk er norsk"],
  [(html.match(/<h1\b/g) || []).length === 1, "Siden har nøyaktig én H1"],
  [html.includes('name="description"'), "Metabeskrivelse finnes"],
  [html.includes('aria-label="Åpne meny"'), "Mobilmenyen har tilgjengelig navn"],
  [html.includes('id="kontakt"'), "Hoved-CTA har et kontaktmål"],
  [css.includes("prefers-reduced-motion"), "Redusert bevegelse støttes"],
  [css.includes(":focus-visible"), "Synlig tastaturfokus finnes"],
  [js.includes("setCustomValidity"), "Skjemaet har norsk validering"],
];

let failed = false;
for (const [ok, label] of checks) {
  console.log(`${ok ? "✓" : "✗"} ${label}`);
  failed ||= !ok;
}
if (failed) process.exit(1);
