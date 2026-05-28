// One-shot script to render PNG icons for PWA from inline SVG sources.
// Run with: node scripts/generate-icons.mjs
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "public");

// Regular icon (rounded square, matches favicon and existing SVG)
const regularSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="g" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#f5e9d8" />
      <stop offset="100%" stop-color="#7a6c9b" />
    </radialGradient>
  </defs>
  <rect width="512" height="512" rx="108" fill="url(#g)"/>
  <g fill="#fffaf3" fill-opacity="0.95">
    <path d="M256 130 C192 162 168 226 168 264 C200 256 232 240 256 200 C280 240 312 256 344 264 C344 226 320 162 256 130 Z"/>
    <circle cx="256" cy="328" r="16"/>
  </g>
  <path d="M104 396 Q256 348 408 396" fill="none" stroke="#fffaf3" stroke-width="8" stroke-linecap="round" stroke-opacity="0.85"/>
</svg>`;

// Maskable icon (fills the whole square; safe zone is inner 80%)
const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="g" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#f5e9d8" />
      <stop offset="100%" stop-color="#7a6c9b" />
    </radialGradient>
  </defs>
  <rect width="512" height="512" fill="url(#g)"/>
  <g fill="#fffaf3" fill-opacity="0.95" transform="translate(0 18)">
    <path d="M256 154 C204 180 184 232 184 264 C212 258 238 244 256 212 C274 244 300 258 328 264 C328 232 308 180 256 154 Z"/>
    <circle cx="256" cy="318" r="14"/>
  </g>
  <path d="M128 376 Q256 336 384 376" fill="none" stroke="#fffaf3" stroke-width="7" stroke-linecap="round" stroke-opacity="0.85" transform="translate(0 18)"/>
</svg>`;

async function render(svg, size, out) {
  await sharp(Buffer.from(svg))
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(resolve(outDir, out));
  console.log("wrote", out);
}

await mkdir(outDir, { recursive: true });
await render(regularSvg, 192, "icon-192.png");
await render(regularSvg, 512, "icon-512.png");
await render(regularSvg, 180, "apple-touch-icon.png");
await render(maskableSvg, 512, "icon-maskable-512.png");
await render(maskableSvg, 192, "icon-maskable-192.png");

// also keep SVGs (still useful for browsers preferring vector)
await writeFile(resolve(outDir, "icon-192.svg"), regularSvg);
await writeFile(resolve(outDir, "icon-512.svg"), regularSvg);
console.log("done");
