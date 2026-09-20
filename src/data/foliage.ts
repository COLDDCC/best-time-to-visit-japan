/**
 * Kyoto autumn-foliage ("koyo") peak-date records.
 *
 * The point of this file is to answer one question the template sites can't:
 * "I'm in Kyoto on November 24 — will the maples actually be at peak?"
 * Everything the pages display is computed from `records` below, so a page can
 * never drift from the data. No .astro or .tsx file hand-writes a date, an
 * average, or a hit count.
 *
 * DATA RULES (these are stricter than the rest of the repo — read before editing):
 *  1. Never estimate a peak date. Every PeakRecord carries a `sourceUrl` that a
 *     reader can open and check. If a year can't be sourced, omit the year —
 *     a gap is honest, an invented date is not.
 *  2. Record OBSERVED peak windows, not pre-season forecasts. Japanese foliage
 *     sites publish a 見頃予想 (prediction) in September and a 見頃 (observed)
 *     status during the season; only the latter belongs here. If a page doesn't
 *     make clear which it is, don't use it.
 *  3. Preferred sources, best first: ウェザーニュース 紅葉見頃情報,
 *     日本気象協会 tenki.jp 紅葉情報, そうだ 京都、行こう。season archives,
 *     the temple's own site or official X account for that year.
 *  4. A spot only goes live (`draft: false`) with at least MIN_RECORDS_TO_PUBLISH
 *     sourced years. `publishedFoliageSpots` enforces this regardless of the
 *     `draft` flag, so a half-filled spot can't ship by accident.
 */

/** A spot is only allowed on the live site with at least this many sourced years. */
export const MIN_RECORDS_TO_PUBLISH = 4;

/** The window the date checker accepts. Kyoto koyo never runs outside it. */
export const CHECKER_WINDOW = { start: "10-25", end: "12-15" } as const;

export interface PeakRecord {
  year: number;
  /** Observed start of 見頃 (peak), ISO "2024-11-22". Omit the record if unsourced. */
  peakStart: string;
  /** Observed end of 見頃 (peak), ISO "2024-12-03". */
  peakEnd: string;
  /** Must be a real, openable URL that shows these dates. */
  sourceUrl: string;
  /** e.g. "Weathernews 見頃情報 2024" */
  sourceLabel: string;
  /** Anything that makes the year unrepresentative, e.g. "Typhoon stripped leaves early". */
  note?: string;
}

export interface FoliageSpot {
  slug: string;
  name: string;
  nameJa: string;
  city: string;
  /** true keeps the spot out of the build entirely. */
  draft: boolean;
  tagline: string;
  /** Meta description, 150-160 characters. */
  meta: string;
  intro: string[];
  records: PeakRecord[];
  viewingTips: { title: string; body: string }[];
  access: string;
  /** Peak-season admission. Leave unset rather than guessing — prices change yearly. */
  admission?: string;
  crowdNote?: string;
  faqs: { q: string; a: string }[];
  image?: string;
  imageAlt?: string;
}

/**
 * JMA Kyoto Local Meteorological Observatory かえで紅葉日 (the date the reference
 * maple is judged to have turned). Observed since 1953, it's the only long, uniform
 * series for the city — but it tracks ONE tree at the observatory, not any temple
 * garden, so it's used here purely as a "was this year early or late?" baseline.
 *
 * Source: 気象庁 生物季節観測 https://www.data.jma.go.jp/sakura/data/
 * Fill via `scripts/data/jma-kyoto-maple.csv` (see scripts/data/README.md).
 */
export const jmaKyotoMapleColoring: { year: number; date: string }[] = [
  { year: 2019, date: "2019-12-10" },
  { year: 2020, date: "2020-12-07" },
  // 2021 is absent: the 累年表 records no value for 京都 that season.
  { year: 2022, date: "2022-12-12" },
  { year: 2023, date: "2023-12-13" },
  { year: 2024, date: "2024-12-20" },
  { year: 2025, date: "2025-12-10" },
];

/**
 * TODO before flipping any spot to `draft: false`:
 *  - Fill `records` from `scripts/data/foliage-peaks.csv` (>= 4 sourced years each).
 *  - Verify `access` walking times against the temple's own access page.
 *  - Add `admission` only once confirmed for the current koyo season.
 *  - Add `image`/`imageAlt` if a real photo has been committed; the template
 *    renders a placeholder when they're unset, so leaving them out is safe.
 */
export const foliageSpots: FoliageSpot[] = [
  {
    slug: "tofukuji",
    name: "Tofuku-ji",
    nameJa: "東福寺",
    city: "Kyoto",
    draft: true,
    tagline: "The valley of maples under Tsutenkyo Bridge",
    meta: "When do Tofuku-ji's autumn leaves peak? Past observed peak windows year by year, plus a date checker that tells you how often your travel date has hit peak color.",
    intro: [
      "Tofuku-ji is the headline of Kyoto's koyo season. Its maples fill the Sengyokukan ravine below Tsutenkyo, a covered bridge that crosses the valley, so instead of looking up at colour you look down into a canopy of it — the reason this one temple absorbs so much of the city's November traffic.",
      "That popularity is also the planning problem. Tofuku-ji's peak is short, the bridge is a one-way shuffle at midday, and arriving a week early or late is the difference between the photograph you came for and a green or bare ravine. The records below are the observed peak windows for past seasons, so you can see how a date in your trip has actually played out.",
    ],
    records: [],
    viewingTips: [
      {
        title: "Go at opening, not at golden hour",
        body: "Tsutenkyo faces into a wooded ravine, so the bridge view reads best in flat morning light — and the queue for it is shortest in the first hour after the gate opens. By late morning the bridge is single-file.",
      },
      {
        title: "Photography is restricted on the bridge",
        body: "The temple has in past seasons banned photography from Tsutenkyo itself during the peak weeks to keep people moving. Check the current season's notice on the temple's site; the ravine is also shot from the Gaunkyo bridge, which is free to enter.",
      },
      {
        title: "Weekday over weekend",
        body: "Tofuku-ji is a 10-minute walk from a station on two lines, which makes it an easy half-day stop for domestic visitors too. Tuesday to Thursday is materially calmer than any weekend in the peak window.",
      },
    ],
    access: "Tofukuji Station, served by the JR Nara Line and the Keihan Main Line, is the closest station at a 10-minute walk; Toba-kaido Station on the Keihan line is the same 10 minutes by the temple's own reckoning and far less crowded when the peak-season queues back up at Tofukuji. The temple closes every on-site car park from 25 October to 10 December, so arriving by train is the only realistic option in the peak window.",
    admission:
      "The temple charges a higher autumn rate over its 秋期 period, 14 November to 6 December 2026: ¥1,000 for adults and ¥500 for children to enter Tsutenkyo and Kaisando, which is the bridge and the ravine view. The Hojo garden is ticketed separately at ¥600 for adults and ¥300 for children from 1 November 2026. The combined ticket sold the rest of the year is withdrawn for those weeks, so seeing both means buying both.",
    crowdNote:
      "Tofuku-ji runs a one-way visitor route through the peak weeks and can hold visitors at the gate when the bridge is full. Budget more time than the temple's own estimate on any weekend in the peak window.",
    faqs: [
      {
        q: "When do Tofuku-ji's autumn leaves usually peak?",
        a: "", // computed at render time from `records`
      },
      {
        q: "Is Tofuku-ji worth visiting outside the peak window?",
        a: "Yes, and it's a completely different visit. Outside the peak weeks the ravine is quiet, the one-way route and gate queues are gone, and the Hojo gardens — a modern rock-garden composition that has nothing to do with the maples — get the attention they deserve.",
      },
      {
        q: "How reliable is a peak-date prediction for a specific day?",
        a: "Treat it as odds, not a forecast. The checker on this page only tells you how often your date fell inside the observed peak in past seasons; it does not model the coming year. A warm autumn can push peak later by a week or more, so confirm against live 見頃 reports in the fortnight before you travel.",
      },
    ],
  },
  {
    slug: "eikando",
    name: "Eikando",
    nameJa: "永観堂",
    city: "Kyoto",
    draft: true,
    tagline: "Kyoto's oldest koyo name, and its best night viewing",
    meta: "When does Eikando's autumn colour peak? Year-by-year observed peak windows and a date checker showing how often your travel date has landed inside peak at Eikando.",
    intro: [
      "Eikando — formally Zenrin-ji — has been shorthand for autumn colour in Kyoto since the Heian period; an anthology poem called it 'Eikando of the maples' and the name stuck. The temple sits at the southern end of the Philosopher's Path, which makes it the natural anchor for a half-day of walking through Higashiyama.",
      "It is also the city's signature night-viewing temple. The evening illumination runs on its own schedule, sold separately from daytime entry, and the pond reflections under lights are the reason people queue down the street for it. Knowing whether your dates fall inside the observed peak matters twice over here, because the illumination dates are set months ahead and do not move with the leaves.",
    ],
    records: [],
    viewingTips: [
      {
        title: "Day and night are separate visits",
        body: "The evening illumination is ticketed separately from daytime admission and the temple clears between the two. If you want both, plan them as two stops, not one long one.",
      },
      {
        title: "The illumination queue forms before it opens",
        body: "Arriving at the advertised start time usually means a wait in the street. The line is shortest in the last hour before the final entry rather than at the opening rush.",
      },
      {
        title: "Pair it with the Philosopher's Path",
        body: "Eikando and Nanzen-ji are a short walk apart at the southern end of the path, so a single Higashiyama morning covers both plus the canal walk — which colours up on roughly the same schedule.",
      },
    ],
    access: "In Sakyo-ku, at the southern end of the Philosopher's Path near Nanzen-ji. Keage Station on the Tozai subway line is the nearest rail access but still a 15-minute walk; the city bus is much closer — route 5 from Kyoto Station, Sanjo or Kyoto-Kawaramachi stops at Nanzenji-Eikandomichi, three minutes from the gate. Private cars and coaches are turned away for the whole autumn exhibition period.",
    admission:
      "Autumn is ticketed as a separate 秋の寺宝展, 11 November to 6 December 2026, at ¥1,500 for adults — appreciably more than the ¥1,000 charged the rest of the year. The evening illumination, 20 November to 6 December 2026, is its own ¥1,000 adult ticket, and the two are not continuous: the temple clears the grounds between them, so day and night are two separate admissions.",
    crowdNote:
      "Eikando is the single busiest night-viewing temple in Kyoto during the peak weeks. Weekend evenings inside the peak window are the worst combination on this page.",
    faqs: [
      {
        q: "When does Eikando's autumn colour usually peak?",
        a: "", // computed at render time from `records`
      },
      {
        q: "Do the night illumination dates line up with peak colour?",
        a: "Not necessarily. The illumination period is fixed and published well before the season, while peak colour moves with the weather. In a late year the illumination can open on trees that haven't fully turned. Check the year's observed 見頃 reports rather than assuming the illumination dates mark the peak.",
      },
      {
        q: "Is Eikando or Tofuku-ji the better bet for a single date?",
        a: "Compare the two on the Kyoto hub page — it puts every spot's record side by side for the same date, which is the honest way to choose. The two don't peak on identical schedules, so one is often a safer bet than the other for any given day.",
      },
    ],
  },
  {
    slug: "arashiyama",
    name: "Arashiyama",
    nameJa: "嵐山",
    city: "Kyoto",
    draft: true,
    tagline: "A whole hillside, not a single garden",
    meta: "When do Arashiyama's autumn leaves peak? Observed peak windows season by season, with a date checker showing how often your date has hit peak colour in Arashiyama.",
    intro: [
      "Arashiyama is the outlier on this page: not one temple garden but a whole district — the hillside above the Togetsukyo bridge, the Katsura river bank, and the temple grounds scattered through it. Colour arrives across the slope rather than in a single canopy, which makes the peak read as broader and more forgiving here than at Tofuku-ji.",
      "It also means 'peak in Arashiyama' is a looser claim than 'peak at Eikando', and the records below should be read that way. Sources report the district as a unit; individual temples within it can run a few days apart from the hillside as a whole.",
    ],
    records: [],
    viewingTips: [
      {
        title: "The hillside, not the bamboo grove",
        body: "The bamboo grove is evergreen and has no autumn colour at all — it's busy year-round for unrelated reasons. The maples are on the slope above the Togetsukyo bridge and along the river.",
      },
      {
        title: "First train beats the day-trip wave",
        body: "Arashiyama fills from mid-morning as day-trippers arrive from central Kyoto and Osaka. The riverside and the bridge view are genuinely quiet before then, even inside the peak window.",
      },
      {
        title: "Colour spreads over days, not hours",
        body: "Because the district covers a whole hillside at varying elevation, the upper slope turns before the riverbank. A date that reads as 'just early' still usually has colour somewhere in Arashiyama.",
      },
    ],
    access: "Three separate lines reach the district: Saga-Arashiyama on the JR Sagano (San-in) Line, Arashiyama on the Hankyu Arashiyama Line, and Arashiyama on the Keifuku 'Randen' tram. The JR station is the fastest connection from Kyoto Station.",
    crowdNote:
      "Arashiyama's crowding is concentrated on the Togetsukyo bridge and the main street between the station and the river. The riverbank upstream and the slope paths absorb people much better.",
    faqs: [
      {
        q: "When do Arashiyama's autumn leaves usually peak?",
        a: "", // computed at render time from `records`
      },
      {
        q: "Does the bamboo grove change colour in autumn?",
        a: "No. Bamboo is evergreen and looks the same in November as in July. The autumn draw in Arashiyama is the maple colour on the hillside above the Togetsukyo bridge and along the Katsura river, which is a separate part of the district.",
      },
      {
        q: "Is Arashiyama a safer bet than a single temple for an uncertain date?",
        a: "Often, yes — colour arrives across a hillside at different elevations rather than in one enclosed garden, so the district tends to have something worth seeing across a wider band of dates. The trade-off is that 'peak in Arashiyama' is a broader claim than peak at one temple.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Date helpers
 *
 * Everything inside the season is handled as an "autumn ordinal": the number
 * of days since October 1. That makes an Oct 25 -> Dec 15 window a simple
 * integer range with no year and no month-rollover arithmetic.
 * ------------------------------------------------------------------ */

const MONTH_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/** Days in Oct / Nov (the only rollovers an autumn ordinal can cross). */
const DAYS_IN = { 10: 31, 11: 30, 12: 31 } as const;

/** "2024-11-22" or "11-22" -> { month, day } */
export function parseMonthDay(value: string): { month: number; day: number } {
  const parts = value.split("-");
  const [m, d] = parts.length === 3 ? [parts[1], parts[2]] : [parts[0], parts[1]];
  return { month: Number(m), day: Number(d) };
}

/** Days since Oct 1 (Oct 1 = 0). Only meaningful for October-December dates. */
export function autumnOrdinal(value: string): number {
  const { month, day } = parseMonthDay(value);
  if (month === 10) return day - 1;
  if (month === 11) return DAYS_IN[10] + day - 1;
  if (month === 12) return DAYS_IN[10] + DAYS_IN[11] + day - 1;
  // Outside the season the ordinal is meaningless; clamp so callers never get NaN.
  return month < 10 ? -1 : DAYS_IN[10] + DAYS_IN[11] + DAYS_IN[12];
}

/** Inverse of `autumnOrdinal`. */
export function fromAutumnOrdinal(ordinal: number): { month: number; day: number } {
  if (ordinal < DAYS_IN[10]) return { month: 10, day: ordinal + 1 };
  if (ordinal < DAYS_IN[10] + DAYS_IN[11]) return { month: 11, day: ordinal - DAYS_IN[10] + 1 };
  return { month: 12, day: ordinal - DAYS_IN[10] - DAYS_IN[11] + 1 };
}

/** 52 -> "Nov 22" */
export function formatOrdinal(ordinal: number): string {
  const { month, day } = fromAutumnOrdinal(ordinal);
  return `${MONTH_ABBR[month - 1]} ${day}`;
}

/** "2024-11-22" -> "Nov 22" */
export function formatMonthDay(value: string): string {
  return formatOrdinal(autumnOrdinal(value));
}

/** "2024-11-22" -> "November 22, 2024" */
export function formatFullDate(iso: string): string {
  const { month, day } = parseMonthDay(iso);
  const year = iso.split("-")[0];
  const full = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${full[month - 1]} ${day}, ${year}`;
}

export const CHECKER_MIN_ORDINAL = autumnOrdinal(CHECKER_WINDOW.start);
export const CHECKER_MAX_ORDINAL = autumnOrdinal(CHECKER_WINDOW.end);

/* ------------------------------------------------------------------ *
 * Derived statistics
 * ------------------------------------------------------------------ */

/** Spots allowed on the live site: explicitly undrafted AND carrying enough sourced years. */
export const publishedFoliageSpots: FoliageSpot[] = foliageSpots.filter(
  (s) => !s.draft && s.records.length >= MIN_RECORDS_TO_PUBLISH,
);

export function getFoliageSpot(slug: string): FoliageSpot | undefined {
  return foliageSpots.find((s) => s.slug === slug);
}

function mean(values: number[]): number {
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

export interface SpotStats {
  years: number;
  firstYear: number;
  lastYear: number;
  /** Rounded mean of the observed peak starts / ends, as autumn ordinals. */
  meanStart: number;
  meanEnd: number;
  /** Earliest start and latest end ever observed. */
  earliestStart: number;
  latestEnd: number;
  /** Mean length of the observed peak window, in days. */
  meanLength: number;
  /** Ordinal bounds covering every record — used to scale the timeline. */
  timelineFrom: number;
  timelineTo: number;
}

/** Null when a spot has no records, so callers must handle the empty case. */
export function spotStats(spot: FoliageSpot): SpotStats | null {
  if (spot.records.length === 0) return null;
  const starts = spot.records.map((r) => autumnOrdinal(r.peakStart));
  const ends = spot.records.map((r) => autumnOrdinal(r.peakEnd));
  const years = spot.records.map((r) => r.year);
  const earliestStart = Math.min(...starts);
  const latestEnd = Math.max(...ends);
  return {
    years: spot.records.length,
    firstYear: Math.min(...years),
    lastYear: Math.max(...years),
    meanStart: Math.round(mean(starts)),
    meanEnd: Math.round(mean(ends)),
    earliestStart,
    latestEnd,
    meanLength: Math.round(mean(spot.records.map((_, i) => ends[i] - starts[i] + 1))),
    // Pad the timeline by two days so the first and last bar aren't flush to the edge.
    timelineFrom: earliestStart - 2,
    timelineTo: latestEnd + 2,
  };
}

/** How many of a spot's recorded years had this date inside the observed peak. */
export function hitCount(spot: FoliageSpot, ordinal: number): number {
  return spot.records.filter(
    (r) => ordinal >= autumnOrdinal(r.peakStart) && ordinal <= autumnOrdinal(r.peakEnd),
  ).length;
}

export type YearOutcome = {
  year: number;
  /** "hit": the date was inside that year's peak. "early"/"late": it wasn't. */
  status: "hit" | "early" | "late";
  /** Days before peak started ("early") or after it ended ("late"). 0 on a hit. */
  daysOff: number;
  record: PeakRecord;
};

/** Per-year outcome for one date, newest year first. */
export function outcomesForDate(spot: FoliageSpot, ordinal: number): YearOutcome[] {
  return spot.records
    .slice()
    .sort((a, b) => b.year - a.year)
    .map((record) => {
      const start = autumnOrdinal(record.peakStart);
      const end = autumnOrdinal(record.peakEnd);
      if (ordinal < start) return { year: record.year, status: "early" as const, daysOff: start - ordinal, record };
      if (ordinal > end) return { year: record.year, status: "late" as const, daysOff: ordinal - end, record };
      return { year: record.year, status: "hit" as const, daysOff: 0, record };
    });
}

/**
 * The headline claim for a spot: the longest run of consecutive dates that all
 * hit in the most years on record. Rendered as "Nov 23-Nov 27 hit peak in 6 of
 * 6 years" — a statement of what happened, never a prediction.
 */
export interface BestWindow {
  fromOrdinal: number;
  toOrdinal: number;
  hits: number;
  years: number;
}

export function bestWindow(spot: FoliageSpot): BestWindow | null {
  const stats = spotStats(spot);
  if (!stats) return null;
  let best = 0;
  for (let o = stats.earliestStart; o <= stats.latestEnd; o++) {
    best = Math.max(best, hitCount(spot, o));
  }
  // Longest consecutive run achieving that maximum. `to - from` starts at -1 so
  // that even a single-day run (length 0 by this measure) beats the initial value.
  let bestRun = { from: -1, to: -2 };
  let runStart = -1;
  for (let o = stats.earliestStart; o <= stats.latestEnd + 1; o++) {
    const isBest = o <= stats.latestEnd && hitCount(spot, o) === best;
    if (isBest && runStart === -1) runStart = o;
    if (!isBest && runStart !== -1) {
      if (o - 1 - runStart > bestRun.to - bestRun.from) bestRun = { from: runStart, to: o - 1 };
      runStart = -1;
    }
  }
  return { fromOrdinal: bestRun.from, toOrdinal: bestRun.to, hits: best, years: stats.years };
}

/**
 * A nearby date that would have hit in strictly more years than the one chosen.
 * Searches +/- `radius` days and returns the biggest improvement, preferring the
 * closest date on a tie. Null when the chosen date is already as good as it gets.
 */
export function betterNearbyDate(
  spot: FoliageSpot,
  ordinal: number,
  radius = 3,
): { ordinal: number; hits: number; offset: number } | null {
  const baseline = hitCount(spot, ordinal);
  let best: { ordinal: number; hits: number; offset: number } | null = null;
  for (let delta = -radius; delta <= radius; delta++) {
    if (delta === 0) continue;
    const candidate = ordinal + delta;
    if (candidate < CHECKER_MIN_ORDINAL || candidate > CHECKER_MAX_ORDINAL) continue;
    const hits = hitCount(spot, candidate);
    if (hits <= baseline) continue;
    if (!best || hits > best.hits || (hits === best.hits && Math.abs(delta) < Math.abs(best.offset))) {
      best = { ordinal: candidate, hits, offset: delta };
    }
  }
  return best;
}

/**
 * Mean offset between the JMA observatory's かえで紅葉日 and a spot's observed
 * peak start, over the years both series cover. Positive = the spot peaks after
 * the observatory tree turns. Null unless at least two years overlap.
 */
export interface JmaComparison {
  overlapYears: number;
  /** Mean days between the JMA coloring date and this spot's peak start. */
  meanOffsetDays: number;
}

export function jmaComparison(spot: FoliageSpot): JmaComparison | null {
  const offsets: number[] = [];
  for (const record of spot.records) {
    const baseline = jmaKyotoMapleColoring.find((j) => j.year === record.year);
    if (!baseline) continue;
    offsets.push(autumnOrdinal(record.peakStart) - autumnOrdinal(baseline.date));
  }
  if (offsets.length < 2) return null;
  return { overlapYears: offsets.length, meanOffsetDays: Math.round(mean(offsets)) };
}

/** Comparison-table row for the Kyoto hub, sorted earliest-peaking spot first. */
export interface HubRow {
  spot: FoliageSpot;
  stats: SpotStats;
  best: BestWindow;
  jma: JmaComparison | null;
}

export function hubRows(): HubRow[] {
  return publishedFoliageSpots
    .map((spot) => ({
      spot,
      stats: spotStats(spot)!,
      best: bestWindow(spot)!,
      jma: jmaComparison(spot),
    }))
    .sort((a, b) => a.stats.meanStart - b.stats.meanStart);
}

/**
 * Plain-language answer to "when does this place peak?", built entirely from the
 * records so the FAQ can't contradict the table above it.
 */
export function peakSummarySentence(spot: FoliageSpot): string | null {
  const stats = spotStats(spot);
  const best = bestWindow(spot);
  if (!stats || !best) return null;
  const range =
    best.fromOrdinal === best.toOrdinal
      ? formatOrdinal(best.fromOrdinal)
      : `${formatOrdinal(best.fromOrdinal)}-${formatOrdinal(best.toOrdinal)}`;
  return (
    `Across ${stats.years} seasons on record (${stats.firstYear}-${stats.lastYear}), ${spot.name}'s observed peak ` +
    `started on ${formatOrdinal(stats.meanStart)} on average and ran about ${stats.meanLength} days. ` +
    `${range} fell inside the peak in ${best.hits} of those ${best.years} years — the strongest run in the record. ` +
    `The earliest peak began ${formatOrdinal(stats.earliestStart)} and the latest ended ${formatOrdinal(stats.latestEnd)}, ` +
    `so treat this as historical odds rather than a forecast for any coming season.`
  );
}

/**
 * FAQ list with any blank answer filled from the records. A spot's "when does it
 * peak?" answer is left empty in the data on purpose — writing it by hand would
 * let it drift from the table. Entries still blank (no records) are dropped so
 * the FAQPage schema never carries an empty answer.
 */
export function resolvedFaqs(spot: FoliageSpot): { q: string; a: string }[] {
  const computed = peakSummarySentence(spot);
  return spot.faqs
    .map((faq) => (faq.a.trim() === "" ? { q: faq.q, a: computed ?? "" } : faq))
    .filter((faq) => faq.a.trim() !== "");
}

/**
 * The single date that was at peak across the most spot-seasons — the answer to
 * "I only get one day in Kyoto, when should it be?". Scored as the total number
 * of (spot, year) pairs at peak, so a date that hits everywhere beats a date
 * that hits one spot reliably. Ties resolve to the earlier date.
 */
export function bestSharedOrdinal(spots: FoliageSpot[]): number {
  let best = CHECKER_MIN_ORDINAL;
  let bestScore = -1;
  for (let ordinal = CHECKER_MIN_ORDINAL; ordinal <= CHECKER_MAX_ORDINAL; ordinal++) {
    const score = spots.reduce((total, spot) => total + hitCount(spot, ordinal), 0);
    if (score > bestScore) {
      bestScore = score;
      best = ordinal;
    }
  }
  return best;
}
