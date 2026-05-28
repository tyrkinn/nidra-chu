import type { CSSProperties, ReactNode } from "react";
import type { Theme } from "../data/sections";
import { NEUTRAL_THEME } from "../data/sections";

type Props = {
  theme?: Theme;
  children: ReactNode;
};

export function ThemedRoot({ theme, children }: Props) {
  const t = theme ?? NEUTRAL_THEME;
  const style = {
    "--accent": t.accent,
    "--accent-soft": t.accentSoft,
    "--accent-tint": t.accentTint,
    "--accent-glow": t.accentGlow,
  } as CSSProperties;

  return (
    <div className="themed" style={style}>
      {children}
    </div>
  );
}
