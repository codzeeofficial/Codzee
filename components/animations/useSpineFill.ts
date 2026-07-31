'use client'

import { useEffect, useRef, useState } from 'react'

interface SpineFillResult {
  containerRef: React.RefObject<HTMLElement | null>
  fillProgress: number
}

export function useSpineFill(): SpineFillResult {
  const containerRef = useRef<HTMLElement | null>(null)
  const [fillProgress, setFillProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const total = rect.height + viewportHeight
      const scrolled = viewportHeight - rect.top
      const progress = Math.min(1, Math.max(0, scrolled / total))
      setFillProgress(progress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { containerRef, fillProgress }
}