import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const mediaFiles = new Map([
  ["google-square", "assets/ads/kling-google-ad-square-1200x1200.png"],
  ["google-horizontal", "assets/ads/kling-google-ad-horizontal-1200x628.png"],
  ["mascot-analytics", "assets/mascot/kling-bee-analytics.png"],
  ["mascot-message", "assets/mascot/kling-bee-message.png"],
  ["mascot-calendar", "assets/mascot/kling-bee-calendar.png"],
  ["mascot-laptop", "assets/mascot/kling-bee-laptop.png"],
]);

export default async function handler(request, response) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.setHeader("Allow", "GET, HEAD");
    return response.status(405).end();
  }

  const relativePath = mediaFiles.get(String(request.query.id || ""));
  if (!relativePath) return response.status(404).end();

  try {
    const image = await readFile(resolve(process.cwd(), relativePath));
    response.setHeader("Content-Type", "image/png");
    response.setHeader("Content-Length", image.length);
    response.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
    response.setHeader("X-Content-Type-Options", "nosniff");
    if (request.method === "HEAD") return response.status(200).end();
    return response.status(200).send(image);
  } catch {
    return response.status(404).end();
  }
}
