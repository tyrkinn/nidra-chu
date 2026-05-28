type Props = {
  total: number;
  remaining: number;
};

const RADIUS = 38;
const CIRC = 2 * Math.PI * RADIUS;

const fmt = (sec: number) => {
  const s = Math.max(0, Math.round(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
};

export function Timer({ total, remaining }: Props) {
  const progress = total <= 0 ? 0 : 1 - remaining / total;
  const offset = CIRC * (1 - progress);

  return (
    <div className="timer-ring" aria-label="Таймер этапа">
      <svg viewBox="0 0 84 84">
        <circle className="ring-bg" cx="42" cy="42" r={RADIUS} />
        <circle
          className="ring-fg"
          cx="42"
          cy="42"
          r={RADIUS}
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="timer-text">{fmt(remaining)}</div>
    </div>
  );
}
