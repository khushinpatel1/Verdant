"use client";

import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  role: string;
  message: string;
}

export default function CareersPage() {
  const { careers } = site;
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/careers", {
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
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Eyebrow className="mb-8">{careers.hero.eyebrow}</Eyebrow>
            <h1 className="text-display-xl text-cream-50 whitespace-pre-line mb-6">
              {careers.hero.headline}
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              {careers.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* No current openings */}
      {careers.openings.length === 0 && (
        <section className="py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="py-10 px-8 rounded-2xl border border-white/6 bg-white/[0.02] max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-custom mb-3">
                Open Roles
              </p>
              <p className="text-secondary text-sm">
                No open roles at the moment. We hire deliberately and only when it's the right fit.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Open application */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-display-md text-cream-50">
                {careers.openApplication.headline}
              </h2>
              <p className="text-secondary leading-relaxed">
                {careers.openApplication.body}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {status === "done" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-forest-800 flex items-center justify-center mx-auto">
                    <span className="text-gold-400 text-xl">✓</span>
                  </div>
                  <p className="text-cream-100 font-medium">Application received.</p>
                  <p className="text-secondary text-sm">
                    {careers.openApplication.fields.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <Input
                    id="name"
                    label={careers.openApplication.fields.name}
                    placeholder="Your name"
                    error={errors.name?.message}
                    {...register("name", { required: "Name is required" })}
                  />
                  <Input
                    id="email"
                    type="email"
                    label={careers.openApplication.fields.email}
                    placeholder="your@email.com"
                    error={errors.email?.message}
                    {...register("email", { required: "Email is required" })}
                  />
                  <Input
                    id="role"
                    label={careers.openApplication.fields.role}
                    placeholder="Design, engineering, something else..."
                    error={errors.role?.message}
                    {...register("role", { required: "Please describe your work" })}
                  />
                  <Textarea
                    id="message"
                    label={careers.openApplication.fields.message}
                    placeholder={careers.openApplication.fields.messagePlaceholder}
                    rows={6}
                    error={errors.message?.message}
                    {...register("message", { required: "Tell us about yourself" })}
                  />
                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Try again or email directly.
                    </p>
                  )}
                  <Button
                    type="submit"
                    loading={status === "loading"}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {careers.openApplication.fields.cta}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
