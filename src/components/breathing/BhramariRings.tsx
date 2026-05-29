import type { IllustrationProps } from "../../illustrations/types";

// Бхрамари: концентрические кольца резонанса.
// 4 кольца расходятся со сдвигом, как от удара колокола.
export function BhramariRings({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Бхрамари — гудение и резонанс"
    >
      <defs>
        <radialGradient id="bhramHalo" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="92" fill="url(#bhramHalo)" />

      {/* Emanating rings via SMIL — animate r and stroke-opacity */}
      {[0, 1.5, 3, 4.5].map((delay, i) => (
        <circle key={i} cx="100" cy="100" fill="none" stroke="var(--accent)" strokeWidth="1.4">
          <animate attributeName="r" from="6" to="86" dur="6s" begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" from="0.9" to="0" dur="6s" begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Soft inner pulse (the "humming") */}
      <circle cx="100" cy="100" r="14" fill="var(--accent)" fillOpacity="0.18">
        <animate attributeName="r" values="14;20;14" dur="3s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.15;0.35;0.15" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Central source */}
      <circle cx="100" cy="100" r="6" fill="var(--accent)" />
      <circle cx="100" cy="100" r="2.5" fill="var(--accent-glow)" />

      {/* Subtle bee-like dots orbiting (nod to "bhramara" = bee) */}
      <g fill="var(--accent)" fillOpacity="0.5">
        <circle cx="100" cy="100" r="1.6">
          <animateMotion dur="9s" repeatCount="indefinite">
            <mpath href="#bhramOrbit" />
          </animateMotion>
        </circle>
      </g>
      <path id="bhramOrbit" d="M100,72 A28,28 0 1,1 99.99,72 Z" fill="none" />
    </svg>
  );
}
