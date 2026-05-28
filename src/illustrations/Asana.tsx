import type { IllustrationProps } from "./types";

export function Asana({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Йога — поза дерева"
    >
      <defs>
        <radialGradient id="asanaSun" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f5e9d8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#f5e9d8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#asanaSun)" />

      {/* ground */}
      <path d="M30 168 Q100 162 170 168" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />

      {/* tree pose — head */}
      <circle cx="100" cy="44" r="10" fill="#c7a09e" fillOpacity="0.7" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.8" />

      {/* arms raised in namaste over head */}
      <g
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M92 58 L86 30" />
        <path d="M108 58 L114 30" />
        <path d="M86 30 Q100 16 114 30" fill="#f5e9d8" fillOpacity="0.8" />

        {/* torso */}
        <path d="M92 58 L94 110" />
        <path d="M108 58 L106 110" />

        {/* standing leg */}
        <path d="M100 110 L100 162" />

        {/* bent leg — foot resting on standing thigh */}
        <path d="M100 118 L74 124 L92 138" />
      </g>

      {/* small leaves around */}
      <g fill="#7a6c9b" fillOpacity="0.55">
        <circle cx="62" cy="58" r="2" />
        <circle cx="48" cy="92" r="1.6" />
        <circle cx="148" cy="64" r="1.8" />
        <circle cx="160" cy="100" r="2" />
      </g>
    </svg>
  );
}
