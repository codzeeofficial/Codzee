'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { ProcessStage } from '@/data/types/page.types'
import styles from './StageVariant.module.css'

interface StageVariantProps {
  stage: ProcessStage
}

export default function StageVariant({ stage }: StageVariantProps) {
  const { ref, isVisible } = useScrollReveal('heading')

  const reveal = (base: string) => (isVisible ? `${base} ${styles.visible}` : base)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles[`variant${stage.variant}`]}`}
    >
      {stage.variant === 'A' && (
        <div className={styles.stackedIndex}>
          <span className={reveal(styles.stackedNumber)}>{stage.number}</span>
          <h2 className={reveal(styles.stackedHeading)}>{stage.headline}</h2>
          <p className={reveal(styles.stackedBody)}>{stage.body}</p>
        </div>
      )}

      {stage.variant === 'B' && (
        <div className={styles.marginNote}>
          <span className={styles.marginNumber}>{stage.number}</span>
          <div className={styles.marginNoteContent}>
            <h2 className={reveal(styles.marginHeading)}>{stage.headline}</h2>
            <p className={reveal(styles.marginBody)}>{stage.body}</p>
          </div>
        </div>
      )}

      {stage.variant === 'C' && (
        <div className={styles.questionAnswer}>
          <span className={styles.stageLabel}>{`Stage ${stage.number}`}</span>
          <h2 className={reveal(styles.qaHeading)}>{stage.headline}</h2>
          <p className={reveal(styles.qaBody)}>{stage.body}</p>
        </div>
      )}

      {stage.variant === 'D' && (
        <div className={styles.reversedWeight}>
          <div className={styles.headingColumn}>
            <span className={reveal(styles.dNumber)}>{stage.number}</span>
            <h2 className={reveal(styles.dHeading)}>{stage.headline}</h2>
          </div>
          <p className={reveal(styles.dBody)}>{stage.body}</p>
        </div>
      )}

      {stage.variant === 'E' && (
        <div className={styles.bracketedStat}>
          <span className={reveal(styles.statLabel)}>{stage.statLabel}</span>
          <span className={reveal(styles.statDetail)}>{stage.stat}</span>
          <p className={reveal(styles.statLine)}>{stage.body}</p>
        </div>
      )}
    </section>
  )
}
