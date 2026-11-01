import { schoolPrayer } from "@/content/prayer";

export default function SchoolPrayer({ className = "" }: { className?: string }) {
  return (
    <blockquote className={`prayer__text ${className}`.trim()}>
      {schoolPrayer.map((line, lineIndex) => (
        <p key={lineIndex}>
          {line.map((part, partIndex) =>
            typeof part === "string" ? (
              part
            ) : "dark" in part ? (
              <span key={partIndex} className="prayer__dark">
                {part.dark}
              </span>
            ) : (
              <span key={partIndex} className="prayer__light">
                {part.light}
              </span>
            ),
          )}
        </p>
      ))}
    </blockquote>
  );
}
