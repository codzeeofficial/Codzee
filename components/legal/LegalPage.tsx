import type { LegalPageContent } from '@/data/types/page.types'
import styles from './LegalPage.module.css'

interface LegalPageProps {
  content: LegalPageContent
}

export default function LegalPage({ content }: LegalPageProps) {
  return (
    <article className={styles.page}>
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.meta}>Last updated: {content.lastUpdated}</p>

      <div className={styles.intro}>
        {content.intro.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      {content.sections.map((section) => (
        <section key={section.id} id={section.id} className={styles.section}>
          <h2 className={styles.heading}>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          {section.subsections?.map((subsection) => (
            <div key={subsection.id} id={subsection.id} className={styles.subsection}>
              <h3 className={styles.subheading}>{subsection.heading}</h3>
              {subsection.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </section>
      ))}
    </article>
  )
}