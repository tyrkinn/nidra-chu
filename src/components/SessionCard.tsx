import { Link } from "react-router-dom";
import { Illustration } from "../illustrations";
import { totalLabel, type Session } from "../data/sessions";

export function SessionCard({ session }: { session: Session }) {
  return (
    <Link to={`/s/${session.id}`} className="session-card" aria-label={`Открыть практику: ${session.title}`}>
      <div className="card-art">
        <Illustration kind={session.hero} size={64} />
      </div>
      <div className="card-body">
        <h3>{session.title}</h3>
        <p>{session.subtitle}</p>
      </div>
      <div className="card-meta">{totalLabel(session)}</div>
    </Link>
  );
}
