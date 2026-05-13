"use client";

import { site } from "@/content/site";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { motion } from "framer-motion";
import type { Metadata } from "next";

export default function EmeraldPage() {
  const { emerald } = site;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Deep dark background with emerald tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(80,200,120,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Subtle animated ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full border border-emerald-accent/5 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full border border-emerald-accent/5 animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-md w-full mx-auto px-6 text-center space-y-12">
        {/* Codename */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-10"
            style={{ color: "rgba(80,200,120,0.4)" }}
          >
            {emerald.codename}
          </p>

          {/* The single cryptic line */}
          <p className="text-2xl md:text-3xl font-light text-cream-100 leading-relaxed tracking-tight">
            {emerald.line}
          </p>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px mx-auto"
          style={{ background: "rgba(80,200,120,0.3)" }}
        />

        {/* Email capture */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <p className="text-sm text-secondary">{emerald.capture.headline}</p>
          <EmailCapture
            product="emerald"
            placeholder={emerald.capture.placeholder}
            cta={emerald.capture.cta}
            successMessage={emerald.capture.success}
            align="center"
          />
        </motion.div>
      </div>
    </div>
  );
}
