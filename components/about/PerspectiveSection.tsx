'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { aboutContent } from '@/data/pages/about'
import styles from './PerspectiveSection.module.css'

export default function PerspectiveSection() {
  const { ref, isVisible } = useScrollReveal('heading')

  return (
    <section className={styles.section}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={styles.grid}>
        <div className={styles.headColumn}>
          <span className={styles.kicker}>03 / Perspective</span>
          <h2 className={isVisible ? `${styles.heading} ${styles.visible}` : styles.heading}>
            {aboutContent.perspective.heading}
          </h2>
        </div>
        <div className={isVisible ? `${styles.body} ${styles.visible}` : styles.body}>
          {aboutContent.perspective.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
