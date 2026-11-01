"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

let lenis: Lenis | null = null;

// Lets overlays such as the phone menu freeze the page behind them
export function setSmoothScrollPaused(paused: boolean) {
  if (paused) lenis?.stop();
  else lenis?.start();
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // In-page links land below the sticky header, like scroll-margin-top does natively
    const header = document.querySelector<HTMLElement>(".site-header");
    lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: -((header?.offsetHeight ?? 0) + 16) },
      stopInertiaOnNavigate: true,
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
