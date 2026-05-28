import { useEffect, type CSSProperties, type ReactNode } from "react";
import type { Theme } from "../data/sections";
import { NEUTRAL_THEME } from "../data/sections";

type Props = {
  theme?: Theme;
  children: ReactNode;
};

export function ThemedRoot({ theme, children }: Props) {
  const t = theme ?? NEUTRAL_THEME;

  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = t.accentTint;
    return () => {
      document.body.style.background = prev;
    };
  }, [t.accentTint]);

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
