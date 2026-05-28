import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Illustration } from "../illustrations";
import { getSession, type Session as SessionType, type Stage } from "../data/sessions";
import { getSectionForSession, type Section } from "../data/sections";
import { Timer } from "../components/Timer";
import { ThemedRoot } from "../components/ThemedRoot";
import { Disclosure } from "../components/Disclosure";
import { BackIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon } from "../components/Icons";

type Mode = "overview" | "play" | "done";

const fmtMin = (sec: number) => {
  const m = Math.round(sec / 60);
  return `${m} мин`;
};

const fmtMinSec = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return s === 0 ? `${m} мин` : `${m}:${s.toString().padStart(2, "0")}`;
};

export function Session() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const session = getSession(id);
  const section = session ? getSectionForSession(session.id) : undefined;

  const [mode, setMode] = useState<Mode>("overview");
  const [stageIndex, setStageIndex] = useState(0);

  if (!session) {
    return (
      <div className="container fade-in">
        <p>Практика не найдена.</p>
        <button className="ctrl-primary" onClick={() => navigate("/")}>На главную</button>
      </div>
    );
  }

  let content;
  if (mode === "overview") {
    content = (
      <Overview
        session={session}
        section={section}
        onStart={() => {
          setStageIndex(0);
          setMode("play");
        }}
      />
    );
  } else if (mode === "done") {
    content = (
      <Completion
        session={session}
        section={section}
        onRestart={() => {
          setStageIndex(0);
          setMode("play");
        }}
        onOverview={() => setMode("overview")}
      />
    );
  } else {
    content = (
      <Player
        session={session}
        stageIndex={stageIndex}
        onIndexChange={setStageIndex}
        onExit={() => setMode("overview")}
        onComplete={() => setMode("done")}
      />
    );
  }

  return <ThemedRoot theme={section?.theme}>{content}</ThemedRoot>;
}

// ──────────────────────────────────────────
// Overview
// ──────────────────────────────────────────

function Overview({
  session,
  section,
  onStart,
}: {
  session: SessionType;
  section: Section | undefined;
  onStart: () => void;
}) {
  const total = session.stages.reduce((sum, s) => sum + s.durationSec, 0);
  const backHref = section ? `/section/${section.id}` : "/";

  return (
    <div className="container fade-in">
      <div className="session-top">
        <Link to={backHref} className="back-link"><BackIcon /> Назад</Link>
        <span className="session-progress">{fmtMin(total)} · {session.stages.length} шаг{plural(session.stages.length)}</span>
      </div>

      <header className="overview-hero">
        <div className="overview-hero-art" aria-hidden="true">
          <Illustration kind={session.hero} />
        </div>
        <div>
          <span className="eyebrow">{section?.title ?? "Практика"}</span>
          <h1>{session.title}</h1>
          <p>{session.subtitle}</p>
        </div>
      </header>

      <Disclosure label="О практике" details={session.details} />

      <div className="section-title">
        <h2>Шаги практики</h2>
        <span className="eyebrow">прочитать</span>
      </div>

      <ol className="overview-list">
        {session.stages.map((stage, i) => (
          <li key={stage.id} className="overview-step">
            <div className="overview-step-art" aria-hidden="true">
              <Illustration kind={stage.illustration} />
            </div>
            <div className="overview-step-body">
              <div className="overview-step-head">
                <span className="overview-step-num">{i + 1}</span>
                <span className="overview-step-eyebrow">{stage.eyebrow}</span>
                <span className="overview-step-time">{fmtMinSec(stage.durationSec)}</span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="overview-cta">
        <button className="ctrl-primary" onClick={onStart}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <PlayIcon /> Начать практику
          </span>
        </button>
        <p className="overview-hint">Найдите удобное положение. Приглушите свет и звуки.</p>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// Player
// ──────────────────────────────────────────

function Player({
  session,
  stageIndex,
  onIndexChange,
  onExit,
  onComplete,
}: {
  session: SessionType;
  stageIndex: number;
  onIndexChange: (i: number) => void;
  onExit: () => void;
  onComplete: () => void;
}) {
  const stage = session.stages[stageIndex] as Stage;

  const [remaining, setRemaining] = useState(stage.durationSec);
  const [running, setRunning] = useState(true);
  const tickRef = useRef<number | null>(null);

  // reset timer on stage change
  useEffect(() => {
    setRemaining(stage.durationSec);
    setRunning(true);
  }, [stage.durationSec, stage.id]);

  useEffect(() => {
    if (!running) {
      if (tickRef.current) {
        window.clearInterval(tickRef.current);
        tickRef.current = null;
      }
      return;
    }
    tickRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          window.clearInterval(tickRef.current!);
          tickRef.current = null;
          advance();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (tickRef.current) {
        window.clearInterval(tickRef.current);
        tickRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const isLast = useMemo(
    () => stageIndex === session.stages.length - 1,
    [session.stages.length, stageIndex],
  );

  function advance() {
    if (isLast) {
      setRunning(false);
      onComplete();
      return;
    }
    onIndexChange(stageIndex + 1);
  }

  function back() {
    if (stageIndex === 0) return;
    onIndexChange(stageIndex - 1);
  }

  return (
    <div className="container session-page">
      <div className="session-top">
        <button onClick={onExit} className="back-link" aria-label="К обзору шагов">
          <BackIcon /> Обзор
        </button>
        <span className="session-progress">
          {stageIndex + 1} / {session.stages.length}
        </span>
      </div>

      <div key={stage.id} className="session-stage fade-in">
        <div className="stage-art breathe" aria-hidden="true">
          <Illustration kind={stage.illustration} />
        </div>
        <div>
          <div className="stage-eyebrow">{stage.eyebrow}</div>
          <h2 className="stage-title">{stage.title}</h2>
        </div>
        <p className="stage-body">{stage.body}</p>
        <Timer total={stage.durationSec} remaining={remaining} />
      </div>

      <div className="stage-dots" aria-hidden="true">
        {session.stages.map((s, i) => (
          <span
            key={s.id}
            className={i === stageIndex ? "is-active" : i < stageIndex ? "is-done" : ""}
          />
        ))}
      </div>

      <div className="session-controls">
        <button
          className="ctrl-btn"
          onClick={back}
          disabled={stageIndex === 0}
          aria-label="Предыдущий шаг"
        >
          <PrevIcon />
        </button>
        <button
          className={`ctrl-primary ${running ? "" : "is-paused"}`}
          onClick={() => setRunning((r) => !r)}
          aria-label={running ? "Пауза" : "Старт"}
        >
          {running ? (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <PauseIcon /> Пауза
            </span>
          ) : (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <PlayIcon /> Продолжить
            </span>
          )}
        </button>
        <button
          className="ctrl-btn"
          onClick={advance}
          aria-label="Следующий шаг"
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// Completion
// ──────────────────────────────────────────

function Completion({
  session,
  section,
  onRestart,
  onOverview,
}: {
  session: SessionType;
  section: Section | undefined;
  onRestart: () => void;
  onOverview: () => void;
}) {
  const backHref = section ? `/section/${section.id}` : "/";
  return (
    <div className="container fade-in session-page">
      <div className="session-top">
        <Link to={backHref} className="back-link"><BackIcon /> Назад</Link>
      </div>
      <div className="complete-card">
        <div className="complete-art drift" aria-hidden="true">
          <Illustration kind="awakening" />
        </div>
        <span className="eyebrow">Практика завершена</span>
        <h2>{session.title}</h2>
        <p>Возьмите паузу, прежде чем вернуться к делам. Сделайте несколько глубоких вдохов и сохраните это состояние.</p>
        <button className="ctrl-primary" onClick={onRestart}>Начать заново</button>
        <button className="back-link" onClick={onOverview} style={{ marginTop: 8 }}>К обзору шагов</button>
      </div>
    </div>
  );
}

function plural(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "а";
  return "ов";
}
