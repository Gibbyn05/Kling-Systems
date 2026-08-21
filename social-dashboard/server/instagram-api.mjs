const GRAPH_HOST = "https://graph.instagram.com";
const MEDIA_PROCESSING_ATTEMPTS = 12;
const MEDIA_PROCESSING_DELAY_MS = 1_000;

const sendJson = (response, status, body) => {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(body));
};

const readJson = (request) => new Promise((resolve, reject) => {
  let rawBody = "";
  request.on("data", (chunk) => {
    rawBody += chunk;
    if (rawBody.length > 20_000) reject(new Error("Forespørselen er for stor."));
  });
  request.on("end", () => {
    try {
      resolve(rawBody ? JSON.parse(rawBody) : {});
    } catch {
      reject(new Error("Forespørselen kunne ikke leses."));
    }
  });
  request.on("error", reject);
});

const cleanVersion = (value) => /^v\d+\.\d+$/.test(value || "") ? value : "v26.0";

const parseMetaResponse = async (metaResponse) => {
  const result = await metaResponse.json().catch(() => ({}));
  if (!metaResponse.ok) {
    const error = new Error(result?.error?.message || "Instagram avviste forespørselen.");
    error.status = metaResponse.status;
    error.code = result?.error?.code;
    throw error;
  }
  return result;
};

const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

const waitForMediaProcessing = async (containerId, config) => {
  let lastError;

  for (let attempt = 0; attempt < MEDIA_PROCESSING_ATTEMPTS; attempt += 1) {
    if (attempt > 0) await wait(MEDIA_PROCESSING_DELAY_MS);

    const statusUrl = new URL(
      `${GRAPH_HOST}/${config.version}/${encodeURIComponent(containerId)}`,
    );
    statusUrl.searchParams.set("fields", "status_code,status");
    statusUrl.searchParams.set("access_token", config.accessToken);

    try {
      const result = await parseMetaResponse(await fetch(statusUrl));
      if (result.status_code === "FINISHED") return;
      if (result.status_code === "ERROR" || result.status_code === "EXPIRED") {
        throw new Error(result.status || "Instagram kunne ikke behandle bildet.");
      }
    } catch (error) {
      lastError = error;
      if (error.status && error.status !== 400) throw error;
    }
  }

  throw lastError || new Error("Instagram brukte for lang tid på å behandle bildet. Prøv igjen.");
};

const requiredConfig = (env) => {
  const accessToken = env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const userId = env.INSTAGRAM_USER_ID?.trim();
  if (!accessToken || !userId) return null;
  return {
    accessToken,
    userId,
    version: cleanVersion(env.INSTAGRAM_API_VERSION),
    publicSiteUrl: (env.INSTAGRAM_PUBLIC_SITE_URL || "https://www.klingsystems.no").replace(/\/$/, ""),
  };
};

const statusHandler = async (request, response, env) => {
  if (request.method !== "GET") return sendJson(response, 405, { error: "Kun GET er tillatt." });
  const config = requiredConfig(env);
  if (!config) return sendJson(response, 503, { connected: false, error: "Instagram-variablene mangler." });

  try {
    const url = new URL(`${GRAPH_HOST}/${config.version}/${encodeURIComponent(config.userId)}`);
    url.searchParams.set("fields", "id,username,account_type");
    url.searchParams.set("access_token", config.accessToken);
    const result = await parseMetaResponse(await fetch(url));
    return sendJson(response, 200, {
      connected: true,
      account: {
        id: result.id,
        username: result.username || "Instagram-konto",
        accountType: result.account_type || "PROFESSIONAL",
      },
    });
  } catch (error) {
    console.error("Instagram-kontrollen feilet", { status: error.status, code: error.code });
    return sendJson(response, 502, {
      connected: false,
      error: "Tilkoblingen kunne ikke bekreftes. Kontroller token og bruker-ID.",
    });
  }
};

const publishHandler = async (request, response, env) => {
  if (request.method !== "POST") return sendJson(response, 405, { error: "Kun POST er tillatt." });
  const config = requiredConfig(env);
  if (!config) return sendJson(response, 503, { error: "Instagram-variablene mangler." });

  let body;
  try {
    body = await readJson(request);
  } catch (error) {
    return sendJson(response, 400, { error: error.message });
  }

  const mediaId = String(body.mediaId || "").trim();
  const caption = String(body.caption || "").trim().slice(0, 2200);
  if (!/^[a-z0-9-]{2,80}$/.test(mediaId) || !caption) {
    return sendJson(response, 400, { error: "Velg et publiserbart bilde og skriv en tekst." });
  }

  const imageUrl = new URL("/api/instagram-media", config.publicSiteUrl);
  imageUrl.searchParams.set("id", mediaId);

  try {
    const containerBody = new URLSearchParams({
      image_url: imageUrl.toString(),
      caption,
      access_token: config.accessToken,
    });
    const container = await parseMetaResponse(await fetch(
      `${GRAPH_HOST}/${config.version}/${encodeURIComponent(config.userId)}/media`,
      { method: "POST", body: containerBody },
    ));

    await waitForMediaProcessing(container.id, config);

    const publishBody = new URLSearchParams({
      creation_id: container.id,
      access_token: config.accessToken,
    });
    const published = await parseMetaResponse(await fetch(
      `${GRAPH_HOST}/${config.version}/${encodeURIComponent(config.userId)}/media_publish`,
      { method: "POST", body: publishBody },
    ));

    return sendJson(response, 200, { ok: true, mediaId: published.id });
  } catch (error) {
    console.error("Instagram-publiseringen feilet", { status: error.status, code: error.code });
    return sendJson(response, 502, {
      error: error.message || "Innlegget kunne ikke publiseres på Instagram.",
    });
  }
};

export const createInstagramApiPlugin = (env) => ({
  name: "kling-instagram-api",
  configureServer(server) {
    server.middlewares.use("/api/instagram/status", (request, response) => statusHandler(request, response, env));
    server.middlewares.use("/api/instagram/publish", (request, response) => publishHandler(request, response, env));
  },
});
