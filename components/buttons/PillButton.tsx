import Link from 'next/link'
import styles from './PillButton.module.css'

type PillButtonTier = 'dark' | 'light' | 'outline' | 'accent'
type PillButtonSize = 'default' | 'compact'

interface PillButtonProps {
  tier: PillButtonTier
  href: string
  size?: PillButtonSize
  children: React.ReactNode
}

export default function PillButton({ tier, href, size = 'default', children }: PillButtonProps) {
  return (
    <Link
      href={href}
      className={`${styles.pill} ${styles[tier]} ${size === 'compact' ? styles.compact : ''}`}
    >
      {children}
      {tier === 'accent' && (
        <span className={styles.arrowBadge} aria-hidden="true">
          →
        </span>
      )}
    </Link>
  )
}