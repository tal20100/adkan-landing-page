"use client";

import { useLang } from "@/lib/LangContext";
import Image from "next/image";

export function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AdKan" width={32} height={32} className="rounded-lg" />
            <span className="text-sm text-muted">{t.footer.tagline}</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a
              href="https://taltalhayun.com/adkan/privacy"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.links.privacy}
            </a>
            <a
              href="https://taltalhayun.com/adkan/terms"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.links.terms}
            </a>
            <a
              href="mailto:tal.hayun2010@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              {t.footer.links.contact}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted/60">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.madeIn}</span>
        </div>
      </div>
    </footer>
  );
}
