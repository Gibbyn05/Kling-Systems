import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const workspace = process.cwd();
const sourceRoot = "/Users/fredrik/Documents/KLING SYSTEMS";

const assets = [
  [path.join(sourceRoot, "Bie 1.png"), "assets/mascot/kling-bee-laptop.png"],
  [path.join(sourceRoot, "Bie 2.png"), "assets/mascot/kling-bee-analysis.png"],
  [path.join(sourceRoot, "Bie 3.png"), "assets/mascot/kling-bee-growth.png"],
  [path.join(sourceRoot, "Bie 4.png"), "assets/mascot/kling-bee-fast.png"],
  [path.join(sourceRoot, "Bie 5.png"), "assets/mascot/kling-bee-email.png"],
  [path.join(sourceRoot, "Bie 6.png"), "assets/mascot/kling-bee-support.png"],
  [path.join(sourceRoot, "Bie 7.png"), "assets/mascot/kling-bee-checklist.png"],
  [path.join(sourceRoot, "Bie 8.png"), "assets/mascot/kling-bee-message.png"],
  [path.join(sourceRoot, "Bie 9.png"), "assets/mascot/kling-bee-relaxed.png"],
  [path.join(sourceRoot, "Bie 10.png"), "assets/mascot/kling-bee-celebrate.png"],
  [path.join(sourceRoot, "Bie 11.png"), "assets/mascot/kling-bee-idea.png"],
  [path.join(sourceRoot, "Bie 12.png"), "assets/mascot/kling-bee-target.png"],
  [path.join(workspace, "assets/kling-logo-light.png"), "assets/kling-logo-navy-transparent.png"],
  [path.join(workspace, "assets/kling-logo-dark.png"), "assets/kling-logo-cream-transparent.png"],
  [path.join(workspace, "assets/kling-symbol.png"), "assets/kling-symbol-transparent.png"],
];

const sampleCorner = (pixels, width, height, xStart, yStart, size) => {
  const sum = [0, 0, 0];
  let count = 0;
  for (let y = yStart; y < yStart + size; y += 1) {
    for (let x = xStart; x < xStart + size; x += 1) {
      const offset = (y * width + x) * 4;
      sum[0] += pixels[offset];
      sum[1] += pixels[offset + 1];
      sum[2] += pixels[offset + 2];
      count += 1;
    }
  }
  return sum.map((value) => value / count);
};

const interpolateBackground = (corners, x, y, width, height) => {
  const tx = x / Math.max(1, width - 1);
  const ty = y / Math.max(1, height - 1);
  return [0, 1, 2].map((channel) => {
    const top = corners[0][channel] * (1 - tx) + corners[1][channel] * tx;
    const bottom = corners[2][channel] * (1 - tx) + corners[3][channel] * tx;
    return top * (1 - ty) + bottom * ty;
  });
};

const extractBackground = async (source, destination) => {
  const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const sampleSize = Math.max(4, Math.floor(Math.min(width, height) * 0.035));
  const corners = [
    sampleCorner(data, width, height, 0, 0, sampleSize),
    sampleCorner(data, width, height, width - sampleSize, 0, sampleSize),
    sampleCorner(data, width, height, 0, height - sampleSize, sampleSize),
    sampleCorner(data, width, height, width - sampleSize, height - sampleSize, sampleSize),
  ];
  const distances = new Float32Array(width * height);
  const chromaDistances = new Float32Array(width * height);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const pixelIndex = y * width + x;
      const offset = pixelIndex * 4;
      const expected = interpolateBackground(corners, x, y, width, height);
      const red = data[offset] - expected[0];
      const green = data[offset + 1] - expected[1];
      const blue = data[offset + 2] - expected[2];
      distances[pixelIndex] = Math.sqrt(red * red + green * green + blue * blue);
      const pixelChromaRed = data[offset] - data[offset + 1];
      const pixelChromaBlue = data[offset + 1] - data[offset + 2];
      const backgroundChromaRed = expected[0] - expected[1];
      const backgroundChromaBlue = expected[1] - expected[2];
      chromaDistances[pixelIndex] = Math.sqrt(
        (pixelChromaRed - backgroundChromaRed) ** 2
        + (pixelChromaBlue - backgroundChromaBlue) ** 2,
      );
    }
  }

  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;
  const floodDistance = 32;
  const floodChromaDistance = 8;
  const enqueue = (index) => {
    if (visited[index] || distances[index] > floodDistance || chromaDistances[index] > floodChromaDistance) return;
    visited[index] = 1;
    queue[tail] = index;
    tail += 1;
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y += 1) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }

  while (head < tail) {
    const index = queue[head];
    head += 1;
    const x = index % width;
    const y = Math.floor(index / width);
    if (x > 0) enqueue(index - 1);
    if (x < width - 1) enqueue(index + 1);
    if (y > 0) enqueue(index - width);
    if (y < height - 1) enqueue(index + width);
  }

  const expansionDistance = 70;
  const expansionSteps = 8;
  for (let step = 0; step < expansionSteps; step += 1) {
    const additions = [];
    for (let index = 0; index < width * height; index += 1) {
      if (visited[index] || distances[index] > expansionDistance || chromaDistances[index] > 18) continue;
      const x = index % width;
      const y = Math.floor(index / width);
      if (
        (x > 0 && visited[index - 1])
        || (x < width - 1 && visited[index + 1])
        || (y > 0 && visited[index - width])
        || (y < height - 1 && visited[index + width])
      ) additions.push(index);
    }
    additions.forEach((index) => { visited[index] = 1; });
  }

  const original = Buffer.from(data);
  const foreground = new Uint8Array(width * height);
  for (let index = 0; index < width * height; index += 1) foreground[index] = visited[index] ? 0 : 1;

  const componentSeen = new Uint8Array(width * height);
  const componentQueue = new Int32Array(width * height);
  for (let start = 0; start < width * height; start += 1) {
    if (!foreground[start] || componentSeen[start]) continue;
    let componentHead = 0;
    let componentTail = 0;
    let minX = width;
    let maxX = 0;
    let minY = height;
    let maxY = 0;
    let distanceSum = 0;
    componentSeen[start] = 1;
    componentQueue[componentTail] = start;
    componentTail += 1;
    while (componentHead < componentTail) {
      const index = componentQueue[componentHead];
      componentHead += 1;
      const x = index % width;
      const y = Math.floor(index / width);
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
      distanceSum += distances[index];
      for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
        for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
          if (offsetX === 0 && offsetY === 0) continue;
          const sampleX = x + offsetX;
          const sampleY = y + offsetY;
          if (sampleX < 0 || sampleX >= width || sampleY < 0 || sampleY >= height) continue;
          const sampleIndex = sampleY * width + sampleX;
          if (!foreground[sampleIndex] || componentSeen[sampleIndex]) continue;
          componentSeen[sampleIndex] = 1;
          componentQueue[componentTail] = sampleIndex;
          componentTail += 1;
        }
      }
    }
    const componentWidth = maxX - minX + 1;
    const componentHeight = maxY - minY + 1;
    const averageDistance = distanceSum / componentTail;
    const isGroundShadow = (
      minY > height * .52
      && componentWidth > componentHeight * 1.65
      && averageDistance < 88
      && componentTail < width * height * .12
    );
    if (!isGroundShadow) continue;
    for (let i = 0; i < componentTail; i += 1) foreground[componentQueue[i]] = 0;
  }

  const hasBackgroundNear = (x, y, radius) => {
    for (let offsetY = -radius; offsetY <= radius; offsetY += 1) {
      for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
        const sampleX = x + offsetX;
        const sampleY = y + offsetY;
        if (sampleX < 0 || sampleX >= width || sampleY < 0 || sampleY >= height) return true;
        if (!foreground[sampleY * width + sampleX]) return true;
      }
    }
    return false;
  };

  const edgeRadius = 9;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const pixelIndex = y * width + x;
      const offset = pixelIndex * 4;
      if (!foreground[pixelIndex]) {
        data[offset] = 0;
        data[offset + 1] = 0;
        data[offset + 2] = 0;
        data[offset + 3] = 0;
        continue;
      }
      const touchesBackground = hasBackgroundNear(x, y, 2);
      data[offset + 3] = touchesBackground ? 220 : 255;
      if (!touchesBackground) continue;
      let nearest = null;
      let nearestDistance = Number.POSITIVE_INFINITY;
      for (let offsetY = -edgeRadius; offsetY <= edgeRadius; offsetY += 1) {
        for (let offsetX = -edgeRadius; offsetX <= edgeRadius; offsetX += 1) {
          const sampleX = x + offsetX;
          const sampleY = y + offsetY;
          if (sampleX < 0 || sampleX >= width || sampleY < 0 || sampleY >= height) continue;
          const sampleIndex = sampleY * width + sampleX;
          if (!foreground[sampleIndex] || hasBackgroundNear(sampleX, sampleY, 3)) continue;
          const sampleDistance = offsetX * offsetX + offsetY * offsetY;
          if (sampleDistance >= nearestDistance) continue;
          nearestDistance = sampleDistance;
          nearest = sampleIndex * 4;
        }
      }
      if (nearest === null) continue;
      data[offset] = original[nearest];
      data[offset + 1] = original[nearest + 1];
      data[offset + 2] = original[nearest + 2];
    }
  }

  const outputPath = path.join(workspace, destination);
  await sharp(data, { raw: { width, height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 8 })
    .extend({ top: 12, right: 12, bottom: 12, left: 12, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: false })
    .toFile(outputPath);
  return outputPath;
};

for (const [source, destination] of assets) {
  const output = await extractBackground(source, destination);
  console.log(path.relative(workspace, output));
}
