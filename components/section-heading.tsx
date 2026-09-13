import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  index?: string;
  light?: boolean;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  index,
  light = false,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`mb-4 flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
      >
        {index ? (
          <span className="font-display text-sm tracking-[0.28em] text-gold">
            {index}
          </span>
        ) : null}
        <p className="ornament font-sans text-[0.68rem] text-gold">{eyebrow}</p>
      </div>
      <h2
        className={`font-display text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl lg:text-6xl ${
          light ? "text-ink" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-ink/70" : "text-cream/72"
          }`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
