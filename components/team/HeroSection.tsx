'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { teamContent } from '@/data/pages/team'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal('heading')

  return (
    <section className={styles.hero}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={styles.container}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerDot} aria-hidden="true" />
          <span className={styles.kicker}>The People</span>
        </div>
        <h1 className={isVisible ? `${styles.statement} ${styles.visible}` : styles.statement}>
          {teamContent.hero.statement}
        </h1>
      </div>
    </section>
  )
}
