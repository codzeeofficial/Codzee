import Link from 'next/link'
import styles from './PillButton.module.css'

type PillButtonTier = 'dark' | 'outline' | 'accent'

interface PillButtonProps {
  tier: PillButtonTier
  href: string
  children: React.ReactNode
}

export default function PillButton({ tier, href, children }: PillButtonProps) {
  return (
    <Link href={href} className={`${styles.pill} ${styles[tier]}`}>
      {children}
      {tier === 'accent' && (
        <span className={styles.arrowBadge} aria-hidden="true">
          →
        </span>
      )}
    </Link>
  )
}