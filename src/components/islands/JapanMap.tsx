"use client";

import { useState } from "react";

interface Region {
  name: string;
  slug: string;
  best: string;
  temp: string;
  key: string;
}

// Arranged as a stylized grid loosely reflecting Japan's geography (north -> south)
const regions: Region[] = [
  { name: "Hokkaido", slug: "hokkaido", best: "Jun-Aug & Jan-Feb", temp: "Summer 15-25\u00B0C", key: "hokkaido" },
  { name: "Tohoku", slug: "tohoku", best: "May-Aug & Dec-Feb", temp: "Summer 18-28\u00B0C", key: "tohoku" },
  { name: "Tokyo & Kanto", slug: "tokyo", best: "Mar-Apr & Oct-Nov", temp: "Spring 10-20\u00B0C", key: "tokyo" },
  { name: "Mt Fuji & Chubu", slug: "fuji", best: "Oct-Apr & Jul-Sep", temp: "Base 15-30\u00B0C", key: "fuji" },
  { name: "Kyoto & Osaka", slug: "kyoto", best: "Mar-Apr & Nov", temp: "Spring 10-22\u00B0C", key: "kyoto" },
  { name: "Hiroshima", slug: "hiroshima", best: "Mar-May & Oct-Nov", temp: "Spring 12-22\u00B0C", key: "hiroshima" },
  { name: "Nara", slug: "nara", best: "Mar-Apr & Oct-Nov", temp: "Spring 10-22\u00B0C", key: "nara" },
  { name: "Shikoku", slug: "shikoku", best: "Mar-May & Oct-Nov", temp: "Spring 12-22\u00B0C", key: "shikoku" },
  { name: "Kyushu", slug: "kyushu", best: "Mar-May & Oct-Nov", temp: "Spring 12-24\u00B0C", key: "kyushu" },
];

export default function JapanMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 overflow-hidden">
      <p className="text-sm font-semibold text-zinc-700 mb-2">Interactive Japan Map</p>
      <p className="text-xs text-zinc-400 mb-6">Hover or tap a region to see the best time to visit.</p>

      <div className="grid grid-cols-5 sm:grid-cols-5 gap-2 md:gap-3 max-w-3xl mx-auto">
        <div className="col-span-5"><RegionCard region={regions[0]} active={active} setActive={setActive} layout="wide" /></div>
        <div className="col-span-5"><RegionCard region={regions[1]} active={active} setActive={setActive} layout="wide" /></div>
        <div className="col-span-3"><RegionCard region={regions[2]} active={active} setActive={setActive} /></div>
        <div className="col-span-2"><RegionCard region={regions[3]} active={active} setActive={setActive} /></div>
        <div className="col-span-2"><RegionCard region={regions[4]} active={active} setActive={setActive} /></div>
        <div className="col-span-1"><RegionCard region={regions[5]} active={active} setActive={setActive} /></div>
        <div className="col-span-1"><RegionCard region={regions[6]} active={active} setActive={setActive} /></div>
        <div className="col-span-1"><RegionCard region={regions[7]} active={active} setActive={setActive} /></div>
        <div className="col-span-1"><RegionCard region={regions[8]} active={active} setActive={setActive} /></div>
      </div>

      <div className="text-center mt-6">
        <a href="/by-region" className="text-sm font-medium text-accent-600 hover:text-accent-700 inline-flex items-center gap-1">
          See all regions with detailed guides
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  );
}

function RegionCard({ region, active, setActive, layout = "square" }: { region: Region; active: string | null; setActive: (v: string | null) => void; layout?: string }) {
  const isActive = active === region.key;
  return (
    <a
      href={`/region/${region.slug}`}
      className={`block rounded-xl border p-3 md:p-4 text-left transition-all cursor-pointer hover:shadow-md ${
        isActive ? "border-accent-400 bg-accent-50 shadow-md ring-1 ring-accent-200" : "border-zinc-200 bg-white hover:border-accent-200"
      }`}
      onMouseEnter={() => setActive(region.key)}
      onMouseLeave={() => setActive(null)}
      onFocus={() => setActive(region.key)}
      onBlur={() => setActive(null)}
    >
      <p className={`text-sm font-bold text-zinc-800 mb-1 ${layout === "wide" ? "text-left" : ""}`}>{region.name}</p>
      <p className={`text-xs font-semibold mb-1 ${isActive ? "text-accent-600" : "text-blue-600"}`}>
        Best: {region.best}
      </p>
      <p className="text-[11px] text-zinc-400">{region.temp}</p>
    </a>
  );
}