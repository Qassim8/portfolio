import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import translations from "./translations";

const DEFAULT_LANG = "ar";
const STORAGE_KEY = "lang";

const I18nContext = createContext(null);

const readStored = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return translations[stored] ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
};

// Resolves "hero.name" against the active dictionary; falls back to the key.
const lookup = (dict, path) =>
  path.split(".").reduce((node, key) => (node == null ? node : node[key]), dict);

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(readStored);
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    document.title = translations[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[lang].meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable (private mode) – the choice just won't persist */
    }
  }, [lang, dir]);

  const t = useCallback(
    (path) => lookup(translations[lang], path) ?? path,
    [lang],
  );

  const toggleLang = useCallback(
    () => setLang((current) => (current === "ar" ? "en" : "ar")),
    [],
  );

  const value = useMemo(
    () => ({ lang, dir, t, toggleLang }),
    [lang, dir, t, toggleLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
