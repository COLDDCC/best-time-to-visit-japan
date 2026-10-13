# Japan place directory

Routes:
- `/destinations`: region → prefecture → tourism area → individual place.
- `/destinations/<prefecture>`: a focused directory for each of the 47 prefectures.

The leaf is a standalone destination such as Kusasenri. Activities and viewpoints within it belong in its eventual guide, rather than further directory levels.

## Adding content

1. Add a verified place name and source to its area's `spots` array in `src/data/destinations.json`, or add verified article-mentioned names to `src/data/directory-additions.json`, or an editorial override in `src/data/directory.ts` to preserve it across source refreshes.
2. Add optional `aliases` for Japanese/Chinese spellings. English names are searchable throughout; only explicitly supplied aliases are searchable in other languages.
3. Write a guide in `src/data/spots.ts` following `AGENTS.md`.
4. Attach `guide: '/spots/<slug>'` to the exact matching directory place in `src/data/directory.ts`. Do not attach an umbrella area's guide to an individual attraction.
5. Run `npm run build`. The existing GitHub workflow publishes main to `docs/`.

## Data provenance and limits

The initial names and URLs come from JNTO's English prefecture pages and their linked tourism areas. Attraction suggestions are accepted only when their displayed prefecture matches the parent prefecture. This is a tourism directory, not an administrative boundary database or an exhaustive inventory. Areas may overlap, and a place can be associated with more than one nearby area. Some areas have no individual places yet. Source links are references, not copied guide articles. No images, ratings, opening hours, or price claims are imported.

Refresh generated data from the repository root:

```sh
python scripts/import-destinations.py
```

This uses Python's standard library and caches fetched HTML under `/tmp`. Editorial additions and links to existing guides live separately in `src/data/directory.ts`. Review refreshed data before committing: remote layouts may change, and unavailable area pages are reported and left empty. Never publish a refresh with missing prefectures (the importer asserts 47).
