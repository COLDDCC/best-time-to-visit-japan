"use client";

import { useMemo, useState } from "react";
import {
  CHECKER_MAX_ORDINAL,
  CHECKER_MIN_ORDINAL,
  betterNearbyDate,
  formatOrdinal,
  fromAutumnOrdinal,
  autumnOrdinal,
  bestSharedOrdinal,
  outcomesForDate,
  type FoliageSpot,
} from "../../data/foliage.ts";

interface Props {
  spots: FoliageSpot[];
}

const MONTHS = [
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

/** Days selectable in a given month, clamped to the checker's season window. */
function daysInMonth(month: number): number[] {
  const length = month === 11 ? 30 : 31;
  const days: number[] = [];
  for (let day = 1; day <= length; day++) {
    const ordinal = autumnOrdinal(`${month}-${day}`);
    if (ordinal >= CHECKER_MIN_ORDINAL && ordinal <= CHECKER_MAX_ORDINAL) days.push(day);
  }
  return days;
}

export default function PeakChecker({ spots }: Props) {
  const withRecords = useMemo(() => spots.filter((s) => s.records.length > 0), [spots]);
  const [ordinal, setOrdinal] = useState(() => bestSharedOrdinal(withRecords));

  const { month, day } = fromAutumnOrdinal(ordinal);
  const dayOptions = useMemo(() => daysInMonth(month), [month]);

  if (withRecords.length === 0) return null;

  function selectMonth(nextMonth: number) {
    // Keep the same day where the new month allows it, otherwise clamp into range.
    const options = daysInMonth(nextMonth);
    const nextDay = options.includes(day) ? day : options[0];
    setOrdinal(autumnOrdinal(`${nextMonth}-${nextDay}`));
  }

  function step(delta: number) {
    setOrdinal((current) =>
      Math.min(CHECKER_MAX_ORDINAL, Math.max(CHECKER_MIN_ORDINAL, current + delta)),
    );
  }

  return (
    <div className="bg-white border-2 border-zinc-200 rounded-2xl p-5 sm:p-7 shadow-sm">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600 mb-2">
        Date Check
      </p>
      <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-1 leading-snug">
        Will I catch peak colour?
      </h2>
      <p className="text-sm text-zinc-600 mb-6">
        Pick the date you&rsquo;ll be in Kyoto. We&rsquo;ll show what actually happened on that
        date in every season on record.
      </p>

      {/* Date picker: a big readout with day-stepper arrows, and the month/day
          selects on their own row so neither is squeezed at phone width. */}
      <div className="flex items-stretch gap-2 mb-2">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={ordinal <= CHECKER_MIN_ORDINAL}
          aria-label="Previous day"
          className="flex-shrink-0 w-12 h-14 rounded-xl border border-zinc-200 bg-white text-zinc-700 text-2xl leading-none hover:bg-zinc-50 disabled:opacity-30 disabled:hover:bg-white transition-colors"
        >
          &#8249;
        </button>
        <p className="flex-1 min-w-0 h-14 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-xl font-bold text-zinc-900 tabular-nums m-0">
          {formatOrdinal(ordinal)}
        </p>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={ordinal >= CHECKER_MAX_ORDINAL}
          aria-label="Next day"
          className="flex-shrink-0 w-12 h-14 rounded-xl border border-zinc-200 bg-white text-zinc-700 text-2xl leading-none hover:bg-zinc-50 disabled:opacity-30 disabled:hover:bg-white transition-colors"
        >
          &#8250;
        </button>
      </div>

      <div className="flex items-stretch gap-2 mb-2">
        <label className="sr-only" htmlFor="peak-checker-month">
          Month
        </label>
        <select
          id="peak-checker-month"
          value={month}
          onChange={(e) => selectMonth(Number(e.target.value))}
          className="flex-1 min-w-0 h-12 px-2.5 rounded-xl border border-zinc-200 bg-white text-base font-medium text-zinc-800 focus:border-accent-400 focus:ring-1 focus:ring-accent-200 outline-none"
        >
          {MONTHS.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>

        <label className="sr-only" htmlFor="peak-checker-day">
          Day
        </label>
        <select
          id="peak-checker-day"
          value={day}
          onChange={(e) => setOrdinal(autumnOrdinal(`${month}-${e.target.value}`))}
          className="w-[4.5rem] flex-shrink-0 h-12 px-2.5 rounded-xl border border-zinc-200 bg-white text-base font-medium text-zinc-800 focus:border-accent-400 focus:ring-1 focus:ring-accent-200 outline-none"
        >
          {dayOptions.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <p className="text-xs text-zinc-500 mb-6">
        Any year &mdash; only the month and day matter. {formatOrdinal(CHECKER_MIN_ORDINAL)} to{" "}
        {formatOrdinal(CHECKER_MAX_ORDINAL)}.
      </p>

      {/* Per-spot results */}
      <div className="space-y-4" aria-live="polite">
        {withRecords.map((spot) => (
          <SpotResult key={spot.slug} spot={spot} ordinal={ordinal} />
        ))}
      </div>

      <p className="text-xs text-zinc-500 leading-relaxed mt-6 pt-5 border-t border-zinc-100">
        This counts what happened in past seasons. It is not a forecast, and with a handful of
        years on record a single unusual autumn moves the count a lot. Check live 見頃 reports
        before you travel.
      </p>
    </div>
  );
}

function SpotResult({ spot, ordinal }: { spot: FoliageSpot; ordinal: number }) {
  const outcomes = outcomesForDate(spot, ordinal);
  const hits = outcomes.filter((o) => o.status === "hit").length;
  const better = betterNearbyDate(spot, ordinal);
  const tone =
    hits === outcomes.length
      ? "border-emerald-200 bg-emerald-50"
      : hits === 0
        ? "border-zinc-200 bg-zinc-50"
        : "border-amber-200 bg-amber-50";

  return (
    <div className={`rounded-xl border p-4 sm:p-5 ${tone}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
        <p className="text-base font-bold text-zinc-900">{spot.name}</p>
        <p className="text-sm font-semibold text-zinc-800 tabular-nums">
          At peak in {hits} of {outcomes.length} years
        </p>
      </div>

      <ul className="flex flex-wrap gap-2 mb-3 list-none p-0">
        {outcomes.map((o) => (
          <li
            key={o.year}
            className={`flex flex-col items-center justify-center w-[3.25rem] h-[3.25rem] rounded-lg border text-center ${
              o.status === "hit"
                ? "border-emerald-300 bg-white text-emerald-700"
                : "border-zinc-200 bg-white/70 text-zinc-500"
            }`}
            title={
              o.status === "hit"
                ? `${o.year}: at peak on this date`
                : o.status === "early"
                  ? `${o.year}: peak started ${o.daysOff} day${o.daysOff === 1 ? "" : "s"} later`
                  : `${o.year}: peak had ended ${o.daysOff} day${o.daysOff === 1 ? "" : "s"} earlier`
            }
          >
            <span className="text-base leading-none" aria-hidden="true">
              {o.status === "hit" ? "✓" : "✕"}
            </span>
            <span className="text-[0.6875rem] font-semibold tabular-nums mt-1">{o.year}</span>
          </li>
        ))}
      </ul>

      <ul className="space-y-1 list-none p-0 mb-0">
        {outcomes.map((o) => (
          <li key={o.year} className="text-xs text-zinc-700 tabular-nums">
            <span className="font-semibold">{o.year}</span>{" "}
            {o.status === "hit" ? (
              <span className="text-emerald-700">at peak</span>
            ) : o.status === "early" ? (
              <>
                {o.daysOff} day{o.daysOff === 1 ? "" : "s"} too early &mdash; peak began{" "}
                {formatOrdinal(ordinal + o.daysOff)}
              </>
            ) : (
              <>
                {o.daysOff} day{o.daysOff === 1 ? "" : "s"} too late &mdash; peak ended{" "}
                {formatOrdinal(ordinal - o.daysOff)}
              </>
            )}
          </li>
        ))}
      </ul>

      {better && (
        <p className="text-xs font-medium text-zinc-800 mt-3 pt-3 border-t border-black/5">
          {formatOrdinal(better.ordinal)} would have hit peak in {better.hits} of {outcomes.length}{" "}
          years &mdash; {Math.abs(better.offset)} day{Math.abs(better.offset) === 1 ? "" : "s"}{" "}
          {better.offset > 0 ? "later" : "earlier"}.
        </p>
      )}
    </div>
  );
}
