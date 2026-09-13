import { homeContent } from '@/data/pages/home'
import WorkProjectCard from './WorkProjectCard'
import styles from './WorkSection.module.css'

const slotClasses = [styles.slotOne, styles.slotTwo, styles.slotThree]

const WorkSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headerBlock}>
        <div className={styles.headerKickerRow}>
          <span className={styles.kickerDot} aria-hidden="true" />
          <span className={styles.kicker}>Featured Systems</span>
        </div>
        <h2 className={styles.headerTitle}>Products built to operate, not just impress.</h2>
      </div>

      <div className={styles.projectList}>
        {homeContent.work.projects.map((project, index) => (
          <div key={project.id} className={slotClasses[index]}>
            <WorkProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkSection