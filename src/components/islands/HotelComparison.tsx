const hotelData = [
  { short: "Off-Peak", sub: "Jun & Sep", price: 55, fill: "#10b981" },
  { short: "Shoulder", sub: "Mar, Oct-Nov, Dec", price: 80, fill: "#f59e0b" },
  { short: "Peak", sub: "Apr, May, Jul-Aug", price: 100, fill: "#ef4444" },
];

export default function HotelComparison() {
  const W = 560, H = 260, PL = 44, PR = 8, PT = 24, PB = 40;
  const chartW = W - PL - PR;
  const chartH = H - PT - PB;
  const step = chartW / hotelData.length;
  const barW = Math.min(80, step * 0.5);
  const y = (price: number) => PT + chartH - (price / 100) * chartH;

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col h-full">
      <p className="text-sm font-semibold text-zinc-700 mb-4">
        3-Star Hotels: Price Index by Season (% of peak)
      </p>
      <div className="flex-1 flex flex-col justify-center">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Three-star hotel price index by season as a percentage of peak prices">
        {[0, 50, 100].map((t) => (
          <g key={t}>
            <line x1={PL} x2={W - PR} y1={y(t)} y2={y(t)} stroke="#f4f4f5" />
            <text x={PL - 6} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#a1a1aa">{t}%</text>
          </g>
        ))}
        {hotelData.map((d, i) => {
          const x = PL + i * step + (step - barW) / 2;
          const h = (d.price / 100) * chartH;
          return (
            <g key={d.short}>
              <rect x={x} y={y(d.price)} width={barW} height={h} rx={8} fill={d.fill} />
              <text x={x + barW / 2} y={y(d.price) - 8} textAnchor="middle" fontSize="13" fill="#71717a" fontWeight={600}>{d.price}%</text>
              <text x={x + barW / 2} y={H - PB + 14} textAnchor="middle" fontSize="11" fill="#71717a" fontWeight={500}>{d.short}</text>
              <text x={x + barW / 2} y={H - PB + 27} textAnchor="middle" fontSize="9" fill="#a1a1aa">{d.sub}</text>
            </g>
          );
        })}
      </svg>
      </div>
      <div className="grid grid-cols-1 gap-2 mt-5">
        <div className="flex items-start gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 flex-shrink-0" />
          <p className="text-xs text-zinc-500"><span className="font-medium text-zinc-600">Off-Peak:</span> June and September (rainy/typhoon risk) are the cheapest months. Often 40-50% below cherry-blossom peak.</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 mt-1 flex-shrink-0" />
          <p className="text-xs text-zinc-500"><span className="font-medium text-zinc-600">Shoulder:</span> March, October-December. Good availability and standard rates. Book 2-4 weeks ahead.</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400 mt-1 flex-shrink-0" />
          <p className="text-xs text-zinc-500"><span className="font-medium text-zinc-600">Peak:</span> Cherry blossom (April), Golden Week (early May), and summer holidays (Jul-Aug) command premium rates. Book 2-3 months ahead.</p>
        </div>
      </div>
    </div>
  );
}