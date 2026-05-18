"use client";

import { useLang } from "@/lib/LangContext";
import { motion } from "framer-motion";
import Image from "next/image";

const stateColors: Record<string, string> = {
  green: "border-green/30 bg-green/5",
  "green-light": "border-green-light/30 bg-green-light/5",
  warning: "border-warning/30 bg-warning/5",
  danger: "border-danger/30 bg-danger/5",
};

const barWidths = ["w-[25%]", "w-[60%]", "w-[85%]", "w-[95%]", "w-full"];
const barColors = [
  "bg-green",
  "bg-green-light",
  "bg-warning",
  "bg-danger",
  "bg-danger",
];

export function Mascot() {
  const { t } = useLang();

  return (
    <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-green/4 blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Image
            src="/logo.png"
            alt="AdKan Brain"
            width={100}
            height={100}
            className="mx-auto mb-6 rounded-2xl"
          />
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
            {t.mascot.title}
          </h2>
          <p className="text-muted text-lg">{t.mascot.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {t.mascot.states.map((state, i) => (
            <motion.div
              key={state.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className={`rounded-2xl border p-4 text-center ${stateColors[state.color]}`}
            >
              <div className="mb-2 flex justify-center">
                <Image src={`/rot${5 - i}.png`} alt={state.label} width={64} height={64} className="object-contain" />
              </div>
              <div className="font-display font-bold text-sm mb-1">
                {state.label}
              </div>
              <div className="text-xs text-muted mb-3">{state.description}</div>
              <div className="h-1.5 rounded-full bg-border overflow-hidden">
                <div className={`h-full rounded-full ${barWidths[i]} ${barColors[i]} transition-all`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
