"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/public/images/logo.png";
import { FacebookLink, InstagramLink } from "./SocialLinks";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Rich History" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header gutter">
      <div className="site-header__inner wide">
        <div className="brand">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
            <Image src={logo} alt="Xavier College Logo" className="brand__logo" preload />
          </Link>
          <div className="brand__name">
            <h3>Xavier</h3>
            <h3>College</h3>
          </div>
        </div>

        <nav className="nav" aria-label="Navigation">
          <button
            type="button"
            className="nav__toggle"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 7.5h16v1.5H4z" />
              <path d="M4 15h16v1.5H4z" />
            </svg>
          </button>

          <div className="nav__panel" data-open={menuOpen}>
            <button
              type="button"
              className="nav__close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z" />
              </svg>
            </button>
            <ul className="nav__list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <FacebookLink />
              </li>
              <li>
                <InstagramLink />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
