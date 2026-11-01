import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";

export const metadata: Metadata = {
  title: "Page not found",
};

const PAGES = [
  { href: "/", label: "Home", text: "Start from the beginning" },
  { href: "/prayer", label: "Our Prayer", text: "The prayer that opens and closes each school day" },
  { href: "/history", label: "Our History", text: "The story of the college, starting in 1934" },
  { href: "/manager-address", label: "Manager’s message", text: "A letter from Margaret Muller" },
];

export default function NotFound() {
  return (
    <section className="not-found gutter" aria-labelledby="not-found-title">
      <div className="not-found__inner">
        <Image src={logo} alt="" className="not-found__crest" unoptimized />
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 id="not-found-title" className="not-found__title">
          We couldn’t find that page
        </h1>
        <p className="not-found__text">
          The address may have a typo, or the page may have moved. Try one of these instead.
        </p>

        <ul className="not-found__links">
          {PAGES.map((page) => (
            <li key={page.href}>
              <Link href={page.href}>
                <span className="not-found__label">{page.label}</span>
                <span className="not-found__hint">{page.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
