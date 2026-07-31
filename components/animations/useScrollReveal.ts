'use client'

import { useEffect, useRef, useState } from 'react'

type RevealRole = 'heading' | 'body'

interface ScrollRevealResult {
  ref: React.RefObject<HTMLElement | null>
  isVisible: boolean
}

export function useScrollReveal(role: RevealRole = 'body'): ScrollRevealResult {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [role])

  return { ref, isVisible }
}