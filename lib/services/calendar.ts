// lib/services/calendar.ts
// Calendar booking abstraction — swap by editing this file only.
// Current: Cal.com embed (free tier)
// To swap to Calendly: update CAL_EMBED_URL and the component that renders it.

export const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME ?? "khushin-verdant";

export const calLinks = {
  intro: {
    url: `https://cal.com/${CAL_USERNAME}/intro`,
    label: "30-min Intro Call",
    description: "A quick call to understand your project and assess fit.",
  },
  scoping: {
    url: `https://cal.com/${CAL_USERNAME}/scoping`,
    label: "60-min Scoping Session",
    description: "A deeper session to scope your project and align on approach.",
  },
} as const;

export type CalLinkKey = keyof typeof calLinks;
