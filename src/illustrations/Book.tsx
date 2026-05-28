import type { IllustrationProps } from "./types";

export function Book({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Открытая книга со светом"
    >
      <defs>
        <radialGradient id="bookHalo" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bookGlow" cx="50%" cy="80%" r="55%">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--accent-soft)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#bookHalo)" />

      {/* glow rising from open book */}
      <ellipse cx="100" cy="80" rx="48" ry="34" fill="url(#bookGlow)" />

      {/* book — left page */}
      <path
        d="M 100 96 L 36 108 L 36 156 L 100 162 Z"
        fill="var(--accent-glow)"
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* book — right page */}
      <path
        d="M 100 96 L 164 108 L 164 156 L 100 162 Z"
        fill="var(--accent-glow)"
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* spine shadow */}
      <line
        x1="100"
        y1="96"
        x2="100"
        y2="162"
        stroke="var(--accent)"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />

      {/* text lines */}
      <g stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.45" strokeLinecap="round">
        <line x1="48" y1="120" x2="92" y2="118" />
        <line x1="48" y1="128" x2="88" y2="126" />
        <line x1="48" y1="136" x2="92" y2="134" />
        <line x1="48" y1="144" x2="84" y2="142" />
        <line x1="108" y1="118" x2="152" y2="120" />
        <line x1="112" y1="126" x2="152" y2="128" />
        <line x1="108" y1="134" x2="152" y2="136" />
        <line x1="116" y1="142" x2="152" y2="144" />
      </g>

      {/* small spark — inspiration rising */}
      <g stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round">
        <line x1="100" y1="38" x2="100" y2="48" strokeOpacity="0.55" />
        <line x1="92" y1="44" x2="108" y2="44" strokeOpacity="0.4" />
        <line x1="86" y1="36" x2="92" y2="40" strokeOpacity="0.35" />
        <line x1="114" y1="36" x2="108" y2="40" strokeOpacity="0.35" />
      </g>
      <circle cx="100" cy="44" r="2.5" fill="var(--accent)" opacity="0.8" />
    </svg>
  );
}
