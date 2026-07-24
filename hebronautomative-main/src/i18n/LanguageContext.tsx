'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, LanguageCode } from './translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (section: keyof typeof translations['EN'], key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('EN');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('hebron_lang') as LanguageCode;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('hebron_lang', lang);
  };

  const t = (section: keyof typeof translations['EN'], key: string): string => {
    // If not mounted yet, always return English to avoid hydration mismatch
    const activeLang = mounted ? language : 'EN';
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const langDict = translations[activeLang][section] as any;
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to EN
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fallbackDict = translations['EN'][section] as any;
    return fallbackDict && fallbackDict[key] ? fallbackDict[key] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslation(section: keyof typeof translations['EN']) {
  const { t } = useLanguage();
  return (key: string) => t(section, key);
}
