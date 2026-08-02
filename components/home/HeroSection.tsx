'use client'

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
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`${styles.ctaWrapper} ${isCtaVisible ? styles.revealed : ''}`}
        >
          <PillButton tier="outline" href={hero.cta.href}>
            {hero.cta.label}
          </PillButton>
        </div>
      </div>
    </section>
  )
}
