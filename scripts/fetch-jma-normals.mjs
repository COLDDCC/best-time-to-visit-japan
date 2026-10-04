#!/usr/bin/env node
/**
 * Regenerates src/data/climate.ts from the JMA's published climate normals.
 *
 *   node scripts/fetch-jma-normals.mjs
 *
 * The numbers on the city/month tables are the Japan Meteorological Agency's
 * 平年値 (climate normals) for the 1991-2020 standard period — the same figures
 * the JMA itself quotes as "average" weather. They are fixed until the JMA rolls
 * the period forward (next due 2031), so this script is run rarely and its
 * output is committed; the build never touches the network.
 *
 * Two JMA tables are read per station:
 *   view=a1  降水量 合計(mm) + 降水日数 (days at or above a threshold)
 *   view=a2  気温 平均/日最高/日最低(℃) + 真夏日/猛暑日/冬日 counts
 *
 * Every station is verified by name before its numbers are accepted, so a wrong
 * block_no fails loudly instead of silently publishing another city's climate.
 */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "data", "climate.ts");
const BASE = "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php";
const PERIOD = "1991-2020";

/**
 * The stations. `expect` is the Japanese station name as the JMA prints it; the
 * fetch aborts if the page doesn't match, which is what catches a bad block_no.
 *
 * Each is the JMA's own observatory for that destination — the station a
 * Japanese forecast for "Kyoto" or "Sapporo" actually refers to.
 */
const STATIONS = [
  { slug: "sapporo",   city: "Sapporo",   regionSlug: "hokkaido",  prec: 14, block: 47412, expect: "札幌" },
  { slug: "sendai",    city: "Sendai",    regionSlug: "tohoku",    prec: 34, block: 47590, expect: "仙台" },
  { slug: "tokyo",     city: "Tokyo",     regionSlug: "tokyo",     prec: 44, block: 47662, expect: "東京" },
  { slug: "kawaguchiko", city: "Kawaguchiko", regionSlug: "fuji",  prec: 49, block: 47640, expect: "河口湖" },
  { slug: "kyoto",     city: "Kyoto",     regionSlug: "kyoto",     prec: 61, block: 47759, expect: "京都" },
  { slug: "osaka",     city: "Osaka",     regionSlug: null,        prec: 62, block: 47772, expect: "大阪" },
  { slug: "nara",      city: "Nara",      regionSlug: "nara",      prec: 64, block: 47780, expect: "奈良" },
  { slug: "hiroshima", city: "Hiroshima", regionSlug: "hiroshima", prec: 67, block: 47765, expect: "広島" },
  { slug: "takamatsu", city: "Takamatsu", regionSlug: "shikoku",   prec: 72, block: 47891, expect: "高松" },
  { slug: "fukuoka",   city: "Fukuoka",   regionSlug: "kyushu",    prec: 82, block: 47807, expect: "福岡" },
  { slug: "naha",      city: "Naha",      regionSlug: "okinawa",   prec: 91, block: 47936, expect: "那覇" },
];

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

function url(station, view) {
  return `${BASE}?prec_no=${station.prec}&block_no=${station.block}&year=&month=&day=&view=${view}`;
}

async function get(target) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(target, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      if (attempt === 4) throw new Error(`${target}: ${err.message}`);
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
}

const stripTags = (s) => s.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();

/** Rows of the JMA data table, as arrays of plain-text cells. */
function rows(html) {
  return [...html.matchAll(/<tr[\s\S]*?<\/tr>/g)]
    .map((m) => [...m[0].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map((c) => stripTags(c[1])))
    .filter((cells) => cells.length > 0);
}

/** The JMA marks missing/unavailable values with these; they must not become 0. */
function num(cell) {
  if (cell === undefined) return null;
  const cleaned = cell.replace(/[\]\)#＊*\s]/g, "");
  if (cleaned === "" || cleaned === "---" || cleaned === "--" || cleaned === "×") return null;
  const value = Number(cleaned);
  return Number.isFinite(value) ? value : null;
}

/** Picks the 12 monthly rows, keyed by the leading "N月" cell. */
function monthlyRows(table) {
  const out = new Map();
  for (const cells of table) {
    const m = /^(\d{1,2})月$/.exec(cells[0] ?? "");
    if (m) out.set(Number(m[1]), cells);
  }
  return out;
}

function verify(html, station) {
  // The page carries a bare "平年値（年・月ごとの値）" heading as well as the one
  // that names the station — "京都（京都府) 平年値（年・月ごとの値） 主な要素".
  // Only the latter identifies the data, so require the station name in front.
  const heading = [...html.matchAll(/<h\d[^>]*>([\s\S]*?)<\/h\d>/g)]
    .map((m) => stripTags(m[1]))
    .find((t) => t.indexOf("平年値") > 0);
  if (!heading || !heading.startsWith(station.expect)) {
    throw new Error(
      `station mismatch for ${station.city} (prec_no=${station.prec} block_no=${station.block}): ` +
        `expected "${station.expect}", page says "${heading ?? "no heading found"}"`,
    );
  }
}

const results = [];

for (const station of STATIONS) {
  process.stderr.write(`${station.city} ... `);

  const [a1, a2] = await Promise.all([get(url(station, "a1")), get(url(station, "a2"))]);
  verify(a1, station);
  verify(a2, station);

  const precip = monthlyRows(rows(a1));
  const temps = monthlyRows(rows(a2));
  if (precip.size !== 12 || temps.size !== 12) {
    throw new Error(`${station.city}: expected 12 monthly rows, got ${precip.size}/${temps.size}`);
  }

  const months = MONTHS.map((name, i) => {
    const p = precip.get(i + 1);
    const t = temps.get(i + 1);

    // a1 columns: 月 | 現地気圧 | 海面気圧 | 降水量合計 | ≧0.0mm | ≧0.5mm | ≧1.0mm | ≧10.0mm | ...
    // a2 columns: 月 | 平均気温 | 日最高 | 日最低 | <0.0(平均) | ≧25.0(平均) | <0.0(最低) | ≧25.0(最低) | <0.0(最高) | ≧25.0(最高) | ≧30.0 | ≧35.0 | ...
    const row = {
      month: name,
      meanTempC: num(t[1]),
      meanHighC: num(t[2]),
      meanLowC: num(t[3]),
      precipMm: num(p[3]),
      // "A rainy day" here is the ≥1.0 mm count — the threshold a traveller
      // would actually notice, and the one the JMA itself tabulates.
      rainDays: num(p[6]),
      // ≥30 °C and ≥35 °C days off the 日最高 block; <0 °C days off 日最低.
      hotDays30: num(t[10]),
      veryHotDays35: num(t[11]),
      frostDays: num(t[6]),
    };

    for (const [key, value] of Object.entries(row)) {
      if (key !== "month" && value === null) {
        throw new Error(`${station.city} ${name}: no value parsed for ${key}`);
      }
    }
    return row;
  });

  results.push({ station, months });
  process.stderr.write("ok\n");
}

/* ---------------- emit ---------------- */

const q = (v) => (v === null ? "null" : typeof v === "string" ? JSON.stringify(v) : String(v));

const body = results
  .map(({ station, months }) => {
    const rowsOut = months
      .map(
        (m) =>
          `      { month: ${q(m.month)}, meanTempC: ${m.meanTempC}, meanHighC: ${m.meanHighC}, ` +
          `meanLowC: ${m.meanLowC}, precipMm: ${m.precipMm}, rainDays: ${m.rainDays}, ` +
          `hotDays30: ${m.hotDays30}, veryHotDays35: ${m.veryHotDays35}, frostDays: ${m.frostDays} },`,
      )
      .join("\n");
    return `  {
    slug: ${q(station.slug)},
    city: ${q(station.city)},
    regionSlug: ${q(station.regionSlug)},
    stationJa: ${q(station.expect)},
    sourceUrl: ${q(url(station, "a2"))},
    months: [
${rowsOut}
    ],
  },`;
  })
  .join("\n");

const file = `// GENERATED FILE — do not edit by hand.
// Regenerate with:  node scripts/fetch-jma-normals.mjs
//
// Japan Meteorological Agency climate normals (平年値) for the ${PERIOD} standard
// period, read from the JMA's own 過去の気象データ検索 tables. Each city is the
// JMA observatory a Japanese forecast for that destination refers to, and every
// row carries the station page it came from.
//
// These are 30-year averages, not a forecast: they say what a typical November in
// Kyoto looks like, never what next November will do.

/** The JMA standard period these normals are averaged over. */
export const CLIMATE_NORMALS_PERIOD = ${q(PERIOD)};

export interface CityMonthClimate {
  month: string;
  /** Mean daily temperature, °C. */
  meanTempC: number;
  /** Mean daily maximum, °C — the daytime figure a visitor feels. */
  meanHighC: number;
  /** Mean daily minimum, °C. */
  meanLowC: number;
  /** Total monthly precipitation, mm. */
  precipMm: number;
  /** Days with 1.0 mm or more of precipitation. */
  rainDays: number;
  /** Days with a maximum at or above 30 °C (真夏日). */
  hotDays30: number;
  /** Days with a maximum at or above 35 °C (猛暑日). */
  veryHotDays35: number;
  /** Days with a minimum below 0 °C (冬日). */
  frostDays: number;
}

export interface CityClimate {
  slug: string;
  city: string;
  /** The region guide this city stands in for, when one exists. */
  regionSlug: string | null;
  stationJa: string;
  /** The JMA table these numbers were read from. */
  sourceUrl: string;
  months: CityMonthClimate[];
}

export const cityClimates: CityClimate[] = [
${body}
];

/** The climate row for a city in a given month, or undefined. */
export function climateFor(citySlug: string, month: string): CityMonthClimate | undefined {
  return cityClimates.find((c) => c.slug === citySlug)?.months.find((m) => m.month === month);
}

/** Every city's row for one month, in the north-to-south order of \`cityClimates\`. */
export function climateByMonth(month: string): { city: CityClimate; data: CityMonthClimate }[] {
  return cityClimates
    .map((city) => ({ city, data: city.months.find((m) => m.month === month) }))
    .filter((row): row is { city: CityClimate; data: CityMonthClimate } => row.data !== undefined);
}

/** The climate row for the city standing in for a region guide, or undefined. */
export function climateForRegion(regionSlug: string): CityClimate | undefined {
  return cityClimates.find((c) => c.regionSlug === regionSlug);
}
`;

writeFileSync(OUT, file);
console.log(`Wrote ${OUT} — ${results.length} cities x 12 months, JMA normals ${PERIOD}.`);
