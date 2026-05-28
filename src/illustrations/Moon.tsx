import type { IllustrationProps } from "./types";

export function Moon({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Ночное небо"
    >
      <defs>
        <radialGradient id="nightSky" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-glow)" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#nightSky)" />

      {/* glow around moon */}
      <circle cx="118" cy="86" r="58" fill="url(#moonGlow)" opacity="0.7" />

      {/* crescent moon */}
      <path
        d="M118 50 a36 36 0 1 0 0 72 a28 28 0 1 1 0 -72 Z"
        fill="var(--accent-glow)"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="0.6"
      />

      {/* stars */}
      <g fill="currentColor">
        <circle cx="36" cy="52" r="1.5" opacity="0.7" />
        <circle cx="60" cy="36" r="1" opacity="0.5" />
        <circle cx="76" cy="68" r="1.4" opacity="0.6" />
        <circle cx="42" cy="100" r="1" opacity="0.5" />
        <circle cx="160" cy="140" r="1.4" opacity="0.7" />
        <circle cx="40" cy="146" r="1.2" opacity="0.6" />
        <circle cx="92" cy="160" r="1" opacity="0.5" />
        <circle cx="170" cy="60" r="1.2" opacity="0.55" />
      </g>

      {/* small twinkle */}
      <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8" strokeLinecap="round">
        <path d="M168 96 v8 M164 100 h8" />
        <path d="M30 130 v6 M27 133 h6" />
      </g>
    </svg>
  );
}
