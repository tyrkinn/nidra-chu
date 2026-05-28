import { SessionCard } from "../components/SessionCard";
import { Illustration } from "../illustrations";
import { SESSIONS } from "../data/sessions";

export function Home() {
  return (
    <div className="container fade-in">
      <header className="home-header">
        <span className="eyebrow">Нидра · Йога глубокого покоя</span>
      </header>

      <section className="home-hero">
        <div>
          <h1>Замедлись.<br />Слушай.</h1>
          <p>Короткие ведомые практики йога-нидры с иллюстрациями для каждого шага.</p>
        </div>
        <div className="hero-art drift" aria-hidden="true">
          <Illustration kind="lotus" />
        </div>
      </section>

      <div className="section-title">
        <h2>Практики</h2>
        <span className="eyebrow">{SESSIONS.length} сессии</span>
      </div>

      <div className="session-list">
        {SESSIONS.map((s) => (
          <SessionCard key={s.id} session={s} />
        ))}
      </div>

      <blockquote className="intro-quote">
        «Йога-нидра — это сон с искрой осознанности. Тело отдыхает, ум очищается, намерение прорастает».
        <span>Свами Сатьянанда Сарасвати</span>
      </blockquote>
    </div>
  );
}
