import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  findDailyPackage,
  osloDate,
  readPngDimensions,
  validateCaption,
} from "./publish-instagram.mjs";
import { validateGithubClaims } from "./github-oidc.mjs";

const makePngHeader = (width = 1080, height = 1350) => {
  const image = Buffer.alloc(24);
  Buffer.from("89504e470d0a1a0a", "hex").copy(image, 0);
  image.writeUInt32BE(13, 8);
  image.write("IHDR", 12, "ascii");
  image.writeUInt32BE(width, 16);
  image.writeUInt32BE(height, 20);
  return image;
};

const makePackage = async (root, slug = "test") => {
  const directory = join(root, "assets/ads/daily");
  await mkdir(directory, { recursive: true });
  const base = `kling-instagram-2026-08-25-${slug}`;
  await Promise.all([
    writeFile(join(directory, `${base}.png`), makePngHeader()),
    writeFile(
      join(directory, `${base}.caption.txt`),
      "Dette er en norsk tekst med en rolig invitasjon. Les mer på klingsystems.no/nettsider.\n\n#nettsider",
    ),
    writeFile(join(directory, `${base}.research.md`), `# Research og QA\n\n${"Dokumentert kontroll. ".repeat(20)}`),
  ]);
};

test("leser PNG-dimensjoner fra IHDR", () => {
  assert.deepEqual(readPngDimensions(makePngHeader()), { width: 1080, height: 1350 });
  assert.throws(() => readPngDimensions(Buffer.from("ikke png")), /gyldig PNG/);
});

test("beregner dato i Europe/Oslo", () => {
  assert.equal(osloDate("2026-08-24T22:30:00Z"), "2026-08-25");
});

test("finner nøyaktig én komplett dags-pakke", async () => {
  const root = await mkdtemp(join(tmpdir(), "kling-instagram-test-"));
  await makePackage(root);
  const dailyPackage = await findDailyPackage({ root, targetDate: "2026-08-25" });
  assert.equal(dailyPackage.mediaId, "daily-2026-08-25-test");
  assert.equal(dailyPackage.imageName, "kling-instagram-2026-08-25-test.png");
});

test("stopper når flere bildekandidater finnes", async () => {
  const root = await mkdtemp(join(tmpdir(), "kling-instagram-test-"));
  await makePackage(root, "en");
  await makePackage(root, "to");
  await assert.rejects(
    findDailyPackage({ root, targetDate: "2026-08-25" }),
    /Fant 2 bildekandidater/,
  );
});

test("avviser mer enn tre emneknagger", () => {
  assert.throws(
    () => validateCaption(
      "Dette er en norsk tekst med lenke til klingsystems.no. #en #to #tre #fire",
      `# Research og QA\n${"Dokumentert kontroll. ".repeat(20)}`,
    ),
    /maksimalt tre/,
  );
});

test("godtar bare riktig GitHub workflow på main", () => {
  const claims = {
    repository: "Gibbyn05/Kling-Systems",
    ref: "refs/heads/main",
    workflow_ref: "Gibbyn05/Kling-Systems/.github/workflows/publish-instagram.yml@refs/heads/main",
    event_name: "schedule",
  };
  assert.equal(validateGithubClaims(claims), claims);
  assert.throws(
    () => validateGithubClaims({ ...claims, ref: "refs/heads/feature" }),
    /ikke fra main/,
  );
});
