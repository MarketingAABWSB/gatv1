'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import type { Service } from '@/data/services';
import styles from './ServiceCard.module.css';

// SVG icons keyed by service icon identifier
const ServiceIcons: Record<string, React.ReactNode> = {
  engine: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
      <path d="M9 12h-6"/>
      <path d="M15 12h6"/>
      <path d="M12 9v-6"/>
      <path d="M12 15v6"/>
    </svg>
  ),
  car: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l4-4h8l4 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
      <circle cx="7" cy="17" r="2"/>
      <circle cx="17" cy="17" r="2"/>
    </svg>
  ),
  ac: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
    </svg>
  ),
  gear: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
};

interface Props {
  service: Service;
  showLearnMore?: boolean;
}

export default function ServiceCard({ service, showLearnMore = true }: Props) {
  const { lang, t } = useLang();

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.iconWrap}>
        {ServiceIcons[service.icon] ?? null}
      </div>
      <h3 className={styles.title}>{service.title[lang]}</h3>
      <p className={styles.desc}>{service.shortDesc[lang]}</p>
      {showLearnMore && (
        <Link
          href={`/services/${service.slug}`}
          className={styles.learnMore}
          id={`service-card-${service.slug}`}
        >
          {t('services.learnMore')} &rarr;
        </Link>
      )}
    </div>
  );
}
