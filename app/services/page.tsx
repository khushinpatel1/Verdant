"use client";

import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Smartphone, Globe, Layers, CheckCircle2, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  globe: Globe,
  layers: Layers,
};

export default function ServicesPage() {
  const { services } = site;

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
            <Eyebrow className="mb-8">{services.hero.eyebrow}</Eyebrow>
            <h1 className="text-display-xl text-cream-50 whitespace-pre-line mb-6">
              {services.hero.headline}
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              {services.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tracks */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {services.tracks.map((track, i) => {
            const Icon = iconMap[track.icon] ?? Globe;
            return (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/6 bg-white/[0.02] p-8 md:p-12"
              >
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-10">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center mb-6">
                      <Icon size={20} className="text-gold-400" />
                    </div>
                    <h2 className="text-2xl font-medium text-cream-50 mb-4">{track.name}</h2>
                    <p className="text-secondary leading-relaxed">{track.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-custom mb-5">
                      What's included
                    </p>
                    <ul className="space-y-3">
                      {track.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-gold-400 mt-0.5 shrink-0" />
                          <span className="text-secondary text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-gold-400 mb-4">
              {services.process.eyebrow}
            </p>
            <h2 className="text-display-lg text-cream-50">{services.process.headline}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.process.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-mono font-light text-forest-700 mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg font-medium text-cream-50 mb-3">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
                {i < services.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-6 flex items-center">
                    <ArrowRight size={14} className="text-forest-600 -translate-x-1/2" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-gold-400 mb-4">
              {services.pricing.eyebrow}
            </p>
            <h2 className="text-display-lg text-cream-50 whitespace-pre-line mb-6">
              {services.pricing.headline}
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              {services.pricing.body}
            </p>
            <Button href={services.pricing.cta.href} variant="gold" size="lg">
              {services.pricing.cta.label} <ArrowRight size={16} />
            </Button>
            <p className="mt-6 text-sm text-muted-custom">{services.pricing.note}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
