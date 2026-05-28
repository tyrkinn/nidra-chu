import type { IllustrationProps } from "./types";

export function Scroll({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Свиток — священные тексты"
    >
      <defs>
        <radialGradient id="scrollHalo" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="parchment" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-glow)" />
          <stop offset="100%" stopColor="var(--accent-soft)" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="110" r="80" fill="url(#scrollHalo)" />

      {/* top rod */}
      <rect x="42" y="56" width="116" height="10" rx="5" fill="var(--accent)" fillOpacity="0.7" />
      <circle cx="42" cy="61" r="6" fill="var(--accent-soft)" fillOpacity="0.8" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
      <circle cx="158" cy="61" r="6" fill="var(--accent-soft)" fillOpacity="0.8" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />

      {/* parchment body */}
      <path
        d="M50 66 L150 66 L150 142 Q100 152 50 142 Z"
        fill="url(#parchment)"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />

      {/* text lines */}
      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round">
        <line x1="62" y1="82" x2="138" y2="82" />
        <line x1="62" y1="94" x2="130" y2="94" />
        <line x1="62" y1="106" x2="136" y2="106" />
        <line x1="62" y1="118" x2="124" y2="118" />
        <line x1="62" y1="130" x2="132" y2="130" />
      </g>

      {/* center symbol — Om-like circle */}
      <circle cx="100" cy="156" r="8" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2" />
      <circle cx="100" cy="156" r="2" fill="var(--accent)" />
    </svg>
  );
}
