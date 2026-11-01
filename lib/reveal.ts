import type { CSSProperties } from "react";

// Staggers sibling [data-reveal] blocks so a row of items arrives one after another
export function revealDelay(index: number, stepMs = 90): CSSProperties {
  return { "--reveal-delay": `${index * stepMs}ms` } as CSSProperties;
}
