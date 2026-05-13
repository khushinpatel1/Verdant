import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  const { terms } = site;
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow className="mb-8">{terms.hero.eyebrow}</Eyebrow>
          <h1 className="text-display-xl text-cream-50 whitespace-pre-line mb-6">
            {terms.hero.headline}
          </h1>
          <p className="text-xl text-secondary leading-relaxed">{terms.hero.subheadline}</p>
          <p className="mt-6 text-xs font-mono text-muted-custom">
            Last updated: {terms.lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">
          {terms.sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-lg font-medium text-cream-50">{section.title}</h2>
              <p className="text-secondary leading-relaxed text-sm">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
