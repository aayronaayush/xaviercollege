import Image, { type StaticImageData } from "next/image";

type PageHeadProps = {
  title: string;
  image?: { src: StaticImageData; alt: string };
};

export default function PageHead({ title, image }: PageHeadProps) {
  return (
    <div className="page-head gutter">
      <div className="content">
        <h1 className="page-head__title">{title}</h1>
        {image ? (
          <figure className="page-head__image">
            <Image src={image.src} alt={image.alt} sizes="(max-width: 700px) 100vw, 620px" preload />
          </figure>
        ) : (
          <div style={{ height: "calc(var(--spacing-30) + var(--block-gap))" }} aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
