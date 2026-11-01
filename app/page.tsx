import Image from "next/image";
import Link from "next/link";
import schoolImage from "@/public/images/school-wide.jpg";
import managerImage from "@/public/images/margaret-muller.jpg";
import SchoolPrayer from "@/components/SchoolPrayer";
import { revealDelay } from "@/lib/reveal";

const MOMENTS = [
  {
    year: "1952",
    text: "Over 70 applicants sit the first entrance examination and 24 boys are accepted.",
  },
  {
    year: "1970",
    text: "The first girls start at Xavier College, and the College Magazine is produced.",
  },
  {
    year: "1997",
    text: "The first school in Fiji to achieve a 100% pass in the Fiji Seventh Form Examination.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero gutter">
        <figure className="home-hero__frame wide">
          <Image
            src={schoolImage}
            alt="The main Xavier College building and driveway"
            sizes="(max-width: 1400px) 84vw, 1280px"
            className="home-hero__image"
            preload
          />
          <figcaption className="home-hero__notch">
            <h1 className="home-hero__title">Do your best and leave the rest to God.</h1>
            <p className="home-hero__credit">The Xavier saying, coined by Bro. P.J. George</p>
          </figcaption>
        </figure>
      </section>

      <section className="home-story gutter" aria-labelledby="home-story-title">
        <div className="wide">
          <div className="home-story__intro" data-reveal>
            <h2 id="home-story-title">A school in Ba since 1953</h2>
            <p>
              Xavier College was started by the Columban Fathers on the old Ragg family estate at
              Namosau. The Montfort Brothers of St. Gabriel led it from 1987, and the Archdiocese of
              Suva has managed it since 2021.
            </p>
          </div>

          <ol className="moments">
            {MOMENTS.map((moment, index) => (
              <li key={moment.year} className="moments__item" data-reveal style={revealDelay(index)}>
                <p className="moments__year">{moment.year}</p>
                <p className="moments__text">{moment.text}</p>
              </li>
            ))}
          </ol>

          <p className="home-story__more">
            <Link href="/history">Read our full history</Link>
          </p>
        </div>
      </section>

      <section className="prayer gutter" aria-labelledby="prayer-title">
        <div className="prayer__inner" data-reveal>
          <h2 id="prayer-title" className="prayer__title">
            Our school prayer
          </h2>
          <p className="prayer__context">
            We say this prayer to begin and end every school day and before every school event.
            Each morning it is joined by a verse from the Bible.
          </p>
          <SchoolPrayer />
          <p className="prayer__more">
            <Link href="/prayer">More about our school prayer</Link>
          </p>
        </div>
      </section>

      <section className="home-manager gutter" aria-labelledby="home-manager-title">
        <div className="home-manager__inner wide">
          <figure className="home-manager__photo" data-reveal>
            <Image
              src={managerImage}
              alt="Margaret Muller, Manageress"
              sizes="(max-width: 781px) 84vw, 420px"
            />
          </figure>
          <div className="home-manager__body" data-reveal style={revealDelay(1, 120)}>
            <h2 id="home-manager-title">A message from the Manager</h2>
            <blockquote className="home-manager__quote">
              <p>
                I accepted the Manager’s position with a lot of apprehension knowing full well the
                huge shoes I had to fill and the thought was very much overwhelming. It was only the
                love for the school that I courageously decided to accept the invitation from the
                then titular Manager, Fr. Pat Colgan, under the Archdiocese of Suva. All my efforts
                since assuming Manager is geared towards upholding the culture of excellence
                instilled by the Montfort Brothers.
              </p>
            </blockquote>
            <p className="home-manager__name">Margaret Muller, Manageress</p>
            <p>
              <Link href="/manager-address">Read the full message</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
