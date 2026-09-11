import styles from './NotchCard.module.css'

type NotchCorner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type NotchSize = 'default' | 'large'

interface NotchCardProps {
  corner: NotchCorner
  label: string
  size?: NotchSize
  children: React.ReactNode
}

const cornerClassMap: Record<NotchCorner, string> = {
  'top-left': styles.topLeft,
  'top-right': styles.topRight,
  'bottom-left': styles.bottomLeft,
  'bottom-right': styles.bottomRight,
}

export default function NotchCard({ corner, label, size = 'default', children }: NotchCardProps) {
  const variantClass = cornerClassMap[corner]
  const sizeClass = size === 'large' ? ` ${styles.large}` : ''

  return (
    <div className={`${styles.card} ${variantClass}${sizeClass}`}>
      <div className={styles.notchSlot}>
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}