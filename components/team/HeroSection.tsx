import styles from './HeroSection.module.css'
import { teamContent } from '@/data/pages/team'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.statement}>{teamContent.hero.statement}</h1>
      </div>
    </section>
  )
}