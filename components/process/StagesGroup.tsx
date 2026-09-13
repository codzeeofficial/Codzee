import DominantStage from './DominantStage'
import ProcessRoadmap from './ProcessRoadmap'
import StageVariant from './StageVariant'
import { ProcessStage } from '@/data/types/page.types'
import styles from './StagesGroup.module.css'

interface StagesGroupProps {
  stages: ProcessStage[]
}

export default function StagesGroup({ stages }: StagesGroupProps) {
  return (
    <div className={styles.group}>
      <ProcessRoadmap stages={stages} />
      {stages.map((stage) =>
        stage.variant === 'dominant' ? (
          <DominantStage key={stage.id} stage={stage} />
        ) : (
          <StageVariant key={stage.id} stage={stage} />
        )
      )}
    </div>
  )
}
