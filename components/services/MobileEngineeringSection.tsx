'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { servicesContent } from '@/data/pages/services'
import type { ServiceMobile } from '@/data/types/page.types'
import styles from './MobileEngineeringSection.module.css'

export default function MobileEngineeringSection() {
  const service = servicesContent.services[4] as ServiceMobile
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
        </div>

        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={isBodyVisible ? `${styles.syncCard} ${styles.visible}` : styles.syncCard}
        >
          <div className={styles.cardHeader}>
            <div className={styles.statusWrap}>
              <span className={styles.syncLiveDot} aria-hidden="true" />
              <span className={styles.syncStatusLabel}>{service.label}</span>
            </div>
            <span className={styles.runtimeBadge}>Native Android Runtime</span>
          </div>

          <h3 className={styles.splitTitle}>{service.split.title}</h3>
          <p className={styles.splitParagraph}>{service.split.paragraph}</p>

          <div className={styles.specBadgesRow}>
            <span className={styles.specBadge}>Local SQLite Storage</span>
            <span className={styles.specBadge}>Differential Sync</span>
            <span className={styles.specBadge}>Zero UI Freeze</span>
          </div>
        </div>
      </div>
    </section>
  )
}
