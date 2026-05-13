// ============================================================
// content/site.ts — Single source of truth for all website copy
// Change any text on the site by editing this file only.
// ============================================================

export const site = {
  name: "Verdant",
  tagline: "Software with nothing to hide.",
  description:
    "Verdant builds private-by-default software. Apps, websites, and SaaS products that respect the people who use them.",
  founder: {
    name: "Khushin Patel",
    email: "khushin@verdant.studio",
    role: "Founder",
    bio: "I started Verdant because I got tired of building products that treat users as data points. Every piece of software we build starts from the same question: what would this look like if we genuinely had nothing to hide?",
    bioExtended:
      "Before Verdant, I spent years inside companies that monetized attention and sold access to the people who trusted them. The pattern was always the same — privacy eroded in small steps, each one justified by a business reason, until nothing was left. Verdant exists to build the alternative.",
  },
  nav: {
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products/garden" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
    cta: { label: "Start a Project", href: "/contact" },
  },
  footer: {
    tagline: "Built with conviction. Held to a standard.",
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "Garden", href: "/products/garden" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "◆", href: "/products/emerald" }, // discreet Emerald link
    ],
    legal: `© ${new Date().getFullYear()} Verdant Studio. All rights reserved.`,
  },

  // ── Home ────────────────────────────────────────────────
  home: {
    hero: {
      eyebrow: "Private by default.",
      headline: "Software with\nnothing to hide.",
      subheadline:
        "We build apps, websites, and SaaS products that respect the people who use them. No surveillance. No data sales. No fine print.",
      ctas: [
        { label: "See Our Work", href: "/work", variant: "primary" as const },
        { label: "Start a Project", href: "/contact", variant: "ghost" as const },
      ],
    },
    pillars: {
      eyebrow: "What We Build",
      headline: "Three disciplines. One standard.",
      items: [
        {
          label: "Apps",
          icon: "smartphone",
          description:
            "Native and cross-platform applications built for people, not engagement metrics. Minimal permissions. Honest defaults. Nothing collecting what it doesn't need.",
        },
        {
          label: "Websites",
          icon: "globe",
          description:
            "Marketing sites, editorial platforms, and digital products. Fast, accessible, and free of trackers that report your visitors to third parties.",
        },
        {
          label: "SaaS",
          icon: "layers",
          description:
            "Software products designed to be sustainable businesses — not data harvesting operations wearing a subscription model as a disguise.",
        },
      ],
    },
    philosophy: {
      eyebrow: "Our Philosophy",
      headline: "Your data is yours.\nFull stop.",
      body: [
        "Most software makes a quiet bargain: use us for free, let us take everything you give us. Verdant doesn't make that bargain.",
        "What you give us stays between us. Sensitive data is end-to-end encrypted — Verdant doesn't hold the keys, only you do. We have no advertising business. We sell no access. We share nothing.",
        "This isn't a feature we added. It's the reason we exist.",
      ],
      stat1: { value: "0", label: "Third parties with access to your data" },
      stat2: { value: "E2E", label: "Encryption on sensitive data, always" },
      stat3: { value: "∞", label: "Years we'll uphold this — no exceptions" },
    },
    products: {
      eyebrow: "Our Products",
      headline: "Software we stand behind.",
      items: [
        {
          name: "Garden",
          slug: "garden",
          href: "/products/garden",
          category: "Personal Finance",
          tagline: "Know where your money goes. Know it stays private.",
          description:
            "A financial tracking app rebuilt from scratch with one rule: your financial data is yours alone. Verdant cannot read it, sell it, or share it.",
          status: "Waitlist open",
          accent: "#4d8b4d",
        },
        {
          name: "Emerald",
          slug: "emerald",
          href: "/products/emerald",
          category: "Coming soon",
          tagline: "Something is coming.",
          description: "We're not ready to say what it is. But it'll be worth the wait.",
          status: "Undisclosed",
          accent: "#50c878",
        },
      ],
    },
    footerCta: {
      headline: "Ready to build something honest?",
      body: "Tell us what you need. We'll tell you how we'd build it — and whether we're the right fit.",
      cta: { label: "Start a Project", href: "/contact" },
    },
  },

  // ── Work ────────────────────────────────────────────────
  work: {
    hero: {
      eyebrow: "Our Work",
      headline: "Built to last.\nBuilt with care.",
      subheadline:
        "A growing portfolio of apps, websites, and products — each one held to the same standard.",
    },
    filters: ["All", "App", "Web", "SaaS"],
    emptyState: {
      headline: "Case studies on the way.",
      body: "We're documenting our work carefully — the same way we build it. Check back soon, or reach out directly.",
      cta: { label: "Talk to Us", href: "/contact" },
    },
    projects: [] as Array<{
      title: string;
      category: "App" | "Web" | "SaaS";
      description: string;
      slug: string;
      year: string;
    }>,
  },

  // ── Services ─────────────────────────────────────────────
  services: {
    hero: {
      eyebrow: "Services",
      headline: "How we work\nwith you.",
      subheadline:
        "We take on a small number of engagements at a time. That's intentional — quality requires attention.",
    },
    tracks: [
      {
        name: "Apps",
        icon: "smartphone",
        description:
          "End-to-end application development — native iOS, Android, or cross-platform. We scope, design, engineer, and ship. Private by default, always.",
        deliverables: [
          "Product discovery & scoping",
          "UX and interface design",
          "Native or cross-platform development",
          "App Store submission & review support",
          "Ongoing maintenance & iteration",
        ],
      },
      {
        name: "Websites",
        icon: "globe",
        description:
          "Marketing sites, product pages, editorial platforms. Fast, accessible, and analytics-optional — we won't push you to install trackers.",
        deliverables: [
          "Information architecture",
          "Visual and interaction design",
          "Next.js development & CMS integration",
          "Performance & accessibility audit",
          "Launch & handoff documentation",
        ],
      },
      {
        name: "SaaS",
        icon: "layers",
        description:
          "Full-product engagements: from concept through launch and beyond. We architect for longevity, not just the demo.",
        deliverables: [
          "Product strategy & technical architecture",
          "Full-stack engineering",
          "Auth, billing, and permissions",
          "Infrastructure & deployment",
          "Growth-ready codebase — built to scale without rewriting",
        ],
      },
    ],
    process: {
      eyebrow: "How an Engagement Works",
      headline: "No surprises. No scope creep. No BS.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "A 30-minute call to understand the problem, assess fit, and be direct about whether we can help. We'll tell you if we can't.",
        },
        {
          number: "02",
          title: "Scoping",
          description:
            "A detailed proposal with timeline, deliverables, and a fixed or milestone-based price. You know exactly what you're getting before we start.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "Regular check-ins, working software early and often, and a direct line to the people building your product.",
        },
        {
          number: "04",
          title: "Launch & Beyond",
          description:
            "We don't disappear at handoff. Support, documentation, and a path forward if you want to keep building together.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      headline: "Honest pricing.\nNo hourly surprises.",
      body: "We work on fixed-scope or milestone-based engagements. No hourly billing, no invoice shock. Every project starts with a clear scope and a clear number.",
      cta: { label: "Get a Quote", href: "/contact" },
      note: "We're selective about engagements. If we're not the right fit, we'll say so — and try to point you in the right direction.",
    },
  },

  // ── Garden ───────────────────────────────────────────────
  garden: {
    hero: {
      eyebrow: "Garden by Verdant",
      headline: "Know your money.\nKeep it private.",
      subheadline:
        "A financial tracking app that shows you exactly where your money goes — and shares that with no one else. Not us. Not anyone.",
    },
    features: [
      {
        title: "End-to-end encrypted",
        description:
          "Your financial data is encrypted before it leaves your device. Verdant holds no keys. We can't read your data even if we wanted to.",
        icon: "lock",
      },
      {
        title: "No ads. Ever.",
        description:
          "Garden has no advertising model. We don't sell your spending patterns to financial companies or anyone else.",
        icon: "shield",
      },
      {
        title: "Clear spending picture",
        description:
          "Track income, expenses, and trends across accounts. Understand your money without spreadsheets.",
        icon: "bar-chart-2",
      },
      {
        title: "Budget tracking",
        description:
          "Set budgets, get notified when you're close, and see exactly where overruns happen.",
        icon: "target",
      },
      {
        title: "Privacy-first design",
        description:
          "Minimal permissions, no background data collection, and a permissions log so you always know what Garden has access to.",
        icon: "eye-off",
      },
      {
        title: "Yours, always",
        description:
          "Export your complete data any time, in a format you can actually use. No lock-in.",
        icon: "download",
      },
    ],
    privacy: {
      headline: "Your financial data is yours alone.",
      body: "We mean it technically, not just as policy. Garden encrypts your data end-to-end using keys only you hold. Verdant's servers store ciphertext we cannot read. If we were breached tomorrow, your financial data would still be safe.",
      points: [
        "Encrypted before it leaves your device",
        "Zero-knowledge architecture — we hold no decryption keys",
        "No data sold, shared, or accessible to third parties",
        "Full data export any time, any format",
      ],
    },
    waitlist: {
      headline: "Be the first to use Garden.",
      body: "We're finishing the rebuild. Join the waitlist and we'll reach out before public launch.",
      placeholder: "your@email.com",
      cta: "Join the Waitlist",
      success: "You're on the list. We'll be in touch.",
    },
    appStore: {
      headline: "Coming to iOS and Android.",
      body: "Garden will be available on the App Store and Google Play. We're not rushing it.",
      ios: { label: "App Store", status: "coming-soon" as const },
      android: { label: "Google Play", status: "coming-soon" as const },
    },
  },

  // ── Emerald ──────────────────────────────────────────────
  emerald: {
    codename: "EMERALD",
    line: "The most private thing about it is what it does.",
    capture: {
      headline: "Be the first to know.",
      placeholder: "your@email.com",
      cta: "Notify Me",
      success: "We'll be in touch.",
    },
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    hero: {
      eyebrow: "About Verdant",
      headline: "We build software\nwe'd want to use.",
    },
    origin: {
      headline: "Why Verdant exists.",
      body: [
        "We started Verdant because we got tired of building products that treat users as data points. Behind every \"free\" app is a trade you didn't fully agree to. Behind every convenience feature is a system that knows more about you than it should.",
        "Verdant exists to build the alternative. Software that earns money by being genuinely useful — not by selling access to the people who trust it.",
        "We're a small studio. We take on a small number of clients. We build things carefully and we stand behind what we ship.",
      ],
    },
    values: [
      {
        title: "Privacy is a design constraint, not a feature",
        description:
          "We don't add privacy at the end. It shapes every architectural decision from the start. If we can't build it privately, we rethink the design.",
      },
      {
        title: "Quality over quantity",
        description:
          "We'd rather build one thing right than ten things fast. This applies to client work and our own products.",
      },
      {
        title: "Honesty in all directions",
        description:
          "With clients about what we can and can't do. With users about what their software does. With ourselves about where we've fallen short.",
      },
      {
        title: "Small and deliberate",
        description:
          "We're not trying to scale to hundreds of employees. A small, excellent team produces better work than a large, distracted one.",
      },
    ],
    founder: {
      eyebrow: "The Founder",
    },
    cta: {
      headline: "If this resonates, let's talk.",
      body: "We work with people who care about what they build and who they're building it for.",
      cta: { label: "Get in Touch", href: "/contact" },
    },
  },

  // ── Blog ──────────────────────────────────────────────────
  blog: {
    hero: {
      eyebrow: "Blog",
      headline: "Thinking out loud.",
      subheadline:
        "Notes on software, privacy, design, and building a studio the right way.",
    },
    comingSoon: {
      headline: "First posts on the way.",
      body: "We write when we have something worth saying. Subscribe and we'll let you know when that is.",
      placeholder: "your@email.com",
      cta: "Notify Me",
      success: "We'll reach out when we publish.",
    },
  },

  // ── Careers ───────────────────────────────────────────────
  careers: {
    hero: {
      eyebrow: "Careers",
      headline: "We build carefully.\nIf you do too,\nwe'd like to know you.",
      subheadline:
        "No open roles right now — but we're always interested in meeting people who care about the craft.",
    },
    openings: [] as Array<{
      title: string;
      type: string;
      description: string;
    }>,
    openApplication: {
      headline: "No role that fits? Tell us anyway.",
      body: "We'd rather hear from the right person at the wrong time than miss them entirely. Send us something that shows how you think.",
      fields: {
        name: "Your Name",
        email: "Email",
        role: "What kind of work do you do?",
        message: "Tell us about yourself and what you'd want to build here.",
        messagePlaceholder:
          "What do you care about? What have you built that you're proud of?",
        cta: "Send Application",
        success:
          "Got it. We read everything carefully and we'll reach out if there's a fit.",
      },
    },
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    hero: {
      eyebrow: "Start a Project",
      headline: "Let's build\nsomething honest.",
      subheadline:
        "Fill out the form and we'll respond within one business day. If you'd rather talk first, book a call below.",
    },
    form: {
      fields: {
        name: "Name",
        email: "Email",
        projectType: {
          label: "Project Type",
          options: [
            "App Development",
            "Website",
            "SaaS Product",
            "Not Sure Yet",
          ],
        },
        budget: {
          label: "Budget Range",
          options: [
            "Under $10k",
            "$10k – $25k",
            "$25k – $75k",
            "$75k – $150k",
            "$150k+",
            "Let's discuss",
          ],
        },
        message: "Tell us about the project",
        messagePlaceholder:
          "What are you building? What problem does it solve? What's the timeline?",
        cta: "Send Message",
        success:
          "Message received. We'll be in touch within one business day.",
      },
    },
    info: {
      responseTime: "Typical response: within 1 business day",
      email: "khushin@verdant.studio",
      booking: {
        headline: "Prefer to talk first?",
        body: "Book a 30-minute intro call or 60-minute scoping session.",
      },
    },
  },

  // ── Privacy ───────────────────────────────────────────────
  privacy: {
    hero: {
      eyebrow: "Privacy Policy",
      headline: "What we collect.\nWhat we don't.",
      subheadline: "Written in plain language. No legalese.",
    },
    lastUpdated: "May 2025",
    sections: [
      {
        title: "The short version",
        content:
          "We collect the minimum information needed to run our business. We don't sell it, share it with advertisers, or use it for anything beyond operating and improving our services. Sensitive data in our products is end-to-end encrypted — we can't read it and we don't try.",
      },
      {
        title: "What we collect",
        content:
          "Contact information when you reach out (name, email, message). Usage information for our website (page views, referrers — via Plausible, which is cookieless and stores no personal data). Payment information when you become a client (processed by Stripe; we never see your card number).",
      },
      {
        title: "What we don't collect",
        content:
          "We don't run advertising trackers on our site. We don't use Facebook Pixel, Google Analytics, or any tool that reports your behavior to third parties. We don't build user profiles. We don't collect data we don't need.",
      },
      {
        title: "Your rights",
        content:
          "You can ask us what data we have on you, request deletion, or ask us to correct anything at any time. Email khushin@verdant.studio and we'll respond promptly.",
      },
      {
        title: "Product data",
        content:
          "Data you enter into Verdant products (like Garden) is end-to-end encrypted. We hold no decryption keys. We cannot read your data even if asked to. Our servers store only the encrypted form.",
      },
      {
        title: "Contact",
        content:
          "Questions about this policy? Email khushin@verdant.studio. We're a small team — you'll hear from a real person.",
      },
    ],
  },

  // ── Terms ─────────────────────────────────────────────────
  terms: {
    hero: {
      eyebrow: "Terms of Service",
      headline: "The rules.\nKept simple.",
      subheadline: "Honest terms that don't require a lawyer to read.",
    },
    lastUpdated: "May 2025",
    sections: [
      {
        title: "What this covers",
        content:
          "These terms govern your use of the Verdant website and any Verdant products or services you access. By using our services, you agree to these terms.",
      },
      {
        title: "What you can expect from us",
        content:
          "We'll build and maintain the software we describe. We'll tell you about significant changes before they happen. We'll handle your data according to our Privacy Policy. We'll be honest with you about what's working and what isn't.",
      },
      {
        title: "What we expect from you",
        content:
          "Use our services for lawful purposes. Don't attempt to access systems you're not authorized to access. Don't use our products to harm other people.",
      },
      {
        title: "Availability and changes",
        content:
          "We work hard to keep our services running but can't guarantee 100% uptime. We may update our products and these terms over time — we'll notify you of material changes.",
      },
      {
        title: "Liability",
        content:
          "We're not liable for indirect or consequential damages arising from use of our services. Our total liability is limited to what you've paid us in the past twelve months.",
      },
      {
        title: "Ending the relationship",
        content:
          "You can stop using our services at any time. If you're a client, your contract governs the terms of ending that engagement. We'll provide your data in an exportable format upon request.",
      },
      {
        title: "Questions",
        content:
          "Reach us at khushin@verdant.studio. We'd rather answer a question than have you confused about what we're agreeing to.",
      },
    ],
  },

  // ── Coming Soon (shared) ──────────────────────────────────
  comingSoon: {
    headline: "In the works.",
    body: "This page is coming soon. Subscribe to hear when it's live.",
    placeholder: "your@email.com",
    cta: "Notify Me",
    success: "We'll let you know.",
    backLabel: "← Back home",
  },
};

export type SiteContent = typeof site;
