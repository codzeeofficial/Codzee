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
      id={`stage-${stage.id}`}
      ref={ref as React.RefObject<HTMLElement>}
      className={isVisible ? `${styles.section} ${styles.visible}` : styles.section}
    >
      <NotchCard corner="bottom-right" label={`Stage ${stage.number}`} size="large">
        <div className={styles.content}>
          <div className={styles.statusRow}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusLabel}>Core Production Stage · Continuous Delivery</span>
          </div>
          <h2 className={styles.heading}>{stage.headline}</h2>
          
          <div className={styles.paragraphsGroup}>
            {stage.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
          </div>

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

          <div className={styles.assuranceGrid}>
            <div className={styles.assuranceCard}>
              <span className={styles.assuranceIndex}>01</span>
              <h3 className={styles.assuranceTitle}>Feature Verification</h3>
              <p className={styles.assuranceDesc}>
                Checked against requirements as each module completes before moving forward.
              </p>
            </div>
            <div className={styles.assuranceCard}>
              <span className={styles.assuranceIndex}>02</span>
              <h3 className={styles.assuranceTitle}>Preview Deployments</h3>
              <p className={styles.assuranceDesc}>
                Interactive preview environments let you test real functioning interfaces early.
              </p>
            </div>
            <div className={styles.assuranceCard}>
              <span className={styles.assuranceIndex}>03</span>
              <h3 className={styles.assuranceTitle}>Quality Gate</h3>
              <p className={styles.assuranceDesc}>
                Full type safety, integration testing, and zero deployment blockers before testing pass.
              </p>
            </div>
          </div>
        </div>
      </NotchCard>
    </section>
  )
}
