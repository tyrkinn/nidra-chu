import type { IllustrationProps } from "./types";

export function Shavasana({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Поза шавасана"
    >
      <defs>
        <radialGradient id="halo" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#f5e9d8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#f5e9d8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="90" r="80" fill="url(#halo)" />

      {/* ground line */}
      <path d="M20 140 Q100 134 180 140" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />

      {/* figure lying down */}
      <g
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* mat */}
        <path d="M30 138 L172 138" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
        {/* head */}
        <circle cx="56" cy="124" r="9" fill="#c7a09e" fillOpacity="0.5" />
        {/* torso */}
        <path d="M65 130 L150 132" />
        {/* arms */}
        <path d="M82 132 Q92 142 102 138" />
        <path d="M110 132 Q122 144 134 138" />
        {/* legs */}
        <path d="M150 132 L170 130" />
        <path d="M150 134 L170 138" />
      </g>

      {/* stars / breath dots */}
      <g fill="#7a6c9b" fillOpacity="0.7">
        <circle cx="44" cy="62" r="1.5" />
        <circle cx="78" cy="48" r="1" />
        <circle cx="120" cy="56" r="1.2" />
        <circle cx="158" cy="40" r="1.4" />
      </g>
      {/* moon */}
      <path
        d="M150 70 a14 14 0 1 0 -2 -14 a11 11 0 1 1 2 14 Z"
        fill="#f5e9d8"
        fillOpacity="0.9"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="0.8"
      />
    </svg>
  );
}
