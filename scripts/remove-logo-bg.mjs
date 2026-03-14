/**
 * Removes dark background from logo PNG: pixels below luminance threshold become transparent.
 * Run: node scripts/remove-logo-bg.mjs [basename]
 *   basename: "ankla-logo" (default) or "ankla-logo-scroll"
 */
import { createReadStream, createWriteStream, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { PNG } from "pngjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const basename = process.argv[2] || "ankla-logo";
const filename = basename.endsWith(".png") ? basename : `${basename}.png`;
const inputPath = join(root, "public", filename);
const outputPath = join(root, "public", filename);
const backupPath = join(root, "public", basename.replace(".png", "") + "-original.png");

// Luminance threshold: pixels darker than this become transparent (0–255)
const LUMINANCE_THRESHOLD = 85;

async function main() {
  copyFileSync(inputPath, backupPath);
  console.log("Respaldo guardado en:", backupPath);

  const data = await new Promise((resolve, reject) => {
    createReadStream(inputPath)
      .pipe(new PNG())
      .on("parsed", function () {
        resolve(this);
      })
      .on("error", reject);
  });

  const { width, height } = data;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const r = data.data[idx];
      const g = data.data[idx + 1];
      const b = data.data[idx + 2];

      const lum = (0.299 * r + 0.587 * g + 0.114 * b) | 0;

      if (lum <= LUMINANCE_THRESHOLD) {
        data.data[idx + 3] = 0;
      }
    }
  }

  await new Promise((resolve, reject) => {
    data
      .pack()
      .pipe(createWriteStream(outputPath))
      .on("finish", resolve)
      .on("error", reject);
  });

  console.log("Logo con fondo transparente guardado en:", outputPath);
  console.log("Original respaldado en:", backupPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
