// lib/services/analytics.ts
// Analytics abstraction — swap by editing this file only.
// Current: Plausible (privacy-first, cookieless)
// To swap to Fathom or self-hosted Plausible: update the script src and trackEvent impl.

export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "verdant.studio";
export const PLAUSIBLE_SCRIPT = "https://plausible.io/js/script.js";

// Client-side event tracking — called from components
export function trackEvent(eventName: string, props?: Record<string, string>): void {
  if (typeof window === "undefined") return;
  // @ts-expect-error Plausible global
  if (typeof window.plausible !== "function") return;
  // @ts-expect-error Plausible global
  window.plausible(eventName, props ? { props } : undefined);
}

// Convenience events
export const analytics = {
  trackWaitlistSignup: (product: string) => trackEvent("Waitlist Signup", { product }),
  trackContactSubmit: () => trackEvent("Contact Form Submitted"),
  trackCareerSubmit: () => trackEvent("Career Application Submitted"),
  trackBlogSubscribe: () => trackEvent("Blog Subscription"),
};
