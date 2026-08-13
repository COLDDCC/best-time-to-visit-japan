import { mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../public/images/matcha");
const BING_URL = "https://www.bing.com/images/search";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
const MAX_TRIES = 6;

const items = [
  {
    slug: "matcha-latte",
    query: "matcha latte glass",
    alt: "A freshly whisked matcha latte in a glass, creamy and green",
  },
  {
    slug: "usucha",
    query: "usucha thin matcha tea chawan",
    alt: "Usucha, thin whisked matcha served in a traditional tea bowl",
  },
  {
    slug: "koicha",
    query: "koicha thick matcha tea bowl",
    alt: "Koicha, thick and concentrated matcha paste in a tea bowl",
  },
  {
    slug: "matcha-dessert",
    query: "matcha dessert parfait ice cream",
    alt: "A matcha dessert, from ice cream and parfait to cakes and sweets",
  },
];

function decodeEntities(str) {
  return str
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

async function searchBing(query) {
  const url = `${BING_URL}?q=${encodeURIComponent(query)}&form=HDRSC2&count=35`;
  const res = await fetch(url, {
    headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" },
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) throw new Error(`Bing search returned ${res.status}`);
  const html = await res.text();

  const results = [];
  const re = /m="(.*?)"(?:\s|>)/gs;
  let match;
  while ((match = re.exec(html)) !== null) {
    try {
      const data = JSON.parse(decodeEntities(match[1]));
      if (data.murl && /^https?:\/\//.test(data.murl)) {
        results.push({ murl: data.murl, t: data.t || "" });
      }
    } catch {
      // skip unparseable JSON chunks
    }
  }
  return results;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Referer: "https://www.bing.com/" },
    redirect: "follow",
    signal: AbortSignal.timeout(60000),
  });
  if (!res.ok) throw new Error(`Image returned ${res.status}`);
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.startsWith("image/")) {
    throw new Error(`Not an image (${contentType})`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1024) throw new Error(`Image too small (${buf.length} bytes)`);
  await writeFile(destPath, buf);
  return { contentType, bytes: buf.length };
}

function extFor(url, contentType) {
  const fromUrl = url.split("?")[0].toLowerCase().match(/\.(jpe?g|png|webp|gif|avif)$/);
  if (fromUrl) {
    return fromUrl[1] === "jpeg" ? "jpg" : fromUrl[1];
  }
  const fromType = (contentType || "").split("/")[1]?.split(";")[0];
  return fromType && fromType !== "jpeg" ? fromType : "jpg";
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const manifest = {};

  for (const item of items) {
    process.stdout.write(`\n== ${item.slug} (${item.query}) ==\n`);
    let results = [];
    try {
      results = await searchBing(item.query);
    } catch (err) {
      process.stdout.write(`  search failed: ${err.message}\n`);
    }
    if (results.length === 0) {
      process.stdout.write("  no results found\n");
      continue;
    }

    let saved = null;
    for (let i = 0; i < Math.min(results.length, MAX_TRIES); i++) {
      const cand = results[i];
      const ext = "jpg";
      const destPath = resolve(OUT_DIR, `${item.slug}.${ext}`);
      try {
        const { contentType, bytes } = await downloadImage(cand.murl, destPath);
        process.stdout.write(`  [${i + 1}] saved ${destPath} (${bytes} bytes)\n`);
        saved = {
          src: `/images/matcha/${item.slug}.${ext}`,
          alt: item.alt,
          title: cand.t || "",
          sourceUrl: cand.murl,
          contentType,
          bytes,
        };
        break;
      } catch (err) {
        process.stdout.write(`  [${i + 1}] failed: ${err.message}\n`);
      }
    }

    if (saved) {
      manifest[item.slug] = saved;
    } else {
      process.stdout.write("  could not download any image\n");
    }
  }

  const manifestPath = resolve(OUT_DIR, "manifest.json");
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  process.stdout.write(`\nManifest written to ${manifestPath}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
