"use client";

import { LangProvider } from "@/lib/LangContext";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Mascot } from "@/components/Mascot";
import { Blocking } from "@/components/Blocking";
import { Leaderboard } from "@/components/Leaderboard";
import { Privacy } from "@/components/Privacy";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Mascot />
        <Blocking />
        <Leaderboard />
        <Privacy />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </LangProvider>
  );
}
