import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  contained?: boolean;
}

export function Section({ children, className, id, contained = true }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      {contained ? (
        <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = "left",
  className,
}: {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-mono uppercase tracking-[0.15em] text-gold-400 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-display-lg text-cream-50 text-balance whitespace-pre-line">
        {headline}
      </h2>
      {subheadline && (
        <p className="mt-6 text-lg text-secondary leading-relaxed">{subheadline}</p>
      )}
    </div>
  );
}
