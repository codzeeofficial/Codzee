'use client'

import Link from 'next/link'
import { useFadeOnFooterEnter } from '@/components/animations/useFadeOnFooterEnter'
import { ROUTES } from '@/lib/constants/routes'
import { globalContent } from '@/data/pages/global'
import styles from './ImmersiveNav.module.css'

interface ImmersiveNavProps {
  liveUrl?: string
}

export default function ImmersiveNav({ liveUrl }: ImmersiveNavProps) {
  const shouldFade = useFadeOnFooterEnter('site-footer')

  return (
    <nav className={styles.nav}>
      <Link href={ROUTES.home} className={styles.logo}>
        {globalContent.footer.wordmark}
      </Link>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.visitLive} ${shouldFade ? styles.faded : ''}`}
        >
          Visit live site
        </a>
      )}
    </nav>
  )
}