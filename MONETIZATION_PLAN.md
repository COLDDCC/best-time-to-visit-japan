# Affiliate Monetization — Implementation Plan

## Goal
The site currently shows hotel/flight price data (CostChart, HotelComparison) but gives the
user no way to act on it. Add affiliate booking CTAs so the existing "when is it cheap"
content ends in an actual entry point (search hotels / search flights), without turning the
site into a banner-ad page and without contradicting the "no paid placements" editorial
claim in `src/pages/about.astro` (that claim covers *which month/place we recommend*, not
*whether a booking link exists*).

## Manual prerequisite (do this yourself, not part of the code task)
- Sign up for **Booking.com Partner Program** (or Agoda) → get an affiliate/partner ID.
- Sign up for **Skyscanner Partner Hub** (or Trip.com Affiliate) → get an affiliate ID.
- Until real IDs exist, code should use clearly-marked placeholders so links are easy to
  wire up the moment the accounts are approved.

## Scope of changes

### 1. New central config: `src/config/affiliates.ts`
One place that builds affiliate URLs, e.g.:
```ts
export const AFFILIATE_IDS = {
  booking: import.meta.env.PUBLIC_BOOKING_AID || "TODO_BOOKING_AID",
  skyscanner: import.meta.env.PUBLIC_SKYSCANNER_AID || "TODO_SKYSCANNER_AID",
};
export function hotelSearchUrl(destination = "Japan") { /* build Booking.com deep link */ }
export function flightSearchUrl(destination = "Tokyo") { /* build Skyscanner deep link */ }
```
Keeps every CTA pointing at one source of truth — swap in real IDs later without touching
every page.

### 2. New shared component: `src/components/AffiliateCTA.astro`
Reusable button/link (accepts `href`, `label`, `sublabel`), styled to match the existing
`bg-accent-600 hover:bg-accent-700 text-white rounded-full` button pattern already used
across the site. Two CTAs side by side on desktop ("Search Hotels" / "Check Flights"),
stacked on mobile.

### 3. Wire the CTA into existing pages/components
- `src/components/islands/HotelComparison.tsx` — CTA under the chart: "Search hotels for
  [best-value season]" → `hotelSearchUrl()`.
- `src/components/islands/CostChart.tsx` — CTA under the chart: "Check flight prices" →
  `flightSearchUrl()`.
- `src/pages/month/[month].astro` — CTA block near the bottom (after the "What to Pack"
  callout): "Ready to book your {month.label} trip?" with Hotels + Flights buttons.
- `src/pages/region/[slug].astro` — similar block: "Book a stay in {region.name}".
- `src/pages/travel-cost.astro` — most natural home for a prominent CTA since the whole
  page is about cost; place after the cost breakdown section.

### 4. Affiliate disclosure copy (required — legal + trust)
- `src/pages/about.astro` — add a 5th bullet to the existing Editorial Policy list:
  "Affiliate Disclosure: Some hotel and flight search links on this site are affiliate
  links. If you book through them we may earn a small commission at no extra cost to you.
  This never influences which month or region we recommend."
- `src/components/Footer.astro` — one small line, e.g. "This site contains affiliate
  links." linking to the About page's editorial policy section.

### 5. Design constraints
- CTAs are a natural next step, not a popup/interstitial — no blocking modals.
- No copy implying we personally vouch for Booking.com/Skyscanner specifically — frame as
  "search hotels/flights", not "we recommend this site".

## Priority order
1. `affiliates.ts` config + `AffiliateCTA.astro` component (placeholders wired, no real IDs yet)
2. Hook into `HotelComparison.tsx` + `CostChart.tsx` (homepage — highest traffic)
3. Hook into `month/[month].astro`
4. Hook into `region/[slug].astro` and `travel-cost.astro`
5. Add disclosure text to `about.astro` + `Footer.astro`
6. (You, manually) Get real Booking.com / Skyscanner affiliate IDs, drop into env vars
   (`PUBLIC_BOOKING_AID`, `PUBLIC_SKYSCANNER_AID`), verify the deep links actually work.

## Out of scope for this pass
- AdSense / programmatic display ads — revisit once the site has real traffic.
- Live pricing APIs — charts stay static/illustrative as they are today.
- Rail pass / travel insurance affiliates (Klook, SafetyWing, etc.) — good phase-2 additions
  once hotel + flight links prove out.
