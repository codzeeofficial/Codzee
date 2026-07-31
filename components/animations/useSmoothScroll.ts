'use client'

import { useEffect } from 'react'

export function useSmoothScroll(): void {
  useEffect(() => {
    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'smooth'

    return () => {
      root.style.scrollBehavior = previousBehavior
    }
  }, [])
}