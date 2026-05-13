"use client";

import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { calLinks } from "@/lib/services/calendar";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, Clock, ExternalLink } from "lucide-react";

interface FormValues {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export default function ContactPage() {
  const { contact } = site;
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Eyebrow className="mb-8">{contact.hero.eyebrow}</Eyebrow>
            <h1 className="text-display-xl text-cream-50 whitespace-pre-line mb-6">
              {contact.hero.headline}
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              {contact.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {status === "done" ? (
                <div className="py-16 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-forest-800 flex items-center justify-center">
                    <span className="text-gold-400 text-xl">✓</span>
                  </div>
                  <h2 className="text-2xl text-cream-50">Message received.</h2>
                  <p className="text-secondary">{contact.form.fields.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      id="name"
                      label={contact.form.fields.name}
                      placeholder="Your name"
                      error={errors.name?.message}
                      {...register("name", { required: "Required" })}
                    />
                    <Input
                      id="email"
                      type="email"
                      label={contact.form.fields.email}
                      placeholder="your@email.com"
                      error={errors.email?.message}
                      {...register("email", { required: "Required" })}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Select
                      id="projectType"
                      label={contact.form.fields.projectType.label}
                      options={contact.form.fields.projectType.options}
                      placeholder="Select type..."
                      error={errors.projectType?.message}
                      {...register("projectType", { required: "Required" })}
                    />
                    <Select
                      id="budget"
                      label={contact.form.fields.budget.label}
                      options={contact.form.fields.budget.options}
                      placeholder="Select range..."
                      error={errors.budget?.message}
                      {...register("budget", { required: "Required" })}
                    />
                  </div>
                  <Textarea
                    id="message"
                    label={contact.form.fields.message}
                    placeholder={contact.form.fields.messagePlaceholder}
                    rows={6}
                    error={errors.message?.message}
                    {...register("message", { required: "Required" })}
                  />
                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Email us directly at{" "}
                      <a href={`mailto:${contact.info.email}`} className="underline">
                        {contact.info.email}
                      </a>
                    </p>
                  )}
                  <Button type="submit" loading={status === "loading"} size="lg">
                    {contact.form.fields.cta}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Response time */}
              <div className="flex items-center gap-3 text-sm text-secondary">
                <Clock size={16} className="text-gold-400 shrink-0" />
                {contact.info.responseTime}
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold-400 shrink-0" />
                <a
                  href={`mailto:${contact.info.email}`}
                  className="text-sm text-cream-200 hover:text-gold-400 transition-colors font-mono"
                >
                  {contact.info.email}
                </a>
              </div>

              {/* Booking */}
              <div className="pt-6 border-t border-white/6 space-y-5">
                <div>
                  <p className="text-sm font-medium text-cream-100 mb-1">
                    {contact.info.booking.headline}
                  </p>
                  <p className="text-xs text-secondary">{contact.info.booking.body}</p>
                </div>
                {Object.values(calLinks).map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200 group"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-cream-100 group-hover:text-gold-400 transition-colors">
                        {link.label}
                      </p>
                      <p className="text-xs text-secondary mt-1">{link.description}</p>
                    </div>
                    <ExternalLink size={14} className="text-muted-custom mt-0.5 group-hover:text-gold-400 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
