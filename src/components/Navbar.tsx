'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLang } from '@/context/LangContext';
// Removed services import since we're using a custom list for the dropdown
import LangToggle from './LangToggle';
import styles from './Navbar.module.css';

const dropdownServices = [
  { id: 'diesel', slug: 'heavy-machinery', title: { en: 'Heavy Machinery (Diesel)', ms: 'Jentera Berat & Lori (Diesel)' } },
  { id: 'petrol', slug: 'light-vehicles', title: { en: 'Light Vehicles (Petrol)', ms: 'Kenderaan Ringan (Petrol)' } },
  { id: 'puspakom', slug: 'puspakom-inspection', title: { en: 'PUSPAKOM Inspection Prep', ms: 'Persediaan Pemeriksaan PUSPAKOM' } },
  { id: 'rescue', slug: '24-hour-rescue', title: { en: '24-Hour Mobile Breakdown', ms: 'Perkhidmatan Bergerak (24 Jam)' } }
];

export default function Navbar() {
  const { lang, t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/#overview', label: t('nav.aboutUs') },
    { href: '/#services', label: t('nav.services') },
    { href: '/#fasiliti', label: t('nav.facility') },
    { href: '/#footer', label: t('nav.contactUs') },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Hamburger (Moved to left for mobile) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span /><span /><span />
        </button>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img
            src="/assets/gat-logo.png"
            alt="GAT Logo"
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.links}>
          {navLinks.map((l) => {
            const isHash = l.href.includes('#');

            if (l.href === '/#services') {
              return (
                <li key={l.href} className={styles.dropdownContainer}>
                  <a href={l.href} className={`${styles.link} ${isActive(l.href) ? styles.active : ''}`}>
                    {l.label} <span className={styles.arrow}>▾</span>
                  </a>
                  <ul className={styles.dropdownMenu}>
                    {dropdownServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={`${styles.dropdownLink} ${pathname === `/services/${s.slug}` ? styles.dropdownActive : ''}`}
                        >
                          {s.title[lang as keyof typeof s.title]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={l.href}>
                {isHash ? (
                  <a href={l.href} className={`${styles.link} ${isActive(l.href) ? styles.active : ''}`}>
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className={`${styles.link} ${isActive(l.href) ? styles.active : ''}`}>
                    {l.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className={styles.right}>
          <LangToggle />
          <div className={styles.socialIcons}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="TikTok"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.13V9.5a7.21 7.21 0 0 0-1-.07 7.24 7.24 0 0 0-7.23 7.24 7.24 7.24 0 0 0 7.23 7.25 7.24 7.24 0 0 0 7.24-7.25V7.87a9.66 9.66 0 0 0 5.02 1.5v-3.3a4.81 4.81 0 0 1-2.04-.63z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map((l) => {
          const isHash = l.href.includes('#');
          return (
            <div key={l.href} className={styles.mobileLinkGroup}>
              {isHash ? (
                l.href === '/#services' ? (
                  <button
                    className={`${styles.mobileLink} ${isActive(l.href) ? styles.mobileActive : ''} ${styles.mobileToggleBtn}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileServicesOpen(!mobileServicesOpen);
                    }}
                  >
                    {l.label} <span className={`${styles.arrow} ${mobileServicesOpen ? styles.arrowOpen : ''}`}>▾</span>
                  </button>
                ) : (
                  <a
                    href={l.href}
                    className={`${styles.mobileLink} ${isActive(l.href) ? styles.mobileActive : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                )
              ) : (
                <Link
                  href={l.href}
                  className={`${styles.mobileLink} ${isActive(l.href) ? styles.mobileActive : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              )}

              {l.href === '/#services' && mobileServicesOpen && (
                <div className={styles.mobileSubLinks}>
                  {dropdownServices.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className={`${styles.mobileSubLink} ${pathname === `/services/${s.slug}` ? styles.mobileSubActive : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      — {s.title[lang as keyof typeof s.title]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {/* Removed LangToggle from mobile menu */}
      </div>
    </nav>
  );
}
