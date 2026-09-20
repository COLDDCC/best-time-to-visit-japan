#!/usr/bin/env node
/**
 * Turns the filled-in CSVs in scripts/data/ into paste-ready TypeScript for
 * src/data/foliage.ts, and refuses anything that would put an unsourced or
 * malformed date on the site.
 *
 *   node scripts/import-foliage.mjs
 *
 * It prints; it never writes to src/. Paste the output into the matching
 * `records: []` array (and `jmaKyotoMapleColoring`), then run `npm run build`.
 */

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const PEAKS_CSV = join(here, "data", "foliage-peaks.csv");
const JMA_CSV = join(here, "data", "jma-kyoto-maple.csv");
const MIN_RECORDS_TO_PUBLISH = 4;

/** Minimal CSV reader: strips `#` comments and blank lines, no quoted-comma support. */
function readCsv(path) {
  const lines = readFileSync(path, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "" && !line.startsWith("#"));
  const header = lines.shift().split(",");
  return lines.map((line) => {
    const cells = line.split(",");
    return Object.fromEntries(header.map((key, i) => [key.trim(), (cells[i] ?? "").trim()]));
  });
}

const problems = [];

function isIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d;
}

function quote(value) {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

/* ---------------- peak records ---------------- */

if (!existsSync(PEAKS_CSV)) {
  console.error(`Missing ${PEAKS_CSV}`);
  process.exit(1);
}

const bySlug = new Map();
let skipped = 0;

for (const row of readCsv(PEAKS_CSV)) {
  const { slug, year, peak_start: start, peak_end: end, source_url: url, source_label: label, note } = row;

  // A row with no dates is an unfilled placeholder, which is expected and fine.
  if (!start && !end) {
    skipped++;
    continue;
  }

  const where = `${slug} ${year}`;
  if (!isIsoDate(start)) problems.push(`${where}: peak_start "${start}" is not a valid YYYY-MM-DD date`);
  if (!isIsoDate(end)) problems.push(`${where}: peak_end "${end}" is not a valid YYYY-MM-DD date`);
  if (isIsoDate(start) && isIsoDate(end) && end < start) problems.push(`${where}: peak_end is before peak_start`);
  if (!/^https?:\/\//.test(url)) problems.push(`${where}: source_url is missing or not a URL — a record without a checkable source cannot ship`);
  if (!label) problems.push(`${where}: source_label is empty`);
  if (!/^\d{4}$/.test(year)) problems.push(`${where}: year "${year}" is not a 4-digit year`);
  if (isIsoDate(start) && !start.startsWith(year)) problems.push(`${where}: peak_start is not in year ${year}`);

  if (!bySlug.has(slug)) bySlug.set(slug, []);
  bySlug.get(slug).push({ year: Number(year), start, end, url, label, note });
}

/* ---------------- JMA baseline ---------------- */

const jma = [];
if (existsSync(JMA_CSV)) {
  for (const row of readCsv(JMA_CSV)) {
    if (!row.date) continue;
    if (!isIsoDate(row.date)) {
      problems.push(`JMA ${row.year}: date "${row.date}" is not a valid YYYY-MM-DD date`);
      continue;
    }
    jma.push({ year: Number(row.year), date: row.date });
  }
}

/* ---------------- report ---------------- */

if (problems.length > 0) {
  console.error("Refusing to emit — fix these first:\n");
  for (const problem of problems) console.error(`  - ${problem}`);
  console.error("");
  process.exit(1);
}

if (bySlug.size === 0 && jma.length === 0) {
  console.log("No filled rows yet. Add dates and sources to scripts/data/*.csv, then re-run.\n");
  console.log(`Every spot needs at least ${MIN_RECORDS_TO_PUBLISH} sourced seasons before it can go live.`);
  process.exit(0);
}

console.log(`Read ${PEAKS_CSV}`);
console.log(`Skipped ${skipped} unfilled row(s).\n`);

for (const [slug, records] of bySlug) {
  records.sort((a, b) => a.year - b.year);
  const ready = records.length >= MIN_RECORDS_TO_PUBLISH;
  console.log(`// --- ${slug}: ${records.length} sourced season(s) — ${ready ? "enough to publish (set draft: false)" : `needs ${MIN_RECORDS_TO_PUBLISH - records.length} more before draft can be false`}`);
  console.log("    records: [");
  for (const r of records) {
    console.log("      {");
    console.log(`        year: ${r.year},`);
    console.log(`        peakStart: ${quote(r.start)},`);
    console.log(`        peakEnd: ${quote(r.end)},`);
    console.log(`        sourceUrl: ${quote(r.url)},`);
    console.log(`        sourceLabel: ${quote(r.label)},`);
    if (r.note) console.log(`        note: ${quote(r.note)},`);
    console.log("      },");
  }
  console.log("    ],\n");
}

if (jma.length > 0) {
  jma.sort((a, b) => a.year - b.year);
  console.log(`// --- JMA Kyoto かえで紅葉日: ${jma.length} year(s)`);
  console.log("export const jmaKyotoMapleColoring: { year: number; date: string }[] = [");
  for (const entry of jma) console.log(`  { year: ${entry.year}, date: ${quote(entry.date)} },`);
  console.log("];\n");
}
