import { contactContent } from '@/data/pages/contact'
import styles from './ContactContext.module.css'

export default function ContactContext() {
  return (
    <div className={styles.context}>
      <div className={styles.kickerRow}>
        <span className={styles.kickerDot} aria-hidden="true" />
        <span className={styles.kicker}>{contactContent.leadIn}</span>
      </div>
      <h1 className={styles.heading}>{contactContent.heading}</h1>
      <p className={styles.supportingText}>{contactContent.supportingText}</p>

      <div className={styles.reassurancesList}>
        {contactContent.reassurances.map((item) => (
          <div key={item.number} className={styles.reassuranceItem}>
            <div className={styles.itemHeader}>
              <span className={styles.itemNumber}>{item.number}</span>
              <h2 className={styles.itemLead}>{item.lead}</h2>
            </div>
            <p className={styles.itemDetail}>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
