import styles from './NotchCard.module.css'

type NotchCorner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface NotchCardProps {
  corner: NotchCorner
  label: string
  children: React.ReactNode
}

export default function NotchCard({ corner, label, children }: NotchCardProps) {
  const cornerClass = corner
    .split('-')
    .map((part, i) => (i === 0 ? part : part[0].toUpperCase() + part.slice(1)))
    .join('')

  return (
    <div className={`${styles.card} ${styles[cornerClass]}`}>
      <span className={styles.notch}>{label}</span>
      <div className={styles.content}>{children}</div>
    </div>
  )
}