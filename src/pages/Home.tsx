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
