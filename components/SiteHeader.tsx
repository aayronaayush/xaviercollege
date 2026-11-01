"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import logo from "@/public/images/logo.svg";
import { FacebookLink, InstagramLink } from "./SocialLinks";
import { setSmoothScrollPaused } from "./SmoothScroll";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/prayer", label: "Our Prayer" },
  { href: "/history", label: "Our History" },
];

// Position in the menu, used to stagger items as the menu opens
const itemIndex = (index: number) => ({ "--i": index }) as CSSProperties;

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
    setSmoothScrollPaused(true);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      setSmoothScrollPaused(false);
    };
  }, [menuOpen]);

  return (
    <header className="site-header gutter">
      <div className="site-header__inner wide">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <Image src={logo} alt="" className="brand__logo" unoptimized preload />
          <span className="brand__text">
            <span className="brand__name">Xavier College</span>
            <span className="brand__place">Ba, Fiji</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          {/* Two bars that fold into an X while the menu is open */}
          <button
            type="button"
            className="nav__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav__toggle-bar" aria-hidden="true" />
            <span className="nav__toggle-bar" aria-hidden="true" />
          </button>

          <div id="site-menu" className="nav__panel" data-open={menuOpen}>
            <ul className="nav__pages">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.href} style={itemIndex(index)}>
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
              <li style={itemIndex(NAV_ITEMS.length)}>
                <FacebookLink />
              </li>
              <li style={itemIndex(NAV_ITEMS.length + 1)}>
                <InstagramLink />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
