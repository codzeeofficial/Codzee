'use client'

import Link from 'next/link'
import NotchCard from '@/components/notch-card/NotchCard'
import { capabilitiesContent } from '@/data/pages/capabilities'
import styles from './OperationRecordsSection.module.css'

export default function OperationRecordsSection() {
  const capability = capabilitiesContent.capabilities[3]

  return (
    <section id={capability.id} className={styles.section}>
      <NotchCard corner="bottom-left" label="Ledger Integrity">
        <div className={styles.inner}>
          <div className={styles.headArea}>
            <h2 className={styles.title}>{capability.title}</h2>
            <p className={styles.summary}>{capability.summary}</p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.paragraphs}>
              {capability.detail.paragraphs.map((p, i) => (
                <p key={i} className={styles.paragraph}>{p}</p>
              ))}

              <div className={styles.proofRow}>
                {capability.detail.proof.map((proof) => (
                  <Link key={proof.href} href={proof.href} className={styles.proofLink}>
                    <span>{proof.label}</span>
                    <span className={styles.proofArrow} aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.specificsCard}>
              <span className={styles.specificsLabel}>Engineered Behavior</span>
              <ul className={styles.specificsList}>
                {capability.detail.specifics.map((spec) => (
                  <li key={spec} className={styles.specificItem}>
                    <span className={styles.specDot} aria-hidden="true" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </NotchCard>
    </section>
  )
}
