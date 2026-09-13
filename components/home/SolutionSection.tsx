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
        <div className={styles.headingWrap}>
          <span className={styles.sectionKicker}>Root Cause</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <p className={styles.supporting}>{supportingText}</p>
      </div>

      <div className={styles.panelRow}>
        {situations.map((situation, index) => (
          <article key={situation.id} className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelIndex}>0{index + 1}</span>
              <span className={styles.panelTag}>{situation.label}</span>
            </div>
            <p className={styles.panelDescription}>{situation.description}</p>
            <div className={styles.panelFooter}>
              <span className={styles.panelStatusIndicator} aria-hidden="true" />
              <span className={styles.panelStatusText}>Common Failure Mode</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}