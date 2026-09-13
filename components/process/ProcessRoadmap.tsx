import { ProcessStage } from '@/data/types/page.types'
import styles from './ProcessRoadmap.module.css'

interface ProcessRoadmapProps {
  stages: ProcessStage[]
}

export default function ProcessRoadmap({ stages }: ProcessRoadmapProps) {
  return (
    <nav className={styles.wrapper} aria-label="Process stages overview">
      <div className={styles.roadmapBar}>
        {stages.map((stage) => (
          <a
            key={stage.id}
            href={`#stage-${stage.id}`}
            className={styles.stepLink}
          >
            <span className={styles.stepNumber}>{stage.number}</span>
            <span className={styles.stepTitle}>{stage.title}</span>
            {stage.variant === 'dominant' && (
              <span className={styles.hubIndicator} aria-label="Core stage" />
            )}
          </a>
        ))}
      </div>
    </nav>
  )
}
