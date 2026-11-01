import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import entranceImage from "@/public/images/college-entrance.jpg";
import { history } from "@/content/history";

export const metadata: Metadata = {
  title: "Our Rich History",
};

export default function AboutPage() {
  return (
    <>
      <PageHead title="Our Rich History" image={{ src: entranceImage, alt: "Xavier College Entrance" }} />

      <div className="page-body gutter">
        <div className="timeline content">
          {history.map(({ year, entries }) => (
            <section key={year} className="columns">
              <div className="col-third">
                <h2 className="timeline__year">{year}</h2>
              </div>
              <div className="col-two-thirds flow">
                {entries.map((entry) => (
                  <p key={entry}>{entry}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
