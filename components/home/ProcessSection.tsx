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
        <h2 className={styles.heading}>{content.heading}</h2>
        <p className={styles.supportingText}>{content.supportingText}</p>
      </div>
      {hasStages && (
        <div className={styles.spine}>
          {content.stages.map((stage) => (
            <div key={stage.id} className={styles.stage}>
              <span className={styles.stageNumber}>{stage.number}</span>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDescription}>{stage.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}