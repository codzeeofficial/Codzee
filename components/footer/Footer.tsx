import Link from 'next/link'
import { globalContent } from '@/data/pages/global'
import styles from './Footer.module.css'

export default function Footer() {
  const { footer } = globalContent

  return (
    <div id="site-footer" className={styles.footerOuter}>
      <footer className={styles.footerCard}>
        <div className={styles.footerTop}>
          <a href="#top" className={styles.footerBack}>
            {footer.backToTopLabel}
          </a>
        </div>

        <div className={styles.footerMain}>
          <p className={styles.footerStatement}>{footer.statement}</p>
          <div className={styles.footerLinks}>
            {footer.linkColumns.map((column) => (
              <div key={column.heading} className={styles.footerCol}>
                <span className={styles.footerColTitle}>{column.heading}</span>
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <span className={styles.footerWordmark}>{footer.wordmark}</span>

        <div className={styles.footerBottom}>
          <span>{footer.bottomBar.copyright}</span>
          <span>{footer.bottomBar.tagline}</span>
        </div>
      </footer>
    </div>
  )
}