'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { servicesContent } from '@/data/pages/services'
import type { ServiceProductEngineering } from '@/data/types/page.types'
import styles from './ProductEngineeringSection.module.css'

export default function ProductEngineeringSection() {
  const service = servicesContent.services[0] as ServiceProductEngineering
  const { ref: headRef, isVisible: isHeadVisible } = useScrollReveal('heading')
  const { ref: bodyRef, isVisible: isBodyVisible } = useScrollReveal('body')

  return (
    <section id={service.id} className={styles.section}>
      <div className={styles.container}>
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={isHeadVisible ? `${styles.primaryCol} ${styles.visible}` : styles.primaryCol}
        >
          <div className={styles.kickerRow}>
            <span className={styles.kickerDot} aria-hidden="true" />
            <span className={styles.kicker}>{service.label}</span>
          </div>
          <h2 className={styles.heading}>{service.heading}</h2>
          <p className={styles.supportingLine}>{service.supportingLine}</p>

          <div className={styles.scopeMatrix}>
            <ul className={styles.scopeList}>
              {service.scopeItems.map((item) => (
                <li key={item} className={styles.scopeItem}>
                  <span className={styles.scopeBullet} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={isBodyVisible ? `${styles.secondaryCol} ${styles.visible}` : styles.secondaryCol}
        >
          <div className={styles.narrativeCard}>
            <div className={styles.cardHeader}>
              <span className={styles.offeringLabel}>{service.label}</span>
              <span className={styles.offeringId}>Custom Web Applications</span>
            </div>
            <p className={styles.paragraph}>{service.paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
