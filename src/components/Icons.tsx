type Props = { size?: number; className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const PrevIcon = ({ size = 20, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className} aria-hidden="true">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

export const NextIcon = ({ size = 20, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className} aria-hidden="true">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const PlayIcon = ({ size = 20, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5z" />
  </svg>
);

export const PauseIcon = ({ size = 20, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <rect x="6" y="5" width="4" height="14" rx="1.4" />
    <rect x="14" y="5" width="4" height="14" rx="1.4" />
  </svg>
);

export const BackIcon = ({ size = 18, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className} aria-hidden="true">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);
