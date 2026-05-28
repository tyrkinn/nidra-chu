import type { IllustrationProps } from "./types";

export function Path({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Тропа — осознанная ходьба"
    >
      <defs>
        <radialGradient id="pathSky" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#f5e9d8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f5e9d8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pathRoad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7a09e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7a6c9b" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="90" fill="url(#pathSky)" />

      {/* horizon */}
      <line x1="22" y1="120" x2="178" y2="120" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />

      {/* trees in the distance */}
      <g fill="currentColor" fillOpacity="0.35">
        <path d="M44 122 L40 112 L36 122 Z" />
        <path d="M52 122 L48 108 L44 122 Z" opacity="0.7" />
        <path d="M158 122 L154 110 L150 122 Z" />
        <path d="M166 122 L162 114 L158 122 Z" opacity="0.7" />
      </g>

      {/* sun */}
      <circle cx="100" cy="98" r="14" fill="#f5e9d8" />
      <circle cx="100" cy="98" r="22" fill="none" stroke="#f5e9d8" strokeOpacity="0.4" strokeWidth="1" />

      {/* path receding */}
      <path
        d="M64 178 L92 120 L108 120 L136 178 Z"
        fill="url(#pathRoad)"
      />
      <path
        d="M92 120 L108 120"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="0.8"
      />

      {/* footprints */}
      <g fill="#2d2740" fillOpacity="0.6">
        <ellipse cx="86" cy="170" rx="4" ry="6" />
        <ellipse cx="110" cy="156" rx="3.5" ry="5" />
        <ellipse cx="92" cy="142" rx="3" ry="4.5" />
        <ellipse cx="106" cy="130" rx="2.5" ry="4" />
      </g>
    </svg>
  );
}
