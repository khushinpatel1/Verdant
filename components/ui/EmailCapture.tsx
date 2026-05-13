"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface EmailCaptureProps {
  product: string;
  placeholder?: string;
  cta?: string;
  successMessage?: string;
  className?: string;
  align?: "left" | "center";
}

export function EmailCapture({
  product,
  placeholder = "your@email.com",
  cta = "Notify Me",
  successMessage = "You're on the list.",
  className,
  align = "left",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className={cn("text-gold-400 font-mono text-sm", align === "center" && "text-center", className)}>
        {successMessage}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex gap-3",
        align === "center" && "justify-center",
        className
      )}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 max-w-xs px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-cream-100 placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-transparent transition-all"
      />
      <Button type="submit" loading={status === "loading"}>
        {cta}
      </Button>
      {status === "error" && (
        <span className="self-center text-xs text-red-400">Try again.</span>
      )}
    </form>
  );
}
