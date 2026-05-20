"use client";

import { useLang } from "@/lib/LangContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  const { lang, t, toggle, theme, toggleTheme } = useLang();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="AdKan" width={36} height={36} className="rounded-xl" />
          <span className="font-display font-bold text-lg">
            {lang === "he" ? "עד כאן" : "AdKan"}
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-8 text-sm text-muted">
          <a href="#features" className="hover:text-foreground transition-colors">
            {t.nav.features}
          </a>
          <a href="#pricing" className="hover:text-foreground transition-colors">
            {t.nav.pricing}
          </a>
          <a href="#privacy" className="hover:text-foreground transition-colors">
            {t.nav.privacy}
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            {t.nav.faq}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:border-green/50 hover:text-green transition-all cursor-pointer text-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={toggle}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-border hover:border-green/50 hover:text-green transition-all cursor-pointer"
          >
            {lang === "he" ? "EN" : "עב"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
