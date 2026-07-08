'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Lang } from '@/lib/i18n';

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'ms',
  setLang: () => {},
  t: (k) => k,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ms');

  useEffect(() => {
    const saved = localStorage.getItem('aabwsb-lang') as Lang | null;
    if (saved === 'en' || saved === 'ms') setLangState(saved);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('aabwsb-lang', newLang);
  };

  // Lazy import to avoid circular deps
  const tFn = (key: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { translations } = require('@/lib/i18n');
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let obj: any = translations;
    for (const k of keys) obj = obj?.[k];
    return obj?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: tFn }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
