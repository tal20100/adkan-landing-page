"use client";

import { LangProvider } from "@/lib/LangContext";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <Nav />
      <main className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        {children}
      </main>
      <Footer />
    </LangProvider>
  );
}
