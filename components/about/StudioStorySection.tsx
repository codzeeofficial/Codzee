'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { aboutContent } from '@/data/pages/about'
import styles from './StudioStorySection.module.css'

export default function StudioStorySection() {
  const { ref, isVisible } = useScrollReveal('heading')

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.grid}>
        <h2 className={isVisible ? `${styles.heading} ${styles.visible}` : styles.heading}>
          {aboutContent.studioStory.heading}
        </h2>
        <div className={isVisible ? `${styles.body} ${styles.visible}` : styles.body}>
          {aboutContent.studioStory.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
