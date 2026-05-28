import type { IllustrationProps } from "./types";

export function Awakening({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Пробуждение"
    >
      <defs>
        <radialGradient id="dawn" cx="50%" cy="78%" r="60%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.95" />
          <stop offset="60%" stopColor="var(--accent-soft)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#dawn)" />

      {/* horizon */}
      <line x1="22" y1="138" x2="178" y2="138" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />

      {/* rising sun */}
      <path
        d="M60 138 A40 40 0 0 1 140 138 Z"
        fill="var(--accent-glow)"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="0.8"
      />

      {/* rays */}
      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.2" strokeLinecap="round">
        <line x1="100" y1="36" x2="100" y2="58" />
        <line x1="56" y1="56" x2="68" y2="72" />
        <line x1="144" y1="56" x2="132" y2="72" />
        <line x1="32" y1="100" x2="50" y2="106" />
        <line x1="168" y1="100" x2="150" y2="106" />
      </g>

      {/* mountains silhouette */}
      <g fill="currentColor" fillOpacity="0.35">
        <path d="M22 138 L52 116 L78 138 Z" />
        <path d="M122 138 L150 110 L178 138 Z" />
      </g>

      {/* small bird */}
      <path
        d="M64 76 q5 -3 9 0 q4 -3 9 0"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
