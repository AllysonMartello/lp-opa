/**
 * Optimize Siriúba 2 images.
 *
 * Lê imagens originais de scripts/input/ e gera variantes responsivas
 * em AVIF + WebP + JPG na pasta correta de cada subprojeto.
 *
 * Uso:
 *   1. Coloque os arquivos originais (jpg/png/webp) em scripts/input/
 *      Use os nomes EXATOS listados no manifest abaixo (ou mapeie via aliases).
 *   2. Rode:  node scripts/optimize-images.mjs
 *   3. Os arquivos otimizados vão pra siriuba-2/public/assets/siriuba-2/
 *
 * Flags:
 *   --dry           Não escreve nada, só mostra o que faria
 *   --force         Reprocessa mesmo se o output já existir
 *   --only=hero     Processa só um grupo (hero, efeito, bento, experience, location, single)
 */

import sharp from "sharp";
import { readdir, stat, mkdir, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const INPUT = path.join(__dirname, "input");
const OUTPUT = path.join(ROOT, "siriuba-2", "public", "assets", "siriuba-2");
const LOGO_OUTPUT = path.join(ROOT, "siriuba-2", "public", "assets", "logo");

const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const FORCE = args.includes("--force");
const ONLY = args.find((a) => a.startsWith("--only="))?.split("=")[1];

// Quality settings — afinados para foto de imóvel premium
const QUALITY = {
  avif: 50,
  webp: 75,
  jpg: 80,
};

const FORMATS = ["avif", "webp", "jpg"];

/**
 * Manifest: cada entrada diz o que gerar a partir do arquivo de input.
 *
 * - input: nome do arquivo em scripts/input/ (qualquer formato sharp aceita)
 * - output: prefixo dos arquivos gerados (sem extensão)
 * - sizes: array de larguras (px). Se for um número só, gera 1 versão.
 *          Se for múltiplas, gera <output>-mobile, <output>-tablet, <output>
 * - group: pra usar com --only
 */
const MANIFEST = [
  // ---------- HERO ----------
  {
    group: "hero",
    input: "hero.jpg",
    output: "hero",
    sizes: [
      { name: "mobile", width: 640 },
      { name: "tablet", width: 1024 },
      { name: "desktop", width: 1920 },
    ],
  },

  // ---------- ZOOM PARALLAX ----------
  ...[1, 2, 3, 4, 5, 6, 7].map((n) => ({
    group: "efeito",
    input: `efeito-${n}.jpg`,
    output: `efeito-${n}`,
    sizes: [
      { name: "mobile", width: 640 },
      { name: "desktop", width: 1280 },
    ],
  })),

  // ---------- BENTO GALLERY ----------
  ...[
    "vista-mar",
    "area-externa",
    "ambientes-integrados",
    "luz-natural",
    "piscina-deck",
    "pavimento-2",
    "estrutura",
  ].map((name) => ({
    group: "bento",
    input: `${name}.jpg`,
    output: name,
    sizes: [
      { name: "mobile", width: 640 },
      { name: "desktop", width: 1280 },
    ],
  })),

  // ---------- EXPERIENCE ----------
  ...["manha", "tarde", "noite"].map((name) => ({
    group: "experience",
    input: `${name}.jpg`,
    output: name,
    sizes: [
      { name: "mobile", width: 640 },
      { name: "desktop", width: 1280 },
    ],
  })),

  // ---------- LOCATION (1 tamanho só, lazy) ----------
  ...[
    "viana",
    "siriuba",
    "siriuba-drone",
    "armacao",
    "bl3",
    "vila",
    "vila-opa",
  ].map((name) => ({
    group: "location",
    input: `${name}.jpg`,
    output: name,
    sizes: [{ name: null, width: 1280 }],
  })),

  // ---------- SINGLES ----------
  {
    group: "single",
    input: "tour-preview.jpg",
    output: "tour-preview",
    sizes: [{ name: null, width: 1280 }],
  },
  {
    group: "single",
    input: "map-static.jpg",
    output: "map-static",
    sizes: [{ name: null, width: 1280 }],
  },
  {
    group: "single",
    input: "marco.jpg",
    output: "marco",
    sizes: [{ name: null, width: 400 }],
    formats: ["jpg"], // só JPG, é foto pequena
  },
  {
    group: "single",
    input: "og-image.jpg",
    output: "og-image",
    sizes: [{ name: null, width: 1200 }],
    formats: ["jpg"], // OG só aceita jpg/png universalmente
  },
];

// ---------- helpers ----------

const fmtKB = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;
const fmtMB = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  red: "\x1b[31m",
  dim: "\x1b[2m",
};

function color(c, str) {
  return `${colors[c]}${str}${colors.reset}`;
}

async function ensureDir(dir) {
  if (DRY) return;
  await mkdir(dir, { recursive: true });
}

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function processVariant({ pipeline, output, format, suffix }) {
  const ext = format === "jpg" ? "jpg" : format;
  const outName = suffix ? `${output}-${suffix}.${ext}` : `${output}.${ext}`;
  const outPath = path.join(OUTPUT, outName);

  if (!FORCE && (await fileExists(outPath))) {
    return { skipped: true, outName, size: (await stat(outPath)).size };
  }

  let p = pipeline.clone();
  if (format === "avif") p = p.avif({ quality: QUALITY.avif, effort: 6 });
  else if (format === "webp") p = p.webp({ quality: QUALITY.webp, effort: 5 });
  else p = p.jpeg({ quality: QUALITY.jpg, progressive: true, mozjpeg: true });

  if (DRY) {
    return { dry: true, outName };
  }

  await p.toFile(outPath);
  const size = (await stat(outPath)).size;
  return { outName, size };
}

async function processEntry(entry) {
  const inputPath = path.join(INPUT, entry.input);

  if (!(await fileExists(inputPath))) {
    return { missing: true, entry };
  }

  const inputSize = (await stat(inputPath)).size;
  const buffer = await sharp(inputPath).rotate().toBuffer();
  const formats = entry.formats ?? FORMATS;
  const results = [];
  let totalOut = 0;

  for (const size of entry.sizes) {
    const pipeline = sharp(buffer).resize({
      width: size.width,
      withoutEnlargement: true,
    });

    for (const format of formats) {
      const r = await processVariant({
        pipeline,
        output: entry.output,
        format,
        suffix: size.name,
      });
      results.push(r);
      if (r.size && !r.skipped) totalOut += r.size;
    }
  }

  return { entry, inputSize, results, totalOut };
}

// ---------- main ----------

async function main() {
  console.log(color("cyan", `\n📦 Otimizando imagens do Siriúba 2\n`));
  console.log(color("dim", `   input:  ${path.relative(ROOT, INPUT)}`));
  console.log(color("dim", `   output: ${path.relative(ROOT, OUTPUT)}`));
  if (DRY) console.log(color("yellow", "\n   [DRY RUN — nenhum arquivo será escrito]"));
  if (FORCE) console.log(color("yellow", "   [FORCE — reprocessando tudo]"));
  if (ONLY) console.log(color("yellow", `   [filtrado: --only=${ONLY}]`));
  console.log();

  if (!existsSync(INPUT)) {
    await ensureDir(INPUT);
    console.log(color("yellow", `\n⚠ Pasta de input vazia. Criada em:\n  ${INPUT}\n`));
    console.log("Coloque os arquivos originais lá e rode de novo.\n");
    console.log("Veja a lista esperada de nomes em scripts/optimize-images.mjs (MANIFEST).\n");
    return;
  }

  await ensureDir(OUTPUT);
  await ensureDir(LOGO_OUTPUT);

  const filtered = ONLY ? MANIFEST.filter((e) => e.group === ONLY) : MANIFEST;
  if (filtered.length === 0) {
    console.log(color("red", `Nenhum item com group="${ONLY}". Grupos: hero, efeito, bento, experience, location, single`));
    return;
  }

  let totalIn = 0;
  let totalOut = 0;
  let processed = 0;
  let skipped = 0;
  const missing = [];

  for (const entry of filtered) {
    const result = await processEntry(entry);
    if (result.missing) {
      missing.push(entry.input);
      console.log(color("red", `  ✗ ${entry.input}  ${color("dim", "(não encontrado em input/)")}`));
      continue;
    }

    totalIn += result.inputSize;
    totalOut += result.totalOut;
    processed++;

    const variantSummary = result.results
      .map((r) => {
        if (r.dry) return color("dim", `[${r.outName}]`);
        if (r.skipped) {
          skipped++;
          return color("dim", `${r.outName} (cache ${fmtKB(r.size)})`);
        }
        return color("green", `${r.outName} ${fmtKB(r.size)}`);
      })
      .join("  ");

    console.log(`${color("cyan", entry.input)} ${color("dim", fmtKB(result.inputSize))}`);
    console.log(`  ${variantSummary}\n`);
  }

  console.log(color("cyan", "─".repeat(60)));
  console.log(`Processados: ${processed}/${filtered.length}`);
  if (skipped) console.log(color("dim", `Já existiam (use --force pra reprocessar): ${skipped}`));
  if (totalIn > 0) {
    const pct = (((totalIn - totalOut) / totalIn) * 100).toFixed(1);
    console.log(`Total input:  ${fmtMB(totalIn)}`);
    console.log(`Total output: ${fmtMB(totalOut)}  ${color("green", `(-${pct}%)`)}`);
  }

  if (missing.length) {
    console.log(color("yellow", `\n⚠ Faltando em scripts/input/:`));
    for (const m of missing) console.log(`  - ${m}`);
    console.log();
  } else if (processed === filtered.length) {
    console.log(color("green", "\n✓ Tudo pronto!\n"));
  }
}

main().catch((err) => {
  console.error(color("red", "\n✗ Erro:"), err);
  process.exit(1);
});
