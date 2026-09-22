'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { capabilitiesContent } from '@/data/pages/capabilities'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { hero } = capabilitiesContent
  const { ref: headlineRef, isVisible: isHeadlineVisible } = useScrollReveal('heading')
  const { ref: supportingRef, isVisible: isSupportingVisible } = useScrollReveal('body')

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.kickerRow}>
          <span className={styles.kickerDot} aria-hidden="true" />
          <span className={styles.kicker}>Technical Foundations & Depth</span>
        </div>
        <h1
          ref={headlineRef as React.RefObject<HTMLHeadingElement>}
          className={isHeadlineVisible ? `${styles.headline} ${styles.visible}` : styles.headline}
        >
          {hero.headline}
        </h1>
        <p
          ref={supportingRef as React.RefObject<HTMLParagraphElement>}
          className={isSupportingVisible ? `${styles.supportingLine} ${styles.visible}` : styles.supportingLine}
        >
          {hero.supportingLine}
        </p>
      </div>
    </section>
  )
}
