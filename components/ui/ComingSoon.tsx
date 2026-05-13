"use client";

import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import Link from "next/link";

interface ComingSoonProps {
  title?: string;
  body?: string;
}

export function ComingSoon({ title, body }: ComingSoonProps) {
  const c = site.comingSoon;
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
        body: JSON.stringify({ email, product: title ?? "coming-soon" }),
      });
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Decorative ring */}
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-gold-400/20 animate-ping opacity-30" />
          <div className="absolute inset-2 rounded-full border border-gold-400/30" />
          <span className="text-3xl font-mono text-gold-400">◆</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-display-lg text-cream-50">{title ?? c.headline}</h1>
          <p className="text-secondary text-lg">{body ?? c.body}</p>
        </div>

        {status === "done" ? (
          <p className="text-gold-400 font-mono text-sm">{c.success}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={c.placeholder}
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-cream-100 placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/40"
            />
            <Button type="submit" loading={status === "loading"}>
              {c.cta}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
        )}

        <Link
          href="/"
          className="inline-block text-sm text-muted-custom hover:text-secondary transition-colors"
        >
          {c.backLabel}
        </Link>
      </div>
    </main>
  );
}
