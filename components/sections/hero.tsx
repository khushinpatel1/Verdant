'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Work',     href: '/work'           },
  { label: 'Services', href: '/services'        },
  { label: 'Products', href: '/products/garden' },
  { label: 'About',    href: '/about'           },
  { label: 'Blog',     href: '/blog'            },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-14 h-[62px] bg-moss border-b border-sage/[0.08] transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_28px_rgba(35,44,38,0.22)]' : ''
      }`}
    >
      <Link
        href="/"
        className="font-serif text-[1.1875rem] text-cream tracking-[-0.015em] transition-opacity duration-200 hover:opacity-80"
      >
        Verdant
      </Link>

      <ul className="flex items-center gap-8 list-none">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="hover-line font-sans text-sm text-sage-mid hover:text-sage tracking-[0.005em] transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="font-sans text-[0.8125rem] font-medium text-moss bg-cream hover:bg-sage-light px-5 py-2 rounded-full tracking-[0.01em] transition-colors duration-200"
      >
        Start a Project
      </Link>
    </nav>
  )
}
