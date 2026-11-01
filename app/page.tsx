import Image from "next/image";
import Link from "next/link";
import schoolImage from "@/public/images/school-wide.jpg";
import managerImage from "@/public/images/margaret-muller.jpg";

export default function Home() {
  return (
    <>
      <div className="feature-image">
        <figure className="wide">
          <Image
            src={schoolImage}
            alt="Xavier College students"
            sizes="(max-width: 1400px) 84vw, 1280px"
            preload
          />
        </figure>
      </div>

      <div className="section-white" aria-hidden="true" />

      <section className="section-white">
        <div className="media-text content">
          <figure className="media-text__media">
            <Image src={managerImage} alt="Margaret Muller, Manageress" sizes="(max-width: 600px) 100vw, 310px" />
          </figure>
          <div className="media-text__content">
            <p>
              I accepted the Manager’s position with a lot of apprehension knowing full well the huge
              shoes I had to fill and the thought was very much overwhelming. It was only the love
              for the school that I courageously decided to accept the invitation from the then
              titular Manager, Fr. Pat Colgan, under the Archdiocese of Suva. All my efforts since
              assuming Manager is geared towards upholding the culture of excellence instilled by the
              Montfort Brothers. <Link href="/manager-address">Read More</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
