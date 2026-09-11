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
        <h2
          ref={headingRef as React.RefObject<HTMLHeadingElement>}
          className={isHeadingVisible ? `${styles.heading} ${styles.visible}` : styles.heading}
        >
          {never.heading}
        </h2>
        <div
          ref={itemsRef as React.RefObject<HTMLDivElement>}
          className={isItemsVisible ? `${styles.items} ${styles.visible}` : styles.items}
        >
          {never.items.map((item, index) => (
            <p key={index} className={styles.item}>
              <strong className={styles.lead}>{item.lead}</strong> {item.detail}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}