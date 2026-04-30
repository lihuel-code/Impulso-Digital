type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${invert ? "!text-brand-300" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`display text-3xl md:text-5xl mt-4 ${
          invert ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            invert ? "text-ink-200" : "text-ink-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
