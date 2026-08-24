import { appendFile, readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const GRAPH_HOST = "https://graph.instagram.com";
const EXPECTED_USERNAME = "klingsystems";
const DAILY_DIRECTORY = "assets/ads/daily";
const PUBLIC_SITE_URL = "https://www.klingsystems.no";
const POLL_INTERVAL_MS = 10_000;
const POLL_TIMEOUT_MS = 5 * 60_000;

const wait = (duration) => new Promise((resolveWait) => setTimeout(resolveWait, duration));

export const osloDate = (value = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Oslo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(value));
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
};

export const readPngDimensions = (image) => {
  const signature = "89504e470d0a1a0a";
  if (image.length < 24 || image.subarray(0, 8).toString("hex") !== signature) {
    throw new Error("Bildet er ikke en gyldig PNG-fil.");
  }
  if (image.subarray(12, 16).toString("ascii") !== "IHDR") {
    throw new Error("PNG-filen mangler en gyldig IHDR-blokk.");
  }
  return {
    width: image.readUInt32BE(16),
    height: image.readUInt32BE(20),
  };
};

export const validateCaption = (caption, research) => {
  const hashtags = caption.match(/#[\p{L}\p{N}_]+/gu) || [];
  const norwegianMarkers = caption.match(/\b(og|det|dere|ikke|med|som|på|en|et|til|for)\b/giu) || [];

  if (!caption || [...caption].length > 2_200) {
    throw new Error("Captionen mangler eller overstiger 2200 tegn.");
  }
  if (!/klingsystems\.no(?:\/[a-z0-9-]+)?/i.test(caption)) {
    throw new Error("Captionen mangler CTA til klingsystems.no.");
  }
  if (hashtags.length > 3) {
    throw new Error(`Captionen har ${hashtags.length} emneknagger; maksimalt tre er tillatt.`);
  }
  if (norwegianMarkers.length < 3) {
    throw new Error("Captionen kunne ikke bekreftes som norsk.");
  }
  if (research.trim().length < 200 || !/(research|kilde|qa|kvalitetskontroll)/i.test(research)) {
    throw new Error("Research- og QA-loggen er for kort eller mangler dokumentasjon.");
  }
  return { hashtags };
};

export const findDailyPackage = async ({ root = process.cwd(), targetDate }) => {
  const directory = resolve(root, DAILY_DIRECTORY);
  const escapedDate = targetDate.replaceAll("-", "\\-");
  const imagePattern = new RegExp(`^kling-instagram-${escapedDate}-([a-z0-9]+(?:-[a-z0-9]+){0,7})\\.png$`);
  const entries = await readdir(directory);
  const candidates = entries
    .map((name) => ({ name, match: name.match(imagePattern) }))
    .filter((entry) => entry.match);

  if (candidates.length !== 1) {
    throw new Error(
      candidates.length === 0
        ? `Ingen ferdig Instagram-pakke finnes for ${targetDate}.`
        : `Fant ${candidates.length} bildekandidater for ${targetDate}; forventet nøyaktig én.`,
    );
  }

  const [{ name: imageName, match }] = candidates;
  const slug = match[1];
  const baseName = `kling-instagram-${targetDate}-${slug}`;
  const imagePath = resolve(directory, `${baseName}.png`);
  const captionPath = resolve(directory, `${baseName}.caption.txt`);
  const researchPath = resolve(directory, `${baseName}.research.md`);

  let image;
  let caption;
  let research;
  try {
    [image, caption, research] = await Promise.all([
      readFile(imagePath),
      readFile(captionPath, "utf8"),
      readFile(researchPath, "utf8"),
    ]);
  } catch {
    throw new Error(`Pakken ${baseName} mangler PNG, caption eller research.`);
  }

  const dimensions = readPngDimensions(image);
  if (dimensions.width !== 1080 || dimensions.height !== 1350) {
    throw new Error(`Bildet er ${dimensions.width} × ${dimensions.height}; forventet 1080 × 1350.`);
  }

  const cleanCaption = caption.trim();
  validateCaption(cleanCaption, research);

  return {
    baseName,
    caption: cleanCaption,
    image,
    imageName,
    mediaId: `daily-${targetDate}-${slug}`,
    research,
    slug,
    targetDate,
  };
};

const parseResponse = async (response, label) => {
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`${label} feilet med HTTP ${response.status}: ${result?.error?.message || "ukjent feil"}`);
  }
  return result;
};

const safeFetch = async (url, options = {}, label = "Forespørselen") => {
  const method = options.method || "GET";
  const attempts = method === "GET" ? 3 : 1;
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fetch(url, options);
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await wait(attempt * 1_000);
    }
  }

  const suffix = method === "GET"
    ? ""
    : " Forespørselen blir ikke forsøkt på nytt fordi resultatet kan være tvetydig.";
  throw new Error(`${label} fikk nettverksfeil: ${lastError?.message || "ukjent feil"}.${suffix}`);
};

const createGraphClient = ({ accessToken, userId, version }) => {
  const request = async (path, { method = "GET", fields, params = {} } = {}) => {
    const url = new URL(`${GRAPH_HOST}/${version}/${path}`);
    const body = new URLSearchParams({ ...params, access_token: accessToken });

    if (method === "GET") {
      if (fields) url.searchParams.set("fields", fields);
      for (const [key, value] of body) url.searchParams.set(key, value);
      return parseResponse(await safeFetch(url, {}, `Graph GET ${path}`), `Graph GET ${path}`);
    }

    return parseResponse(
      await safeFetch(url, { method, body }, `Graph ${method} ${path}`),
      `Graph ${method} ${path}`,
    );
  };

  const listToday = async (targetDate) => {
    const media = await request(`${encodeURIComponent(userId)}/media`, {
      fields: "id,caption,media_type,media_url,permalink,timestamp,thumbnail_url",
      params: { limit: "50" },
    });
    return media.data.filter((item) => osloDate(item.timestamp) === targetDate);
  };

  return { listToday, request };
};

const verifyPublicImage = async (dailyPackage) => {
  const imageUrl = new URL("/api/instagram-media", PUBLIC_SITE_URL);
  imageUrl.searchParams.set("id", dailyPackage.mediaId);
  const response = await safeFetch(imageUrl, {}, "Offentlig bildekontroll");
  if (!response.ok || !response.headers.get("content-type")?.startsWith("image/png")) {
    throw new Error(`Offentlig bilde svarte HTTP ${response.status} som ${response.headers.get("content-type") || "ukjent type"}.`);
  }
  const publicImage = Buffer.from(await response.arrayBuffer());
  const localHash = createHash("sha256").update(dailyPackage.image).digest("hex");
  const publicHash = createHash("sha256").update(publicImage).digest("hex");
  if (localHash !== publicHash) {
    throw new Error("Offentlig bilde samsvarer ikke med den godkjente lokalfilen.");
  }
  return { imageUrl: imageUrl.toString(), sha256: localHash };
};

const writeSummary = async (lines) => {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  await appendFile(process.env.GITHUB_STEP_SUMMARY, `${lines.join("\n")}\n`, "utf8");
};

export const publishPreparedPost = async ({
  root = process.cwd(),
  targetDate = process.env.TARGET_DATE || osloDate(),
  mode = process.env.PUBLISH_MODE || "dry-run",
  env = process.env,
} = {}) => {
  const accessToken = env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const userId = env.INSTAGRAM_USER_ID?.trim();
  const version = /^v\d+\.\d+$/.test(env.INSTAGRAM_API_VERSION || "")
    ? env.INSTAGRAM_API_VERSION
    : "v26.0";

  if (!accessToken || !userId) {
    throw new Error("INSTAGRAM_ACCESS_TOKEN eller INSTAGRAM_USER_ID mangler.");
  }
  if (!/^20\d{2}-\d{2}-\d{2}$/.test(targetDate)) {
    throw new Error("TARGET_DATE må være på formatet YYYY-MM-DD.");
  }
  if (!new Set(["dry-run", "publish"]).has(mode)) {
    throw new Error("PUBLISH_MODE må være dry-run eller publish.");
  }

  const dailyPackage = await findDailyPackage({ root, targetDate });
  const publicImage = await verifyPublicImage(dailyPackage);
  const graph = createGraphClient({ accessToken, userId, version });
  const account = await graph.request(encodeURIComponent(userId), {
    fields: "id,username,account_type",
  });

  if (account.username !== EXPECTED_USERNAME || account.account_type !== "BUSINESS") {
    throw new Error(`Feil Instagram-konto: @${account.username || "ukjent"} (${account.account_type || "ukjent"}).`);
  }

  const before = await graph.listToday(targetDate);
  if (before.length > 0) {
    const existing = before[0];
    await writeSummary([
      "## Instagram-publisering stoppet av duplikatvernet",
      "",
      `Det finnes allerede ${before.length} innlegg for ${targetDate}.`,
      `Media-ID: \`${existing.id}\``,
      existing.permalink ? `[Åpne innlegget](${existing.permalink})` : "",
    ]);
    return { status: "duplicate", account, existing, count: before.length, dailyPackage };
  }

  if (mode === "dry-run") {
    await writeSummary([
      "## Instagram dry-run besto",
      "",
      `Pakke: \`${dailyPackage.imageName}\``,
      `Dato: ${targetDate}`,
      `SHA-256: \`${publicImage.sha256}\``,
      "Konto, pakke, caption, offentlig bilde og duplikatkontroll besto. Ingen container ble opprettet.",
    ]);
    return { status: "dry-run", account, dailyPackage, publicImage };
  }

  const container = await graph.request(`${encodeURIComponent(userId)}/media`, {
    method: "POST",
    params: {
      image_url: publicImage.imageUrl,
      caption: dailyPackage.caption,
    },
  });

  const startedAt = Date.now();
  let containerStatus;
  while (Date.now() - startedAt <= POLL_TIMEOUT_MS) {
    containerStatus = await graph.request(encodeURIComponent(container.id), {
      fields: "status_code,status",
    });
    console.log(`Containerstatus: ${containerStatus.status_code}`);
    if (containerStatus.status_code === "FINISHED") break;
    if (containerStatus.status_code === "ERROR" || containerStatus.status_code === "EXPIRED") {
      throw new Error(`Container stoppet med ${containerStatus.status_code}: ${containerStatus.status || "ingen detalj"}`);
    }
    await wait(POLL_INTERVAL_MS);
  }

  if (containerStatus?.status_code !== "FINISHED") {
    throw new Error("Containeren ble ikke ferdig innen fem minutter. Ingen ny container eller publisering forsøkes.");
  }

  const immediatelyBeforePublish = await graph.listToday(targetDate);
  if (immediatelyBeforePublish.length > 0) {
    return {
      status: "duplicate-before-publish",
      account,
      containerId: container.id,
      existing: immediatelyBeforePublish[0],
      dailyPackage,
    };
  }

  const published = await graph.request(`${encodeURIComponent(userId)}/media_publish`, {
    method: "POST",
    params: { creation_id: container.id },
  });

  let media;
  let listed;
  let todayAfter;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    if (attempt > 0) await wait(5_000);
    media = await graph.request(encodeURIComponent(published.id), {
      fields: "id,caption,media_type,media_url,permalink,timestamp,username",
    });
    todayAfter = await graph.listToday(targetDate);
    listed = todayAfter.find((item) => item.id === published.id);
    if (listed) break;
  }

  const mediaResponse = await safeFetch(media.media_url, {}, "Publisert bildekontroll");
  const mediaBytes = await mediaResponse.arrayBuffer();
  const checks = {
    account: media.username === EXPECTED_USERNAME,
    listedOnAccountToday: Boolean(listed),
    exactCaption: media.caption === dailyPackage.caption && listed?.caption === dailyPackage.caption,
    imageExists: mediaResponse.ok && mediaBytes.byteLength > 0,
    permalinkExists: /^https:\/\/www\.instagram\.com\//.test(media.permalink || ""),
    timestampToday: osloDate(media.timestamp) === targetDate,
    mediaTypeImage: media.media_type === "IMAGE",
    exactlyOneToday: todayAfter.length === 1,
  };

  if (Object.values(checks).some((value) => !value)) {
    throw new Error(`Uavhengig Graph-bekreftelse feilet: ${JSON.stringify(checks)}`);
  }

  await writeSummary([
    "## Instagram-innlegg publisert",
    "",
    `Pakke: \`${dailyPackage.imageName}\``,
    `Media-ID: \`${media.id}\``,
    `[Åpne innlegget](${media.permalink})`,
    `Publisert: ${media.timestamp}`,
    "Konto-, pakke-, duplikat-, container- og publiseringskontrollen besto.",
  ]);

  return { status: "published", account, checks, dailyPackage, media };
};

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;
if (isMain) {
  try {
    const result = await publishPreparedPost();
    const output = {
      status: result.status,
      file: result.dailyPackage?.imageName,
      mediaId: result.media?.id || result.existing?.id || null,
      permalink: result.media?.permalink || result.existing?.permalink || null,
    };
    console.log(JSON.stringify(output, null, 2));
  } catch (error) {
    console.error(`Instagram-jobben feilet: ${error.message}`);
    process.exitCode = 1;
  }
}
