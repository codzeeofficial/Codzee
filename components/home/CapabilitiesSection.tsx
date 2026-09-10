import type { HomeContent } from '@/data/types/page.types'
import NotchCard from '@/components/notch-card/NotchCard'
import styles from './CapabilitiesSection.module.css'

interface CapabilitiesSectionProps {
  content: HomeContent['capabilities']
}

export function CapabilitiesSection({ content }: CapabilitiesSectionProps) {
  const hasItems = content.items.length > 0

  return (
    <section className={styles.capabilitiesSection}>
      <NotchCard corner="top-left" label="What We're Capable Of">
        <div className={styles.intro}>
          <h2 className={styles.heading}>{content.heading}</h2>
          <p className={styles.supportingText}>{content.supportingText}</p>
        </div>
        {hasItems && (
          <div className={styles.accordion}>
            {content.items.map((item) => (
              <div key={item.id} className={styles.accordionItem}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </NotchCard>
    </section>
  )
}