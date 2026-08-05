export function CircleStat({
  value,
  label,
  size = 160,
  color = "var(--primary)",
  caption,
}: {
  value: number;
  label: string;
  size?: number;
  color?: string;
  caption?: string;
}) {
  const stroke = size / 9;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (Math.min(100, Math.max(0, value)) / 100) * c;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="var(--muted)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="font-display font-extrabold leading-none"
            style={{ fontSize: size / 4 }}
          >
            {value}%
          </span>
        </div>
      </div>
      <p className="font-display text-lg font-extrabold">{label}</p>
      {caption ? <p className="text-sm text-muted-foreground">{caption}</p> : null}
    </div>
  );
}
