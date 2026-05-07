import sharp from "sharp";
import { readdir, stat, copyFile, rename } from "node:fs/promises";
import path from "node:path";

const DIRS = [
  "public/assets/siriuba-2",
  "siriuba-2/public/assets/siriuba-2",
];

const SHOULD_SKIP = (name) => !/\.(jpe?g)$/i.test(name);

async function optimizeOne(filePath) {
  const before = (await stat(filePath)).size;
  const tmp = filePath + ".tmp.jpg";
  await sharp(filePath)
    .rotate()
    .jpeg({ quality: 82, progressive: true, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(tmp);
  await rename(tmp, filePath);
  const after = (await stat(filePath)).size;
  return { before, after };
}

let totalBefore = 0;
let totalAfter = 0;

for (const dir of DIRS) {
  const abs = path.resolve(dir);
  let entries;
  try {
    entries = await readdir(abs);
  } catch {
    continue;
  }
  for (const name of entries) {
    if (SHOULD_SKIP(name)) continue;
    const full = path.join(abs, name);
    const { before, after } = await optimizeOne(full);
    totalBefore += before;
    totalAfter += after;
    const pct = (((before - after) / before) * 100).toFixed(1);
    console.log(`${path.relative(process.cwd(), full)}  ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB  (-${pct}%)`);
  }
}

const totalPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
console.log(`\nTOTAL: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (-${totalPct}%)`);
