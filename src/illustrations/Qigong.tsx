import type { IllustrationProps } from "./types";

export function Qigong({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Цигун — поток энергии"
    >
      <defs>
        <radialGradient id="qiHalo" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="qiArc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#qiHalo)" />

      {/* energy arc — yin/yang inspired flow */}
      <path
        d="M44 100 Q100 36 156 100 Q100 164 44 100 Z"
        fill="none"
        stroke="url(#qiArc)"
        strokeWidth="1.6"
        strokeOpacity="0.55"
      />
      <path
        d="M70 100 Q100 70 130 100"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />

      {/* figure */}
      {/* head */}
      <circle cx="100" cy="62" r="9" fill="var(--accent-soft)" fillOpacity="0.7" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.8" />

      {/* torso */}
      <path
        d="M92 74 L92 122 L108 122 L108 74 Z"
        fill="var(--accent)"
        fillOpacity="0.4"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />

      {/* arms — flowing outward like holding a ball */}
      <g
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M92 80 Q70 96 76 116" />
        <path d="M108 80 Q130 96 124 116" />
        {/* legs in horse stance */}
        <path d="M94 122 Q82 140 80 162" />
        <path d="M106 122 Q118 140 120 162" />
      </g>

      {/* qi ball between hands */}
      <circle cx="100" cy="116" r="10" fill="var(--accent-glow)" fillOpacity="0.7" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
      <circle cx="100" cy="116" r="3" fill="var(--accent)" />

      {/* ground */}
      <path d="M50 170 Q100 164 150 170" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
    </svg>
  );
}
