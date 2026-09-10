import Link from 'next/link'
import type { HomeContent } from '@/data/types/page.types'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  content: HomeContent['contact']
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section className={styles.contactSection}>
      <Link href={content.href} className={styles.link}>
        {content.heading}
      </Link>
    </section>
  )
}