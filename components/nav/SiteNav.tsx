'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { useNavScrollState } from '@/components/animations/useNavScrollState'
import PillButton from '@/components/buttons/PillButton'
import { ROUTES } from '@/lib/constants/routes'
import { globalContent } from '@/data/pages/global'
import styles from './SiteNav.module.css'

const DUMMY_SOCIALS = [
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'LinkedIn', href: '#', icon: FaLinkedin },
  { label: 'X', href: '#', icon: FaXTwitter },
]

const DUMMY_EMAIL = 'hey@codzee.com'

const DUMMY_LEGAL = [
  { label: 'Privacy', href: ROUTES.privacy },
  { label: 'Terms', href: ROUTES.terms },
  { label: 'Sitemap', href: '#' },
]

export default function SiteNav() {
  const isScrolled = useNavScrollState(40)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className={`${styles.desktopNavWrapper} ${isScrolled ? styles.scrolled : ''}`}>
        <nav className={styles.desktopNav}>
          <Link href={ROUTES.home} className={styles.logo}>
            {globalContent.footer.wordmark}
          </Link>
          <div className={styles.links}>
            {globalContent.nav.primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>
          <PillButton tier="dark" href={globalContent.nav.contactCta.href}>
            {globalContent.nav.contactCta.label}
          </PillButton>
        </nav>
      </div>

      <div className={styles.mobileNavWrapper}>
        <nav className={styles.mobileNav}>
          <Link href={ROUTES.home} className={styles.mobileLogo}>
            {globalContent.footer.wordmark}
          </Link>
          <button
            type="button"
            className={styles.hamburger}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </nav>
      </div>

{isMenuOpen ? (
  <div className={styles.overlay}>
    <div className={styles.overlayTopBar}>
      <Link
        href={ROUTES.home}
        className={styles.overlayLogo}
        onClick={() => setIsMenuOpen(false)}
      >
        {globalContent.footer.wordmark}
      </Link>
      <div className={styles.overlayTopActions}>
        <PillButton tier="light" href={globalContent.nav.contactCta.href}>
          {globalContent.nav.contactCta.label}
        </PillButton>
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          ×
        </button>
      </div>
    </div>

    <div className={styles.overlayLinksBlock}>
      <a href={`mailto:${DUMMY_EMAIL}`} className={styles.overlayEmail}>
        {DUMMY_EMAIL}
      </a>
      <div className={styles.overlayLinks}>
        {globalContent.nav.primaryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.overlayLink}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>

    <a href={`mailto:${DUMMY_EMAIL}`} className={styles.overlayEmailMobile}>
      {DUMMY_EMAIL}
    </a>

    <div className={styles.overlayBottomBar}>
      <div className={styles.overlaySocials}>
        {DUMMY_SOCIALS.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={styles.overlaySocialIcon}
            >
              <Icon size={20} strokeWidth={1.75} />
            </a>
          )
        })}
      </div>
      <div className={styles.overlayLegal}>
        {DUMMY_LEGAL.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.overlayLegalLink}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
) : null}
    </>
  )
}