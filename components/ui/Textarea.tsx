import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, className, id, ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-cream-200">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
          "text-cream-100 placeholder:text-white/30 text-sm",
          "focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-transparent",
          "transition-all duration-200 resize-none",
          error && "border-red-500/60 focus:ring-red-500/30",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
