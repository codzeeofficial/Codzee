'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { processContent } from '@/data/pages/process'
import styles from './NeverSection.module.css'

export default function NeverSection() {
  const { never } = processContent
  const { ref: headingRef, isVisible: isHeadingVisible } = useScrollReveal('heading')
  const { ref: itemsRef, isVisible: isItemsVisible } = useScrollReveal('body')

  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <div className={styles.headColumn}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerDot} aria-hidden="true" />
            <span className={styles.kicker}>Non-Negotiables</span>
          </div>
          <h2
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className={isHeadingVisible ? `${styles.heading} ${styles.visible}` : styles.heading}
          >
            {never.heading}
          </h2>
        </div>
        <div
          ref={itemsRef as React.RefObject<HTMLDivElement>}
          className={isItemsVisible ? `${styles.itemsGrid} ${styles.visible}` : styles.itemsGrid}
        >
          {never.items.map((item, index) => (
            <div key={index} className={styles.itemCard}>
              <div className={styles.cardHeader}>
                <span className={styles.indexTag}>{`0${index + 1}`}</span>
              </div>
              <h3 className={styles.itemLead}>{item.lead}</h3>
              <p className={styles.itemDetail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}