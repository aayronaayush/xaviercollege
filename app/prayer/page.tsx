import type { Metadata } from "next";
import SchoolPrayer from "@/components/SchoolPrayer";
import { revealDelay } from "@/lib/reveal";

export const metadata: Metadata = {
  title: "School Prayer",
  description:
    "The Xavier College school prayer, said at the start and end of every school day and before every school event.",
};

const WHEN_WE_PRAY = [
  {
    time: "Morning",
    text: "We open the school day with the prayer and a verse from the Bible.",
  },
  {
    time: "School events",
    text: "Every school event begins with the prayer.",
  },
  {
    time: "End of the day",
    text: "We close the school day with the prayer.",
  },
];

export default function PrayerPage() {
  return (
    <>
      <section className="prayer prayer--page gutter" aria-labelledby="prayer-title">
        <div className="prayer__inner">
          <h1 id="prayer-title" className="prayer__title">
            Our school prayer
          </h1>
          <p className="prayer__context">
            Known as the Prayer of St. Francis, it is painted on a sign at the school and starts
            and ends every school day.
          </p>
          <SchoolPrayer />
        </div>
      </section>

      <section className="prayer-day gutter" aria-labelledby="prayer-day-title">
        <div className="prayer-day__inner">
          <h2 id="prayer-day-title" data-reveal>
            When we pray
          </h2>
          <ol className="moments prayer-day__list">
            {WHEN_WE_PRAY.map((item, index) => (
              <li key={item.time} className="moments__item" data-reveal style={revealDelay(index + 1)}>
                <h3 className="prayer-day__time">{item.time}</h3>
                <p className="moments__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
