# Foliage data intake

The Kyoto koyo pages (`/koyo/kyoto`, `/koyo/<spot>`) publish **observed** peak-colour
windows with a source link for every single year. Nothing on those pages is estimated,
so they stay unpublished until the data below is filled in.

## Why this is a manual step

The build sandbox cannot reach any of the sources. The outbound network policy blocks
`weathernews.jp`, `tenki.jp`, `www.data.jma.go.jp`, `souda-kyoto.jp`, `koyo.walkerplus.com`
and everything else outside GitHub, so the dates have to be read and entered by a human.

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

Fields the sandbox couldn't verify, listed per spot in `src/data/foliage.ts`:

- `access` — station names are right; confirm walking times against each temple's own page.
- `admission` — unset everywhere. Peak-season prices change yearly; add only once confirmed.
- `image` / `imageAlt` — unset. The template renders a placeholder, so this is safe to
  leave; add real photos by committing them and wiring the paths.
