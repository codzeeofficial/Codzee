'use client'

import NotchCard from '@/components/notch-card/NotchCard'
import { servicesContent } from '@/data/pages/services'
import type { ServicePlatformOperations } from '@/data/types/page.types'
import styles from './PlatformOperationsSection.module.css'

export default function PlatformOperationsSection() {
  const service = servicesContent.services[3] as ServicePlatformOperations

  return (
    <section id={service.id} className={styles.section}>
      <NotchCard corner="top-right" label={service.label}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>{service.heading}</h2>
          <p className={styles.supportingText}>{service.paragraph}</p>
        </div>

        <div className={styles.modulesGrid}>
          {service.subItems.map((item) => (
            <div key={item.number} className={styles.moduleCard}>
              <div className={styles.moduleHeader}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span className={styles.moduleNumber}>{item.number}</span>
              </div>
              <h3 className={styles.moduleTitle}>{item.title}</h3>
              <p className={styles.moduleDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </NotchCard>
    </section>
  )
}
