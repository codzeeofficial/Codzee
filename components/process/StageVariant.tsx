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

  const renderParagraphs = () => (
    <div className={styles.paragraphsGroup}>
      {stage.paragraphs.map((p, i) => (
        <p key={i} className={styles.paragraph}>{p}</p>
      ))}
      {stage.takeaway && (
        <div className={styles.takeawayBox}>
          <p className={styles.takeawayText}>{stage.takeaway}</p>
        </div>
      )}
      {stage.metaDetails && stage.metaDetails.length > 0 && (
        <div className={styles.metaStrip}>
          {stage.metaDetails.map((meta, i) => (
            <div key={i} className={styles.metaItem}>
              <span className={styles.metaLabel}>{meta.label}</span>
              <span className={styles.metaValue}>{meta.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <section
      id={`stage-${stage.id}`}
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles[`variant${stage.variant}`]}`}
    >
      <div className={styles.kickerRow}>
        <span className={styles.kickerDot} aria-hidden="true" />
        <span className={styles.kicker}>{`Stage ${stage.number} · ${stage.title}`}</span>
      </div>

      {stage.variant === 'A' && (
        <div className={styles.stackedIndex}>
          <span className={reveal(styles.stackedNumber)}>{stage.number}</span>
          <h2 className={reveal(styles.stackedHeading)}>{stage.headline}</h2>
          {renderParagraphs()}
        </div>
      )}

      {stage.variant === 'B' && (
        <div className={styles.marginNote}>
          <div className={styles.marginRow}>
            <div className={styles.marginNumberBox}>
              <span className={styles.marginNumber}>{stage.number}</span>
            </div>
            <div className={styles.marginNoteContent}>
              <h2 className={reveal(styles.marginHeading)}>{stage.headline}</h2>
              {renderParagraphs()}
            </div>
          </div>
        </div>
      )}

      {stage.variant === 'C' && (
        <div className={styles.questionAnswer}>
          <h2 className={reveal(styles.qaHeading)}>{stage.headline}</h2>
          <div className={styles.qaAnswer}>
            {renderParagraphs()}
          </div>
        </div>
      )}

      {stage.variant === 'D' && (
        <div className={styles.reversedWeight}>
          <div className={styles.reversedGrid}>
            <div className={styles.headingColumn}>
              <span className={styles.stageBigNumber}>{stage.number}</span>
              <h2 className={reveal(styles.dHeading)}>{stage.headline}</h2>
            </div>
            <div className={styles.contentColumn}>
              {renderParagraphs()}
            </div>
          </div>
        </div>
      )}

      {stage.variant === 'E' && (
        <div className={styles.bracketedStat}>
          <div className={styles.statLayout}>
            <div className={styles.statBox}>
              <span className={reveal(styles.statLabel)}>{stage.statLabel}</span>
              <span className={reveal(styles.statDetail)}>{stage.stat}</span>
            </div>
            <div className={styles.statContent}>
              {stage.headline && (
                <h2 className={reveal(styles.statHeading)}>{stage.headline}</h2>
              )}
              {renderParagraphs()}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
