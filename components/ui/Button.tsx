"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

type Variant = "primary" | "ghost" | "outline" | "gold";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest-600 text-cream-50 hover:bg-forest-500 border border-forest-500 hover:border-forest-400",
  ghost:
    "bg-transparent text-cream-100 hover:bg-white/5 border border-white/12",
  outline:
    "bg-transparent text-cream-100 hover:bg-white/5 border border-white/20 hover:border-white/40",
  gold:
    "bg-transparent text-gold-300 hover:bg-gold-400/10 border border-gold-400/40 hover:border-gold-400/70",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 tracking-wide cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/50 disabled:opacity-50 disabled:cursor-not-allowed";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    href,
    external,
    loading,
    className,
    children,
    disabled,
    ...props
  },
  ref
) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
export type { ButtonProps, Variant as ButtonVariant };
