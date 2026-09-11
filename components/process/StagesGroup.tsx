import DominantStage from './DominantStage'
import StageVariant from './StageVariant'
import { ProcessStage } from '@/data/types/page.types'
import styles from './StagesGroup.module.css'

interface StagesGroupProps {
  stages: ProcessStage[]
}

export default function StagesGroup({ stages }: StagesGroupProps) {
  return (
    <div className={styles.group}>
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
