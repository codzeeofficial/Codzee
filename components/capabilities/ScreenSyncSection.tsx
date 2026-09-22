'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { capabilitiesContent } from '@/data/pages/capabilities'
import styles from './ScreenSyncSection.module.css'

export default function ScreenSyncSection() {
  const capability = capabilitiesContent.capabilities[0]
  const { ref: headRef, isVisible: isHeadVisible } = useScrollReveal('heading')
  const { ref: bodyRef, isVisible: isBodyVisible } = useScrollReveal('body')

  return (
    <section id={capability.id} className={styles.section}>
      <div className={styles.container}>
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={isHeadVisible ? `${styles.primaryCol} ${styles.visible}` : styles.primaryCol}
        >
          <div className={styles.kickerRow}>
            <span className={styles.kickerDot} aria-hidden="true" />
            <span className={styles.kicker}>Data Synchronization</span>
          </div>
          <h2 className={styles.title}>{capability.title}</h2>
          <p className={styles.summary}>{capability.summary}</p>

          <div className={styles.proofRow}>
            {capability.detail.proof.map((proof) => (
              <Link key={proof.href} href={proof.href} className={styles.proofLink}>
                <span>{proof.label}</span>
                <span className={styles.proofArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>

        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={isBodyVisible ? `${styles.secondaryCol} ${styles.visible}` : styles.secondaryCol}
        >
          <div className={styles.detailCard}>
            <div className={styles.paragraphs}>
              {capability.detail.paragraphs.map((p, i) => (
                <p key={i} className={styles.paragraph}>{p}</p>
              ))}
            </div>

            <div className={styles.specificsWrap}>
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
      </div>
    </section>
  )
}
