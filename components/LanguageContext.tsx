import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = (localStorage.getItem('app-lang') || "").toLowerCase();
    const initialLang = (stored.startsWith("it") ? "it" : "en") as Language;
    setLanguageState(initialLang);
    document.documentElement.lang = initialLang;
    // Dispatch initial event to sync overrides
    window.dispatchEvent(new Event("language:changed"));
  }, []);

  const setLanguage = (lang: Language) => {
    const normalized = (lang || "en").toLowerCase().startsWith("it") ? "it" : "en";
    setLanguageState(normalized as Language);
    localStorage.setItem('app-lang', normalized);
    document.documentElement.lang = normalized;
    // Dispatch custom event for ElevenLabs synchronization
    window.dispatchEvent(new Event("language:changed"));
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};