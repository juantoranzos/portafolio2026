"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({ lang: "es", setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
