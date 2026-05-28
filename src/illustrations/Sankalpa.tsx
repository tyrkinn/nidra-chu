import type { IllustrationProps } from "./types";

export function Sankalpa({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Санкальпа — намерение"
    >
      <defs>
        <radialGradient id="seedGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5e9d8" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#c7a09e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7a6c9b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="80" fill="url(#seedGlow)" />

      {/* lotus-like rays */}
      <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x1 = 100 + Math.cos(a) * 36;
          const y1 = 100 + Math.sin(a) * 36;
          const x2 = 100 + Math.cos(a) * 64;
          const y2 = 100 + Math.sin(a) * 64;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      {/* heart / seed of intent */}
      <path
        d="M100 122 C82 108 76 96 80 88 C84 80 92 80 100 90 C108 80 116 80 120 88 C124 96 118 108 100 122 Z"
        fill="#c7a09e"
        fillOpacity="0.85"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.6"
      />
      <circle cx="100" cy="98" r="3.4" fill="#f5e9d8" />
    </svg>
  );
}
