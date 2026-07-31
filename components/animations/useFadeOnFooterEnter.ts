'use client'

import { useEffect, useRef, useState } from 'react'

interface FadeOnFooterEnterResult {
  footerRef: React.RefObject<HTMLElement | null>
  shouldFade: boolean
}

export function useFadeOnFooterEnter(): FadeOnFooterEnterResult {
  const footerRef = useRef<HTMLElement | null>(null)
  const [shouldFade, setShouldFade] = useState(false)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldFade(entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return { footerRef, shouldFade }
}