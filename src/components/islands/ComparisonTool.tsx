"use client";

import { useState } from "react";

interface CompareItem {
  label: string;
  tempHigh: number;
  tempLow: number;
  rainDays: number;
  crowdLevel: number;
  costLevel: string;
  bestFor: string;
  verdict: string;
}

const monthlyCompare: Record<string, CompareItem> = {
  january: { label: "January", tempHigh: 10, tempLow: 1, rainDays: 6, crowdLevel: 3, costLevel: "Moderate", bestFor: "Onsen, snow, Sapporo Festival", verdict: "Cold but magical: Hokkaido snow, cozy onsen towns, and quiet temples after the New Year rush." },
  february: { label: "February", tempHigh: 11, tempLow: 0, rainDays: 6, crowdLevel: 3, costLevel: "Moderate", bestFor: "Sapporo Snow Festival, skiing", verdict: "The Snow Festival and powder skiing peak. Cold everywhere, cheapest onsen rooms of winter." },
  march: { label: "March", tempHigh: 14, tempLow: 5, rainDays: 11, crowdLevel: 3, costLevel: "Low", bestFor: "Early sakura, shoulder deals", verdict: "A bargain shoulder month. Sakura begins in the south while Tokyo warms up." },
  april: { label: "April", tempHigh: 20, tempLow: 10, rainDays: 11, crowdLevel: 5, costLevel: "Very High", bestFor: "Cherry blossom season", verdict: "The iconic sakura month. Perfect weather, peak crowds, and hotel prices jump 40-80%." },
  may: { label: "May", tempHigh: 24, tempLow: 15, rainDays: 11, crowdLevel: 4, costLevel: "High (Golden Week)", bestFor: "Gardens, wisteria, Golden Week", verdict: "Lovely after Golden Week (early May). Avoid Apr 29-May 5 when the whole country travels." },
  june: { label: "June", tempHigh: 27, tempLow: 19, rainDays: 17, crowdLevel: 2, costLevel: "Low", bestFor: "Hydrangeas, Okinawa, low prices", verdict: "Rainy season in most of Japan, but the cheapest month. Hydrangeas bloom and Okinawa dries out." },
  july: { label: "July", tempHigh: 30, tempLow: 23, rainDays: 13, crowdLevel: 4, costLevel: "High", bestFor: "Gion Matsuri, fireworks", verdict: "Hot and humid, but summer festivals (Gion Matsuri, hanabi) make it unforgettable. Head north for cool." },
  august: { label: "August", tempHigh: 32, tempLow: 24, rainDays: 12, crowdLevel: 5, costLevel: "Very High", bestFor: "Obon, Nebuta, Fuji climbing", verdict: "Peak summer with Obon crowds and heat. Hokkaido and highlands are the escape; Fuji climbing season." },
  september: { label: "September", tempHigh: 27, tempLow: 19, rainDays: 14, crowdLevel: 2, costLevel: "Low", bestFor: "Cheap flights, early koyo", verdict: "The value month: cheap flights, thin crowds. Typhoon risk, but Hokkaido already shows autumn color." },
  october: { label: "October", tempHigh: 21, tempLow: 13, rainDays: 10, crowdLevel: 4, costLevel: "Moderate", bestFor: "Koyo start, perfect weather", verdict: "Crisp, dry and beautiful. Autumn leaves begin in the north and mountains. The consensus best month." },
  november: { label: "November", tempHigh: 15, tempLow: 7, rainDays: 8, crowdLevel: 4, costLevel: "Moderate", bestFor: "Peak koyo, Kyoto gardens", verdict: "Peak autumn leaves in Kyoto & Tokyo. Brilliant colors, dry air, and manageable crowds." },
  december: { label: "December", tempHigh: 10, tempLow: 2, rainDays: 6, crowdLevel: 3, costLevel: "Moderate", bestFor: "Illuminations, winter landscapes", verdict: "Winter illuminations, cozy onsen, and New Year shrines. Cold but festive and atmospheric." },
};

const regionCompare: Record<string, { best: string; avoid: string; temp: string; highlight: string }> = {
  hokkaido: { best: "Jun-Aug & Jan-Feb", avoid: "Nov (grey)", temp: "Summer 15-25 / Winter -10 to 0", highlight: "Sapporo Snow Festival & Niseko powder" },
  tohoku: { best: "May-Aug & Dec-Feb", avoid: "Jan (deep cold)", temp: "Summer 18-28 / Winter -5 to 5", highlight: "Nebuta Matsuri & Zao snow monsters" },
  tokyo: { best: "Mar-Apr & Oct-Nov", avoid: "Jul-Aug (humid)", temp: "Spring 10-20 / Autumn 12-22", highlight: "Sakura at Ueno & neon nights" },
  fuji: { best: "Oct-Apr & Jul-Sep", avoid: "Jun (rain)", temp: "Base 15-30 / summit 5-15", highlight: "Climbing season & lake reflections" },
  kyoto: { best: "Mar-Apr & Nov", avoid: "Jul-Aug (hot)", temp: "Spring 10-22 / Autumn 8-18", highlight: "Kinkakuji in sakura & koyo" },
  hiroshima: { best: "Mar-May & Oct-Nov", avoid: "Jul-Sep (typhoon)", temp: "Spring 12-22 / Autumn 12-22", highlight: "Miyajima floating torii" },
  nara: { best: "Mar-Apr & Oct-Nov", avoid: "Jul-Aug (hot)", temp: "Spring 10-22 / Autumn 8-20", highlight: "Deer park & Great Buddha" },
  shikoku: { best: "Mar-May & Oct-Nov", avoid: "Jun-Jul (rain)", temp: "Spring 12-22 / Autumn 12-21", highlight: "Iya Valley & art islands" },
  kyushu: { best: "Mar-May & Oct-Nov", avoid: "Jun-Aug (rain/typhoon)", temp: "Spring 12-24 / Autumn 12-22", highlight: "Beppu hells & Kurokawa onsen" },
  okinawa: { best: "Apr-Jun & Oct-Nov", avoid: "Jun-Oct (typhoon)", temp: "Year-round 18-30", highlight: "Miyako & Ishigaki beaches" },
};

function crowdLabel(l: number) { return l <= 2 ? "Low" : l <= 3 ? "Moderate" : l <= 4 ? "High" : "Extreme"; }
function crowdColor(l: number) { return l <= 2 ? "text-emerald-600 bg-emerald-50" : l <= 3 ? "text-amber-600 bg-amber-50" : "text-red-600 bg-red-50"; }

type CompareMode = "months" | "regions";

export default function ComparisonTool() {
  const [mode, setMode] = useState<CompareMode>("months");
  const [a, setA] = useState("april");
  const [b, setB] = useState("october");

  const items = mode === "months" ? monthlyCompare : regionCompare;
  const itemA = items[a as keyof typeof items];
  const itemB = items[b as keyof typeof items];
  const labels = mode === "months"
    ? Object.entries(monthlyCompare).map(([k, v]) => [k, v.label])
    : Object.entries(regionCompare).map(([k, v]) => [k, k.charAt(0).toUpperCase() + k.slice(1)]);

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8">
      <p className="text-sm font-semibold text-zinc-700 mb-1">Compare Side by Side</p>
      <p className="text-xs text-zinc-400 mb-6">Pick two to compare and we&rsquo;ll help you decide.</p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setMode("months"); setA("april"); setB("october"); }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === "months" ? "bg-accent-600 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
        >
          Months
        </button>
        <button
          onClick={() => { setMode("regions"); setA("kyoto"); setB("tokyo"); }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === "regions" ? "bg-accent-600 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
        >
          Regions
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <select
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="w-full p-3 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700 bg-white focus:border-accent-400 focus:ring-1 focus:ring-accent-200 outline-none"
        >
          {labels.map(([k, v]) => <option key={k as string} value={k as string}>{v as string}</option>)}
        </select>
        <select
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="w-full p-3 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700 bg-white focus:border-accent-400 focus:ring-1 focus:ring-accent-200 outline-none"
        >
          {labels.map(([k, v]) => <option key={k as string} value={k as string}>{v as string}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200">
          <p className="text-sm font-bold text-zinc-800 mb-3">{itemA.label}</p>
          {mode === "months" && (
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-zinc-400">Temperature</span><span className="font-medium text-zinc-700">{itemA.tempLow}&deg;&ndash;{itemA.tempHigh}&deg;C</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Rain days</span><span className="font-medium text-zinc-700">{itemA.rainDays}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Crowds</span><span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${crowdColor(itemA.crowdLevel)}`}>{crowdLabel(itemA.crowdLevel)}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Cost</span><span className="font-medium text-zinc-700">{itemA.costLevel}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Best for</span><span className="font-medium text-zinc-700 text-right max-w-[120px]">{itemA.bestFor}</span></div>
            </div>
          )}
          {mode === "regions" && (
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-zinc-400">Best months</span><span className="font-medium text-blue-600">{itemA.best}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Avoid</span><span className="font-medium text-red-500">{itemA.avoid}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Temperature</span><span className="font-medium text-zinc-700">{itemA.temp}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Highlight</span><span className="font-medium text-zinc-700 text-right max-w-[120px]">{itemA.highlight}</span></div>
            </div>
          )}
        </div>

        <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200">
          <p className="text-sm font-bold text-zinc-800 mb-3">{itemB.label}</p>
          {mode === "months" && (
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-zinc-400">Temperature</span><span className="font-medium text-zinc-700">{itemB.tempLow}&deg;&ndash;{itemB.tempHigh}&deg;C</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Rain days</span><span className="font-medium text-zinc-700">{itemB.rainDays}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Crowds</span><span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${crowdColor(itemB.crowdLevel)}`}>{crowdLabel(itemB.crowdLevel)}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Cost</span><span className="font-medium text-zinc-700">{itemB.costLevel}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Best for</span><span className="font-medium text-zinc-700 text-right max-w-[120px]">{itemB.bestFor}</span></div>
            </div>
          )}
          {mode === "regions" && (
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-zinc-400">Best months</span><span className="font-medium text-blue-600">{itemB.best}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Avoid</span><span className="font-medium text-red-500">{itemB.avoid}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Temperature</span><span className="font-medium text-zinc-700">{itemB.temp}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Highlight</span><span className="font-medium text-zinc-700 text-right max-w-[120px]">{itemB.highlight}</span></div>
            </div>
          )}
        </div>
      </div>

      {mode === "months" && (
        <div className="bg-accent-50 border border-accent-200 rounded-xl p-5">
          <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-2">Quick Take</p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            <span className="font-semibold">{itemA.label}:</span> {itemA.verdict}
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed mt-2">
            <span className="font-semibold">{itemB.label}:</span> {itemB.verdict}
          </p>
        </div>
      )}
      {mode === "regions" && (
        <div className="bg-accent-50 border border-accent-200 rounded-xl p-5">
          <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-2">Planning Tip</p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            These two regions have different ideal seasons. Consider a multi-destination trip that visits each at its peak, or pick the one whose best window matches your available dates.
          </p>
        </div>
      )}
    </div>
  );
}