import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Illustration } from "../illustrations";
import { getSession } from "../data/sessions";
import { Timer } from "../components/Timer";
import { BackIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon } from "../components/Icons";

export function Session() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const session = getSession(id);

  const [stageIndex, setStageIndex] = useState(0);
  const [remaining, setRemaining] = useState(session?.stages[0]?.durationSec ?? 0);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const tickRef = useRef<number | null>(null);

  const stage = session?.stages[stageIndex];

  useEffect(() => {
    if (!stage) return;
    setRemaining(stage.durationSec);
  }, [stage]);

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
    () => !!session && stageIndex === session.stages.length - 1,
    [session, stageIndex],
  );

  function advance() {
    if (!session) return;
    if (isLast) {
      setRunning(false);
      setFinished(true);
      return;
    }
    setStageIndex((i) => i + 1);
  }

  function back() {
    if (stageIndex === 0) return;
    setStageIndex((i) => i - 1);
  }

  function toggle() {
    if (finished) {
      restart();
      return;
    }
    setRunning((r) => !r);
  }

  function restart() {
    setStageIndex(0);
    setRemaining(session?.stages[0]?.durationSec ?? 0);
    setFinished(false);
    setRunning(true);
  }

  if (!session) {
    return (
      <div className="container fade-in">
        <p>Практика не найдена.</p>
        <button className="ctrl-primary" onClick={() => navigate("/")}>На главную</button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="container fade-in session-page">
        <div className="session-top">
          <Link to="/" className="back-link"><BackIcon /> Назад</Link>
        </div>
        <div className="complete-card">
          <div className="complete-art drift" aria-hidden="true">
            <Illustration kind="awakening" />
          </div>
          <span className="eyebrow">Практика завершена</span>
          <h2>{session.title}</h2>
          <p>Возьмите паузу, прежде чем вернуться к делам. Сделайте несколько глубоких вдохов и сохраните это состояние.</p>
          <button className="ctrl-primary" onClick={restart}>Начать заново</button>
          <Link to="/" className="back-link" style={{ marginTop: 8 }}>К списку практик</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container session-page">
      <div className="session-top">
        <Link to="/" className="back-link"><BackIcon /> Назад</Link>
        <span className="session-progress">
          {stageIndex + 1} / {session.stages.length}
        </span>
      </div>

      <div key={stage!.id} className="session-stage fade-in">
        <div className="stage-art breathe" aria-hidden="true">
          <Illustration kind={stage!.illustration} />
        </div>
        <div>
          <div className="stage-eyebrow">{stage!.eyebrow}</div>
          <h2 className="stage-title">{stage!.title}</h2>
        </div>
        <p className="stage-body">{stage!.body}</p>
        <Timer total={stage!.durationSec} remaining={remaining} />
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
          onClick={toggle}
          aria-label={running ? "Пауза" : "Старт"}
        >
          {running ? (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <PauseIcon /> Пауза
            </span>
          ) : (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <PlayIcon /> {remaining === stage!.durationSec ? "Начать" : "Продолжить"}
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
