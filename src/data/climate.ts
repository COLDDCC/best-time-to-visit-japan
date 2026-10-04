// GENERATED FILE — do not edit by hand.
// Regenerate with:  node scripts/fetch-jma-normals.mjs
//
// Japan Meteorological Agency climate normals (平年値) for the 1991-2020 standard
// period, read from the JMA's own 過去の気象データ検索 tables. Each city is the
// JMA observatory a Japanese forecast for that destination refers to, and every
// row carries the station page it came from.
//
// These are 30-year averages, not a forecast: they say what a typical November in
// Kyoto looks like, never what next November will do.

/** The JMA standard period these normals are averaged over. */
export const CLIMATE_NORMALS_PERIOD = "1991-2020";

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
  {
    slug: "sapporo",
    city: "Sapporo",
    regionSlug: "hokkaido",
    stationJa: "札幌",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=14&block_no=47412&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: -3.2, meanHighC: -0.4, meanLowC: -6.4, precipMm: 108.4, rainDays: 18.3, hotDays30: 0, veryHotDays35: 0, frostDays: 30.6 },
      { month: "february", meanTempC: -2.7, meanHighC: 0.4, meanLowC: -6.2, precipMm: 91.9, rainDays: 16, hotDays30: 0, veryHotDays35: 0, frostDays: 27.4 },
      { month: "march", meanTempC: 1.1, meanHighC: 4.5, meanLowC: -2.4, precipMm: 77.6, rainDays: 13.9, hotDays30: 0, veryHotDays35: 0, frostDays: 23.3 },
      { month: "april", meanTempC: 7.3, meanHighC: 11.7, meanLowC: 3.4, precipMm: 54.6, rainDays: 9.6, hotDays30: 0, veryHotDays35: 0, frostDays: 3.2 },
      { month: "may", meanTempC: 13, meanHighC: 17.9, meanLowC: 9, precipMm: 55.5, rainDays: 8.5, hotDays30: 0.1, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 17, meanHighC: 21.8, meanLowC: 13.4, precipMm: 60.4, rainDays: 7.5, hotDays30: 0.5, veryHotDays35: 0, frostDays: 0 },
      { month: "july", meanTempC: 21.1, meanHighC: 25.4, meanLowC: 17.9, precipMm: 90.7, rainDays: 7.7, hotDays30: 2.9, veryHotDays35: 0, frostDays: 0 },
      { month: "august", meanTempC: 22.3, meanHighC: 26.4, meanLowC: 19.1, precipMm: 126.8, rainDays: 9.5, hotDays30: 4.5, veryHotDays35: 0.1, frostDays: 0 },
      { month: "september", meanTempC: 18.6, meanHighC: 22.8, meanLowC: 14.8, precipMm: 142.2, rainDays: 10.2, hotDays30: 0.6, veryHotDays35: 0, frostDays: 0 },
      { month: "october", meanTempC: 12.1, meanHighC: 16.4, meanLowC: 8, precipMm: 109.9, rainDays: 11.6, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 5.2, meanHighC: 8.7, meanLowC: 1.6, precipMm: 113.8, rainDays: 14.6, hotDays30: 0, veryHotDays35: 0, frostDays: 9.7 },
      { month: "december", meanTempC: -0.9, meanHighC: 2, meanLowC: -4, precipMm: 114.5, rainDays: 16, hotDays30: 0, veryHotDays35: 0, frostDays: 27.6 },
    ],
  },
  {
    slug: "sendai",
    city: "Sendai",
    regionSlug: "tohoku",
    stationJa: "仙台",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=34&block_no=47590&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: 2, meanHighC: 5.6, meanLowC: -1.3, precipMm: 42.3, rainDays: 5.6, hotDays30: 0, veryHotDays35: 0, frostDays: 22.6 },
      { month: "february", meanTempC: 2.4, meanHighC: 6.5, meanLowC: -1.1, precipMm: 33.9, rainDays: 5, hotDays30: 0, veryHotDays35: 0, frostDays: 20.1 },
      { month: "march", meanTempC: 5.5, meanHighC: 10, meanLowC: 1.4, precipMm: 74.4, rainDays: 7.1, hotDays30: 0, veryHotDays35: 0, frostDays: 9.9 },
      { month: "april", meanTempC: 10.7, meanHighC: 15.5, meanLowC: 6.3, precipMm: 90.2, rainDays: 7.7, hotDays30: 0, veryHotDays35: 0, frostDays: 0.4 },
      { month: "may", meanTempC: 15.6, meanHighC: 20.2, meanLowC: 11.7, precipMm: 110.2, rainDays: 8.8, hotDays30: 0.3, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 19.2, meanHighC: 23.1, meanLowC: 16.1, precipMm: 143.7, rainDays: 10.3, hotDays30: 0.9, veryHotDays35: 0, frostDays: 0 },
      { month: "july", meanTempC: 22.9, meanHighC: 26.6, meanLowC: 20.2, precipMm: 178.4, rainDays: 13.3, hotDays30: 7.7, veryHotDays35: 0.3, frostDays: 0 },
      { month: "august", meanTempC: 24.4, meanHighC: 28.2, meanLowC: 21.6, precipMm: 157.8, rainDays: 10.9, hotDays30: 11.5, veryHotDays35: 0.6, frostDays: 0 },
      { month: "september", meanTempC: 21.2, meanHighC: 25, meanLowC: 18, precipMm: 192.6, rainDays: 11.2, hotDays30: 2.6, veryHotDays35: 0, frostDays: 0 },
      { month: "october", meanTempC: 15.7, meanHighC: 19.8, meanLowC: 11.9, precipMm: 150.6, rainDays: 8.2, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 9.8, meanHighC: 14.1, meanLowC: 5.6, precipMm: 58.7, rainDays: 5.7, hotDays30: 0, veryHotDays35: 0, frostDays: 0.6 },
      { month: "december", meanTempC: 4.5, meanHighC: 8.3, meanLowC: 0.9, precipMm: 44.1, rainDays: 5.6, hotDays30: 0, veryHotDays35: 0, frostDays: 11.4 },
    ],
  },
  {
    slug: "tokyo",
    city: "Tokyo",
    regionSlug: "tokyo",
    stationJa: "東京",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=44&block_no=47662&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: 5.4, meanHighC: 9.8, meanLowC: 1.2, precipMm: 59.7, rainDays: 4.5, hotDays30: 0, veryHotDays35: 0, frostDays: 8.1 },
      { month: "february", meanTempC: 6.1, meanHighC: 10.9, meanLowC: 2.1, precipMm: 56.5, rainDays: 5.2, hotDays30: 0, veryHotDays35: 0, frostDays: 5.1 },
      { month: "march", meanTempC: 9.4, meanHighC: 14.2, meanLowC: 5, precipMm: 116, rainDays: 9.2, hotDays30: 0, veryHotDays35: 0, frostDays: 0.3 },
      { month: "april", meanTempC: 14.3, meanHighC: 19.4, meanLowC: 9.8, precipMm: 133.7, rainDays: 9.5, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "may", meanTempC: 18.8, meanHighC: 23.6, meanLowC: 14.6, precipMm: 139.7, rainDays: 10.1, hotDays30: 0.6, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 21.9, meanHighC: 26.1, meanLowC: 18.5, precipMm: 167.8, rainDays: 11.6, hotDays30: 3.6, veryHotDays35: 0.1, frostDays: 0 },
      { month: "july", meanTempC: 25.7, meanHighC: 29.9, meanLowC: 22.4, precipMm: 156.2, rainDays: 10.5, hotDays30: 16.8, veryHotDays35: 1.4, frostDays: 0 },
      { month: "august", meanTempC: 26.9, meanHighC: 31.3, meanLowC: 23.5, precipMm: 154.7, rainDays: 7.9, hotDays30: 22.6, veryHotDays35: 3, frostDays: 0 },
      { month: "september", meanTempC: 23.3, meanHighC: 27.5, meanLowC: 20.3, precipMm: 224.9, rainDays: 11, hotDays30: 8.2, veryHotDays35: 0.3, frostDays: 0 },
      { month: "october", meanTempC: 18, meanHighC: 22, meanLowC: 14.8, precipMm: 234.8, rainDays: 10.5, hotDays30: 0.3, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 12.5, meanHighC: 16.7, meanLowC: 8.8, precipMm: 96.3, rainDays: 7.4, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "december", meanTempC: 7.7, meanHighC: 12, meanLowC: 3.8, precipMm: 57.9, rainDays: 5.2, hotDays30: 0, veryHotDays35: 0, frostDays: 1.6 },
    ],
  },
  {
    slug: "kawaguchiko",
    city: "Kawaguchiko",
    regionSlug: "fuji",
    stationJa: "河口湖",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=49&block_no=47640&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: -0.4, meanHighC: 5.5, meanLowC: -5.7, precipMm: 60.9, rainDays: 4.9, hotDays30: 0, veryHotDays35: 0, frostDays: 29.9 },
      { month: "february", meanTempC: 0.6, meanHighC: 6.6, meanLowC: -4.8, precipMm: 55.4, rainDays: 5.1, hotDays30: 0, veryHotDays35: 0, frostDays: 25.6 },
      { month: "march", meanTempC: 4.2, meanHighC: 10.5, meanLowC: -1.3, precipMm: 107.6, rainDays: 9.1, hotDays30: 0, veryHotDays35: 0, frostDays: 20.9 },
      { month: "april", meanTempC: 9.5, meanHighC: 16.1, meanLowC: 3.7, precipMm: 106.1, rainDays: 8.5, hotDays30: 0, veryHotDays35: 0, frostDays: 5.9 },
      { month: "may", meanTempC: 14.3, meanHighC: 20.6, meanLowC: 8.9, precipMm: 123.2, rainDays: 9.4, hotDays30: 0.2, veryHotDays35: 0, frostDays: 0.2 },
      { month: "june", meanTempC: 17.8, meanHighC: 23, meanLowC: 13.7, precipMm: 157.1, rainDays: 11.5, hotDays30: 0.6, veryHotDays35: 0, frostDays: 0 },
      { month: "july", meanTempC: 21.9, meanHighC: 27.2, meanLowC: 18, precipMm: 178.4, rainDays: 11.7, hotDays30: 8.2, veryHotDays35: 0.1, frostDays: 0 },
      { month: "august", meanTempC: 22.5, meanHighC: 28.1, meanLowC: 18.5, precipMm: 176.8, rainDays: 10.1, hotDays30: 9.7, veryHotDays35: 0, frostDays: 0 },
      { month: "september", meanTempC: 18.7, meanHighC: 23.8, meanLowC: 14.8, precipMm: 264.7, rainDays: 11.1, hotDays30: 1.1, veryHotDays35: 0, frostDays: 0 },
      { month: "october", meanTempC: 13, meanHighC: 18.3, meanLowC: 8.7, precipMm: 230, rainDays: 10.1, hotDays30: 0, veryHotDays35: 0, frostDays: 0.2 },
      { month: "november", meanTempC: 7.5, meanHighC: 13.8, meanLowC: 2.2, precipMm: 76, rainDays: 6.7, hotDays30: 0, veryHotDays35: 0, frostDays: 9.1 },
      { month: "december", meanTempC: 2.3, meanHighC: 8.5, meanLowC: -2.9, precipMm: 49.8, rainDays: 4.6, hotDays30: 0, veryHotDays35: 0, frostDays: 25.9 },
    ],
  },
  {
    slug: "kyoto",
    city: "Kyoto",
    regionSlug: "kyoto",
    stationJa: "京都",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=61&block_no=47759&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: 4.8, meanHighC: 9.1, meanLowC: 1.5, precipMm: 53.3, rainDays: 6.4, hotDays30: 0, veryHotDays35: 0, frostDays: 7.4 },
      { month: "february", meanTempC: 5.4, meanHighC: 10, meanLowC: 1.6, precipMm: 65.1, rainDays: 7.3, hotDays30: 0, veryHotDays35: 0, frostDays: 6.7 },
      { month: "march", meanTempC: 8.8, meanHighC: 14.1, meanLowC: 4.3, precipMm: 106.2, rainDays: 9.5, hotDays30: 0, veryHotDays35: 0, frostDays: 1.7 },
      { month: "april", meanTempC: 14.4, meanHighC: 20.1, meanLowC: 9.2, precipMm: 117, rainDays: 9.4, hotDays30: 0.1, veryHotDays35: 0, frostDays: 0 },
      { month: "may", meanTempC: 19.5, meanHighC: 25.1, meanLowC: 14.5, precipMm: 151.4, rainDays: 9.7, hotDays30: 2.7, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 23.3, meanHighC: 28.1, meanLowC: 19.2, precipMm: 199.7, rainDays: 11.5, hotDays30: 9.5, veryHotDays35: 0.2, frostDays: 0 },
      { month: "july", meanTempC: 27.3, meanHighC: 32, meanLowC: 23.6, precipMm: 223.6, rainDays: 11.6, hotDays30: 22.3, veryHotDays35: 6.7, frostDays: 0 },
      { month: "august", meanTempC: 28.5, meanHighC: 33.7, meanLowC: 24.7, precipMm: 153.8, rainDays: 8.3, hotDays30: 27.5, veryHotDays35: 11.6, frostDays: 0 },
      { month: "september", meanTempC: 24.4, meanHighC: 29.2, meanLowC: 20.7, precipMm: 178.5, rainDays: 9.8, hotDays30: 13.3, veryHotDays35: 0.9, frostDays: 0 },
      { month: "october", meanTempC: 18.4, meanHighC: 23.4, meanLowC: 14.4, precipMm: 143.2, rainDays: 8.2, hotDays30: 0.5, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 12.5, meanHighC: 17.3, meanLowC: 8.4, precipMm: 73.9, rainDays: 6.3, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "december", meanTempC: 7.2, meanHighC: 11.6, meanLowC: 3.5, precipMm: 57.3, rainDays: 6.6, hotDays30: 0, veryHotDays35: 0, frostDays: 2.2 },
    ],
  },
  {
    slug: "osaka",
    city: "Osaka",
    regionSlug: null,
    stationJa: "大阪",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=62&block_no=47772&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: 6.2, meanHighC: 9.7, meanLowC: 3, precipMm: 47, rainDays: 5.6, hotDays30: 0, veryHotDays35: 0, frostDays: 2 },
      { month: "february", meanTempC: 6.6, meanHighC: 10.5, meanLowC: 3.2, precipMm: 60.5, rainDays: 6.3, hotDays30: 0, veryHotDays35: 0, frostDays: 1.8 },
      { month: "march", meanTempC: 9.9, meanHighC: 14.2, meanLowC: 6, precipMm: 103.1, rainDays: 9.1, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "april", meanTempC: 15.2, meanHighC: 19.9, meanLowC: 10.9, precipMm: 101.9, rainDays: 9.2, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "may", meanTempC: 20.1, meanHighC: 24.9, meanLowC: 16, precipMm: 136.5, rainDays: 9.5, hotDays30: 1.1, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 23.6, meanHighC: 28, meanLowC: 20.3, precipMm: 185.1, rainDays: 11.3, hotDays30: 7.9, veryHotDays35: 0.1, frostDays: 0 },
      { month: "july", meanTempC: 27.7, meanHighC: 31.8, meanLowC: 24.6, precipMm: 174.4, rainDays: 10, hotDays30: 22.6, veryHotDays35: 3.7, frostDays: 0 },
      { month: "august", meanTempC: 29, meanHighC: 33.7, meanLowC: 25.8, precipMm: 113, rainDays: 7.2, hotDays30: 28.3, veryHotDays35: 9.9, frostDays: 0 },
      { month: "september", meanTempC: 25.2, meanHighC: 29.5, meanLowC: 21.9, precipMm: 152.8, rainDays: 9.5, hotDays30: 14.4, veryHotDays35: 0.8, frostDays: 0 },
      { month: "october", meanTempC: 19.5, meanHighC: 23.7, meanLowC: 16, precipMm: 136, rainDays: 8.3, hotDays30: 0.6, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 13.8, meanHighC: 17.8, meanLowC: 10.2, precipMm: 72.5, rainDays: 6.2, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "december", meanTempC: 8.7, meanHighC: 12.3, meanLowC: 5.3, precipMm: 55.5, rainDays: 6.1, hotDays30: 0, veryHotDays35: 0, frostDays: 0.1 },
    ],
  },
  {
    slug: "nara",
    city: "Nara",
    regionSlug: "nara",
    stationJa: "奈良",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=64&block_no=47780&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: 4.5, meanHighC: 8.7, meanLowC: 0.8, precipMm: 52.4, rainDays: 6.2, hotDays30: 0, veryHotDays35: 0, frostDays: 12.2 },
      { month: "february", meanTempC: 5.1, meanHighC: 9.9, meanLowC: 1, precipMm: 63.1, rainDays: 6.9, hotDays30: 0, veryHotDays35: 0, frostDays: 11.7 },
      { month: "march", meanTempC: 8.5, meanHighC: 13.9, meanLowC: 3.6, precipMm: 105.1, rainDays: 9.9, hotDays30: 0, veryHotDays35: 0, frostDays: 4 },
      { month: "april", meanTempC: 14, meanHighC: 19.8, meanLowC: 8.7, precipMm: 98.9, rainDays: 9.6, hotDays30: 0, veryHotDays35: 0, frostDays: 0.1 },
      { month: "may", meanTempC: 19, meanHighC: 24.9, meanLowC: 13.9, precipMm: 138.5, rainDays: 10, hotDays30: 1.9, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 22.9, meanHighC: 28.1, meanLowC: 18.4, precipMm: 184.1, rainDays: 11.7, hotDays30: 9, veryHotDays35: 0.2, frostDays: 0 },
      { month: "july", meanTempC: 26.8, meanHighC: 31.7, meanLowC: 23, precipMm: 173.5, rainDays: 11.2, hotDays30: 22.2, veryHotDays35: 5.1, frostDays: 0 },
      { month: "august", meanTempC: 27.8, meanHighC: 33.4, meanLowC: 24.1, precipMm: 127.9, rainDays: 8, hotDays30: 27.2, veryHotDays35: 9.7, frostDays: 0 },
      { month: "september", meanTempC: 23.8, meanHighC: 28.8, meanLowC: 20.1, precipMm: 159, rainDays: 10, hotDays30: 12, veryHotDays35: 0.6, frostDays: 0 },
      { month: "october", meanTempC: 17.7, meanHighC: 22.6, meanLowC: 13.5, precipMm: 134.7, rainDays: 9.2, hotDays30: 0.3, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 11.8, meanHighC: 17.1, meanLowC: 7.3, precipMm: 71.2, rainDays: 7, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "december", meanTempC: 6.8, meanHighC: 11.6, meanLowC: 3, precipMm: 56.8, rainDays: 6.6, hotDays30: 0, veryHotDays35: 0, frostDays: 3.3 },
    ],
  },
  {
    slug: "hiroshima",
    city: "Hiroshima",
    regionSlug: "hiroshima",
    stationJa: "広島",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=67&block_no=47765&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: 5.4, meanHighC: 9.9, meanLowC: 2, precipMm: 46.2, rainDays: 5.5, hotDays30: 0, veryHotDays35: 0, frostDays: 5.6 },
      { month: "february", meanTempC: 6.2, meanHighC: 10.9, meanLowC: 2.4, precipMm: 64, rainDays: 6.9, hotDays30: 0, veryHotDays35: 0, frostDays: 4.7 },
      { month: "march", meanTempC: 9.5, meanHighC: 14.5, meanLowC: 5.1, precipMm: 118.3, rainDays: 9, hotDays30: 0, veryHotDays35: 0, frostDays: 1 },
      { month: "april", meanTempC: 14.8, meanHighC: 19.8, meanLowC: 10.1, precipMm: 141, rainDays: 8.8, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "may", meanTempC: 19.6, meanHighC: 24.4, meanLowC: 15.1, precipMm: 169.8, rainDays: 8.6, hotDays30: 0.3, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 23.2, meanHighC: 27.2, meanLowC: 19.8, precipMm: 226.5, rainDays: 10.7, hotDays30: 4, veryHotDays35: 0, frostDays: 0 },
      { month: "july", meanTempC: 27.2, meanHighC: 30.9, meanLowC: 24.1, precipMm: 279.8, rainDays: 10.6, hotDays30: 20, veryHotDays35: 1.8, frostDays: 0 },
      { month: "august", meanTempC: 28.5, meanHighC: 32.8, meanLowC: 25.1, precipMm: 131.4, rainDays: 7.6, hotDays30: 26.7, veryHotDays35: 5.9, frostDays: 0 },
      { month: "september", meanTempC: 24.7, meanHighC: 29.1, meanLowC: 21.1, precipMm: 162.7, rainDays: 8.5, hotDays30: 12.8, veryHotDays35: 0.4, frostDays: 0 },
      { month: "october", meanTempC: 18.8, meanHighC: 23.7, meanLowC: 14.9, precipMm: 109.2, rainDays: 6.2, hotDays30: 0.4, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 12.9, meanHighC: 17.7, meanLowC: 8.9, precipMm: 69.3, rainDays: 6.1, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "december", meanTempC: 7.5, meanHighC: 12.1, meanLowC: 4, precipMm: 54, rainDays: 5.7, hotDays30: 0, veryHotDays35: 0, frostDays: 1.5 },
    ],
  },
  {
    slug: "takamatsu",
    city: "Takamatsu",
    regionSlug: "shikoku",
    stationJa: "高松",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=72&block_no=47891&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: 5.9, meanHighC: 9.7, meanLowC: 2.1, precipMm: 39.4, rainDays: 5.9, hotDays30: 0, veryHotDays35: 0, frostDays: 5.4 },
      { month: "february", meanTempC: 6.3, meanHighC: 10.5, meanLowC: 2.2, precipMm: 45.8, rainDays: 6.7, hotDays30: 0, veryHotDays35: 0, frostDays: 5.6 },
      { month: "march", meanTempC: 9.4, meanHighC: 14.1, meanLowC: 5, precipMm: 81.4, rainDays: 9.2, hotDays30: 0, veryHotDays35: 0, frostDays: 1.1 },
      { month: "april", meanTempC: 14.7, meanHighC: 19.8, meanLowC: 9.9, precipMm: 74.6, rainDays: 9, hotDays30: 0.1, veryHotDays35: 0, frostDays: 0 },
      { month: "may", meanTempC: 19.8, meanHighC: 24.8, meanLowC: 15.1, precipMm: 100.9, rainDays: 8.1, hotDays30: 1.4, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 23.3, meanHighC: 27.5, meanLowC: 19.8, precipMm: 153.1, rainDays: 10.5, hotDays30: 6.6, veryHotDays35: 0.3, frostDays: 0 },
      { month: "july", meanTempC: 27.5, meanHighC: 31.7, meanLowC: 24.1, precipMm: 159.8, rainDays: 9.4, hotDays30: 22.2, veryHotDays35: 4.5, frostDays: 0 },
      { month: "august", meanTempC: 28.6, meanHighC: 33, meanLowC: 25.1, precipMm: 106, rainDays: 7, hotDays30: 26.6, veryHotDays35: 7.4, frostDays: 0 },
      { month: "september", meanTempC: 24.7, meanHighC: 28.8, meanLowC: 21.2, precipMm: 167.4, rainDays: 9.2, hotDays30: 11.3, veryHotDays35: 0.6, frostDays: 0 },
      { month: "october", meanTempC: 19, meanHighC: 23.2, meanLowC: 15.1, precipMm: 120.1, rainDays: 8.1, hotDays30: 0.4, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 13.2, meanHighC: 17.5, meanLowC: 9.1, precipMm: 55, rainDays: 6.5, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "december", meanTempC: 8.1, meanHighC: 12.1, meanLowC: 4.3, precipMm: 46.7, rainDays: 6.3, hotDays30: 0, veryHotDays35: 0, frostDays: 1.1 },
    ],
  },
  {
    slug: "fukuoka",
    city: "Fukuoka",
    regionSlug: "kyushu",
    stationJa: "福岡",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=82&block_no=47807&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: 6.9, meanHighC: 10.2, meanLowC: 3.9, precipMm: 74.4, rainDays: 9.3, hotDays30: 0, veryHotDays35: 0, frostDays: 1.2 },
      { month: "february", meanTempC: 7.8, meanHighC: 11.6, meanLowC: 4.4, precipMm: 69.8, rainDays: 8.8, hotDays30: 0, veryHotDays35: 0, frostDays: 1.1 },
      { month: "march", meanTempC: 10.8, meanHighC: 15, meanLowC: 7.2, precipMm: 103.7, rainDays: 10.1, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "april", meanTempC: 15.4, meanHighC: 19.9, meanLowC: 11.5, precipMm: 118.2, rainDays: 9.7, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "may", meanTempC: 19.9, meanHighC: 24.4, meanLowC: 16.1, precipMm: 133.7, rainDays: 8.6, hotDays30: 0.9, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 23.3, meanHighC: 27.2, meanLowC: 20.3, precipMm: 249.6, rainDays: 11.6, hotDays30: 4.7, veryHotDays35: 0, frostDays: 0 },
      { month: "july", meanTempC: 27.4, meanHighC: 31.2, meanLowC: 24.6, precipMm: 299.1, rainDays: 11, hotDays30: 20.6, veryHotDays35: 2.1, frostDays: 0 },
      { month: "august", meanTempC: 28.4, meanHighC: 32.5, meanLowC: 25.4, precipMm: 210, rainDays: 9.8, hotDays30: 24.9, veryHotDays35: 5.7, frostDays: 0 },
      { month: "september", meanTempC: 24.7, meanHighC: 28.6, meanLowC: 21.6, precipMm: 175.1, rainDays: 9.7, hotDays30: 9.1, veryHotDays35: 0.4, frostDays: 0 },
      { month: "october", meanTempC: 19.6, meanHighC: 23.7, meanLowC: 16, precipMm: 94.5, rainDays: 6.8, hotDays30: 0.3, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 14.2, meanHighC: 18.2, meanLowC: 10.6, precipMm: 91.4, rainDays: 8.5, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "december", meanTempC: 9.1, meanHighC: 12.6, meanLowC: 5.8, precipMm: 67.5, rainDays: 8.5, hotDays30: 0, veryHotDays35: 0, frostDays: 0.2 },
    ],
  },
  {
    slug: "naha",
    city: "Naha",
    regionSlug: "okinawa",
    stationJa: "那覇",
    sourceUrl: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=91&block_no=47936&year=&month=&day=&view=a2",
    months: [
      { month: "january", meanTempC: 17.3, meanHighC: 19.8, meanLowC: 14.9, precipMm: 101.6, rainDays: 10.2, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "february", meanTempC: 17.5, meanHighC: 20.2, meanLowC: 15.1, precipMm: 114.5, rainDays: 9.9, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "march", meanTempC: 19.1, meanHighC: 21.9, meanLowC: 16.7, precipMm: 142.8, rainDays: 10.9, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "april", meanTempC: 21.5, meanHighC: 24.3, meanLowC: 19.1, precipMm: 161, rainDays: 10.3, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
      { month: "may", meanTempC: 24.2, meanHighC: 27, meanLowC: 22.1, precipMm: 245.3, rainDays: 11.4, hotDays30: 2.4, veryHotDays35: 0, frostDays: 0 },
      { month: "june", meanTempC: 27.2, meanHighC: 29.8, meanLowC: 25.2, precipMm: 284.4, rainDays: 11.3, hotDays30: 16, veryHotDays35: 0, frostDays: 0 },
      { month: "july", meanTempC: 29.1, meanHighC: 31.9, meanLowC: 27, precipMm: 188.1, rainDays: 9.4, hotDays30: 28.7, veryHotDays35: 0.1, frostDays: 0 },
      { month: "august", meanTempC: 29, meanHighC: 31.8, meanLowC: 26.8, precipMm: 240, rainDays: 12.3, hotDays30: 28.6, veryHotDays35: 0.1, frostDays: 0 },
      { month: "september", meanTempC: 27.9, meanHighC: 30.6, meanLowC: 25.8, precipMm: 275.2, rainDays: 11.8, hotDays30: 21.2, veryHotDays35: 0, frostDays: 0 },
      { month: "october", meanTempC: 25.5, meanHighC: 28.1, meanLowC: 23.5, precipMm: 179.2, rainDays: 8.8, hotDays30: 5.5, veryHotDays35: 0, frostDays: 0 },
      { month: "november", meanTempC: 22.5, meanHighC: 25, meanLowC: 20.4, precipMm: 119.1, rainDays: 8.2, hotDays30: 0.1, veryHotDays35: 0, frostDays: 0 },
      { month: "december", meanTempC: 19, meanHighC: 21.5, meanLowC: 16.8, precipMm: 110, rainDays: 9.3, hotDays30: 0, veryHotDays35: 0, frostDays: 0 },
    ],
  },
];

/** The climate row for a city in a given month, or undefined. */
export function climateFor(citySlug: string, month: string): CityMonthClimate | undefined {
  return cityClimates.find((c) => c.slug === citySlug)?.months.find((m) => m.month === month);
}

/** Every city's row for one month, in the north-to-south order of `cityClimates`. */
export function climateByMonth(month: string): { city: CityClimate; data: CityMonthClimate }[] {
  return cityClimates
    .map((city) => ({ city, data: city.months.find((m) => m.month === month) }))
    .filter((row): row is { city: CityClimate; data: CityMonthClimate } => row.data !== undefined);
}

/** The climate row for the city standing in for a region guide, or undefined. */
export function climateForRegion(regionSlug: string): CityClimate | undefined {
  return cityClimates.find((c) => c.regionSlug === regionSlug);
}
