import styles from './WorkInviteSection.module.css'
import { teamContent } from '@/data/pages/team'
import PillButton from '@/components/buttons/PillButton'

export default function WorkInviteSection() {
  return (
    <section className={styles.section}>
      <p className={styles.line}>{teamContent.workInvite.line}</p>
      <PillButton tier="accent" href={teamContent.workInvite.cta.href}>
        {teamContent.workInvite.cta.label}
      </PillButton>
    </section>
  )
}