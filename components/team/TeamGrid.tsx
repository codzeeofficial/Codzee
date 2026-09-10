import Image from 'next/image'
import styles from './TeamGrid.module.css'
import { teamContent } from '@/data/pages/team'

export default function TeamGrid() {
  return (
    <section className={styles.grid}>
      {teamContent.members.map((member) => (
        <div key={member.id} className={styles.card}>
          <div className={styles.photoWrap}>
            {member.photoSrc !== '' && (
              <Image
                src={member.photoSrc}
                alt={member.name}
                fill
                className={styles.photo}
              />
            )}
          </div>
          <p className={styles.name}>{member.name}</p>
          <p className={styles.role}>{member.role}</p>
          {member.description !== '' && (
            <p className={styles.description}>{member.description}</p>
          )}
        </div>
      ))}
    </section>
  )
}