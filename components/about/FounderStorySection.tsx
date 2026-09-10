'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { aboutContent } from '@/data/pages/about'
import styles from './FounderStorySection.module.css'

export default function FounderStorySection() {
  const { ref, isVisible } = useScrollReveal('heading')

  return (
    <section className={styles.section}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={styles.stack}>
        <p className={isVisible ? `${styles.pullLine} ${styles.visible}` : styles.pullLine}>
          {aboutContent.founderStory.pullLine}
        </p>
        <div className={isVisible ? `${styles.body} ${styles.visible}` : styles.body}>
          {aboutContent.founderStory.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
