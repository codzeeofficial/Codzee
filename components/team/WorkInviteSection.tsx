'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { teamContent } from '@/data/pages/team'
import PillButton from '@/components/buttons/PillButton'
import styles from './WorkInviteSection.module.css'

export default function WorkInviteSection() {
  const { ref, isVisible } = useScrollReveal('body')

  return (
    <section className={styles.section}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={isVisible ? `${styles.card} ${styles.visible}` : styles.card}
      >
        <p className={styles.line}>{teamContent.workInvite.line}</p>
        <div className={styles.actions}>
          <PillButton tier="accent" href={teamContent.workInvite.cta.href}>
            {teamContent.workInvite.cta.label}
          </PillButton>
          <Link href="/contact" className={styles.secondaryLink}>
            Get in Touch
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
