type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={`max-w-xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wider ${
            isDark
              ? "border-white/20 bg-white/10 text-primary"
              : "border-line bg-surface-alt text-secondary-dark"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${isDark ? "text-white/70" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
