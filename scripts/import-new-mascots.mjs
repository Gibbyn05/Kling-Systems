import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const workspace = process.cwd();
const sourceRoot = "/Users/fredrik/Documents/KLING SYSTEMS";

const assets = [
  ["bie 14.png", "kling-bee-analysis-pro.png"],
  ["bie 15.png", "kling-bee-presentation.png"],
  ["Bie 16.png", "kling-bee-workflow.png"],
  ["Bie 19.png", "kling-bee-code.png"],
  ["Bie 20.png", "kling-bee-integration.png"],
  ["Bie 24.png", "kling-bee-calendar.png"],
  ["Bie 25.png", "kling-bee-database.png"],
  ["Bie 26.png", "kling-bee-collaboration.png"],
  ["Bie 29.png", "kling-bee-support-pro.png"],
  ["Bie 30.png", "kling-bee-analytics.png"],
  ["Bie 32.png", "kling-bee-idea-pro.png"],
];

const cleanTransparentArtwork = async (source, destination) => {
  const { data, info } = await sharp(source)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const foreground = new Uint8Array(width * height);
  const seen = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);

  for (let index = 0; index < foreground.length; index += 1) {
    foreground[index] = data[index * 4 + 3] > 10 ? 1 : 0;
  }

  const minimumComponentArea = Math.max(8, Math.floor(width * height * 0.00006));

  for (let start = 0; start < foreground.length; start += 1) {
    if (!foreground[start] || seen[start]) continue;
    let head = 0;
    let tail = 0;
    seen[start] = 1;
    queue[tail++] = start;

    while (head < tail) {
      const index = queue[head++];
      const x = index % width;
      const y = Math.floor(index / width);
      for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
        for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
          if (offsetX === 0 && offsetY === 0) continue;
          const sampleX = x + offsetX;
          const sampleY = y + offsetY;
          if (sampleX < 0 || sampleX >= width || sampleY < 0 || sampleY >= height) continue;
          const sampleIndex = sampleY * width + sampleX;
          if (!foreground[sampleIndex] || seen[sampleIndex]) continue;
          seen[sampleIndex] = 1;
          queue[tail++] = sampleIndex;
        }
      }
    }

    if (tail >= minimumComponentArea) continue;
    for (let index = 0; index < tail; index += 1) {
      const offset = queue[index] * 4;
      data[offset] = 0;
      data[offset + 1] = 0;
      data[offset + 2] = 0;
      data[offset + 3] = 0;
    }
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 2 })
    .resize({ width: 640, height: 640, fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(destination);
};

for (const [sourceName, destinationName] of assets) {
  const source = path.join(sourceRoot, sourceName);
  const destination = path.join(workspace, "assets/mascot", destinationName);
  await cleanTransparentArtwork(source, destination);
  console.log(`Imported ${destinationName}`);
}
