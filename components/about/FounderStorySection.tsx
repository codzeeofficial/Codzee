'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { aboutContent } from '@/data/pages/about'
import styles from './FounderStorySection.module.css'

export default function FounderStorySection() {
  const { ref, isVisible } = useScrollReveal('heading')

  return (
    <section className={styles.section}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={styles.stack}>
        <div className={styles.anchorBlock}>
          <span className={styles.kicker}>02 / Origins</span>
          <p className={isVisible ? `${styles.pullLine} ${styles.visible}` : styles.pullLine}>
            {aboutContent.founderStory.pullLine}
          </p>
        </div>
        <div className={isVisible ? `${styles.body} ${styles.visible}` : styles.body}>
          {aboutContent.founderStory.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
