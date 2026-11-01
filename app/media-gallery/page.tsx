import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import integration1 from "@/public/images/national-integration-1.jpeg";
import integration2 from "@/public/images/national-integration-2.jpeg";
import integration3 from "@/public/images/national-integration-3.jpeg";
import love1 from "@/public/images/love-1.jpg";
import love2 from "@/public/images/love-2.jpg";
import love3 from "@/public/images/love-3.jpg";

export const metadata: Metadata = {
  title: "Media Gallery",
};

const GALLERY_SIZES = "(max-width: 781px) 100vw, 55vw";

export default function MediaGalleryPage() {
  return (
    <>
      <PageHead title="Media Gallery" />

      <div className="gallery-intro">
        <div className="wide gallery-intro__text">
          <p>
            Welcome to the Xavier College Media Gallery. Here you will find a collection of photos and
            videos highlighting our school’s activities and life at Xavier College
            <br />
            <br />
            Feel free to contribute to this page by reaching out to us on our social media
          </p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="columns wide">
          <div className="col-third flow">
            <h4 className="gallery-section__title">
              <em>National Integration</em> by Year 12S
            </h4>
            <p>
              The philosophy of national integration encapsulates the noble pursuit of forging a
              harmonious tapestry within a nation’s fabric.
            </p>
          </div>
          <div className="col-two-thirds">
            <div className="tiled tiled--stack-mobile">
              <div className="tiled__row">
                <div className="tiled__col" style={{ flexBasis: "66.77395%" }}>
                  <Image src={integration1} alt="Year 12S National Integration group photo" sizes={GALLERY_SIZES} />
                </div>
                <div className="tiled__col" style={{ flexBasis: "33.22605%" }}>
                  <Image src={integration2} alt="Year 12S National Integration presentation" sizes={GALLERY_SIZES} />
                  <Image src={integration3} alt="Year 12S National Integration presentation" sizes={GALLERY_SIZES} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section page-body">
        <div className="columns wide">
          <div className="col-third flow">
            <h4 className="gallery-section__title">
              <em>Love</em> by Year 11P
            </h4>
            <p>WHAT IS LOVE?</p>
            <ul>
              <li>Love is a deep profound feeling of affection.</li>
              <li>It is about valuing and cherishing each others happiness, well being and growth</li>
              <li>It is expressed through acts of kindness, support, understanding and forgiveness.</li>
              <li>It is a beautiful force that binds us together as human beings.</li>
            </ul>
            <p>
              <a href="/docs/year_11p_powerpoint_love.pdf" target="_blank" rel="noreferrer noopener">
                View Presentation
              </a>
            </p>
          </div>
          <div className="col-two-thirds">
            <div className="tiled tiled--stack-mobile">
              <div className="tiled__row">
                <div className="tiled__col" style={{ flexBasis: "100%" }}>
                  <Image src={love1} alt="Year 11P Love assembly group photo" sizes={GALLERY_SIZES} />
                </div>
              </div>
              <div className="tiled__row">
                <div className="tiled__col" style={{ flexBasis: "46.52967%" }}>
                  <Image src={love2} alt="Year 11P Love assembly" sizes={GALLERY_SIZES} />
                </div>
                <div className="tiled__col" style={{ flexBasis: "53.47033%" }}>
                  <Image src={love3} alt="Year 11P Love assembly" sizes={GALLERY_SIZES} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
