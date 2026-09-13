'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/components/animations/useScrollReveal'
import PillButton from '@/components/buttons/PillButton'
import { processContent } from '@/data/pages/process'
import styles from './ClosingSection.module.css'

export default function ClosingSection() {
  const { closing } = processContent
  const { ref, isVisible } = useScrollReveal('body')

  return (
    <section className={styles.section}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={isVisible ? `${styles.inner} ${styles.visible}` : styles.inner}
      >
        <p className={styles.line}>{closing.line}</p>
        <div className={styles.actions}>
          <PillButton tier="dark" href={closing.cta.href}>
            {closing.cta.label}
          </PillButton>
          <Link href="/work" className={styles.secondaryLink}>
            Explore Finished Work
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}