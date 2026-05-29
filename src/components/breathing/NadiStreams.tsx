import type { IllustrationProps } from "../../illustrations/types";

// Нади Шодхана: два потока (ида/пингала), чередующиеся вдох-выдох.
// Цикл 16 секунд: вдох-лево (4), выдох-право (4), вдох-право (4), выдох-лево (4).
export function NadiStreams({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Нади Шодхана — попеременное дыхание"
    >
      <defs>
        <radialGradient id="nadiHalo" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
        <path id="nadiLeft" d="M100,100 C80,80 60,60 60,40" fill="none" />
        <path id="nadiRight" d="M100,100 C120,80 140,60 140,40" fill="none" />
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#nadiHalo)" />

      {/* Static channel outlines */}
      <g fill="none" stroke="var(--accent)" strokeOpacity="0.25" strokeWidth="1.4" strokeLinecap="round">
        <path d="M100,100 C80,80 60,60 60,40" />
        <path d="M100,100 C120,80 140,60 140,40" />
      </g>

      {/* Nostril dots */}
      <circle cx="60" cy="40" r="3.5" fill="var(--accent)" fillOpacity="0.4" />
      <circle cx="140" cy="40" r="3.5" fill="var(--accent)" fillOpacity="0.4" />

      {/* Left stream — animated thickness */}
      <path
        d="M100,100 C80,80 60,60 60,40"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity="0"
      >
        <animate attributeName="stroke-opacity" values="0;0.9;0.9;0;0;0;0.9;0.9;0" dur="16s" keyTimes="0;0.06;0.22;0.26;0.5;0.74;0.78;0.94;1" repeatCount="indefinite" />
      </path>

      {/* Right stream — animated thickness */}
      <path
        d="M100,100 C120,80 140,60 140,40"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity="0"
      >
        <animate attributeName="stroke-opacity" values="0;0;0;0.9;0.9;0;0;0;0" dur="16s" keyTimes="0;0.22;0.28;0.34;0.5;0.56;0.74;1;1" repeatCount="indefinite" />
      </path>

      {/* Travelling dot — inhale left (0-4s) */}
      <circle r="3.5" fill="var(--accent)" opacity="0">
        <animate attributeName="opacity" values="0;1;1;0;0" dur="16s" keyTimes="0;0.01;0.24;0.25;1" repeatCount="indefinite" />
        <animateMotion dur="16s" repeatCount="indefinite" keyTimes="0;0.25;1" keyPoints="0;1;1" calcMode="linear" begin="0s">
          <mpath href="#nadiLeft" />
        </animateMotion>
      </circle>

      {/* Travelling dot — exhale right (4-8s) */}
      <circle r="3.5" fill="var(--accent)" opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0;0" dur="16s" keyTimes="0;0.25;0.26;0.49;0.5;1" repeatCount="indefinite" />
        <animateMotion dur="16s" repeatCount="indefinite" keyTimes="0;0.25;0.5;1" keyPoints="1;1;0;0" calcMode="linear">
          <mpath href="#nadiRight" />
        </animateMotion>
      </circle>

      {/* Travelling dot — inhale right (8-12s) */}
      <circle r="3.5" fill="var(--accent)" opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0;0" dur="16s" keyTimes="0;0.5;0.51;0.74;0.75;1" repeatCount="indefinite" />
        <animateMotion dur="16s" repeatCount="indefinite" keyTimes="0;0.5;0.75;1" keyPoints="0;0;1;1" calcMode="linear">
          <mpath href="#nadiRight" />
        </animateMotion>
      </circle>

      {/* Travelling dot — exhale left (12-16s) */}
      <circle r="3.5" fill="var(--accent)" opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" dur="16s" keyTimes="0;0.75;0.76;0.99;1" repeatCount="indefinite" />
        <animateMotion dur="16s" repeatCount="indefinite" keyTimes="0;0.75;1" keyPoints="1;1;0" calcMode="linear">
          <mpath href="#nadiLeft" />
        </animateMotion>
      </circle>

      {/* Central pivot */}
      <circle cx="100" cy="100" r="4" fill="var(--accent)" />

      {/* Body line — torso suggestion */}
      <path d="M70,170 L100,100 L130,170" fill="none" stroke="var(--accent)" strokeOpacity="0.15" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
