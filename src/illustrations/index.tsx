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
import { Flame } from "./Flame";
import { Path } from "./Path";
import { Scroll } from "./Scroll";
import { Qigong } from "./Qigong";
import { Enso } from "./Enso";
import { Book } from "./Book";
import { BoxBreath } from "../components/breathing/BoxBreath";
import { NadiStreams } from "../components/breathing/NadiStreams";
import { Vessel478 } from "../components/breathing/Vessel478";
import { BhramariRings } from "../components/breathing/BhramariRings";
import { OceanUjjayi } from "../components/breathing/OceanUjjayi";
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
  flame: Flame,
  path: Path,
  scroll: Scroll,
  qigong: Qigong,
  enso: Enso,
  book: Book,
  boxBreath: BoxBreath,
  nadiStreams: NadiStreams,
  vessel478: Vessel478,
  bhramariRings: BhramariRings,
  oceanUjjayi: OceanUjjayi,
} as const;

export function Illustration({
  kind,
  ...rest
}: { kind: IllustrationKind } & IllustrationProps) {
  const Cmp = MAP[kind];
  return <Cmp {...rest} />;
}

export type { IllustrationKind };
