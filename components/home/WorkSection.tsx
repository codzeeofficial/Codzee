import { homeContent } from '@/data/pages/home'
import WorkProjectCard from './WorkProjectCard'
import styles from './WorkSection.module.css'

const slotClasses = [styles.slotOne, styles.slotTwo, styles.slotThree]

const WorkSection = () => {
  return (
    <section className={styles.section}>
      {homeContent.work.projects.map((project, index) => (
        <div key={project.id} className={slotClasses[index]}>
          <WorkProjectCard project={project} />
        </div>
      ))}
    </section>
  )
}

export default WorkSection