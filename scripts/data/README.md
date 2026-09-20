# Foliage data intake

The Kyoto koyo pages (`/koyo/kyoto`, `/koyo/<spot>`) publish **observed** peak-colour
windows with a source link for every single year. Nothing on those pages is estimated,
so they stay unpublished until the data below is filled in.

## Why this is still a manual step

It is no longer a network problem. From an environment with open egress every source below
is reachable (all return 200), and the JMA baseline in section 2 was filled that way. The
blocker is that **no source publishes what this schema asks for**: an observed peak *window*
(a start date and an end date) for a named spot in a named past year.

What was actually checked, so nobody repeats it:

| Source | Reachable | Why it doesn't yield a window |
| --- | --- | --- |
| ウェザーニュース spot pages (e.g. `/koyo/spot/26111/`) | yes | Status is rendered client-side. Wayback captures contain the unrendered `{{rank_text}}` / `{{obs}}` templates, so archived pages hold **no** status values at all. The live page shows only the September 見頃予想 forecast. |
| ウェザーニュース 見頃カレンダー (`/koyo/area/kyoto/calendar.html`) | yes | States on its face that it is computed from 2004–2025 data — a climatological average by week, not any single year. |
| tenki.jp spot pages (東福寺通天橋 `36560`, 永観堂 `36558`, 嵐山 `36562`) | yes | Server-rendered and genuinely observed, but only as one "as of DD日現在" status per capture, alongside 今年の見頃予想 (a forecast) and 例年の見頃 (an average). Wayback holds 1–3 in-season captures per season for these three spots. |
| そうだ 京都、行こう。 紅葉情報 | yes | Gives per-spot status with a shoot date, but only the latest shoot — the block carries no season history. Wayback holds 2–3 in-season captures across 2019–2025. |
| MKタクシー 通天橋 tracking page | yes | The one page that puts many dated, status-labelled observations on a single URL. But across 2019–2025 it closes a 見頃 window in only two seasons, and both "ends" are artifacts of an 11- and 16-day gap between shoots. No equivalent page exists for 永観堂 or 嵐山. |

Bracketing between two captures ("見頃 on 25 Nov, 見頃過ぎ on 5 Dec") fixes neither endpoint;
turning that into a date is the estimate rule 1 forbids. So the rows stay empty until someone
has a source that states both dates, or the project decides to store a bracket
(`peakStartEarliest` / `peakStartLatest`) instead of a single date it cannot support.

## 1. Peak windows — `foliage-peaks.csv`

One row per spot per season. For each year, find the **in-season 見頃 report** (not the
September 見頃予想 forecast) and record the window it gives.

Sources, best first:

1. ウェザーニュース 紅葉見頃情報 — <https://weathernews.jp/koyo/>
   (Tofuku-ji's spot page is <https://weathernews.jp/koyo/spot/26111/>)
2. 日本気象協会 tenki.jp 紅葉情報 — <https://tenki.jp/kouyou/6/29/>
3. そうだ 京都、行こう。 season archives — <https://souda-kyoto.jp/guide/season/koyo/>
4. The temple's own site or official X account for that season

Leave a row blank for any year you can't source. A spot needs **at least 4** sourced
seasons before it is allowed to go live.

## 2. City baseline — `jma-kyoto-maple.csv`

The JMA Kyoto observatory's かえで紅葉日, from 気象庁 生物季節観測:

- Index: <https://www.data.jma.go.jp/sakura/data/>
- 累年表 PDF (かえでの紅葉): <https://www.data.jma.go.jp/sakura/pdf/015.pdf>

Take the 京都 row. This is optional — it only drives the "this spot peaks N days after
the observatory tree turns" line, which is hidden unless at least two years overlap with
a spot's own records.

## 3. Generate and paste

```
node scripts/import-foliage.mjs
```

It validates every filled row (real date, end after start, a real `source_url`, a label)
and refuses to emit anything if a row is broken. On success it prints ready-to-paste
`records: [...]` blocks. Paste each into the matching spot in `src/data/foliage.ts`.

## 4. Publish

Set `draft: false` on any spot that now has 4+ seasons, then:

```
npm run build
```

`publishedFoliageSpots` double-checks the 4-season minimum, so a spot with `draft: false`
and only three records still won't build a page. The hub page, the month-page callouts,
the Kyoto region link and the seasonal homepage card all switch themselves on as soon as
the first spot publishes — there is nothing else to wire up.

## Still outstanding

- `access` — verified against each temple's own page for Tofuku-ji and Eikando (walking
  times and the autumn parking/coach restrictions are now in `src/data/foliage.ts`).
  Arashiyama is a district and names no walking time, so there is nothing to check.
- `admission` — confirmed for the 2026 season from the temples' own fee tables:
  [Tofuku-ji](https://tofukuji.jp/guide/) (秋期 14 Nov – 6 Dec) and
  [Eikando](https://www.eikando.or.jp/osirase.html) (秋の寺宝展 and ライトアップ).
  Both need re-checking each autumn. Arashiyama has no single gate, so it stays unset.
- `image` / `imageAlt` — still unset everywhere. The template renders a placeholder, so this
  is safe to leave; add real photos by committing them and wiring the paths.
