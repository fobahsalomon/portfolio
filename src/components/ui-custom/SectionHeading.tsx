import Reveal from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  accent: string;
  dark?: boolean;
  centered?: boolean;
}

export default function SectionHeading({ label, title, accent, dark = false, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? "text-center" : ""}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase font-medium ${
            dark ? "text-copper-light" : "text-copper"
          }`}
        >
          <span className={`w-8 h-px ${dark ? "bg-copper-light/50" : "bg-copper/50"}`} />
          {label}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={`mt-4 font-serif font-bold leading-[1.1] ${dark ? "text-paper" : "text-ink"}`}
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
        >
          {title} <em className={`italic ${dark ? "text-copper-light" : "text-copper"}`}>{accent}</em>
        </h2>
      </Reveal>
    </div>
  );
}
