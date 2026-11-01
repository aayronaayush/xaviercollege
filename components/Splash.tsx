"use client";

import { useEffect, useState } from "react";

// Long enough for the crest to draw itself in before the screen fades out
const MIN_VISIBLE_MS = 1400;
const SEEN_KEY = "xc-splash-seen";

// Runs before first paint: skips the splash for the rest of the browser session,
// and turns on entrance animations unless the visitor prefers reduced motion
export const beforePaintScript = `(function(){var d=document.documentElement;try{if(sessionStorage.getItem("${SEEN_KEY}"))d.dataset.splash="seen"}catch(e){}if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches)d.dataset.motion="on"})()`;

export default function Splash() {
  const [state, setState] = useState<"showing" | "leaving" | "gone">("showing");

  // Remove it even if the fade-out animation never reports finishing
  useEffect(() => {
    if (state !== "leaving") return;
    const timer = window.setTimeout(() => setState("gone"), 700);
    return () => window.clearTimeout(timer);
  }, [state]);

  useEffect(() => {
    // Already shown this session: CSS keeps it hidden
    if (document.documentElement.dataset.splash === "seen") return;

    const shownAt = performance.now();
    let timer: number | undefined;

    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - shownAt));
      timer = window.setTimeout(() => {
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {}
        setState("leaving");
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(timer);
    };
  }, []);

  if (state === "gone") return null;

  return (
    <div
      className="splash"
      data-state={state}
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.animationName === "splash-out") setState("gone");
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- animated SVG must load as a plain image */}
      <img src="/images/logo-animated.svg" alt="" width={200} height={200} className="splash__logo" />
    </div>
  );
}
