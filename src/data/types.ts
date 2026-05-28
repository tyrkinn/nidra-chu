import type { IllustrationKind } from "../illustrations";

export type Stage = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  illustration: IllustrationKind;
  durationSec: number;
};

export type Session = {
  id: string;
  title: string;
  subtitle: string;
  hero: IllustrationKind;
  stages: Stage[];
};

export const totalSeconds = (s: Session) =>
  s.stages.reduce((sum, st) => sum + st.durationSec, 0);

export const totalMinutes = (s: Session) => Math.round(totalSeconds(s) / 60);

export const totalLabel = (s: Session) => `${totalMinutes(s)} мин`;
