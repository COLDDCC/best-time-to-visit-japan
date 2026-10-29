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
for (const slug of ['is-japan-rainy-in-november', 'japan-in-november-vs-december', 'what-to-wear-in-japan-in-november', 'what-to-wear-in-japan-in-december', 'does-it-snow-in-japan-in-december', 'japan-weather-late-november-early-december', 'tokyo-in-december-weather']) {
  const html = readFileSync(`${root}/blog/${slug}/index.html`, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)[1].replaceAll('&amp;', '&');
  assert.ok(title.length <= 55, `${slug}: title too long`);
  assert.ok(html.includes('Plan by month') && (!html.includes('class="post-hero"') || html.indexOf('Plan by month') < html.indexOf('class="post-hero"')), `${slug}: month links must precede image`);
}
assert.equal(errors.size, 0, [...errors].join('\n'));

const packingHtml = readFileSync(`${root}/blog/what-to-wear-in-japan-in-november/index.html`, 'utf8');
assert.match(packingHtml, /data-city="Kyoto"/);
assert.match(packingHtml, /Rainy days ≥1 mm/);
assert.match(packingHtml, /aria-sort="ascending"/);
assert.match(packingHtml, /images\/og\/what-to-wear-november.png/);
assert.ok(!packingHtml.includes('og-default.png'));
assert.equal((packingHtml.match(/data-month="november"/g) || []).length, 3);
assert.equal((packingHtml.match(/data-month="december"/g) || []).length, 0);
for (const path of ['month/november', 'ja/month/november', 'zh-cn/month/november']) {
  assert.ok(readFileSync(`${root}/${path}/index.html`, 'utf8').includes('7.4'), `${path}: Tokyo wet days must agree`);
}

console.log(`SEO checks passed: ${files.length} pages, canonical/sitemap/schema identities, internal links and priority titles.`);

const novemberCluster = ['is-japan-rainy-in-november', 'japan-in-november-vs-december', 'japan-weather-late-november-early-december', 'tokyo-in-november-weather', 'kyoto-in-november'];
for (const slug of novemberCluster) {
  const html = readFileSync(`${root}/blog/${slug}/index.html`, 'utf8');
  assert.ok(html.includes('href="/month/november/"'), `${slug}: missing hub backlink`);
  const rows = [...html.matchAll(/<tr[^>]*data-climate-city="Tokyo"[^>]*>/g)];
  if (slug !== 'kyoto-in-november') {
    assert.equal(rows.length, 1, `${slug}: render a single shared Tokyo row`);
    assert.match(rows[0][0], /data-november-wet-days="7.4"/);
  }
  assert.ok(!html.includes('Your weather-to-outfit guide'), `${slug}: packing UI belongs on packing pages`);
}
const hub = readFileSync(`${root}/month/november/index.html`, 'utf8');
assert.match(hub, /Japan in November: Weather, Autumn Leaves &amp; Crowds/);
assert.ok(!hub.includes('Your weather-to-outfit guide'));
for (const slug of [...novemberCluster, 'what-to-wear-in-japan-in-november']) assert.ok(hub.includes(`/blog/${slug}/`));
const crossing = readFileSync(`${root}/blog/japan-weather-late-november-early-december/index.html`, 'utf8');
const crossingSchemas = [...crossing.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
assert.equal(crossingSchemas.find(s => s['@type'] === 'FAQPage').mainEntity.length, 3);
assert.ok(crossingSchemas.find(s => s['@type'] === 'BlogPosting').image);
for (const path of ['month/december', 'ja/month/december', 'zh-cn/month/december']) assert.ok(readFileSync(`${root}/${path}/index.html`, 'utf8').includes('5.2'));
console.log('November cluster checks passed: shared station rows, six hub links, page roles and cross-month FAQ/image.');
