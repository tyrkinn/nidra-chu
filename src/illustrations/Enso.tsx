import type { IllustrationProps } from "./types";

export function Enso({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Энсо — дзенский круг"
    >
      <defs>
        <radialGradient id="ensoHalo" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#ensoHalo)" />

      {/* enso — imperfect brush circle, deliberately not closed */}
      <path
        d="M 108 32 C 146 36 168 64 168 100 C 168 140 138 168 100 168 C 60 168 32 142 32 100 C 32 62 58 36 95 32"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.92"
      />

      {/* small ink dot where brush started */}
      <circle cx="108" cy="32" r="3.6" fill="var(--accent)" opacity="0.92" />

      {/* a faint inner echo, suggesting depth */}
      <path
        d="M 110 36 C 142 40 162 66 162 100 C 162 138 134 162 100 162"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.18"
        strokeLinecap="round"
      />
    </svg>
  );
}
