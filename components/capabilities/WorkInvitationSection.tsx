'use client'

import { useScrollReveal } from '@/components/animations/useScrollReveal'
import PillButton from '@/components/buttons/PillButton'
import { capabilitiesContent } from '@/data/pages/capabilities'
import styles from './WorkInvitationSection.module.css'

export default function WorkInvitationSection() {
  const { line, cta } = capabilitiesContent.workInvitation
  const { ref, isVisible } = useScrollReveal('heading')

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={isVisible ? `${styles.section} ${styles.visible}` : styles.section}
    >
      <p className={styles.line}>{line}</p>
      <PillButton tier="accent" href={cta.href}>
        {cta.label}
      </PillButton>
    </section>
  )
}
