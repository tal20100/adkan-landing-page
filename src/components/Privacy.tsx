"use client";

import { useLang } from "@/lib/LangContext";
import { motion } from "framer-motion";

export function Privacy() {
  const { lang, t } = useLang();

  return (
    <section id="privacy" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-surface border border-border p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/50 to-transparent" />

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Visual: phone with single number */}
            <div className="shrink-0">
              <div className="w-[140px] h-[200px] rounded-2xl bg-background border border-border flex flex-col items-center justify-center relative">
                <div className="text-3xl font-display font-black gradient-text-green">72</div>
                <div className="text-xs text-muted mt-1">{lang === "he" ? "דק׳" : "min"}</div>
                {/* Arrow going out */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center gap-1 rtl:left-auto rtl:-right-6">
                  <div className="w-5 h-px bg-green/50" />
                  <svg className="w-3 h-3 text-green/50 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </div>
                {/* Cloud icon */}
                <div className="absolute -left-14 top-1/2 -translate-y-1/2 text-green/40 rtl:left-auto rtl:-right-14">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-center md:text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green/30 bg-green/5 mb-4">
                <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-xs text-green font-medium">{t.privacy.badge}</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4">
                {t.privacy.title}
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {t.privacy.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10">
            {t.privacy.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="rounded-xl bg-background border border-border p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-display font-black gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
