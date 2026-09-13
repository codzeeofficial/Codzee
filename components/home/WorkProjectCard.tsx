import Image from 'next/image'
import Link from 'next/link'
import { HomeWorkProject } from '@/data/types/page.types'
import styles from './WorkSection.module.css'

interface WorkProjectCardProps {
  project: HomeWorkProject
}

const WorkProjectCard = ({ project }: WorkProjectCardProps) => {
  const imageSrc = `/images/case-studies/${project.id}/cover.jpg`

  return (
    <Link href={project.href} className={styles.project}>
      <div className={styles.imageWrap}>
        <Image
          src={imageSrc}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
          className={styles.image}
        />
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.arrow} aria-hidden="true">↗</span>
        </div>

        {project.tags && (
          <div className={styles.tagList}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tagItem}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className={styles.problem}>{project.problemStatement}</p>

        {project.metric && (
          <div className={styles.metricBadge}>
            <span className={styles.metricBullet} aria-hidden="true" />
            <span className={styles.metricText}>{project.metric}</span>
          </div>
        )}
      </div>
    </Link>
  )
}

export default WorkProjectCard