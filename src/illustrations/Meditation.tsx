import type { IllustrationProps } from "./types";

export function Meditation({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Медитация — фигура в позе сидя"
    >
      <defs>
        <radialGradient id="medHalo" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="crown" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-glow)" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="90" fill="url(#medHalo)" />

      {/* aura rings */}
      <g fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1">
        <circle cx="100" cy="118" r="74" />
        <circle cx="100" cy="118" r="58" strokeOpacity="0.12" />
      </g>

      {/* crown light */}
      <circle cx="100" cy="50" r="20" fill="url(#crown)" />

      {/* head */}
      <circle cx="100" cy="68" r="12" fill="var(--accent-soft)" fillOpacity="0.7" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.8" />

      {/* torso */}
      <path
        d="M88 82 C82 100 80 116 86 132 L114 132 C120 116 118 100 112 82 Z"
        fill="var(--accent)"
        fillOpacity="0.45"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1"
      />

      {/* crossed legs - lotus base */}
      <path
        d="M60 152 C70 138 88 134 100 134 C112 134 130 138 140 152 C130 156 116 156 100 156 C84 156 70 156 60 152 Z"
        fill="var(--accent)"
        fillOpacity="0.55"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1"
      />

      {/* knees */}
      <circle cx="62" cy="148" r="6" fill="var(--accent)" fillOpacity="0.7" />
      <circle cx="138" cy="148" r="6" fill="var(--accent)" fillOpacity="0.7" />

      {/* hands / mudra */}
      <path
        d="M84 138 Q100 132 116 138"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="100" cy="138" r="2.4" fill="var(--accent-glow)" />

      {/* third eye dot */}
      <circle cx="100" cy="66" r="1.6" fill="var(--accent-glow)" />
    </svg>
  );
}
