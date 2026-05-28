import { nidra } from "./practices/nidra";
import { yoga } from "./practices/yoga";
import { meditation } from "./practices/meditation";
import { sadhu } from "./practices/sadhu";
import { pranayama } from "./practices/pranayama";
import { sleep } from "./practices/sleep";
import { metta } from "./practices/metta";
import { satsang } from "./practices/satsang";
import { qigong } from "./practices/qigong";
import { dharana } from "./practices/dharana";
import { walking } from "./practices/walking";
import type { Session } from "./types";

export type { Stage, Session } from "./types";
export { totalLabel, totalMinutes, totalSeconds } from "./types";

export const SESSIONS: Session[] = [
  ...nidra,
  ...yoga,
  ...meditation,
  ...sadhu,
  ...pranayama,
  ...sleep,
  ...metta,
  ...satsang,
  ...qigong,
  ...dharana,
  ...walking,
];

export const getSession = (id: string) => SESSIONS.find((s) => s.id === id);
