import type { IllustrationProps } from "./types";

export function Breath({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Дыхание"
    >
      <defs>
        <radialGradient id="breathGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent-soft)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="90" fill="url(#breathGlow)" />

      {/* breathing rings */}
      <g fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1">
        <circle className="breathe" cx="100" cy="100" r="56" />
        <circle cx="100" cy="100" r="40" strokeOpacity="0.3" />
        <circle cx="100" cy="100" r="24" strokeOpacity="0.2" />
      </g>

      {/* central glow */}
      <circle cx="100" cy="100" r="10" fill="var(--accent)" fillOpacity="0.85" />

      {/* directional flow arcs */}
      <g
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <path d="M100 36 Q108 50 100 64" />
        <path d="M100 136 Q108 150 100 164" />
        <path d="M36 100 Q50 108 64 100" />
        <path d="M136 100 Q150 108 164 100" />
      </g>

      {/* dots */}
      <g fill="var(--accent)" fillOpacity="0.6">
        <circle cx="100" cy="32" r="2" />
        <circle cx="100" cy="168" r="2" />
        <circle cx="32" cy="100" r="2" />
        <circle cx="168" cy="100" r="2" />
      </g>
    </svg>
  );
}
