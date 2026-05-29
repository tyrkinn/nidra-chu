import type { IllustrationProps } from "../../illustrations/types";

// Уджайи: дыхание «звука океана». Горизонтальная волна, медленно качающаяся
// в ритме вдох-выдох (10 секунд цикл).
export function OceanUjjayi({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Уджайи — звук океана"
    >
      <defs>
        <radialGradient id="oceanHalo" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="oceanWater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#oceanHalo)" />

      {/* Horizon */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1" />

      {/* Three parallel wave bands that rise and fall in alternation */}
      <g fill="none" stroke="var(--accent)" strokeLinecap="round">
        {/* Top wave — moves up on inhale */}
        <path
          d="M-40,100 Q-10,80 20,100 T80,100 T140,100 T200,100 T260,100"
          strokeWidth="2"
          strokeOpacity="0.85"
        >
          <animate
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="0,18; 0,-12; 0,18"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>

        {/* Middle wave */}
        <path
          d="M-40,108 Q-10,92 20,108 T80,108 T140,108 T200,108 T260,108"
          strokeWidth="1.4"
          strokeOpacity="0.55"
        >
          <animate
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="-30,14; -30,-8; -30,14"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>

        {/* Bottom wave */}
        <path
          d="M-40,116 Q-10,104 20,116 T80,116 T140,116 T200,116 T260,116"
          strokeWidth="1"
          strokeOpacity="0.35"
        >
          <animate
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="-60,10; -60,-4; -60,10"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Slow horizontal drift on the whole wave system */}
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          values="0,0; -40,0; 0,0"
          dur="20s"
          repeatCount="indefinite"
        />
      </g>

      {/* Sun-moon disc on horizon */}
      <circle cx="100" cy="100" r="10" fill="var(--accent-glow)" />
      <circle cx="100" cy="100" r="3" fill="var(--accent)" fillOpacity="0.6" />

      {/* Phase markers */}
      <g fill="var(--ink-muted)" fontSize="9" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.16em" textAnchor="middle" style={{ textTransform: "uppercase" }}>
        <text x="100" y="36">вдох ↑</text>
        <text x="100" y="170">↓ выдох</text>
      </g>
    </svg>
  );
}
