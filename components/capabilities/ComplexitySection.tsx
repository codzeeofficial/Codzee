'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { capabilitiesContent } from '@/data/pages/capabilities'
import styles from './ComplexitySection.module.css'

export default function ComplexitySection() {
  const { complexity } = capabilitiesContent
  const { ref: headRef, isVisible: isHeadVisible } = useScrollReveal('heading')
  const { ref: bodyRef, isVisible: isBodyVisible } = useScrollReveal('body')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={isHeadVisible ? `${styles.primaryCol} ${styles.visible}` : styles.primaryCol}
        >
          <div className={styles.kickerRow}>
            <span className={styles.kickerDot} aria-hidden="true" />
            <span className={styles.kicker}>Complexity Scale</span>
          </div>
          <h2 className={styles.heading}>{complexity.heading}</h2>
          <p className={styles.paragraph}>{complexity.paragraph}</p>
        </div>

        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={isBodyVisible ? `${styles.tiersCol} ${styles.visible}` : styles.tiersCol}
        >
          {complexity.tiers.map((tier, index) => (
            <div key={tier.id} className={`${styles.tierCard} ${styles[`tierLevel${index + 1}`]}`}>
              <div className={styles.tierHeader}>
                <span className={styles.tierTag}>{`Level 0${index + 1}`}</span>
              </div>
              <h3 className={styles.tierTitle}>{tier.label}</h3>
              <p className={styles.tierDescription}>{tier.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
