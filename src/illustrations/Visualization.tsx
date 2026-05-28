import type { IllustrationProps } from "./types";

export function Visualization({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Визуализация"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7a09e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7a6c9b" stopOpacity="0.45" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#f5e9d8" />
          <stop offset="100%" stopColor="#f5e9d8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect x="20" y="40" width="160" height="100" rx="14" fill="url(#sky)" opacity="0.6" />

      {/* sun */}
      <circle cx="100" cy="86" r="38" fill="url(#sun)" />
      <circle cx="100" cy="86" r="14" fill="#f5e9d8" />

      {/* mountains */}
      <g fill="currentColor" fillOpacity="0.5">
        <path d="M20 140 L60 96 L92 130 L120 104 L160 140 Z" opacity="0.55" />
        <path d="M20 142 L46 116 L72 138 L100 118 L132 140 L160 122 L180 142 Z" opacity="0.35" />
      </g>

      {/* water */}
      <path d="M20 140 L180 140 L180 162 L20 162 Z" fill="#7a6c9b" fillOpacity="0.4" />
      <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" fill="none">
        <path d="M30 150 Q60 146 90 150 T170 150" />
        <path d="M30 158 Q60 154 90 158 T170 158" />
      </g>

      {/* bird */}
      <g fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round">
        <path d="M58 70 q6 -4 10 0 q4 -4 10 0" />
        <path d="M120 56 q4 -3 8 0 q3 -3 8 0" />
      </g>
    </svg>
  );
}
