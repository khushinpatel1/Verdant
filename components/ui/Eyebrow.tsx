import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  accent?: "gold" | "emerald" | "default";
}

const accentClasses = {
  gold: "text-gold-400 border-gold-400/30",
  emerald: "text-emerald-accent border-emerald-accent/30",
  default: "text-forest-400 border-forest-600/50",
};

export function Eyebrow({ children, className, accent = "gold" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em]",
        "border px-3 py-1.5 rounded-full",
        accentClasses[accent],
        className
      )}
    >
      {children}
    </span>
  );
}
