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
  totalLabel: string;
  stages: Stage[];
};

const totalMinutes = (stages: Stage[]) =>
  Math.round(stages.reduce((sum, s) => sum + s.durationSec, 0) / 60);

const shortStages: Stage[] = [
  {
    id: "settle",
    eyebrow: "Шаг 1",
    title: "Устройтесь удобно",
    body: "Лягте на спину в позу шавасана. Руки слегка в стороны, ладони вверх, ноги расслаблены. Сделайте три неторопливых выдоха и закройте глаза.",
    illustration: "shavasana",
    durationSec: 90,
  },
  {
    id: "breath",
    eyebrow: "Шаг 2",
    title: "Поток дыхания",
    body: "Наблюдайте за естественным дыханием. Не меняйте его — просто отмечайте мягкое движение воздуха в ноздрях и расширение живота.",
    illustration: "breath",
    durationSec: 120,
  },
  {
    id: "scan",
    eyebrow: "Шаг 3",
    title: "Сканирование тела",
    body: "Медленно перенесите внимание от макушки головы вниз — лицо, плечи, грудь, живот, бёдра, стопы. На каждой части задержитесь на пару вдохов.",
    illustration: "bodyScan",
    durationSec: 240,
  },
  {
    id: "stillness",
    eyebrow: "Шаг 4",
    title: "Тишина и покой",
    body: "Позвольте телу стать тяжёлым и неподвижным. Мысли пусть приходят и уходят, как облака. Вы — наблюдатель, спокойный и ясный.",
    illustration: "moon",
    durationSec: 120,
  },
  {
    id: "return",
    eyebrow: "Шаг 5",
    title: "Мягкое возвращение",
    body: "Постепенно ощутите ладони и стопы. Сделайте несколько глубоких вдохов, потянитесь и медленно откройте глаза.",
    illustration: "awakening",
    durationSec: 60,
  },
];

const classicStages: Stage[] = [
  {
    id: "settle",
    eyebrow: "Подготовка",
    title: "Поза шавасана",
    body: "Лягте на спину, ноги слегка разведены, руки вдоль тела ладонями вверх. Подложите при необходимости подушку под колени. Закройте глаза.",
    illustration: "shavasana",
    durationSec: 120,
  },
  {
    id: "sankalpa",
    eyebrow: "Санкальпа",
    title: "Намерение",
    body: "Сформулируйте короткую позитивную фразу в настоящем времени — ваше намерение для практики. Повторите её три раза мысленно, с ясностью и без сомнений.",
    illustration: "sankalpa",
    durationSec: 120,
  },
  {
    id: "breath",
    eyebrow: "Пранаяма",
    title: "Осознанное дыхание",
    body: "Считайте дыхание в обратном порядке: вдох — 27, выдох — 27, вдох — 26, выдох — 26… Если потеряли счёт, мягко начните сначала с 27.",
    illustration: "breath",
    durationSec: 240,
  },
  {
    id: "scan",
    eyebrow: "Ньяса",
    title: "Ротация сознания",
    body: "Переносите внимание по точкам тела: правый большой палец, кисть, локоть, плечо… Затем левая сторона, спина, ноги, лицо. Просто называйте часть мысленно.",
    illustration: "bodyScan",
    durationSec: 420,
  },
  {
    id: "opposites",
    eyebrow: "Чувствование",
    title: "Пары противоположностей",
    body: "Почувствуйте тяжесть тела — затем лёгкость. Тепло — затем прохладу. Не оценивайте, просто наблюдайте, как ощущения сменяют друг друга.",
    illustration: "moon",
    durationSec: 180,
  },
  {
    id: "visual",
    eyebrow: "Визуализация",
    title: "Внутренний образ",
    body: "Представьте спокойное место: рассвет над горами, тихий лес, мягкий свет звёзд. Удерживайте картину без усилий — пусть она сама раскрывается.",
    illustration: "visualization",
    durationSec: 240,
  },
  {
    id: "sankalpa-repeat",
    eyebrow: "Санкальпа",
    title: "Повторение намерения",
    body: "Вернитесь к фразе намерения. Произнесите её мысленно ещё три раза — теперь она ложится в глубокий и ясный ум.",
    illustration: "sankalpa",
    durationSec: 90,
  },
  {
    id: "return",
    eyebrow: "Возвращение",
    title: "Пробуждение",
    body: "Ощутите контакт тела с поверхностью, услышьте звуки вокруг. Пошевелите пальцами, потянитесь, повернитесь на правый бок и медленно сядьте.",
    illustration: "awakening",
    durationSec: 90,
  },
];

const deepStages: Stage[] = [
  ...classicStages.map((s) => ({ ...s })),
];
// extend the deep practice a bit
deepStages[3] = { ...deepStages[3], durationSec: 600 }; // ротация
deepStages[5] = { ...deepStages[5], durationSec: 420 }; // визуализация
deepStages.splice(6, 0, {
  id: "silence",
  eyebrow: "Турия",
  title: "Глубокая тишина",
  body: "Позвольте уму остановиться. Нет образов, нет слов — только присутствие. Если возникает мысль, мягко возвращайтесь к ощущению пространства внутри.",
  illustration: "lotus",
  durationSec: 300,
});

export const SESSIONS: Session[] = [
  {
    id: "quick",
    title: "Короткая нидра",
    subtitle: "Быстрая перезагрузка в середине дня",
    hero: "lotus",
    totalLabel: `${totalMinutes(shortStages)} мин`,
    stages: shortStages,
  },
  {
    id: "classic",
    title: "Классическая нидра",
    subtitle: "Полная практика для глубокого расслабления",
    hero: "moon",
    totalLabel: `${totalMinutes(classicStages)} мин`,
    stages: classicStages,
  },
  {
    id: "deep",
    title: "Глубокая нидра",
    subtitle: "Расширенная практика перед сном",
    hero: "shavasana",
    totalLabel: `${totalMinutes(deepStages)} мин`,
    stages: deepStages,
  },
];

export const getSession = (id: string) => SESSIONS.find((s) => s.id === id);
