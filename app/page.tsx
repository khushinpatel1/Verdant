"use client";

import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Smartphone, Globe, Layers, Lock, ShieldCheck,
  ArrowRight, Zap
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  globe: Globe,
  layers: Layers,
  lock: Lock,
  shield: ShieldCheck,
  zap: Zap,
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeItem = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay: i * 0.1 },
});

export default function HomePage() {
  const { home } = site;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background radial gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(36,61,36,0.6) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
          <div className="max-w-4xl">
            <motion.div {...fadeItem(0)}>
              <Eyebrow className="mb-8">{home.hero.eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              {...fadeItem(1)}
              className="text-display-2xl text-cream-50 whitespace-pre-line text-balance mb-8"
            >
              {home.hero.headline}
            </motion.h1>

            <motion.p
              {...fadeItem(2)}
              className="text-xl text-secondary leading-relaxed max-w-2xl mb-12"
            >
              {home.hero.subheadline}
            </motion.p>

            <motion.div
              {...fadeItem(3)}
              className="flex flex-wrap gap-4"
            >
              {home.hero.ctas.map((cta) => (
                <Button key={cta.href} href={cta.href} variant={cta.variant} size="lg">
                  {cta.label}
                  {cta.variant === "primary" && <ArrowRight size={16} />}
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
          </motion.div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-gold-400 mb-4">
              {home.pillars.eyebrow}
            </p>
            <h2 className="text-display-lg text-cream-50">
              {home.pillars.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {home.pillars.items.map((pillar) => {
              const Icon = iconMap[pillar.icon] ?? Globe;
              return (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-forest-950 p-8 md:p-10 group hover:bg-forest-900/60 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-forest-800 flex items-center justify-center mb-6 group-hover:bg-forest-700 transition-colors">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <h3 className="text-lg font-medium text-cream-50 mb-3">
                    {pillar.label}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-gold-400">
                {home.philosophy.eyebrow}
              </p>
              <h2 className="text-display-lg text-cream-50 whitespace-pre-line">
                {home.philosophy.headline}
              </h2>
              <div className="space-y-4">
                {home.philosophy.body.map((para, i) => (
                  <p key={i} className="text-secondary leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="space-y-6"
            >
              {[home.philosophy.stat1, home.philosophy.stat2, home.philosophy.stat3].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-6 p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <span className="text-4xl font-mono font-light text-gold-400 min-w-[4rem]">
                    {stat.value}
                  </span>
                  <span className="text-secondary text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-gold-400 mb-4">
              {home.products.eyebrow}
            </p>
            <h2 className="text-display-lg text-cream-50">
              {home.products.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {home.products.items.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={product.href}
                  className="group block h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 no-underline"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-xs font-mono text-muted-custom uppercase tracking-widest mb-2">
                        {product.category}
                      </p>
                      <h3 className="text-2xl font-medium text-cream-50">
                        {product.name}
                      </h3>
                    </div>
                    <span
                      className="text-xs font-mono px-3 py-1.5 rounded-full border"
                      style={{ color: product.accent, borderColor: `${product.accent}40` }}
                    >
                      {product.status}
                    </span>
                  </div>
                  <p className="text-lg font-light text-cream-200 mb-4 no-underline">
                    {product.tagline}
                  </p>
                  <p className="text-secondary text-sm leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-cream-200 group-hover:text-gold-400 transition-colors duration-200">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-display-lg text-cream-50">
              {home.footerCta.headline}
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
              {home.footerCta.body}
            </p>
            <Button href={home.footerCta.cta.href} variant="gold" size="lg">
              {home.footerCta.cta.label}
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
