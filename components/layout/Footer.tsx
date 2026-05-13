import { site } from "@/content/site";
import Link from "next/link";

export function Footer() {
  const { footer } = site;

  // Separate the discreet Emerald link (◆) from regular links
  const regularLinks = footer.links.filter((l) => l.label !== "◆");
  const emeraldLink = footer.links.find((l) => l.label === "◆");

  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <Link
              href="/"
              className="text-cream-50 font-mono text-sm font-medium tracking-[0.1em] uppercase hover:text-gold-400 transition-colors"
            >
              Verdant
            </Link>
            <p className="text-secondary text-sm leading-relaxed">{footer.tagline}</p>
            <p className="text-muted-custom text-xs font-mono">{footer.legal}</p>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-3">
            {regularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-secondary hover:text-cream-100 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Discreet Emerald link — bottom right, nearly invisible */}
        {emeraldLink && (
          <div className="mt-8 flex justify-end">
            <Link
              href={emeraldLink.href}
              className="text-xs text-muted-custom/40 hover:text-muted-custom transition-colors duration-500 font-mono select-none"
              title=""
            >
              {emeraldLink.label}
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}
