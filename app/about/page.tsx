"use client";

import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const { about, founder } = site;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Eyebrow className="mb-8">{about.hero.eyebrow}</Eyebrow>
            <h1 className="text-display-xl text-cream-50 whitespace-pre-line">
              {about.hero.headline}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-display-md text-cream-50 mb-8">{about.origin.headline}</h2>
              <div className="space-y-5">
                {about.origin.body.map((para, i) => (
                  <p key={i} className="text-secondary leading-relaxed">{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {about.values.map((value, i) => (
                <div
                  key={value.title}
                  className="p-6 rounded-xl border border-white/6 bg-white/[0.02]"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-gold-400 mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="text-sm font-medium text-cream-100 mb-2">{value.title}</h3>
                      <p className="text-xs text-secondary leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-gold-400 mb-10">
            {about.founder.eyebrow}
          </p>
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-square rounded-2xl border border-white/6 bg-forest-900/40 flex items-center justify-center"
            >
              <span className="text-xs font-mono text-muted-custom">Photo coming</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-medium text-cream-50">{founder.name}</h2>
                <p className="text-sm text-gold-400 font-mono mt-1">{founder.role}</p>
              </div>
              <p className="text-secondary leading-relaxed">{founder.bio}</p>
              <p className="text-secondary leading-relaxed">{founder.bioExtended}</p>
              <a
                href={`mailto:${founder.email}`}
                className="inline-flex text-sm font-mono text-muted-custom hover:text-cream-100 transition-colors"
              >
                {founder.email}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl space-y-6"
          >
            <h2 className="text-display-md text-cream-50">{about.cta.headline}</h2>
            <p className="text-secondary">{about.cta.body}</p>
            <Button href={about.cta.cta.href} variant="gold" size="lg">
              {about.cta.cta.label} <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
