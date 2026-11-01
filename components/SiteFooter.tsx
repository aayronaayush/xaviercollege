import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import { FacebookLink, InstagramLink } from "./SocialLinks";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/prayer", label: "Our Prayer" },
  { href: "/history", label: "Our History" },
  { href: "/manager-address", label: "Manager’s message" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer gutter">
      <div className="site-footer__inner wide">
        <div className="site-footer__top">
          <Link href="/" className="site-footer__brand">
            <Image src={logo} alt="" className="site-footer__logo" />
            <span>
              <span className="site-footer__name">Xavier College</span>
              <span className="site-footer__place">Ba, Fiji</span>
            </span>
          </Link>

          <nav className="site-footer__group" aria-labelledby="footer-pages">
            <h2 id="footer-pages" className="site-footer__heading">
              Pages
            </h2>
            <ul>
              {PAGES.map((page) => (
                <li key={page.href}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__group">
            <h2 id="footer-follow" className="site-footer__heading">
              Follow us
            </h2>
            <ul className="site-footer__social" aria-labelledby="footer-follow">
              <li>
                <FacebookLink />
              </li>
              <li>
                <InstagramLink />
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© Xavier College, Ba, Fiji</p>
          <p>Teaching since 1953</p>
        </div>
      </div>
    </footer>
  );
}
