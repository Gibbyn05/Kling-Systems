import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const osPath = (path: string) => `/OS${path}`;

const routes: Array<[string,string]> = [
  ["/overview","Oversikt"],["/analytics","Analyse"],["/tasks","Oppgaver"],["/income","Inntekt"],["/crm","CRM"],
  ["/clients","Kunder"],["/subscriptions","Abonnementer"],["/team","Team"],["/sops","SOP-bibliotek"],["/context","Kontekst"],
  ["/marketing/youtube","YouTube"],["/marketing/instagram","Instagram"],["/marketing/attribution","Attribusjon"],["/marketing/email","E-post"],
  ["/followups","Oppfølging"],["/ai-ceo","AI CEO"],["/settings","Innstillinger"],
];

test("BA-201 every navigation page exists", async ({ page }) => {
  await page.goto("/OS");
  await expect(page).toHaveURL(/\/OS\/overview$/);
  for (const [route, heading] of routes) {
    await page.goto(osPath(route));
    await expect(page.getByRole("heading", { name: heading, exact: true }).first()).toBeVisible();
    await expect(page.getByText("Demo", { exact: true }).first()).toBeVisible();
  }
});

test("BA-202 and BA-203 overview ranges and drill-down", async ({ page }) => {
  await page.goto(osPath("/overview?range=today"));
  await expect(page.getByRole("button", { name: /Bookede samtaler/ })).toContainText("2");
  await page.getByRole("button", { name: "7 dager" }).click();
  await expect(page).toHaveURL(/range=7d/);
  await expect(page.getByRole("button", { name: /Bookede samtaler/ })).toContainText("4");
  await page.getByRole("button", { name: "30 dager" }).click();
  await expect(page.getByRole("button", { name: /Bookede samtaler/ })).toContainText("6");
  await page.getByRole("button", { name: /Bookede samtaler/ }).click();
  await expect(page.getByRole("dialog")).toContainText("Bookede samtaler");
});

test("BA-204 through BA-209 operational and content drill-downs", async ({ page }) => {
  await page.goto(osPath("/analytics?range=all"));
  await page.getByRole("button", { name: "youtube" }).click();
  await expect(page.getByRole("dialog")).toContainText("automation-guide");
  await page.goto(osPath("/income"));
  await page.getByRole("button", { name: "Vis forfalte" }).click();
  await expect(page.getByRole("dialog")).toContainText("92 dager");
  await expect(page.getByRole("dialog")).toContainText("55 dager");
  await expect(page.getByRole("dialog")).toContainText("37 dager");
  await page.goto(osPath("/crm"));
  await page.getByRole("searchbox", { name: "Søk i CRM" }).fill("Anna");
  await expect(page.getByRole("button", { name: /Anna Solheim/ }).first()).toBeVisible();
  await page.goto(osPath("/marketing/youtube"));
  for (const label of ["Alle videoer","Over CTR-snitt","Under CTR-snitt","Nye publikumsmagneter","Publikumsvarmere","Hook-vinnere","Beste salgsvideoer"]) await expect(page.getByRole("button", { name: label })).toBeVisible();
  await page.getByRole("button", { name: "Generer 9 ideer" }).click();
  await expect(page.getByText("9 ideutkast")).toBeVisible();
  await expect(page.getByText(/^Idé /)).toHaveCount(9);
  await page.goto(osPath("/marketing/instagram"));
  await page.getByRole("button", { name: "DM-leads" }).click();
  for (const label of ["Høy","Middels","Lav","Ikke vurdert"]) await expect(page.getByRole("button", { name: label })).toBeVisible();
});

test("BA-210 through BA-214 safe marketing and follow-up actions", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto(osPath("/marketing/attribution"));
  await page.getByRole("button", { name: "Sporingslenker" }).click();
  await page.getByRole("button", { name: "Kopier YouTube automasjonsguide" }).click();
  await expect(page.getByRole("status")).toContainText("kopiert uten navigasjon");
  await page.goto(osPath("/marketing/email"));
  await page.getByRole("button", { name: "Den skjulte kostnaden ved manuell leadoppfølging" }).click();
  await expect(page.getByRole("dialog")).toContainText("Mange henvendelser");
  await page.goto(osPath("/followups"));
  await page.getByRole("button", { name: "Aktive kunder" }).click();
  await page.getByRole("checkbox", { name: "Velg Conor Walsh" }).check();
  await page.getByRole("button", { name: "Forhåndsvis 1" }).click();
  await expect(page.getByText(/Hei Conor/).first()).toBeVisible();
  await page.getByRole("button", { name: "Gå til siste bekreftelse" }).click();
  await expect(page.getByRole("dialog")).toContainText("Bekreft demo-sending til 1 mottakere");
  await page.getByRole("button", { name: "Bekreft send til 1" }).click();
  await expect(page.getByText("Demo sendt")).toBeVisible();
});

test("BA-215 and BA-216 AI uses evidence and confirms actions", async ({ page }) => {
  await page.goto(osPath("/ai-ceo"));
  await page.getByRole("button", { name: "Analyser" }).click();
  await expect(page.getByText(/NOK 25 000 i tre forfalte fakturaer/)).toBeVisible();
  await expect(page.getByText(/Attribusjon: Dekningen er under terskelen/)).toBeVisible();
  await page.getByRole("button", { name: "Se og bekreft" }).last().click();
  await expect(page.getByRole("dialog")).toContainText("Payload");
  await page.getByRole("button", { name: "Bekreft handling" }).click();
  await expect(page.getByRole("status")).toContainText("bekreftede demohandlingen");
});

test("BA-217 through BA-219 responsive, accessible and offline-safe", async ({ page, context }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(osPath("/overview"));
  await expect(page.getByRole("button", { name: "Åpne navigasjon" })).toBeVisible();
  await page.getByRole("button", { name: "Åpne navigasjon" }).click();
  await expect(page.getByRole("navigation", { name: "Hovednavigasjon" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Lukk navigasjon" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.getByRole("link", { name: "Innstillinger" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Lukk navigasjon" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Åpne navigasjon" })).toBeFocused();
  await page.setViewportSize({ width: 1280, height: 900 });
  const results = await new AxeBuilder({ page }).exclude(".recharts-wrapper").analyze();
  expect(results.violations.filter((violation) => violation.impact === "critical")).toEqual([]);
  await context.setOffline(true);
  await expect(page.getByText("Frakoblet data")).toBeVisible();
  await context.setOffline(false);
  await page.goto(osPath("/followups"));
  await expect(page.getByRole("option", { name: "WhatsApp, ikke konfigurert" })).toHaveAttribute("disabled", "");
});
