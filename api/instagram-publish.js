import { publishPreparedPost } from "../scripts/publish-instagram.mjs";
import { verifyGithubActionsToken } from "../scripts/github-oidc.mjs";

const sendJson = (response, status, body) => {
  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.setHeader("X-Content-Type-Options", "nosniff");
  return response.status(status).json(body);
};

const readBearerToken = (request) => {
  const authorization = String(request.headers.authorization || "");
  return authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Kun POST er tillatt." });
  }

  const token = readBearerToken(request);
  if (!token) return sendJson(response, 401, { error: "GitHub-identitet mangler." });

  let claims;
  try {
    claims = await verifyGithubActionsToken(token);
  } catch (error) {
    console.error("GitHub OIDC-kontrollen feilet", { name: error?.name });
    return sendJson(response, 401, { error: "GitHub-identiteten kunne ikke bekreftes." });
  }

  const body = typeof request.body === "object" && request.body ? request.body : {};
  const requestedMode = body.mode === "publish" ? "publish" : "dry-run";
  const mode = claims.event_name === "schedule" ? "publish" : requestedMode;
  const targetDate = typeof body.targetDate === "string" && body.targetDate
    ? body.targetDate
    : undefined;

  try {
    const result = await publishPreparedPost({ mode, targetDate });
    return sendJson(response, 200, {
      ok: true,
      status: result.status,
      file: result.dailyPackage?.imageName || null,
      mediaId: result.media?.id || result.existing?.id || null,
      permalink: result.media?.permalink || result.existing?.permalink || null,
    });
  } catch (error) {
    console.error("Instagram-jobben feilet", { message: error.message });
    return sendJson(response, 500, { ok: false, error: error.message });
  }
}
