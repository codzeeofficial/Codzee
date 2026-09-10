import styles from './NotchCard.module.css'

type NotchCorner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface NotchCardProps {
  corner: NotchCorner
  label: string
  children: React.ReactNode
}

const cornerClassMap: Record<NotchCorner, string> = {
  'top-left': styles.topLeft,
  'top-right': styles.topRight,
  'bottom-left': styles.bottomLeft,
  'bottom-right': styles.bottomRight,
}

export default function NotchCard({ corner, label, children }: NotchCardProps) {
  const variantClass = cornerClassMap[corner]

  return (
    <div className={`${styles.card} ${variantClass}`}>
      <div className={styles.notchSlot}>
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}