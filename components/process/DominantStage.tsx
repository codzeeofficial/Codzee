'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import NotchCard from '@/components/notch-card/NotchCard'
import { ProcessStage } from '@/data/types/page.types'
import styles from './DominantStage.module.css'

interface DominantStageProps {
  stage: ProcessStage
}

export default function DominantStage({ stage }: DominantStageProps) {
  const { ref, isVisible } = useScrollReveal('body')

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={isVisible ? `${styles.section} ${styles.visible}` : styles.section}
    >
      <NotchCard corner="bottom-right" label={`Stage ${stage.number}`} size="large">
        <div className={styles.content}>
          <h2 className={styles.heading}>{stage.headline}</h2>
          <p className={styles.body}>{stage.body}</p>
        </div>
      </NotchCard>
    </section>
  )
}
