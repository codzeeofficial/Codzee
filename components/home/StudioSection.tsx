"use client";

import Link from "next/link";
import type { HomeContent } from "@/data/types/page.types";
import PillButton from "@/components/buttons/PillButton";
import { useScrollReveal } from "@/components/animations/useScrollReveal";
import styles from "./StudioSection.module.css";

interface StudioSectionProps {
  content: HomeContent["studio"];
}

export function StudioSection({ content }: StudioSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`${styles.studioSection} ${isVisible ? styles.isVisible : ""}`}
    >
      <div className={styles.label}>
        <span className={styles.dot} aria-hidden="true" />
        {content.label}
      </div>
      <div className={styles.copyColumn}>
        <p className={styles.lead}>{content.leadText}</p>
        <div className={styles.ctaRow}>
          <PillButton
            tier="accent"
            href={content.primaryCta.href}
            size="compact"
          >
            {content.primaryCta.label}
          </PillButton>
          <Link href={content.secondaryCta.href} className={styles.textLink}>
            {content.secondaryCta.label}
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
