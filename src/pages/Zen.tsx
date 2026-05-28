import { Link } from "react-router-dom";
import { Illustration } from "../illustrations";
import { ThemedRoot } from "../components/ThemedRoot";
import { BackIcon } from "../components/Icons";
import {
  BODHIDHARMA_FOUR,
  GLOSSARY,
  KOANS,
  LINEAGE,
  PRACTICES,
  ROADMAP,
  SCHOOLS,
  TEN_OX,
  TEXTS,
  ZEN_INTRO,
  ZEN_THEME,
} from "../data/zen";

const TOC = [
  { id: "about", label: "О дзен" },
  { id: "lineage", label: "Линия передачи" },
  { id: "four", label: "Четыре утверждения" },
  { id: "schools", label: "Школы" },
  { id: "practices", label: "Практики" },
  { id: "glossary", label: "Глоссарий" },
  { id: "roadmap", label: "Дорожная карта" },
  { id: "texts", label: "Тексты" },
  { id: "koans", label: "Коаны" },
  { id: "ox", label: "Десять быков" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Zen() {
  return (
    <ThemedRoot theme={ZEN_THEME}>
      <div className="container fade-in zen-page">
        <div className="session-top">
          <Link to="/" className="back-link"><BackIcon /> Назад</Link>
        </div>

        <header className="zen-hero">
          <div className="zen-hero-art" aria-hidden="true">
            <Illustration kind="enso" />
          </div>
          <div>
            <span className="eyebrow">Теория и практика</span>
            <h1>Дзен</h1>
            <p className="zen-hero-sub">
              Прямое указание на ум · видение природы · становление Буддой
            </p>
          </div>
        </header>

        <nav className="zen-toc" aria-label="Содержание">
          {TOC.map((t) => (
            <button key={t.id} type="button" onClick={() => scrollToSection(t.id)}>
              {t.label}
            </button>
          ))}
        </nav>

        <section id="about" className="zen-section">
          <h2>Что такое дзен</h2>
          <p>{ZEN_INTRO}</p>
          <p>
            Слово «дзен» (禅) — японское произношение китайского «чань», которое
            в свою очередь восходит к санскритскому «дхьяна» — медитативное
            сосредоточение. Школа называет себя по своему методу: всё начинается
            и заканчивается медитацией. Но «медитация» здесь — не вид деятельности,
            а сама природа ума, узнавшего себя.
          </p>
          <p>
            Дзен не предлагает веры. Он предлагает прямое исследование собственного
            опыта. Поэтому в нём так мало текстов — и так много молчания.
          </p>
        </section>

        <section id="lineage" className="zen-section">
          <h2>Линия передачи</h2>
          <p className="zen-section-lede">
            Дзен мыслит себя как непрерывную цепь «передачи лампы» — от Будды до
            ныне живущих мастеров. Ниже — главные узлы этой цепи.
          </p>
          <ol className="zen-lineage">
            {LINEAGE.map((n) => (
              <li key={n.name}>
                <span className="zen-lineage-era">{n.era}</span>
                <h3>{n.name}</h3>
                <p>{n.note}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="four" className="zen-section">
          <h2>Четыре утверждения Бодхидхармы</h2>
          <p className="zen-section-lede">
            Сжатая формула, в которой дзен описывает сам себя. Эти четыре строки
            висят в каждом дзенском монастыре.
          </p>
          <div className="zen-four-grid">
            {BODHIDHARMA_FOUR.map((s) => (
              <article key={s.cjk} className="zen-four">
                <div className="zen-four-cjk">{s.cjk}</div>
                <div className="zen-four-romaji">{s.romaji}</div>
                <h3>{s.ru}</h3>
                <p>{s.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="schools" className="zen-section">
          <h2>Школы</h2>
          <p className="zen-section-lede">
            Три живые школы японского дзен. Все идут к одному, но через разные двери.
          </p>
          <div className="zen-schools">
            {SCHOOLS.map((s) => (
              <article key={s.name} className="zen-school">
                <h3>{s.name}</h3>
                <dl>
                  <dt>Откуда</dt>
                  <dd>{s.origin}</dd>
                  <dt>Акцент</dt>
                  <dd>{s.emphasis}</dd>
                  <dt>Метод</dt>
                  <dd>{s.method}</dd>
                  <dt>Ощущение</dt>
                  <dd>{s.feels}</dd>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="practices" className="zen-section">
          <h2>Практики</h2>
          <p className="zen-section-lede">
            Восемь практик, из которых соткана повседневность дзенского монаха.
            Все они доступны и мирянину.
          </p>
          <div className="zen-practices">
            {PRACTICES.map((p) => (
              <article key={p.name} className="zen-practice">
                <h3>{p.name}</h3>
                <span className="zen-practice-meaning">{p.meaning}</span>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="glossary" className="zen-section">
          <h2>Глоссарий</h2>
          <p className="zen-section-lede">
            Тридцать ключевых терминов, без которых литература о дзен останется
            закрытой. Слова и иероглифы — японские; рядом — латинская транскрипция
            и значение.
          </p>
          {GLOSSARY.map((g) => (
            <div key={g.group} className="zen-glossary-group">
              <h3 className="zen-glossary-h">{g.group}</h3>
              <div className="zen-term-grid">
                {g.terms.map((t) => (
                  <article key={t.romaji} className="zen-term">
                    <div className="zen-term-head">
                      {t.cjk && <span className="zen-term-cjk">{t.cjk}</span>}
                      <span className="zen-term-romaji">{t.romaji}</span>
                    </div>
                    <div className="zen-term-ru">{t.ru}</div>
                    <p>{t.note}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="roadmap" className="zen-section">
          <h2>Дорожная карта</h2>
          <p className="zen-section-lede">
            Восемь этапов, через которые обычно проходит практикующий — от первой
            книги до растворения практики в обычной жизни. Это не предписание, а
            ориентир. Карта — не территория.
          </p>
          <ol className="zen-roadmap">
            {ROADMAP.map((s) => (
              <li key={s.index} className="zen-roadmap-step">
                <span className="zen-roadmap-num">{s.index}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="texts" className="zen-section">
          <h2>Тексты</h2>
          <p className="zen-section-lede">
            Одиннадцать оснований — от ранних китайских патриархов до Сюнрю Судзуки.
            Каждый текст открывается коротким описанием; «Читать отрывок» раскрывает
            фрагмент.
          </p>
          <div className="zen-texts">
            {TEXTS.map((t) => (
              <article key={t.title} className="zen-text">
                <header>
                  <h3>{t.title}</h3>
                  <span className="zen-text-meta">
                    {t.author} · {t.era}
                  </span>
                </header>
                <p className="zen-text-desc">{t.description}</p>
                <details className="zen-text-disclosure">
                  <summary>Читать отрывок</summary>
                  <blockquote>
                    {t.excerpt.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </blockquote>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section id="koans" className="zen-section">
          <h2>Знаменитые коаны</h2>
          <p className="zen-section-lede">
            Пять классических коанов с подсказками. Подсказка — не разгадка. Она
            не должна снимать парадокс, а сохранять его до момента, когда он
            раскроется сам.
          </p>
          <div className="zen-koans">
            {KOANS.map((k) => (
              <article key={k.title} className="zen-koan">
                <header>
                  <h3>{k.title}</h3>
                  <span className="zen-koan-source">{k.source}</span>
                </header>
                <blockquote>{k.text}</blockquote>
                <details className="zen-text-disclosure">
                  <summary>Подсказка</summary>
                  <p className="zen-koan-hint">{k.hint}</p>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section id="ox" className="zen-section">
          <h2>Десять быков</h2>
          <p className="zen-section-lede">
            Серия из десяти картин и стихов мастера Какуана (XII в.). Бык — символ
            изначальной природы. Десять стадий — карта пути от смутного желания до
            возвращения в мир.
          </p>
          <ol className="zen-ox">
            {TEN_OX.map((o) => (
              <li key={o.num} className="zen-ox-stage">
                <div className="zen-ox-num">{o.num}</div>
                <div className="zen-ox-cjk">{o.cjk}</div>
                <div className="zen-ox-body">
                  <h3>{o.ru}</h3>
                  <p>{o.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer className="zen-footer">
          <Illustration kind="enso" size={80} />
          <p>
            «Не следуй пути, проторенному мастерами. Ищи то, что искали они».
          </p>
          <span>Мацуо Басё</span>
        </footer>
      </div>
    </ThemedRoot>
  );
}
