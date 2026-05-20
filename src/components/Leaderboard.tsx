"use client";

import { useLang } from "@/lib/LangContext";
import { motion } from "framer-motion";
import Image from "next/image";

const rankStyles = [
  "text-yellow-400",
  "text-gray-300",
  "text-amber-600",
  "text-muted",
  "text-green",
];

const trendIcons: Record<string, string> = { down: "↓", up: "↑", neutral: "—" };
const trendColors: Record<string, string> = { down: "text-green", up: "text-danger", neutral: "text-muted" };

export function Leaderboard() {
  const { t } = useLang();

  return (
    <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple/4 blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
            {t.leaderboard.title}
          </h2>
          <p className="text-muted text-lg">{t.leaderboard.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-sm mx-auto"
        >
          <div className="rounded-[3rem] border-2 border-border overflow-hidden glow-purple">
            <Image
              src="/site2.jpeg"
              alt={t.leaderboard.groupName}
              width={400}
              height={740}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
