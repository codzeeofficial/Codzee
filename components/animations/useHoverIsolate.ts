'use client'

import { useState } from 'react'

interface HoverIsolateResult {
  activeId: string | null
  onHoverStart: (id: string) => void
  onHoverEnd: () => void
  isDimmed: (id: string) => boolean
}

export function useHoverIsolate(): HoverIsolateResult {
  const [activeId, setActiveId] = useState<string | null>(null)

  const onHoverStart = (id: string) => setActiveId(id)
  const onHoverEnd = () => setActiveId(null)
  const isDimmed = (id: string) => activeId !== null && activeId !== id

  return { activeId, onHoverStart, onHoverEnd, isDimmed }
}