'use client'

import Link from 'next/link'
import PillButton from '@/components/buttons/PillButton'
import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { aboutContent } from '@/data/pages/about'
import styles from './TeamWorkInviteSection.module.css'

export default function TeamWorkInviteSection() {
  const { ref, isVisible } = useScrollReveal('body')
  const { line, teamCta, workCta } = aboutContent.teamWorkInvite

  return (
    <section className={styles.section}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={isVisible ? `${styles.stack} ${styles.visible}` : styles.stack}>
        <p className={styles.line}>{line}</p>
        {(teamCta?.href || workCta?.href) && (
          <div className={styles.ctas}>
            {teamCta?.href && (
              <PillButton tier="accent" href={teamCta.href} size="compact">
                {teamCta.label}
              </PillButton>
            )}
            {workCta?.href && (
              <Link href={workCta.href} className={styles.secondaryLink}>
                {workCta.label}
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
