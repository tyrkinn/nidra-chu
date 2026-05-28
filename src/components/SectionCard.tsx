import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Illustration } from "../illustrations";
import type { Section } from "../data/sections";

export function SectionCard({ section }: { section: Section }) {
  const meta = section.comingSoon
    ? "Скоро"
    : `${section.sessionIds.length} практик${pluralEnding(section.sessionIds.length)}`;

  const style = {
    "--accent": section.theme.accent,
    "--accent-soft": section.theme.accentSoft,
    "--accent-tint": section.theme.accentTint,
    "--accent-glow": section.theme.accentGlow,
  } as CSSProperties;

  return (
    <Link
      to={`/section/${section.id}`}
      className="section-tile"
      style={style}
      aria-label={`Раздел: ${section.title}`}
    >
      <div className="section-tile-art" aria-hidden="true">
        <Illustration kind={section.illustration} />
      </div>
      <div className="section-tile-body">
        <span className="eyebrow">{section.tagline}</span>
        <h3>{section.title}</h3>
        <span className="section-tile-meta">{meta}</span>
      </div>
    </Link>
  );
}

function pluralEnding(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "а";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "и";
  return "";
}
