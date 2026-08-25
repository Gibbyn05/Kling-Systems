import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { GET as crmGet } from "@/app/api/crm/leads/route";
import { GET as integrationsGet } from "@/app/api/settings/integrations/route";
import { GET as linksGet } from "@/app/api/attribution/links/route";

describe("API contracts", () => {
  it("BA-106 paginates and filters CRM on the server", async () => {
    const response = await crmGet(new NextRequest("http://localhost/api/crm/leads?page=2&pageSize=10&quality=high"));
    const payload = await response.json() as { page:number; pageSize:number; total:number; rows:Array<{qualityLabel:string}> };
    expect(payload.page).toBe(2); expect(payload.pageSize).toBe(10); expect(payload.rows.every((row) => row.qualityLabel === "high")).toBe(true); expect(payload.total).toBeGreaterThan(10);
  });
  it("BA-108 returns canonical tracking URLs", async () => {
    const payload = await (await linksGet()).json() as { rows:Array<{canonicalUrl:string}> };
    expect(payload.rows[0].canonicalUrl).toBe("https://klingsystems.no/r/yt-auto");
  });
  it("BA-112 never exposes full integration secrets", async () => {
    const text = JSON.stringify(await (await integrationsGet()).json());
    expect(text).not.toContain("secret_ciphertext");
    expect(text).not.toContain("access_token");
  });
});
