import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, type Lang, type TKey } from './translations';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('site-lang') as Lang | null;
      if (saved === 'en' || saved === 'fr') setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('site-lang', l); } catch {}
    document.documentElement.lang = l;
  };

  const t = (key: TKey) => translations[key]?.[lang] ?? translations[key]?.en ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used inside LanguageProvider');
  return ctx;
}
