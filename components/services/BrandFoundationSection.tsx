'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { servicesContent } from '@/data/pages/services'
import type { ServiceBrandFoundation } from '@/data/types/page.types'
import styles from './BrandFoundationSection.module.css'

export default function BrandFoundationSection() {
  const service = servicesContent.services[5] as ServiceBrandFoundation
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
          className={isBodyVisible ? `${styles.secondaryCol} ${styles.visible}` : styles.secondaryCol}
        >
          <div className={styles.narrativeCard}>
            <div className={styles.cardHeader}>
              <span className={styles.offeringLabel}>{service.label}</span>
              <span className={styles.offeringId}>Identity Architecture</span>
            </div>
            <p className={styles.paragraph}>{service.paragraph}</p>
            <div className={styles.assetsGrid}>
              {service.assets.map((asset) => (
                <div key={asset} className={styles.assetChip}>
                  <span className={styles.assetDot} aria-hidden="true" />
                  <span className={styles.assetName}>{asset}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
