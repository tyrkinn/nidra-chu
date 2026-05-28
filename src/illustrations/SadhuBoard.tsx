import type { IllustrationProps } from "./types";

export function SadhuBoard({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Доска садху — стопы над гвоздями"
    >
      <defs>
        <radialGradient id="sadhuHalo" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#f5e9d8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f5e9d8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="board" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7a09e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7a6c9b" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="110" r="80" fill="url(#sadhuHalo)" />

      {/* feet above the board */}
      <g
        fill="#c7a09e"
        fillOpacity="0.85"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="0.8"
      >
        {/* left foot */}
        <path d="M62 64 C56 70 54 84 58 96 C62 104 76 104 82 96 C86 88 84 72 78 64 C72 58 66 60 62 64 Z" />
        <circle cx="62" cy="92" r="2" />
        <circle cx="68" cy="60" r="1.4" />
        <circle cx="73" cy="58" r="1.2" />
        <circle cx="78" cy="60" r="1.2" />

        {/* right foot */}
        <path d="M138 64 C144 70 146 84 142 96 C138 104 124 104 118 96 C114 88 116 72 122 64 C128 58 134 60 138 64 Z" />
        <circle cx="138" cy="92" r="2" />
        <circle cx="132" cy="60" r="1.4" />
        <circle cx="127" cy="58" r="1.2" />
        <circle cx="122" cy="60" r="1.2" />
      </g>

      {/* light gap between feet and board */}
      <ellipse cx="100" cy="118" rx="56" ry="6" fill="#f5e9d8" fillOpacity="0.55" />

      {/* board */}
      <rect x="34" y="124" width="132" height="22" rx="4" fill="url(#board)" />
      <rect
        x="34"
        y="124"
        width="132"
        height="22"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1"
      />

      {/* nails — rows of dots */}
      <g fill="#2d2740" fillOpacity="0.85">
        {Array.from({ length: 18 }).map((_, i) => (
          <circle key={`r1-${i}`} cx={42 + i * 7} cy={130} r="1.4" />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <circle key={`r2-${i}`} cx={42 + i * 7} cy={140} r="1.4" />
        ))}
      </g>

      {/* support / shadow */}
      <path d="M40 150 Q100 162 160 150" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
    </svg>
  );
}
