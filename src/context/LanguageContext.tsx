"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '../translations';

type LanguageContextType = {
  lang: Language;
  t: typeof translations.nl;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('nl');

  const toggleLang = () => {
    setLang(prevLang => prevLang === 'nl' ? 'en' : 'nl');
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
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
