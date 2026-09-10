'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { aboutContent } from '@/data/pages/about'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal('heading')

  return (
    <section ref={ref} className={styles.hero}>
      <h1 className={isVisible ? `${styles.statement} ${styles.visible}` : styles.statement}>
        {aboutContent.hero.statement}
      </h1>
    </section>
  )
}
