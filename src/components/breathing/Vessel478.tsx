import type { IllustrationProps } from "../../illustrations/types";

// Дыхание 4-7-8. Сосуд наполняется (4с), удерживается (7с), медленно опустошается (8с).
// Цикл 19 секунд.
export function Vessel478({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Дыхание 4-7-8 — сосуд света"
    >
      <defs>
        <radialGradient id="v478Halo" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="v478Liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.95" />
        </linearGradient>
        <clipPath id="v478Vessel">
          <circle cx="100" cy="100" r="58" />
        </clipPath>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#v478Halo)" />

      {/* Vessel outline */}
      <circle cx="100" cy="100" r="58" fill="none" stroke="var(--accent)" strokeOpacity="0.35" strokeWidth="1.5" />

      {/* Liquid that rises and falls */}
      <g clipPath="url(#v478Vessel)">
        <rect className="v478-fill" x="40" y="40" width="120" height="120" fill="url(#v478Liquid)" />
      </g>

      {/* Soft surface line (top of vessel) */}
      <circle cx="100" cy="100" r="58" fill="none" stroke="var(--accent-glow)" strokeOpacity="0.6" strokeWidth="0.8" />

      {/* Phase markers */}
      <g fill="var(--ink-muted)" fontSize="9" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.16em" textAnchor="middle" style={{ textTransform: "uppercase" }}>
        <text x="100" y="30">4 — 7 — 8</text>
        <text x="100" y="180">вдох · держим · выдох</text>
      </g>

      {/* Soft glow at top when "full" */}
      <circle cx="100" cy="68" r="6" fill="var(--accent-glow)" className="v478-spark" />
    </svg>
  );
}
