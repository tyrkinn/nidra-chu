import type { IllustrationKind } from "../illustrations";
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

export type Theme = {
  accent: string;
  accentSoft: string;
  accentTint: string;
  accentGlow: string;
};

export type Section = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  illustration: IllustrationKind;
  sessionIds: string[];
  theme: Theme;
  comingSoon?: boolean;
};

export const NEUTRAL_THEME: Theme = {
  accent: "#5c5870",
  accentSoft: "#b3aec3",
  accentTint: "#f5f4f8",
  accentGlow: "#ffffff",
};

const ids = (xs: Session[]) => xs.map((s) => s.id);

export const SECTIONS: Section[] = [
  {
    id: "nidra",
    title: "Йога-нидра",
    tagline: "Глубокое расслабление",
    description:
      "Ведомые практики йога-нидры разной длительности — от короткой паузы до полного цикла перед сном.",
    illustration: "moon",
    sessionIds: ids(nidra),
    theme: { accent: "#8b87c9", accentSoft: "#c4c2e3", accentTint: "#f4f3fb", accentGlow: "#faf9fd" },
  },
  {
    id: "yoga",
    title: "Йога",
    tagline: "Тело и дыхание",
    description:
      "Короткие комплексы и отдельные асаны: пробуждение, мягкая растяжка для спины, баланс и заземление.",
    illustration: "asana",
    sessionIds: ids(yoga),
    theme: { accent: "#e8a187", accentSoft: "#f2c9b8", accentTint: "#fdf5f1", accentGlow: "#fefaf7" },
  },
  {
    id: "meditation",
    title: "Медитации",
    tagline: "Внимание и присутствие",
    description:
      "Сидячие практики: наблюдение дыхания, сканирование ощущений, открытое присутствие.",
    illustration: "meditation",
    sessionIds: ids(meditation),
    theme: { accent: "#95b9a7", accentSoft: "#c4dccf", accentTint: "#f4f8f6", accentGlow: "#f9fbfa" },
  },
  {
    id: "pranayama",
    title: "Пранаяма",
    tagline: "Работа с дыханием",
    description:
      "Дыхательные практики для разных состояний: концентрация, баланс, успокоение перед сном.",
    illustration: "breath",
    sessionIds: ids(pranayama),
    theme: { accent: "#9bc3cd", accentSoft: "#c8dee4", accentTint: "#f4f9fa", accentGlow: "#f9fcfd" },
  },
  {
    id: "sadhu",
    title: "Доска садху",
    tagline: "Стояние на гвоздях",
    description:
      "Протоколы стояния разной длительности, дыхательные опоры и работа с ощущениями.",
    illustration: "sadhuBoard",
    sessionIds: ids(sadhu),
    theme: { accent: "#d4a574", accentSoft: "#e5c9a8", accentTint: "#faf3e9", accentGlow: "#fcf8f0" },
  },
  {
    id: "metta",
    title: "Метта-бхавана",
    tagline: "Любящая доброта",
    description:
      "Развитие сострадания к себе, близким, нейтральным, трудным и ко всем существам.",
    illustration: "sankalpa",
    sessionIds: ids(metta),
    theme: { accent: "#e4a3b5", accentSoft: "#f0cad4", accentTint: "#fdf3f6", accentGlow: "#fef8fa" },
  },
  {
    id: "dharana",
    title: "Дхарана",
    tagline: "Концентрация",
    description:
      "Тратака на пламя и концентрация на точке между бровей — практики однонаправленного внимания.",
    illustration: "flame",
    sessionIds: ids(dharana),
    theme: { accent: "#e8a079", accentSoft: "#f2c8ae", accentTint: "#fdf4ee", accentGlow: "#fef9f4" },
  },
  {
    id: "walking",
    title: "Прогулки",
    tagline: "Осознанная ходьба",
    description:
      "Кинхин, упражнение 5-4-3-2-1 и шинрин-йоку — техники возвращения в настоящее через движение.",
    illustration: "path",
    sessionIds: ids(walking),
    theme: { accent: "#a3c4a8", accentSoft: "#cee0d1", accentTint: "#f5faf6", accentGlow: "#fafcfa" },
  },
  {
    id: "qigong",
    title: "Цигун и тайцзи",
    tagline: "Поток энергии",
    description:
      "Мягкие двигательные комплексы: восемь кусков парчи и статическое стояние столбом.",
    illustration: "qigong",
    sessionIds: ids(qigong),
    theme: { accent: "#93c7b8", accentSoft: "#c1dfd5", accentTint: "#f4f9f7", accentGlow: "#f9fcfb" },
  },
  {
    id: "satsang",
    title: "Сатсанг и тексты",
    tagline: "Чтение и созерцание",
    description:
      "Короткие фрагменты Йога-сутр, Дао Дэ Цзин и Аштавакра Гиты для размышления и тишины.",
    illustration: "scroll",
    sessionIds: ids(satsang),
    theme: { accent: "#c9a677", accentSoft: "#dec5a0", accentTint: "#faf4ea", accentGlow: "#fcf8f0" },
  },
  {
    id: "sleep",
    title: "Сон и подготовка ко сну",
    tagline: "Вечерние ритуалы",
    description:
      "Вечерний скан и полный ритуал засыпания: дыхание, расслабление, благодарность и тишина.",
    illustration: "moon",
    sessionIds: ids(sleep),
    theme: { accent: "#a09cd1", accentSoft: "#cdcbe5", accentTint: "#f5f4fb", accentGlow: "#faf9fd" },
  },
];

export const getSection = (id: string) => SECTIONS.find((s) => s.id === id);

export const getSectionForSession = (sessionId: string) =>
  SECTIONS.find((s) => s.sessionIds.includes(sessionId));
