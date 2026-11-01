"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/public/images/logo.svg";
import { FacebookLink, InstagramLink } from "./SocialLinks";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/prayer", label: "Our Prayer" },
  { href: "/history", label: "Our History" },
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
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <Image src={logo} alt="" className="brand__logo" preload />
          <span className="brand__text">
            <span className="brand__name">Xavier College</span>
            <span className="brand__place">Ba, Fiji</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
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
            <div className="nav__panel-bar">
              <span className="brand__name">Xavier College</span>
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
            </div>

            <ul className="nav__pages">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav__link"
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="nav__social" aria-label="Follow Xavier College">
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
