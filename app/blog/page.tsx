"use client";

import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { motion } from "framer-motion";

export default function BlogPage() {
  const { blog } = site;

  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Eyebrow className="mb-8">{blog.hero.eyebrow}</Eyebrow>
            <h1 className="text-display-xl text-cream-50 mb-6">
              {blog.hero.headline}
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              {blog.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg space-y-6"
          >
            <div className="w-12 h-px bg-gold-400/40" />
            <h2 className="text-2xl text-cream-50">{blog.comingSoon.headline}</h2>
            <p className="text-secondary">{blog.comingSoon.body}</p>
            <EmailCapture
              product="blog"
              placeholder={blog.comingSoon.placeholder}
              cta={blog.comingSoon.cta}
              successMessage={blog.comingSoon.success}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
