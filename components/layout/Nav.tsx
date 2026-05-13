"use client";

import { site } from "@/content/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-forest-950/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-cream-50 font-mono text-sm font-medium tracking-[0.1em] uppercase hover:text-gold-400 transition-colors duration-200"
          >
            Verdant
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {site.nav.links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm transition-colors duration-200",
                      active
                        ? "text-cream-100 bg-white/5"
                        : "text-secondary hover:text-cream-100 hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href={site.nav.cta.href} variant="gold" size="sm">
              {site.nav.cta.label}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-secondary hover:text-cream-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-forest-950/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-2">
          {site.nav.links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-light text-cream-100 py-3 hover:text-gold-400 transition-colors"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6">
            <Button href={site.nav.cta.href} variant="gold" size="lg">
              {site.nav.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
