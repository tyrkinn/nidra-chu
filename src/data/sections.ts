import type { IllustrationKind } from "../illustrations";
import { SESSIONS } from "./sessions";

export type Section = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  illustration: IllustrationKind;
  sessionIds: string[];
  comingSoon?: boolean;
};

export const SECTIONS: Section[] = [
  {
    id: "nidra",
    title: "Йога-нидра",
    tagline: "Глубокое расслабление",
    description:
      "Ведомые практики йога-нидры разной длительности — от короткой паузы до полного цикла перед сном.",
    illustration: "moon",
    sessionIds: SESSIONS.map((s) => s.id),
  },
  {
    id: "yoga",
    title: "Йога",
    tagline: "Тело и дыхание",
    description:
      "Короткие комплексы и отдельные асаны: пробуждение, мягкая растяжка, баланс, восстановление спины.",
    illustration: "asana",
    sessionIds: [],
    comingSoon: true,
  },
  {
    id: "meditation",
    title: "Медитации",
    tagline: "Внимание и присутствие",
    description:
      "Сидячие практики: наблюдение дыхания, метта, осознание мыслей, концентрация на образе.",
    illustration: "meditation",
    sessionIds: [],
    comingSoon: true,
  },
  {
    id: "sadhu",
    title: "Доска садху",
    tagline: "Стояние на гвоздях",
    description:
      "Подготовка, протоколы стояния по времени, дыхательные опоры и техники работы с ощущениями.",
    illustration: "sadhuBoard",
    sessionIds: [],
    comingSoon: true,
  },
];

export const getSection = (id: string) => SECTIONS.find((s) => s.id === id);
