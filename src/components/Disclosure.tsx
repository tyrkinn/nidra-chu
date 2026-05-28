import type { Details } from "../data/types";

type Props = {
  label?: string;
  details: Details;
};

export function Disclosure({ label = "Подробнее", details }: Props) {
  const paragraphs = details.about.split(/\n{2,}/).filter(Boolean);

  return (
    <details className="disclosure">
      <summary>
        <span>{label}</span>
        <span className="disclosure-chevron" aria-hidden="true" />
      </summary>
      <div className="disclosure-body">
        <h4 className="disclosure-h">Что это</h4>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h4 className="disclosure-h">Что даёт</h4>
        <ul className="disclosure-list">
          {details.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {details.notes && (
          <>
            <h4 className="disclosure-h">Заметки</h4>
            <p>{details.notes}</p>
          </>
        )}
      </div>
    </details>
  );
}
