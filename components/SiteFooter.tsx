import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import SocialLinks from "./SocialLinks";

export default function SiteFooter() {
  return (
    <footer className="site-footer gutter">
      <div className="site-footer__inner content">
        <Link href="/">
          <Image src={logo} alt="Xavier College Logo" className="site-footer__logo" />
        </Link>
        <div className="site-footer__links">
          <p>
            <Link href="/">Home</Link>
          </p>
          <p>
            <Link href="/about">Our Rich History</Link>
          </p>
          <div className="site-footer__spacer" aria-hidden="true" />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
