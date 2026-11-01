import type { Metadata } from "next";
import Image from "next/image";
import entranceImage from "@/public/images/college-entrance.jpg";
import { eras, history } from "@/content/history";

export const metadata: Metadata = {
  title: "Our Rich History",
};

export default function AboutPage() {
  return (
    <>
      <header className="history-intro gutter">
        <div className="history-intro__text">
          <h1>Our Rich History</h1>
          <p className="history-intro__lede">
            On the Feast of St. Francis Xavier, 3 December 1952, over 70 applicants sat the first
            entrance examination at Namosau, Ba, and 24 boys were accepted. This is the story of
            their school.
          </p>
        </div>

        <nav className="era-nav" aria-label="Chapters">
          <ol>
            {eras.map((era) => (
              <li key={era.id}>
                <a href={`#${era.id}`}>
                  <span className="era-nav__range">
                    {era.from}–{era.to}
                  </span>
                  <span className="era-nav__title">{era.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <figure className="history-intro__image wide" data-reveal>
          <Image
            src={entranceImage}
            alt="Xavier College Entrance"
            sizes="(max-width: 1400px) 84vw, 1280px"
            preload
          />
        </figure>
      </header>

      <div className="history gutter">
        {eras.map((era) => {
          const years = history.filter(({ year }) => {
            const y = Number(year);
            return y >= era.from && y <= era.to;
          });

          return (
            <section key={era.id} id={era.id} className="era" aria-labelledby={`${era.id}-title`}>
              <div className="era__head" data-reveal>
                <p className="era__range">
                  {era.from}–{era.to}
                </p>
                <h2 id={`${era.id}-title`} className="era__title">
                  {era.title}
                </h2>
                <p className="era__summary">{era.summary}</p>
              </div>

              <ol className="timeline">
                {years.map(({ year, entries }) => (
                  <li key={year} className="timeline__year" data-reveal>
                    <h3 className="timeline__label">{year}</h3>
                    {entries.length > 1 ? (
                      <ul className="timeline__entries">
                        {entries.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="timeline__entries">{entries[0]}</p>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
      </div>
    </>
  );
}
