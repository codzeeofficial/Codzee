'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { aboutContent } from '@/data/pages/about'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal('heading')

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerDot} aria-hidden="true" />
          <span className={styles.kicker}>The Studio</span>
        </div>
        <h1 className={isVisible ? `${styles.statement} ${styles.visible}` : styles.statement}>
          {aboutContent.hero.statement}
        </h1>
        <p className={styles.subline}>
          Founding story, engineering principles, and why we build products rather than pages.
        </p>
      </div>
    </section>
  )
}
