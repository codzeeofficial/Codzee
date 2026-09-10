import Image from 'next/image'
import Link from 'next/link'
import styles from './WorkSection.module.css'

interface WorkProject {
  id: string
  title: string
  problemStatement: string
  href: string
  imageAlt?: string
  image?: { src: string; alt: string }
}

interface WorkProjectCardProps {
  project: WorkProject
}

const WorkProjectCard = ({ project }: WorkProjectCardProps) => {
  const image = project.image ?? {
    src: `/images/case-studies/${project.id}/cover.jpg`,
    alt: project.imageAlt ?? project.title,
  }

  return (
    <Link href={project.href} className={styles.project}>
      <div className={styles.imageWrap}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.problem}>{project.problemStatement}</p>
    </Link>
  )
}

export default WorkProjectCard