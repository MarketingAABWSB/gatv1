'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { services } from '@/data/services';
import styles from './page.module.css';

/* Icon map — clean SVG per service type */
const iconMap: Record<string, React.ReactNode> = {
  engine: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
    </svg>
  ),
  car: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14l4 4v4a2 2 0 0 1-2 2h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
    </svg>
  ),
  ac: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v4m8-4v4M3 8h18M3 16h18m-9-8v8m-4-4h8"/><rect x="2" y="6" width="20" height="12" rx="2"/>
    </svg>
  ),
  gear: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 0-14.14 0M4.93 19.07a10 10 0 0 0 14.14 0M19.07 19.07a10 10 0 0 0 0-14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
    </svg>
  ),
};

export default function ServicesPage() {
  const { lang } = useLang();

  return (
    <>
      {/* ── DARK HERO ── */}
      <section className={styles.heroSection}>
        <Image
          src="/assets/gat-hero-bg.jpg"
          alt="GAT Services"
          fill
          style={{ objectFit: 'cover' }}
          className={styles.heroBgImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.heroLabel}>
            {lang === 'en' ? 'OUR SERVICES' : 'SERVIS KAMI'}
          </span>
          <h1 className={styles.heroTitle}>
            {lang === 'en'
              ? 'Comprehensive Services,\nOne Trusted Workshop.'
              : 'Setiap Servis,\nSatu Bengkel Dipercayai.'}
          </h1>
          <p className={styles.heroSub}>
            {lang === 'en'
              ? 'Comprehensive automotive support for heavy commercial machinery (diesel) and passenger vehicles (petrol).'
              : 'Sokongan automotif menyeluruh untuk jentera berat komersial (diesel) dan kenderaan penumpang (petrol).'}
          </p>
          <div className={styles.heroMeta}>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaNum}>3</span>
              <span className={styles.heroMetaLabel}>{lang === 'en' ? 'Core Scopes' : 'Skop Utama'}</span>
            </div>
            <div className={styles.heroMetaDivider} />
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaNum}>100%</span>
              <span className={styles.heroMetaLabel}>{lang === 'en' ? 'Bumiputera' : 'Bumiputera'}</span>
            </div>
            <div className={styles.heroMetaDivider} />
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaNum}>10+</span>
              <span className={styles.heroMetaLabel}>{lang === 'en' ? 'Years Experience' : 'Tahun Pengalaman'}</span>
            </div>
          </div>
        </div>
        <div className={styles.scrollCue}><span /></div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className={styles.listSection}>
        <div className="container">

          {/* Section header */}
          <div className={styles.listHeader}>
            <span className={styles.sectionTag}>
              {lang === 'en' ? 'WHAT WE OFFER' : 'APA YANG KAMI TAWARKAN'}
            </span>
            <h2 className={styles.listTitle}>
              {lang === 'en' ? 'Our Service Portfolio' : 'Portfolio Servis Kami'}
            </h2>
          </div>

          {/* Service cards — alternating layout */}
          <div className={styles.servicesList}>
            {services.map((service, i) => (
              <div
                key={service.slug}
                className={`${styles.serviceRow} ${i % 2 === 1 ? styles.serviceRowReverse : ''}`}
                id={`service-${service.slug}`}
              >
                {/* Image side */}
                <div className={styles.serviceImgWrap}>
                  <img
                    src={service.image}
                    alt={service.title[lang]}
                    className={styles.serviceImg}
                  />
                  <div className={styles.serviceImgOverlay} />
                  <span className={styles.serviceIndex}>0{i + 1}</span>
                </div>

                {/* Content side */}
                <div className={styles.serviceContent}>
                  <div className={styles.serviceIconWrap}>
                    {iconMap[service.icon] ?? iconMap.gear}
                  </div>
                  <span className={styles.sectionTag}>
                    {lang === 'en' ? 'SERVICE' : 'SERVIS'}
                  </span>
                  <h2 className={styles.serviceTitle}>{service.title[lang]}</h2>
                  <p className={styles.serviceDesc}>{service.shortDesc[lang]}</p>

                  <div className={styles.serviceActions}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={styles.btnPrimary}
                      id={`service-detail-${service.slug}`}
                    >
                      {lang === 'en' ? 'Learn More' : 'Lebih Lanjut'} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaLeft}>
            <span className={styles.ctaTag}>{lang === 'en' ? 'GET IN TOUCH' : 'HUBUNGI KAMI'}</span>
            <h2 className={styles.ctaTitle}>
              {lang === 'en'
                ? "Need Help Choosing\nthe Right Service?"
                : "Perlu Bantuan Memilih\nServis yang Tepat?"}
            </h2>
          </div>
          <div className={styles.ctaRight}>
            <p className={styles.ctaText}>
              {lang === 'en'
                ? "Contact our team for an initial assessment, and we will recommend the most suitable service for your vehicle."
                : "Hubungi pasukan kami untuk penilaian awal, dan kami akan mencadangkan servis yang paling sesuai untuk kenderaan anda."}
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=60199391284&text&type=phone_number&app_absent=0" 
              className={styles.ctaBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === 'en' ? 'Contact Us →' : 'Hubungi Kami →'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
