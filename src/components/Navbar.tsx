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
  { id: 'rescue', slug: '24-hour-rescue', title: { en: '24-Hour Mobile Breakdown', ms: 'Servis Bergerak (24 Jam)' } }
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
    { href: '/#ikuti-kami', label: t('nav.followUs') },
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
        <Link 
          href="/" 
          className={styles.logo}
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img
            src="/assets/gat-logo.png?v=2"
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
                  <Link 
                    href={l.href} 
                    className={`${styles.link} ${isActive(l.href) ? styles.active : ''}`}
                    onClick={(e) => {
                      if (l.href === '/' && pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
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
          <a
            href="https://api.whatsapp.com/send/?phone=60199391284&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.rescueBtn}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {lang === 'en' ? '24H Emergency' : 'Emergency 24 Jam'}
          </a>
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
                  onClick={(e) => {
                    if (l.href === '/' && pathname === '/') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    setMenuOpen(false);
                  }}
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
