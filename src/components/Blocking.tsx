"use client";

import { useLang } from "@/lib/LangContext";
import { motion } from "framer-motion";

export function Blocking() {
  const { t } = useLang();

  return (
    <section className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
            {t.blocking.title}
          </h2>
          <p className="text-muted text-lg">{t.blocking.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Shield screen mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-surface border border-border overflow-hidden"
          >
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-danger/10 border border-danger/20 flex items-center justify-center mb-6">
                <span className="text-3xl">⛔</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                {t.blocking.shieldTitle}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {t.blocking.shieldMessage}
              </p>
              <div className="w-full h-px bg-border mb-6" />
              <div className="flex items-center gap-4 text-xs text-muted">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-danger" />
                  TikTok
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-danger" />
                  Instagram
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-danger" />
                  YouTube
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hard Mode card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-surface border border-purple/20 overflow-hidden glow-purple"
          >
            <div className="p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full premium-badge text-white text-xs font-bold mb-5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                {t.blocking.hardModeTitle}
              </div>

              <div className="space-y-3">
                {t.blocking.hardModeItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-purple/5 border border-purple/10"
                  >
                    <span className="w-6 h-6 rounded-full bg-purple/20 text-purple text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
