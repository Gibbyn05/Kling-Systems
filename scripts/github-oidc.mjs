import { createRemoteJWKSet, jwtVerify } from "jose";

export const GITHUB_OIDC_ISSUER = "https://token.actions.githubusercontent.com";
export const GITHUB_OIDC_AUDIENCE = "https://www.klingsystems.no/api/instagram-publish";
export const EXPECTED_REPOSITORY = "gibbyn05/kling-systems";
export const EXPECTED_REF = "refs/heads/main";
export const EXPECTED_WORKFLOW = ".github/workflows/publish-instagram.yml";

const githubKeys = createRemoteJWKSet(
  new URL("https://token.actions.githubusercontent.com/.well-known/jwks"),
);

export const validateGithubClaims = (payload) => {
  const repository = String(payload.repository || "").toLowerCase();
  const workflowRef = String(payload.workflow_ref || "").toLowerCase();
  const eventName = String(payload.event_name || "");

  if (repository !== EXPECTED_REPOSITORY) {
    throw new Error("OIDC-tokenet kommer fra feil repository.");
  }
  if (payload.ref !== EXPECTED_REF) {
    throw new Error("OIDC-tokenet kommer ikke fra main.");
  }
  if (!workflowRef.startsWith(`${EXPECTED_REPOSITORY}/${EXPECTED_WORKFLOW}@${EXPECTED_REF}`)) {
    throw new Error("OIDC-tokenet kommer fra feil workflow.");
  }
  if (!new Set(["schedule", "workflow_dispatch"]).has(eventName)) {
    throw new Error("OIDC-tokenet kommer fra en ikke tillatt GitHub-hendelse.");
  }
  return payload;
};

export const verifyGithubActionsToken = async (token) => {
  const { payload } = await jwtVerify(token, githubKeys, {
    issuer: GITHUB_OIDC_ISSUER,
    audience: GITHUB_OIDC_AUDIENCE,
  });
  return validateGithubClaims(payload);
};
