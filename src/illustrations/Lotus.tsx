import type { IllustrationProps } from "./types";

export function Lotus({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Лотос"
    >
      <defs>
        <radialGradient id="lotusGlow" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#f5e9d8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f5e9d8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="petal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7a09e" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7a6c9b" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="110" r="80" fill="url(#lotusGlow)" />
      <g
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        {/* back petals */}
        <path d="M40 120 C50 90 80 78 100 80 C90 100 70 118 40 120 Z" fill="url(#petal)" fillOpacity="0.35" />
        <path d="M160 120 C150 90 120 78 100 80 C110 100 130 118 160 120 Z" fill="url(#petal)" fillOpacity="0.35" />
        {/* middle petals */}
        <path d="M55 130 C60 100 82 86 100 88 C96 110 84 128 55 130 Z" fill="url(#petal)" fillOpacity="0.55" />
        <path d="M145 130 C140 100 118 86 100 88 C104 110 116 128 145 130 Z" fill="url(#petal)" fillOpacity="0.55" />
        {/* front center petal */}
        <path
          d="M100 60 C84 78 78 100 80 124 C90 122 100 118 100 100 C100 118 110 122 120 124 C122 100 116 78 100 60 Z"
          fill="url(#petal)"
          fillOpacity="0.75"
        />
      </g>
      <line x1="35" y1="146" x2="165" y2="146" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <path
        d="M35 146 Q100 158 165 146"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
    </svg>
  );
}
