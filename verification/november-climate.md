# November cluster climate verification

Verified 2026-10-28 against JMA 1991–2020 station tables.

Main elements (`view=p1`): precipitation, average daily high/low and sunshine. Precipitation details (`view=a1`): use the **≥1.0 mm** day-count column; do not use ≥0.0 or ≥0.5 mm. Snow is measured as melted water.

| Station | Nov high / low °C | Nov mm | Nov wet days | Dec wet days | Nov sunshine h |
|---|---:|---:|---:|---:|---:|
| Tokyo | 16.7 / 8.8 | 96.3 | 7.4 | 5.2 | 149.8 |
| Osaka | 17.8 / 10.2 | 72.5 | 6.2 | 6.1 | 152.6 |
| Kyoto | 17.3 / 8.4 | 73.9 | 6.3 | 6.6 | 140.7 |
| Sapporo | 8.7 / 1.6 | 113.8 | 14.6 | 16.0 | 99.1 |
| Fukuoka | 18.2 / 10.6 | 91.4 | 8.5 | 8.5 | 137.3 |
| Niigata | 14.3 / 6.9 | 203.5 | 17.7 | 21.5 | 91.5 |
| Naha (Okinawa) | 25.0 / 20.4 | 119.1 | 8.2 | 9.3 | 121.7 |

Station source URLs are maintained alongside every record in `src/data/late-year-weather.ts`; each rendered station row links to its original main-element and precipitation tables.

Tokyo sunset example: NAOJ November 2026 daily calendar, November 14 at 16:35 JST: https://eco.mtk.nao.ac.jp/koyomi/dni/2026/s1311.html.en . This is an explicitly dated example, not a climate normal.

Kyoto foliage source: https://ja.kyoto.travel/flower/momiji/ . Visitors must check report date/year; no 2026 peak date or queue estimate is inferred.

Validation: `npm run build`, `npm run test:seo`, `npm run test:packing`. Browser screenshots were attempted with Playwright; the runtime had no Chromium executable and the browser download returned invalid archives. Visual and browser-interaction acceptance therefore remain unverified in this environment.
