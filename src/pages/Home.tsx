import { Link } from "react-router-dom";
import { SectionCard } from "../components/SectionCard";
import { ThemedRoot } from "../components/ThemedRoot";
import { Illustration } from "../illustrations";
import { SECTIONS } from "../data/sections";

export function Home() {
  return (
    <ThemedRoot>
    <div className="container fade-in">
      <header className="home-header">
        <span className="eyebrow">Практики осознанности</span>
      </header>

      <section className="home-hero">
        <div>
          <h1>Замедлись.<br />Слушай.</h1>
          <p>Спокойное место для нидры, йоги, медитаций и других техник присутствия.</p>
        </div>
        <div className="hero-art drift" aria-hidden="true">
          <Illustration kind="lotus" />
        </div>
      </section>

      <div className="home-theory-grid">
        <Link to="/zen" className="home-zen-cta theme-zen">
          <div className="home-zen-cta-art" aria-hidden="true">
            <Illustration kind="enso" />
          </div>
          <div className="home-zen-cta-body">
            <span>Теория</span>
            <h3>Дзен</h3>
            <p>История, школы, тексты, дорожная карта.</p>
          </div>
          <div className="home-zen-cta-arrow" aria-hidden="true">→</div>
        </Link>

        <Link to="/books" className="home-zen-cta theme-books">
          <div className="home-zen-cta-art" aria-hidden="true">
            <Illustration kind="book" />
          </div>
          <div className="home-zen-cta-body">
            <span>Книжная полка</span>
            <h3>Книги, которые будят</h3>
            <p>30 книг, после которых неудобно жить как раньше.</p>
          </div>
          <div className="home-zen-cta-arrow" aria-hidden="true">→</div>
        </Link>
      </div>

      <div className="section-title">
        <h2>Разделы</h2>
        <span className="eyebrow">{SECTIONS.length}</span>
      </div>

      <div className="section-grid">
        {SECTIONS.map((s) => (
          <SectionCard key={s.id} section={s} />
        ))}
      </div>

      <blockquote className="intro-quote">
        «Осознанность — это не то, что нужно создать. Это присутствие, которое
        есть уже сейчас, под слоем привычной суеты».
        <span>Свами Сатьянанда Сарасвати</span>
      </blockquote>
    </div>
    </ThemedRoot>
  );
}
