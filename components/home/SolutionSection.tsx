import { HomeContent } from '@/data/types/page.types'
import styles from './SolutionSection.module.css'

interface SolutionSectionProps {
  content: HomeContent['solution']
}

export default function SolutionSection({ content }: SolutionSectionProps) {
  const { heading, supportingText, situations } = content

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.supporting}>{supportingText}</p>
      </div>
      <div className={styles.panelRow}>
        {situations.map((situation) => (
          <article key={situation.id} className={styles.panel}>
            <span className={styles.panelTag}>{situation.label}</span>
            <p className={styles.panelDescription}>{situation.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}