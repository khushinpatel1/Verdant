"use client";

import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { motion } from "framer-motion";
import {
  Lock, Shield, BarChart2, Target, EyeOff, Download,
  CheckCircle2, Apple, Smartphone
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  lock: Lock,
  shield: Shield,
  "bar-chart-2": BarChart2,
  target: Target,
  "eye-off": EyeOff,
  download: Download,
};

export default function GardenPage() {
  const { garden } = site;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(36,61,36,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Eyebrow className="mb-8">{garden.hero.eyebrow}</Eyebrow>
            <h1 className="text-display-xl text-cream-50 whitespace-pre-line mb-6">
              {garden.hero.headline}
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              {garden.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {garden.features.map((feature, i) => {
              const Icon = iconMap[feature.icon] ?? Lock;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-7 rounded-2xl border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-forest-800 flex items-center justify-center mb-5">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <h3 className="text-base font-medium text-cream-50 mb-2">{feature.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-gold-400 mb-8">
            Screenshots
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-[9/16] rounded-2xl border border-white/6 bg-forest-900/40 flex items-center justify-center"
              >
                <span className="text-xs font-mono text-muted-custom">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center mb-8">
              <Lock size={20} className="text-gold-400" />
            </div>
            <h2 className="text-display-md text-cream-50 mb-6">
              {garden.privacy.headline}
            </h2>
            <p className="text-secondary leading-relaxed mb-8">
              {garden.privacy.body}
            </p>
            <ul className="space-y-3">
              {garden.privacy.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-gold-400 shrink-0" />
                  <span className="text-sm text-secondary">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg space-y-6"
          >
            <h2 className="text-display-md text-cream-50">{garden.waitlist.headline}</h2>
            <p className="text-secondary">{garden.waitlist.body}</p>
            <EmailCapture
              product="garden"
              placeholder={garden.waitlist.placeholder}
              cta={garden.waitlist.cta}
              successMessage={garden.waitlist.success}
            />
          </motion.div>
        </div>
      </section>

      {/* App Store badges */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-secondary mb-6">{garden.appStore.headline}</p>
          <p className="text-xs text-muted-custom mb-8">{garden.appStore.body}</p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Apple, label: garden.appStore.ios.label },
              { icon: Smartphone, label: garden.appStore.android.label },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 opacity-50 cursor-not-allowed select-none"
              >
                <Icon size={18} className="text-cream-200" />
                <span className="text-sm text-cream-200">{label}</span>
                <span className="text-xs font-mono text-muted-custom">(coming soon)</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
