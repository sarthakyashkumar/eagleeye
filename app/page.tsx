"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Tracks } from "@/components/Tracks";
import { EventInfoStrip } from "@/components/EventInfoStrip";
import { Sponsors } from "@/components/Sponsors";
import { Prizes } from "@/components/Prizes";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BootSequence } from "@/components/BootSequence";
import { useEasterEggs } from "@/context/EasterEggContext";

export default function Home() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const { isHackerMode } = useEasterEggs();

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#05070a] text-slate-100 transition-all duration-300 ${
        isHackerMode ? "hacker-mode-active" : ""
      }`}
    >
      {/* Page Load Fake Boot Sequence (Shown once per session) */}
      <BootSequence onComplete={() => setBootCompleted(true)} />

      {/* Inverted Hacker Mode Active Notification Banner */}
      {isHackerMode && (
        <div className="fixed top-0 inset-x-0 z-[9990] bg-emerald-500 text-black py-1 px-4 text-center font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-3">
          <span>[INVERTED HACKER MODE ACTIVATED: 10-SECOND BUFFER]</span>
        </div>
      )}

      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 2 & 3. Hero + Live Countdown */}
        <Hero />

        {/* 4. About / Manifesto with Word-by-Word Scroll Brightening */}
        <Manifesto />

        {/* 5. Tracks (Bento Grid with 7 Domains & Custom Micro-Animations) */}
        <Tracks />

        {/* 6. Event Info Strip (Animated Metric Cards) */}
        <EventInfoStrip />

        {/* 7. Sponsors & Partners (Bugthrive Partner Card & Infinite Marquee) */}
        <Sponsors />

        {/* 8. Prizes (Locked Encrypted Vault & Animated Padlock) */}
        <Prizes />

        {/* 9. Contact (4 Glass Cards with Click-to-Call, Mailto & Copy Toast) */}
        <Contact />
      </main>

      {/* 10. Footer with Giant Outlined Wordmark & Secret Prompts */}
      <Footer />
    </div>
  );
}
