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
      <div className={styles.cardContainer}>
        {stage.variant === 'A' && (
          <div className={styles.stackedIndex}>
            <div className={styles.stageMetaHeader}>
              <span className={styles.stageTag}>{`Stage ${stage.number}`}</span>
              <span className={styles.stageSubtag}>Initial Intake</span>
            </div>
            <div className={styles.stackedContent}>
              <span className={reveal(styles.stackedNumber)}>{stage.number}</span>
              <h2 className={reveal(styles.stackedHeading)}>{stage.headline}</h2>
              <p className={reveal(styles.stackedBody)}>{stage.body}</p>
            </div>
          </div>
        )}

        {stage.variant === 'B' && (
          <div className={styles.marginNote}>
            <div className={styles.stageMetaHeader}>
              <span className={styles.stageTag}>{`Stage ${stage.number}`}</span>
              <span className={styles.stageSubtag}>Interface & Architecture</span>
            </div>
            <div className={styles.marginRow}>
              <div className={styles.marginNumberBox}>
                <span className={styles.marginNumber}>{stage.number}</span>
              </div>
              <div className={styles.marginNoteContent}>
                <h2 className={reveal(styles.marginHeading)}>{stage.headline}</h2>
                <p className={reveal(styles.marginBody)}>{stage.body}</p>
              </div>
            </div>
          </div>
        )}

        {stage.variant === 'C' && (
          <div className={styles.questionAnswer}>
            <div className={styles.stageMetaHeader}>
              <span className={styles.stageTag}>{`Stage ${stage.number}`}</span>
              <span className={styles.stageSubtag}>Diagnostic Map</span>
            </div>
            <h2 className={reveal(styles.qaHeading)}>{stage.headline}</h2>
            <p className={reveal(styles.qaBody)}>{stage.body}</p>
          </div>
        )}

        {stage.variant === 'D' && (
          <div className={styles.reversedWeight}>
            <div className={styles.stageMetaHeaderFull}>
              <span className={styles.stageTag}>{`Stage ${stage.number}`}</span>
              <span className={styles.stageSubtag}>System Scope</span>
            </div>
            <div className={styles.reversedGrid}>
              <div className={styles.headingColumn}>
                <h2 className={reveal(styles.dHeading)}>{stage.headline}</h2>
              </div>
              <p className={reveal(styles.dBody)}>{stage.body}</p>
            </div>
          </div>
        )}

        {stage.variant === 'E' && (
          <div className={styles.bracketedStat}>
            <div className={styles.stageMetaHeader}>
              <span className={styles.stageTag}>{`Stage ${stage.number}`}</span>
              <span className={styles.stageSubtag}>Commitment Guarantee</span>
            </div>
            <div className={styles.statLayout}>
              <div className={styles.statBox}>
                <span className={reveal(styles.statLabel)}>{stage.statLabel}</span>
                <span className={reveal(styles.statDetail)}>{stage.stat}</span>
              </div>
              <p className={reveal(styles.statLine)}>{stage.body}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
