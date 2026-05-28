import { Link, useNavigate, useParams } from "react-router-dom";
import { Illustration } from "../illustrations";
import { getSection } from "../data/sections";
import { SESSIONS } from "../data/sessions";
import { SessionCard } from "../components/SessionCard";
import { ThemedRoot } from "../components/ThemedRoot";
import { Disclosure } from "../components/Disclosure";
import { BackIcon } from "../components/Icons";

export function SectionPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const section = getSection(id);

  if (!section) {
    return (
      <div className="container fade-in">
        <p>Раздел не найден.</p>
        <button className="ctrl-primary" onClick={() => navigate("/")}>На главную</button>
      </div>
    );
  }

  const sessions = SESSIONS.filter((s) => section.sessionIds.includes(s.id));

  return (
    <ThemedRoot theme={section.theme}>
      <div className="container fade-in">
        <div className="session-top">
          <Link to="/" className="back-link"><BackIcon /> Разделы</Link>
        </div>

        <header className="section-hero">
          <div>
            <span className="eyebrow">{section.tagline}</span>
            <h1>{section.title}</h1>
            <p>{section.description}</p>
          </div>
          <div className="section-hero-art drift" aria-hidden="true">
            <Illustration kind={section.illustration} />
          </div>
        </header>

        <Disclosure label="О разделе" details={section.details} />

        {sessions.length > 0 && (
          <>
            <div className="section-title">
              <h2>Практики</h2>
              <span className="eyebrow">{sessions.length}</span>
            </div>
            <div className="session-list">
              {sessions.map((s) => (
                <SessionCard key={s.id} session={s} />
              ))}
            </div>
          </>
        )}

        {section.comingSoon && (
          <div className="placeholder-card">
            <span className="eyebrow">В разработке</span>
            <h2>Раздел готовится</h2>
            <p>
              Скоро здесь появятся ведомые практики. Если хотите предложить тему или
              подсказать, что включить — напишите автору.
            </p>
          </div>
        )}
      </div>
    </ThemedRoot>
  );
}
