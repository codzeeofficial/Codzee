import type { HomeContent } from '@/data/types/page.types'
import styles from './ProcessSection.module.css'

interface ProcessSectionProps {
  content: HomeContent['process']
}

export function ProcessSection({ content }: ProcessSectionProps) {
  const hasStages = content.stages.length > 0

  return (
    <section className={styles.processSection}>
      <div className={styles.head}>
        <div className={styles.headingWrap}>
          <span className={styles.sectionKicker}>Execution Track</span>
          <h2 className={styles.heading}>{content.heading}</h2>
        </div>
        <p className={styles.supportingText}>{content.supportingText}</p>
      </div>

      {hasStages && (
        <div className={styles.timelineContainer}>
          <div className={styles.spine} />
          <div className={styles.stagesGrid}>
            {content.stages.map((stage) => {
              const isHub = stage.isHub === true

              return (
                <div
                  key={stage.id}
                  className={`${styles.stageCard} ${isHub ? styles.hubCard : ''}`}
                >
                  <div className={styles.stageHeader}>
                    <div className={styles.stageIndexBadge}>
                      <span className={styles.stageNumber}>{stage.number}</span>
                    </div>
                    {stage.duration && (
                      <span className={styles.durationPill}>{stage.duration}</span>
                    )}
                  </div>

                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageDescription}>{stage.description}</p>

                  {stage.deliverables && (
                    <div className={styles.deliverablesList}>
                      {stage.deliverables.map((deliv) => (
                        <span key={deliv} className={styles.delivItem}>
                          {deliv}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}