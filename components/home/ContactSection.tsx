import Link from 'next/link'
import type { HomeContent } from '@/data/types/page.types'
import PillButton from '@/components/buttons/PillButton'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  content: HomeContent['contact']
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section className={styles.contactSection}>
      <div className={styles.inquiryCard}>
        <Link href={content.href} className={styles.link}>
          <span>{content.heading}</span>
          <span className={styles.linkArrow} aria-hidden="true">↗</span>
        </Link>

        <p className={styles.subtext}>
          No sales reps, no discovery scripts. A straightforward discussion on what is broken, missing, or needs building.
        </p>

        <div className={styles.actionRow}>
          <PillButton tier="dark" href={content.href}>
            Start Conversation
          </PillButton>
          <a href="mailto:hey@codzee.com" className={styles.emailLink}>
            hey@codzee.com
          </a>
        </div>
      </div>
    </section>
  )
}