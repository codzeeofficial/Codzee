'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import PillButton from '@/components/buttons/PillButton'
import { processContent } from '@/data/pages/process'
import styles from './ClosingSection.module.css'

export default function ClosingSection() {
  const { closing } = processContent
  const { ref, isVisible } = useScrollReveal('body')

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={isVisible ? `${styles.section} ${styles.visible}` : styles.section}
    >
      <p className={styles.line}>{closing.line}</p>
      <PillButton tier="dark" href={closing.cta.href}>
        {closing.cta.label}
      </PillButton>
    </section>
  )
}