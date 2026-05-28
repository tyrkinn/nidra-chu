import type { IllustrationProps } from "./types";

export function BodyScan({ size = "100%", className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Сканирование тела"
    >
      <defs>
        <linearGradient id="scanRay" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7a6c9b" stopOpacity="0" />
          <stop offset="50%" stopColor="#c7a09e" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7a6c9b" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="scanHalo" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#f5e9d8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f5e9d8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="80" fill="url(#scanHalo)" />

      {/* figure outline */}
      <g
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.75"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="100" cy="40" r="11" />
        {/* shoulders to feet */}
        <path d="M88 56 Q86 70 84 90 L82 130 Q82 150 88 168" />
        <path d="M112 56 Q114 70 116 90 L118 130 Q118 150 112 168" />
        {/* arms */}
        <path d="M88 60 Q70 80 72 110" />
        <path d="M112 60 Q130 80 128 110" />
        {/* waist */}
        <path d="M84 90 L116 90" strokeOpacity="0.4" />
      </g>

      {/* scanning ray */}
      <rect x="40" y="96" width="120" height="8" fill="url(#scanRay)" rx="4" />
      <g fill="#7a6c9b" fillOpacity="0.7">
        <circle cx="100" cy="100" r="2.5" />
      </g>

      {/* chakra-like markers */}
      <g fill="#c7a09e" fillOpacity="0.8">
        <circle cx="100" cy="60" r="2" />
        <circle cx="100" cy="80" r="2" />
        <circle cx="100" cy="120" r="2" />
        <circle cx="100" cy="140" r="2" />
      </g>
    </svg>
  );
}
