import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: string[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, options, placeholder, className, id, ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-cream-200">
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
          "text-cream-100 text-sm appearance-none cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-transparent",
          "transition-all duration-200",
          error && "border-red-500/60",
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled className="bg-forest-900">
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-forest-900">
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
});

Select.displayName = "Select";

export { Select };
