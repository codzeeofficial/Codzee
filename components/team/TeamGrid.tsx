'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/components/animations/useScrollReveal'
import styles from './TeamGrid.module.css'
import { teamContent } from '@/data/pages/team'

export default function TeamGrid() {
  const { ref, isVisible } = useScrollReveal('body')

  return (
    <section className={styles.section}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={isVisible ? `${styles.grid} ${styles.visible}` : styles.grid}
      >
        {teamContent.members.map((member) => (
          <div key={member.id} className={styles.card}>
            <div className={styles.photoWrap}>
              {member.photoSrc !== '' ? (
                <Image
                  src={member.photoSrc}
                  alt={member.name}
                  fill
                  className={styles.photo}
                />
              ) : (
                <div className={styles.placeholder} aria-hidden="true">
                  <span className={styles.monogram}>
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <p className={styles.name}>{member.name}</p>
            <p className={styles.role}>{member.role}</p>
            {member.description !== '' && (
              <p className={styles.description}>{member.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
