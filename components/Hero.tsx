"use client";

import React from "react";
import { HeroCanvas } from "./HeroCanvas";
import { Countdown } from "./Countdown";
import { DecryptText } from "./DecryptText";
import { EVENT_DETAILS } from "@/data/event";
import { useEasterEggs } from "@/context/EasterEggContext";
import { playCyberTone } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown, Terminal, Shield, ArrowRight } from "lucide-react";

export function Hero() {
  const { setTerminalOpen, unlockEgg } = useEasterEggs();

  const handleOpenTerminal = () => {
    setTerminalOpen(true);
    unlockEgg("terminal");
    playCyberTone("beep");
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      {/* Interactive canvas backdrop */}
      <HeroCanvas />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Pulsing Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/40 border border-orange-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.2)] mb-6 select-none"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-orange-300 uppercase">
            {EVENT_DETAILS.statusBadge}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-[10px] sm:text-xs font-mono text-slate-400">
            IIIT Ranchi
          </span>
        </motion.div>

        {/* Main Headline with Text Scramble */}
        <div className="relative my-2">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_0_40px_rgba(249,115,22,0.35)]">
            <DecryptText text={EVENT_DETAILS.name} speed={40} delay={200} />
          </h1>

          {/* Glitch chromatic overlay clone on hover */}
          <div className="absolute inset-0 pointer-events-none select-none opacity-0 hover:opacity-100 transition-opacity">
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight uppercase text-orange-500/20 blur-[1px]">
              {EVENT_DETAILS.name}
            </span>
          </div>
        </div>

        {/* Cyber Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center justify-center gap-3 sm:gap-4 my-3 text-sm sm:text-lg md:text-xl font-mono text-orange-400 font-semibold tracking-widest uppercase"
        >
          <span>Hack</span>
          <span className="text-slate-600">•</span>
          <span>Decode</span>
          <span className="text-slate-600">•</span>
          <span>Capture</span>
        </motion.div>

        {/* Brief Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-sans mt-2 mb-4"
        >
          The premier collegiate cybersecurity Capture The Flag challenge hosted by the Indian Institute of Information Technology Ranchi.
          Sharpen your exploits, solve cryptic ciphers, and conquer the leaderboard.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3.5 my-4"
        >
          <a
            href="#tracks"
            onClick={() => playCyberTone("beep")}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] cursor-pointer"
          >
            <Shield className="w-4 h-4 text-slate-950" />
            <span>Explore 5+ Tracks</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleOpenTerminal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-orange-500/40 hover:border-orange-400 text-orange-300 font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.15)] cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-orange-400" />
            <span>Spawn Shell [`]</span>
          </button>
        </motion.div>

        {/* Live Countdown Section embedded right in Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="w-full mt-4"
        >
          <Countdown />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 mt-8 sm:mt-12 flex flex-col items-center gap-1.5 text-slate-400"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">
          SCROLL TO DECRYPT
        </span>
        <a href="#about" aria-label="Scroll to about section" className="p-1 hover:text-orange-400 transition-colors">
          <ChevronDown className="w-4 h-4 animate-bounce text-orange-400" />
        </a>
      </motion.div>
    </section>
  );
}
