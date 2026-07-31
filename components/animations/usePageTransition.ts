'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

interface PageTransitionResult {
  navigate: (href: string) => void
  isPending: boolean
}

export function usePageTransition(): PageTransitionResult {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [, setLastHref] = useState<string | null>(null)

  const navigate = (href: string) => {
    setLastHref(href)
    startTransition(() => {
      router.push(href)
    })
  }

  return { navigate, isPending }
}