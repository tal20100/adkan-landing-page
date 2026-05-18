"use client";

import { useLang } from "@/lib/LangContext";
import { motion } from "framer-motion";

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
          className="max-w-md mx-auto"
        >
          <div className="rounded-3xl bg-surface border border-border overflow-hidden glow-purple">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <span className="font-display font-bold text-lg">
                {t.leaderboard.groupName}
              </span>
              <span className="text-xs text-muted bg-surface-hover px-3 py-1 rounded-full">
                {t.leaderboard.today}
              </span>
            </div>

            <div className="p-4 space-y-2">
              {t.leaderboard.players.map((player, i) => (
                <motion.div
                  key={player.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                    i === 4
                      ? "bg-green/6 border border-green/20"
                      : i === 0
                        ? "bg-yellow-400/5 border border-yellow-400/10"
                        : "bg-surface-hover/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-bold text-sm w-5 ${rankStyles[i]}`}>
                      {player.rank}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green/20 to-purple/20 flex items-center justify-center text-xs font-bold">
                      {player.name.charAt(0)}
                    </div>
                    <span className="font-medium text-sm">{player.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">{player.time}</span>
                    <span className={`text-xs ${trendColors[player.trend]}`}>
                      {trendIcons[player.trend]}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
