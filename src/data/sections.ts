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

export type Section = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  illustration: IllustrationKind;
  sessionIds: string[];
  comingSoon?: boolean;
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
  },
  {
    id: "yoga",
    title: "Йога",
    tagline: "Тело и дыхание",
    description:
      "Короткие комплексы и отдельные асаны: пробуждение, мягкая растяжка для спины, баланс и заземление.",
    illustration: "asana",
    sessionIds: ids(yoga),
  },
  {
    id: "meditation",
    title: "Медитации",
    tagline: "Внимание и присутствие",
    description:
      "Сидячие практики: наблюдение дыхания, сканирование ощущений, открытое присутствие.",
    illustration: "meditation",
    sessionIds: ids(meditation),
  },
  {
    id: "pranayama",
    title: "Пранаяма",
    tagline: "Работа с дыханием",
    description:
      "Дыхательные практики для разных состояний: концентрация, баланс, успокоение перед сном.",
    illustration: "breath",
    sessionIds: ids(pranayama),
  },
  {
    id: "sadhu",
    title: "Доска садху",
    tagline: "Стояние на гвоздях",
    description:
      "Протоколы стояния разной длительности, дыхательные опоры и работа с ощущениями.",
    illustration: "sadhuBoard",
    sessionIds: ids(sadhu),
  },
  {
    id: "metta",
    title: "Метта-бхавана",
    tagline: "Любящая доброта",
    description:
      "Развитие сострадания к себе, близким, нейтральным, трудным и ко всем существам.",
    illustration: "sankalpa",
    sessionIds: ids(metta),
  },
  {
    id: "dharana",
    title: "Дхарана",
    tagline: "Концентрация",
    description:
      "Тратака на пламя и концентрация на точке между бровей — практики однонаправленного внимания.",
    illustration: "flame",
    sessionIds: ids(dharana),
  },
  {
    id: "walking",
    title: "Прогулки",
    tagline: "Осознанная ходьба",
    description:
      "Кинхин, упражнение 5-4-3-2-1 и шинрин-йоку — техники возвращения в настоящее через движение.",
    illustration: "path",
    sessionIds: ids(walking),
  },
  {
    id: "qigong",
    title: "Цигун и тайцзи",
    tagline: "Поток энергии",
    description:
      "Мягкие двигательные комплексы: восемь кусков парчи и статическое стояние столбом.",
    illustration: "qigong",
    sessionIds: ids(qigong),
  },
  {
    id: "satsang",
    title: "Сатсанг и тексты",
    tagline: "Чтение и созерцание",
    description:
      "Короткие фрагменты Йога-сутр, Дао Дэ Цзин и Аштавакра Гиты для размышления и тишины.",
    illustration: "scroll",
    sessionIds: ids(satsang),
  },
  {
    id: "sleep",
    title: "Сон и подготовка ко сну",
    tagline: "Вечерние ритуалы",
    description:
      "Вечерний скан и полный ритуал засыпания: дыхание, расслабление, благодарность и тишина.",
    illustration: "moon",
    sessionIds: ids(sleep),
  },
];

export const getSection = (id: string) => SECTIONS.find((s) => s.id === id);

export const getSectionForSession = (sessionId: string) =>
  SECTIONS.find((s) => s.sessionIds.includes(sessionId));
