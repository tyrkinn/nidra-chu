import type { IllustrationProps } from "../../illustrations/types";

// Квадратное дыхание 4-4-4-4. Точка проходит контур квадрата за 16 секунд.
export function BoxBreath({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Квадратное дыхание — визуализация"
    >
      <defs>
        <radialGradient id="boxHalo" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
        <filter id="boxDotGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <path id="boxPath" d="M50,50 L150,50 L150,150 L50,150 Z" fill="none" />
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#boxHalo)" />

      {/* Square frame */}
      <rect
        x="50"
        y="50"
        width="100"
        height="100"
        rx="6"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.3"
        strokeOpacity="0.4"
      />

      {/* Corner markers */}
      <g fill="var(--accent)">
        <circle cx="50" cy="50" r="2.6">
          <animate attributeName="r" values="2.6;4.5;2.6" dur="16s" keyTimes="0;0.02;0.08" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="50" r="2.6">
          <animate attributeName="r" values="2.6;4.5;2.6" dur="16s" keyTimes="0.23;0.27;0.33" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="150" r="2.6">
          <animate attributeName="r" values="2.6;4.5;2.6" dur="16s" keyTimes="0.48;0.52;0.58" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="150" r="2.6">
          <animate attributeName="r" values="2.6;4.5;2.6" dur="16s" keyTimes="0.73;0.77;0.83" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Phase labels */}
      <g fill="var(--ink-muted)" fontSize="9" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.16em" textAnchor="middle" style={{ textTransform: "uppercase" }}>
        <text x="100" y="40">вдох</text>
        <text x="100" y="170">выдох</text>
      </g>
      <g fill="var(--ink-muted)" fontSize="9" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.16em" textAnchor="middle" style={{ textTransform: "uppercase" }}>
        <text x="172" y="103" transform="rotate(90 172 103)">задержка</text>
        <text x="28" y="103" transform="rotate(-90 28 103)">задержка</text>
      </g>

      {/* Glow trail */}
      <circle r="12" fill="var(--accent)" fillOpacity="0.18" filter="url(#boxDotGlow)">
        <animateMotion dur="16s" repeatCount="indefinite" calcMode="linear">
          <mpath href="#boxPath" />
        </animateMotion>
      </circle>

      {/* Main dot */}
      <circle r="4.5" fill="var(--accent)">
        <animateMotion dur="16s" repeatCount="indefinite" calcMode="linear">
          <mpath href="#boxPath" />
        </animateMotion>
      </circle>

      {/* Center count "anchor" */}
      <circle cx="100" cy="100" r="2.5" fill="var(--accent)" fillOpacity="0.5" />
    </svg>
  );
}
