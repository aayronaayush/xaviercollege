import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Splash, { beforePaintScript } from "@/components/Splash";
import SmoothScroll from "@/components/SmoothScroll";
import Reveal from "@/components/Reveal";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

// Fraunces' SOFT axis rounds off the serifs; set in globals.css
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Xavier College, Ba, Fiji",
    template: "%s – Xavier College, Ba, Fiji",
  },
  description: "Xavier College, Ba, Fiji",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The before-paint script adds data attributes to <html>, so React should not flag them
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: beforePaintScript }} />
        <noscript>
          <style>{".splash{display:none}"}</style>
        </noscript>
        <Splash />
        <SmoothScroll />
        <Reveal />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
