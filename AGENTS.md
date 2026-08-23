# Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Adding a new Spot Guide

A "Spot Guide" is a single-place detail page under `/spots/<slug>` — a café/shop
(e.g. Kotonean) or a landmark/attraction (e.g. Mount Aso). To add a new one:

1. Read the `SpotGuide` interface and the existing Kotonean (`kind: "cafe"`,
   the default) and Mount Aso (`kind: "attraction"`) entries in
   `src/data/spots.ts` first — they're the reference for every field.
2. Pick `kind`:
   - `"cafe"` (or omit `kind`) for a business — a shop, café, restaurant, bar.
     Renders `CafeOrCoffeeShop` schema, "Reservations", "What to Order".
   - `"attraction"` for a landmark, park, or sight with no single owner.
     Renders `TouristAttraction` schema, "Visitor Info", "Getting Around &
     Costs", and different CTA copy ("Check current conditions" instead of
     "One phone call away").
3. **Never fabricate facts.** Hours, prices, phone numbers, addresses, and
   ratings must be real. Use WebSearch to verify anything not supplied, and
   check against the current date for temporary closures or restrictions
   (note them in `disclaimer`). If a number can't be verified, leave the
   field out rather than inventing one — this applies especially to
   `rating`, which must never be guessed.
4. For a large, multi-viewpoint `attraction` (a caldera, a national park —
   anywhere a single visit isn't one stop), add an `itinerary` array
   (see Mount Aso) with 2-3 time-boxed plans instead of listing every
   highlight as a flat checklist.
5. Images: this environment cannot fetch images from the web (the outbound
   network policy blocks image-search/CDN domains) and cannot save images
   pasted directly into chat, or read a path on the user's own machine — only
   files already committed to the repo. Leave `image`/`imageAlt` (and
   `exteriorImages`/`interiorImages`) unset if no real photo is available yet;
   the template renders a "Photo coming soon" placeholder instead of
   breaking. The user adds real photos later via their own
   `git add` / `commit` / `push` to this branch — pull and wire up the actual
   paths and filenames once they land, and never rename their files.
6. Add the new spot to the relevant region's `spots` array (and, if it fits,
   a `mustDo` bullet) in `src/data/regions.ts` so it's linked from the region
   page.
7. Verify before pushing: `npm run build` must complete cleanly. Where
   possible, start `astro dev --background`, screenshot the new page
   (Playwright + Chromium are pre-installed), and check it visually before
   calling the work done.
8. Commit and push to the current working branch (don't create a new branch
   unless asked).
