'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { servicesContent } from '@/data/pages/services'
import type { ServiceSystemsArchitecture } from '@/data/types/page.types'
import styles from './SystemsArchitectureSection.module.css'

export default function SystemsArchitectureSection() {
  const service = servicesContent.services[1] as ServiceSystemsArchitecture
  const { ref: headRef, isVisible: isHeadVisible } = useScrollReveal('heading')
  const { ref: bodyRef, isVisible: isBodyVisible } = useScrollReveal('body')

  return (
    <section id={service.id} className={styles.section}>
      <div className={styles.container}>
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={isHeadVisible ? `${styles.headerBlock} ${styles.visible}` : styles.headerBlock}
        >
          <div className={styles.kickerRow}>
            <span className={styles.kickerDot} aria-hidden="true" />
            <span className={styles.kicker}>{service.label}</span>
          </div>
          <h2 className={styles.heading}>{service.heading}</h2>
          <span className={styles.architectureDomain}>Backend Infrastructure & Distributed State</span>
        </div>

        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={isBodyVisible ? `${styles.contentBlock} ${styles.visible}` : styles.contentBlock}
        >
          <div className={styles.narrativeWrap}>
            <div className={styles.cardHeader}>
              <span className={styles.offeringLabel}>{service.label}</span>
              <span className={styles.offeringId}>Data Pipelines</span>
            </div>
            <p className={styles.paragraph}>{service.paragraph}</p>
            <div className={styles.componentsGrid}>
              {service.components.map((item) => (
                <div key={item} className={styles.componentCard}>
                  <span className={styles.chipDot} aria-hidden="true" />
                  <span className={styles.componentName}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
