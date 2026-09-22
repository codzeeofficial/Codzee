'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { servicesContent } from '@/data/pages/services'
import type { ServiceInterfaceCraft } from '@/data/types/page.types'
import styles from './InterfaceCraftSection.module.css'

export default function InterfaceCraftSection() {
  const service = servicesContent.services[2] as ServiceInterfaceCraft
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

          <div className={styles.metricsGrid}>
            {service.metrics.map((metric) => (
              <div key={metric.label} className={styles.metricItem}>
                <span className={styles.metricLabel}>{metric.label}</span>
                <span className={styles.metricValue}>{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={isBodyVisible ? `${styles.craftFrame} ${styles.visible}` : styles.craftFrame}
        >
          <div className={styles.windowHeader}>
            <div className={styles.windowDots}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <span className={styles.windowLabel}>Production Viewport · Direct Code</span>
          </div>

          <div className={styles.windowBody}>
            <div className={styles.cardHeader}>
              <span className={styles.offeringLabel}>{service.label}</span>
              <span className={styles.offeringId}>Frontend Architecture</span>
            </div>
            <p className={styles.paragraph}>{service.paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
