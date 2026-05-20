"use client";

import { useLang } from "@/lib/LangContext";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const { lang, t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden hero-gradient">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-green/6 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple/6 blur-[140px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green/30 bg-green/8 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="text-sm text-green font-medium">{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl leading-tight mb-4"
        >
          <span className="gradient-text">{t.hero.headline}</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground/90 mb-6"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-10"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-green to-green-dim text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(120,201,111,0.3)]"
          >
            <AppleLogo />
            <span>{t.hero.cta}</span>
          </a>
          <span className="text-sm text-muted">{t.hero.ctaSub}</span>
        </motion.div>

        {/* Phone mockup with real screenshot */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative mx-auto max-w-xs"
        >
          {/* Mascot peeking */}
          <motion.div
            className="absolute -top-10 -left-6 sm:-left-16 z-20"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/logo.png"
              alt={lang === "he" ? "המוח של עד כאן" : "AdKan Brain Mascot"}
              width={80}
              height={80}
              className="rounded-2xl drop-shadow-2xl"
            />
          </motion.div>

          <div className="relative mx-auto w-[260px] rounded-[3rem] border-2 border-border bg-surface overflow-hidden glow-green">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-background rounded-b-2xl z-10" />
            <Image
              src="/site3.jpeg"
              alt={lang === "he" ? "מסך הבית של עד כאן" : "AdKan home screen"}
              width={260}
              height={530}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-b from-green/8 to-purple/8 rounded-[3.5rem] blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

function AppleLogo() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
