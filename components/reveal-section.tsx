'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  stagger?: boolean
  as?: 'section' | 'div' | 'article'
}

export default function RevealSection({
  children,
  className = '',
  stagger = false,
  as: Tag = 'section',
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          // propagate to any stagger children wrappers inside
          el.querySelectorAll<HTMLElement>('.reveal-stagger').forEach(s =>
            s.classList.add('in-view')
          )
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLDivElement>}
      className={`reveal ${stagger ? 'reveal-stagger' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

