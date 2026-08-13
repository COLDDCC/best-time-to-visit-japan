import { flightSearchUrl } from "../../config/affiliates";

const flightData = [
  { month: "Jan", price: 950 }, { month: "Feb", price: 1000 }, { month: "Mar", price: 900 },
  { month: "Apr", price: 1350 }, { month: "May", price: 1150 }, { month: "Jun", price: 800 },
  { month: "Jul", price: 1250 }, { month: "Aug", price: 1400 }, { month: "Sep", price: 750 },
  { month: "Oct", price: 950 }, { month: "Nov", price: 950 }, { month: "Dec", price: 1150 },
];

const MAX = 1600;

function barColor(price: number) {
  if (price > 1150) return "#ef4444";
  if (price > 900) return "#f59e0b";
  return "#10b981";
}

export default function CostChart() {
  const W = 560, H = 240, PL = 46, PR = 8, PT = 18, PB = 26;
  const chartW = W - PL - PR;
  const chartH = H - PT - PB;
  const step = chartW / flightData.length;
  const barW = Math.min(30, step * 0.55);
  const y = (price: number) => PT + chartH - (price / MAX) * chartH;
  const ticks = [0, 800, 1200, 1600];

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col h-full">
      <p className="text-sm font-semibold text-zinc-700 mb-4">
        Round-Trip Flights: US to Tokyo (avg. USD)
      </p>
      <div className="flex-1 flex flex-col justify-center">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Average round-trip flight prices from the US to Tokyo by month">
          {ticks.map((t) => (
            <g key={t}>
              <line x1={PL} x2={W - PR} y1={y(t)} y2={y(t)} stroke="#f4f4f5" />
              <text x={PL - 6} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#a1a1aa">${t}</text>
            </g>
          ))}
          {flightData.map((d, i) => {
            const x = PL + i * step + (step - barW) / 2;
            const h = (d.price / MAX) * chartH;
            return (
              <g key={d.month}>
                <rect x={x} y={y(d.price)} width={barW} height={h} rx={6} fill={barColor(d.price)} />
                <text x={x + barW / 2} y={y(d.price) - 5} textAnchor="middle" fontSize="10" fill="#71717a" fontWeight={600}>{d.price}</text>
                <text x={x + barW / 2} y={H - PB + 14} textAnchor="middle" fontSize="10" fill="#71717a">{d.month}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="text-xs text-zinc-400 mt-3">Source: Aggregated Google Flights data, US departure cities.</p>
      <a
        href={flightSearchUrl()}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 mt-5 bg-accent-600 hover:bg-accent-700 text-white text-sm font-semibold rounded-full transition-colors no-underline"
      >
        Check flight prices for your dates
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  );
}