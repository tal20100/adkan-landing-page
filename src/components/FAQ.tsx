"use client";

import { useLang } from "@/lib/LangContext";
import { motion } from "framer-motion";
import { useState } from "react";

export function FAQ() {
  const { t } = useLang();

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            {t.faq.title}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full rounded-2xl bg-surface border border-border p-5 text-start hover:bg-surface-hover transition-colors cursor-pointer"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-display font-semibold text-sm sm:text-base">
            {question}
          </span>
          <svg
            className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        {open && (
          <p className="mt-3 text-sm text-muted leading-relaxed">{answer}</p>
        )}
      </button>
    </motion.div>
  );
}
