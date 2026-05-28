import type { IllustrationProps } from "./types";

export function Flame({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Пламя свечи — тратака"
    >
      <defs>
        <radialGradient id="flameGlow" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#f5e9d8" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#c7a09e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7a6c9b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flameBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5e9d8" />
          <stop offset="60%" stopColor="#c7a09e" />
          <stop offset="100%" stopColor="#7a6c9b" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#flameGlow)" />

      {/* flame outer */}
      <path
        d="M100 50 C84 78 80 96 86 116 C90 130 110 130 114 116 C120 96 116 78 100 50 Z"
        fill="url(#flameBody)"
        opacity="0.85"
      />
      {/* flame inner */}
      <path
        d="M100 72 C92 88 90 100 94 110 C98 118 102 118 106 110 C110 100 108 88 100 72 Z"
        fill="#f5e9d8"
        opacity="0.9"
      />
      {/* wick */}
      <line x1="100" y1="118" x2="100" y2="134" stroke="#2d2740" strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" />

      {/* candle body */}
      <rect x="86" y="134" width="28" height="32" rx="3" fill="#f5e9d8" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
      <path d="M86 134 L114 134" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" />

      {/* base */}
      <ellipse cx="100" cy="168" rx="36" ry="4" fill="#7a6c9b" fillOpacity="0.35" />
    </svg>
  );
}
