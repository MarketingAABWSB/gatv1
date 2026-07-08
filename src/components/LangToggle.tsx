'use client';

import { useLang } from '@/context/LangContext';
import styles from './LangToggle.module.css';

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className={styles.toggle} role="group" aria-label="Language selector">
      <button
        id="lang-en-btn"
        className={`${styles.btn} ${lang === 'en' ? styles.active : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        id="lang-ms-btn"
        className={`${styles.btn} ${lang === 'ms' ? styles.active : ''}`}
        onClick={() => setLang('ms')}
        aria-pressed={lang === 'ms'}
      >
        BM
      </button>
    </div>
  );
}
