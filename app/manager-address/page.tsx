import type { Metadata } from "next";
import Image from "next/image";
import managerImage from "@/public/images/margaret-muller.jpg";

export const metadata: Metadata = {
  title: "A message from the Manager",
};

function Sender() {
  return (
    <>
      <p className="letter__from-name">Margaret Muller</p>
      <p className="letter__from-role">Manageress</p>
    </>
  );
}

export default function ManagerAddressPage() {
  return (
    <article className="letter gutter">
      <div className="letter__layout wide">
        <aside className="letter__from" aria-label="From">
          <figure className="letter__photo">
            <Image
              src={managerImage}
              alt="Margaret Muller, Manageress"
              sizes="(max-width: 781px) 88px, 300px"
              preload
            />
          </figure>
          <div className="letter__from-text">
            <Sender />
            <p className="letter__from-date">
              <time dateTime="2024-01-25">25 January 2024</time>
            </p>
          </div>
        </aside>

        <div className="letter__main">
          <h1 className="letter__title">A message from the Manager</h1>

          <div className="letter__body">
            <p className="letter__lede">
              I would first like to acknowledge the vision, dedication, hard work and sacrifice of
              the Columban Fathers and the Montfort Brothers, who have created an institution that
              we have all come to love and cherish and be proud of-Xavier College, where our hearts
              lie.
            </p>
            <p>
              Last year, 2023,the College celebrated its Platinum Jubilee, 70 years since its
              founders, the Columban Fathers, conducted the 1st class of secondary education for the
              24 boys enrolled. For 34 years, under Columban Fathers’ tutelage, the school expanded
              with new classrooms and saw the introduction of new subjects to cater not only for
              more students but also for the demand in the work force.
            </p>
            <p>
              In 1987, Management of the school was handed over to the Montfort Brothers of St.
              Gabriel, who had been invited by the late Prime Minister of Fiji, Ratu Sir Kamisese
              Mara, to come to Fiji. Xavier College by now was well known in soccer and academics,
              however, the arrival of the Montfort Brothers further catapulted the school to greater
              heights, breaking records in all external examinations (100% pass in FJC, FSLC and
              FSFE), extra- curricular activities which included sports while providing students
              with a modern conducive learning environment. The pinnacle of this Golden Era was the
              completion of the $2.2m Xavier Auditorium, an impressive self-help project of the
              XCPTFA, which was spearheaded by Bro. P.J. George, who also coined the now infamous
              saying “Do your best and leave the rest to God’.
            </p>
            <p>
              Since 1953, Xavier College had always been led and managed by Religious educators.
              This sadly came to an end when the first lay Principal was posted by the Ministry of
              Education to take over from the last serving Religious Principal, Bro. Sabu
              Thottakara, in 2018. Consequently, this led the Montfort Brothers to relinquish
              management of the school, forcing the Archdiocese of Suva to assume Management on 1
              <sup>st</sup> January 2021 ushering a new era in the management of Xavier College.
            </p>
            <p>
              I accepted the Manager’s position with a lot of apprehension knowing full well the
              huge shoes I had to fill and the thought was really overwhelming. It was only the love
              for the school that I courageously decided to accept the invitation from the then
              titular Manager, Fr. Pat Colgan (last Columban priest to serve the Ba Community) under
              the Archdiocese of Suva. All my efforts since assuming the Manager’s role is geared
              towards upholding the culture of excellence instilled by the Montfort Brothers. In
              this respect, I hope that this new website will be a tool that will allow for better
              and convenient interactions between teachers, parents, students and stakeholders. The
              benefits of the website are boundless in the everchanging world of technology. The
              creation of this website is the first step towards connecting the school to the rest
              of the world and I would urge everyone to utilize this platform with absolute
              responsibility and wisdom, to gain as much mileage as they possibly can from the site.
            </p>
            <p>
              I would like to appreciate and thank our ex-student, Aayush Deo (Class Of 2017) for
              volunteering to design our school website for free and for providing the technical
              support that is required for the upkeep of the website.
            </p>
          </div>

          <footer className="letter__signoff" data-reveal>
            <p className="letter__blessing">God bless!</p>
            <Sender />
            <p className="letter__from-date">
              25<sup>th</sup> January 2024
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}
