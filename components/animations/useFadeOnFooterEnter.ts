'use client'

import { useEffect, useState } from 'react'

export function useFadeOnFooterEnter(footerId: string): boolean {
  const [shouldFade, setShouldFade] = useState(false)

  useEffect(() => {
    const footer = document.getElementById(footerId)
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldFade(entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [footerId])

  return shouldFade
}