import { Lotus } from "./Lotus";
import { Shavasana } from "./Shavasana";
import { Breath } from "./Breath";
import { BodyScan } from "./BodyScan";
import { Sankalpa } from "./Sankalpa";
import { Visualization } from "./Visualization";
import { Moon } from "./Moon";
import { Awakening } from "./Awakening";
import { Meditation } from "./Meditation";
import { Asana } from "./Asana";
import { SadhuBoard } from "./SadhuBoard";
import type { IllustrationKind, IllustrationProps } from "./types";

const MAP = {
  lotus: Lotus,
  shavasana: Shavasana,
  breath: Breath,
  bodyScan: BodyScan,
  sankalpa: Sankalpa,
  visualization: Visualization,
  moon: Moon,
  awakening: Awakening,
  meditation: Meditation,
  asana: Asana,
  sadhuBoard: SadhuBoard,
} as const;

export function Illustration({
  kind,
  ...rest
}: { kind: IllustrationKind } & IllustrationProps) {
  const Cmp = MAP[kind];
  return <Cmp {...rest} />;
}

export type { IllustrationKind };
