"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades [data-reveal] blocks up into place the first time they scroll into view.
// Hidden-until-revealed styles only apply when html[data-motion="on"], which the
// head script sets, so content stays visible without JavaScript or with reduced motion.
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (document.documentElement.dataset.motion !== "on") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-reveal]:not([data-revealed])")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
