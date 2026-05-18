"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Lang, translations } from "./translations";

type Theme = "dark" | "light";

type LangContextType = {
  lang: Lang;
  t: (typeof translations)[Lang];
  toggle: () => void;
  theme: Theme;
  toggleTheme: () => void;
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("he");
  const [theme, setTheme] = useState<Theme>("dark");

  const toggle = useCallback(() => {
    const next = lang === "he" ? "en" : "he";
    setLang(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "he" ? "rtl" : "ltr";
  }, [lang]);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }, [theme]);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, t, toggle, theme, toggleTheme }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
