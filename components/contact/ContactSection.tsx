import ContactContext from './ContactContext'
import ContactForm from './ContactForm'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <ContactContext />
        <ContactForm />
      </div>
    </section>
  )
}
