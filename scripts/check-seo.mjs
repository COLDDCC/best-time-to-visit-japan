import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import assert from 'node:assert/strict';
const root = 'dist';
const origin = 'https://best-time-japan.com';
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]);
const files = walk(root).filter(f => f.endsWith('/index.html'));
const errors = new Set();
const sitemap = readFileSync(join(root, 'sitemap-0.xml'), 'utf8');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const path = '/' + relative(root, file).replace(/index\.html$/, '');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/); 
  if (canonical?.[1] !== origin + path) errors.add(`${path}: canonical mismatch ${canonical?.[1]}`);
  if (!locations.includes(origin + path)) errors.add(`${path}: absent from sitemap`);
  for (const m of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"|<link\b[^>]*\brel="alternate"[^>]*\bhref="([^"]+)"/g)) {
    const target = (m[1] ?? m[2]).replaceAll('&amp;', '&');
    if (!target.startsWith('/') && !target.startsWith(origin)) continue;
    if (target.startsWith('//')) continue;
    const url = new URL(target, origin);
    if (url.origin !== origin) continue;
    const p = decodeURI(url.pathname);
    const isPage = !/\.[^/]+$/.test(p);
    if (isPage && !p.endsWith('/')) errors.add(`link needs slash: ${p}`);
    const local = join(root, p, isPage ? 'index.html' : '');
    if (!existsSync(local)) errors.add(`missing internal target: ${p}`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const schema = JSON.parse(match[1]);
    if (schema['@type'] === 'BlogPosting' && schema.mainEntityOfPage !== origin + path) errors.add(`${path}: article identity mismatch`);
    if (['Article', 'TouristAttraction', 'CafeOrCoffeeShop'].includes(schema['@type'])) {
      const identity = schema.mainEntityOfPage?.['@id'] ?? schema.url;
      if (identity && identity !== origin + path) errors.add(`${path}: schema identity mismatch ${identity}`);
    }
  }
}
for (const url of locations) assert.ok(url.endsWith('/'), `Sitemap needs slash: ${url}`);
for (const slug of ['is-japan-rainy-in-november', 'japan-in-november-vs-december', 'what-to-wear-in-japan-in-november', 'what-to-wear-in-japan-in-december', 'does-it-snow-in-japan-in-december', 'japan-weather-late-november-early-december']) {
  const html = readFileSync(`${root}/blog/${slug}/index.html`, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)[1].replaceAll('&amp;', '&');
  assert.ok(title.length <= 55, `${slug}: title too long`);
  assert.ok(html.includes('Plan by month') && (!html.includes('class="post-hero"') || html.indexOf('Plan by month') < html.indexOf('class="post-hero"')), `${slug}: month links must precede image`);
}
assert.equal(errors.size, 0, [...errors].join('\n'));
console.log(`SEO checks passed: ${files.length} pages, canonical/sitemap/schema identities, internal links and priority titles.`);
