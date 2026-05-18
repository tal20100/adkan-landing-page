"use client";

import { useLang } from "@/lib/LangContext";
import { motion } from "framer-motion";

export function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            {t.pricing.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-surface border border-border p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="font-display font-bold text-xl mb-2">
                {t.pricing.free.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-black">
                  {t.pricing.free.price}
                </span>
                <span className="text-muted text-sm">{t.pricing.free.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {t.pricing.free.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-muted shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block text-center py-3.5 px-6 rounded-xl border border-border text-foreground font-semibold hover:bg-surface-hover transition-colors"
            >
              {t.pricing.free.cta}
            </a>
          </motion.div>

          {/* Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-surface border border-green/30 p-8 flex flex-col relative overflow-hidden glow-green"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green to-transparent" />

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display font-bold text-xl">
                  {t.pricing.premium.name}
                </h3>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-green/10 text-green border border-green/20">
                  {t.pricing.premium.badge}
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-black gradient-text-green">
                  {t.pricing.premium.price}
                </span>
                <span className="text-muted text-sm">{t.pricing.premium.period}</span>
              </div>
              <div className="mt-2 space-y-0.5">
                <div className="text-xs text-muted">{t.pricing.premium.annual}</div>
                <div className="text-xs text-purple font-medium">{t.pricing.premium.lifetime}</div>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {t.pricing.premium.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block text-center py-3.5 px-6 rounded-xl bg-gradient-to-r from-green to-green-dim text-white font-bold hover:scale-[1.02] transition-transform"
            >
              {t.pricing.premium.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
