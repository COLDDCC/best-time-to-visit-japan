/**
 * Derived read-outs over the JMA climate normals in `climate.ts`.
 *
 * Kept separate because `climate.ts` is generated and overwritten by
 * `scripts/fetch-jma-normals.mjs`; everything here is hand-written and only ever
 * rearranges numbers the JMA already publishes. Nothing in this file invents or
 * interpolates a value.
 */
import { climateByMonth, type CityClimate, type CityMonthClimate } from "./climate.ts";

export interface SpreadEnd {
  city: string;
  high: number;
  low: number;
}

export interface MonthSpread {
  /** The coldest city of the month, by mean daily maximum. */
  coldest: SpreadEnd;
  /** The warmest city of the month, by mean daily maximum. */
  warmest: SpreadEnd;
  /** Wettest city of the month, by days with 1 mm or more. */
  wettest: { city: string; rainDays: number };
  /** Driest city of the month, by the same count. */
  driest: { city: string; rainDays: number };
  /**
   * The city with the most days at or above 30 °C, when any city has a
   * meaningful count. Null in the months where nowhere gets hot.
   */
  mostHotDays: { city: string; days: number } | null;
  /**
   * The city with the most days below 0 °C overnight, when any city has a
   * meaningful count. Null in the months where nowhere freezes.
   */
  mostFrostDays: { city: string; days: number } | null;
}

const end = (row: { city: CityClimate; data: CityMonthClimate }): SpreadEnd => ({
  city: row.city.city,
  high: row.data.meanHighC,
  low: row.data.meanLowC,
});

/**
 * How far apart the tracked cities are in a given month.
 *
 * This is the honest replacement for a single nationwide "Japan averages
 * X-Y°C": the country spans about 3,000 km, so in most months the spread
 * between Sapporo and Naha is wider than the figure a single average implies.
 */
export function monthSpread(month: string): MonthSpread | null {
  const rows = climateByMonth(month);
  if (rows.length === 0) return null;

  const byHigh = [...rows].sort((a, b) => a.data.meanHighC - b.data.meanHighC);
  const byRain = [...rows].sort((a, b) => a.data.rainDays - b.data.rainDays);
  const byHot = [...rows].sort((a, b) => b.data.hotDays30 - a.data.hotDays30)[0];
  const byFrost = [...rows].sort((a, b) => b.data.frostDays - a.data.frostDays)[0];

  // A fraction of a day averaged over 30 years isn't worth a sentence; only
  // surface these once they describe something a visitor would actually meet.
  const NOTABLE_DAYS = 1;

  return {
    mostHotDays:
      byHot.data.hotDays30 >= NOTABLE_DAYS
        ? { city: byHot.city.city, days: byHot.data.hotDays30 }
        : null,
    mostFrostDays:
      byFrost.data.frostDays >= NOTABLE_DAYS
        ? { city: byFrost.city.city, days: byFrost.data.frostDays }
        : null,
    coldest: end(byHigh[0]),
    warmest: end(byHigh[byHigh.length - 1]),
    driest: { city: byRain[0].city.city, rainDays: byRain[0].data.rainDays },
    wettest: {
      city: byRain[byRain.length - 1].city.city,
      rainDays: byRain[byRain.length - 1].data.rainDays,
    },
  };
}

/** e.g. "10°C in Sapporo to 25°C in Naha" — for prose and meta descriptions. */
export function spreadPhrase(spread: MonthSpread): string {
  return `${spread.coldest.high}°C in ${spread.coldest.city} to ${spread.warmest.high}°C in ${spread.warmest.city}`;
}
