'use client'

import Link from 'next/link'
import PillButton from '@/components/buttons/PillButton'
import { useScrollReveal } from '@/components/animations/useScrollReveal'
import { homeContent } from '@/data/pages/home'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { hero } = homeContent
  const { ref: headingRef, isVisible: isHeadingVisible } = useScrollReveal('heading')
  const { ref: ctaRef, isVisible: isCtaVisible } = useScrollReveal('body')

  return (
    <section className={styles.hero}>
      <div className={styles.containerWrapper}>
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`${styles.headingWrapper} ${isHeadingVisible ? styles.revealed : ''}`}
        >
          <h1 className={styles.heading}>
            <span className={styles.lead}>{hero.headingLead}</span>
            <span className={styles.emphasis}>{hero.headingEmphasis}</span>
            <span className={styles.close}>{hero.headingClose}</span>
          </h1>
        </div>

        <p className={styles.substatement}>
          A product engineering studio that builds what is missing and rebuilds what was built wrong.
        </p>

        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`${styles.ctaWrapper} ${isCtaVisible ? styles.revealed : ''}`}
        >
          <div className={styles.ctaRow}>
            <PillButton tier="dark" href={hero.cta.href}>
              {hero.cta.label}
            </PillButton>
            <Link href="/process" className={styles.secondaryCta}>
              <span>How we build</span>
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.metricRail}>
          <div className={styles.metricItem}>
            <span className={styles.metricIndex}>01</span>
            <span className={styles.metricLabel}>Strategy & Architecture</span>
          </div>
          <div className={styles.metricDivider} aria-hidden="true" />
          <div className={styles.metricItem}>
            <span className={styles.metricIndex}>02</span>
            <span className={styles.metricLabel}>Full-Stack Production</span>
          </div>
          <div className={styles.metricDivider} aria-hidden="true" />
          <div className={styles.metricItem}>
            <span className={styles.metricIndex}>03</span>
            <span className={styles.metricLabel}>Zero Technical Debt</span>
          </div>
        </div>
      </div>
    </section>
  )
}
