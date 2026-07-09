'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import { services } from '@/data/services';
import styles from './Footer.module.css';

export default function Footer() {
  const { lang, t } = useLang();
  const year = new Date().getFullYear();


  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.grid}`}>
        {/* Column 1: Brand */}
        <div className={styles.brand}>
          <div style={{ marginBottom: '0.75rem' }}>
            <Image
              src="/assets/gat-logo.png?v=2"
              alt="GAT Logo"
              width={140}
              height={42}
              style={{ objectFit: 'contain' }}
              unoptimized
            />
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--clr-text-2)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
            <p style={{ fontWeight: 600 }}>No. Pendaftaran: 1242808-V</p>
            <p style={{ fontWeight: 600 }}>KEM KEW: K10140485222253613</p>
          </div>
          <p className={styles.tagline}>{t('footer.footerSubtitle')}</p>
          <div className={styles.socials}>
            <a
              href="https://www.tiktok.com/@gat.services.k.tganu1284"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="TikTok"
              id="footer-tiktok"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.13V9.5a7.21 7.21 0 0 0-1-.07 7.24 7.24 0 0 0-7.23 7.24 7.24 7.24 0 0 0 7.23 7.25 7.24 7.24 0 0 0 7.24-7.25V7.87a9.66 9.66 0 0 0 5.02 1.5v-3.3a4.81 4.81 0 0 1-2.04-.63z" />
              </svg>
            </a>
            <a
              href="https://web.facebook.com/GermanAutoTech.GATServicesSdnBhdM?mibextid=ZbWKwL&_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="Facebook"
              id="footer-facebook"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=60199391284&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="WhatsApp"
              id="footer-whatsapp"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (Pautan Pantas) */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{t('footer.quickLinks')}</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/" className={styles.footerLink}>
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link href="/#overview" className={styles.footerLink}>
                {t('nav.aboutUs')}
              </Link>
            </li>
            <li>
              <Link href="/#fasiliti" className={styles.footerLink}>
                {t('nav.facility')}
              </Link>
            </li>

            <li>
              <Link href="/#footer" className={styles.footerLink}>
                {t('nav.contactUs')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Services (Servis Kami) */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{lang === 'en' ? 'Our Services' : 'Servis Kami'}</h4>
          <ul className={styles.linkList}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={styles.footerLink}>
                  {s.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact (Hubungi Kami) */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{t('footer.contactUs')}</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Lot 13106, Kawasan Perindustrian Gong Badak, 21300 Kuala Nerus, Terengganu.</span>
            </div>
            <div className={styles.contactItem} style={{ alignItems: 'flex-start' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon} style={{ marginTop: '4px' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {lang === 'en' ? 'Office' : 'Pejabat'}
                  </span>
                  <br />
                  <a href="tel:096674832" className={styles.footerLink}>09-6674832</a>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {lang === 'en' ? 'Emergency 1' : 'Kecemasan 1'}
                  </span>
                  <br />
                  <a href="https://api.whatsapp.com/send/?phone=60199391284&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>019-9391284</a>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {lang === 'en' ? 'Emergency 2' : 'Kecemasan 2'}
                  </span>
                  <br />
                  <a href="https://api.whatsapp.com/send/?phone=60196671284&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>019-6671284</a>
                </div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:gatservices0817@gmail.com" className={styles.footerLink}>gatservices0817@gmail.com</a>
            </div>
            <div className={styles.contactItem} style={{ alignItems: 'flex-start' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon} style={{ marginTop: '4px' }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {lang === 'en' ? 'Operating Hours' : 'Waktu Operasi'}
                </span>
                <span style={{ fontSize: '0.85rem', marginTop: '2px' }}>
                  {lang === 'en' ? 'Sat - Thu: 9:30 am - 5:30 pm' : 'Sabtu - Khamis: 9.30 pagi - 5.30 ptg'}
                </span>
              </div>
            </div>


          </div>
        </div>

        {/* Column 5: Map */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{lang === 'en' ? 'Find Us' : 'Cari Kami'}</h4>
          <div style={{ width: '100%', height: '110px', overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--clr-border)' }}>
            <iframe
              src="https://maps.google.com/maps?q=GAT%20Services%20Sdn%20Bhd,%20Lot%2013106,%20Kawasan%20Perindustrian%20Gong%20Badak&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {year} GAT SERVICES SDN BHD. {t('footer.rights')}</p>
      </div>
    </footer>
  );
}
