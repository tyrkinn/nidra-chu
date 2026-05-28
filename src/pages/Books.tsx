import { Link } from "react-router-dom";
import { Illustration } from "../illustrations";
import { ThemedRoot } from "../components/ThemedRoot";
import { BackIcon } from "../components/Icons";
import {
  BOOKS_INTRO_PARAGRAPHS,
  BOOKS_OUTRO,
  BOOKS_THEME,
  BOOK_GROUPS,
} from "../data/books";

export function Books() {
  return (
    <ThemedRoot theme={BOOKS_THEME}>
      <div className="container fade-in books-page">
        <div className="session-top">
          <Link to="/" className="back-link"><BackIcon /> Назад</Link>
        </div>

        <header className="zen-hero">
          <div className="zen-hero-art" aria-hidden="true">
            <Illustration kind="book" />
          </div>
          <div>
            <span className="eyebrow">Книжная полка</span>
            <h1>Книги, которые будят</h1>
            <p className="zen-hero-sub">
              Литература · поэзия · дневники для тех, кто ищет
            </p>
          </div>
        </header>

        <section className="zen-section books-intro">
          {BOOKS_INTRO_PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        <nav className="zen-toc" aria-label="Содержание">
          {BOOK_GROUPS.map((g) => (
            <a key={g.id} href={`#${g.id}`}>{g.title}</a>
          ))}
        </nav>

        {BOOK_GROUPS.map((group) => (
          <section key={group.id} id={group.id} className="zen-section books-group">
            <h2>{group.title}</h2>
            <p className="zen-section-lede">{group.lede}</p>

            <div className="books-list">
              {group.books.map((b) => (
                <article key={b.title} className="book-card">
                  <header>
                    <h3>{b.title}</h3>
                    <span className="book-meta">
                      {b.author} · {b.year}
                    </span>
                  </header>
                  <p className="book-desc">{b.description}</p>
                  {b.excerpt && (
                    <details className="zen-text-disclosure">
                      <summary>Цитата</summary>
                      <blockquote className="book-excerpt">{b.excerpt}</blockquote>
                    </details>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}

        <footer className="zen-footer">
          <Illustration kind="book" size={64} />
          <p>{BOOKS_OUTRO.quote}</p>
          <span>{BOOKS_OUTRO.author}</span>
        </footer>
      </div>
    </ThemedRoot>
  );
}
