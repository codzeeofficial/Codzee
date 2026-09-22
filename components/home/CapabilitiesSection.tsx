import type { HomeContent } from '@/data/types/page.types'
import NotchCard from '@/components/notch-card/NotchCard'
import PillButton from '@/components/buttons/PillButton'
import styles from './CapabilitiesSection.module.css'

interface CapabilitiesSectionProps {
  content: HomeContent['capabilities']
}

export function CapabilitiesSection({ content }: CapabilitiesSectionProps) {
  return (
    <section className={styles.capabilitiesSection}>
      <NotchCard corner="top-left" label="Our Capabilities">
        <div className={styles.introGrid}>
          <div />
          <div>
            <h2 className={styles.heading}>{content.heading}</h2>
          </div>
          <div className={styles.introDesc}>
            <p className={styles.supportingText}>{content.supportingText}</p>
            <PillButton tier="light" href="/capabilities">
              See All Capabilities
            </PillButton>
          </div>
        </div>

        <div className={styles.listLayout}>
          <div className={styles.capList}>
            {content.items.map((item) => (
              <div key={item.id} className={styles.capItem}>
                <div className={styles.capHeader}>
                  <span className={styles.capTitle}>{item.title}</span>
                </div>
                <div className={styles.capBody}>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div />
        </div>
      </NotchCard>
    </section>
  )
}