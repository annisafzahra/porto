'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (idText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('annisa_porto_lang') as Language;
      if (savedLang === 'id' || savedLang === 'en') {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore localStorage errors in restricted environments
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('annisa_porto_lang', lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'id' ? 'en' : 'id';
    setLanguage(nextLang);
  };

  const t = (idText: string, enText: string): string => {
    return language === 'en' ? enText : idText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
