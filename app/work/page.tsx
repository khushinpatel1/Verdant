"use client";

import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const filters = site.work.filters;

export default function WorkPage() {
  const { work } = site;
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? work.projects
      : work.projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Eyebrow className="mb-8">{work.hero.eyebrow}</Eyebrow>
            <h1 className="text-display-xl text-cream-50 whitespace-pre-line mb-6">
              {work.hero.headline}
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              {work.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-mono transition-all duration-200 ${
                  active === f
                    ? "bg-forest-700 text-cream-50 border border-forest-500"
                    : "bg-transparent text-secondary border border-white/10 hover:border-white/20 hover:text-cream-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid / Empty State */}
      <section className="py-16 md:py-24 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-24 text-center space-y-6"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
              <h2 className="text-2xl text-cream-100">{work.emptyState.headline}</h2>
              <p className="text-secondary max-w-md">{work.emptyState.body}</p>
              <Button href={work.emptyState.cta.href} variant="ghost">
                {work.emptyState.cta.label} <ArrowRight size={14} />
              </Button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/6 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-muted-custom uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-custom">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-medium text-cream-50 mb-3">{project.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{project.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-mono text-muted-custom group-hover:text-gold-400 transition-colors">
                    View case study <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
