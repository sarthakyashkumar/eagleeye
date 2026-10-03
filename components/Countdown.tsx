"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENT_TARGET_DATE } from "@/lib/config";

// Single configurable target date constant at the top of the file
export const COUNTDOWN_TARGET = EVENT_TARGET_DATE;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      const targetTime = new Date(COUNTDOWN_TARGET).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isFinished: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-4 my-8 h-24">
        <div className="text-xs font-mono text-cyan-500/60 animate-pulse">
          SYNCING TARGET TIME CLOCK...
        </div>
      </div>
    );
  }

  if (timeLeft.isFinished) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="my-8 p-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,156,0.25)] text-center max-w-lg mx-auto"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
          [TARGET TIME REACHED]
        </span>
        <h3 className="text-2xl sm:text-3xl font-black font-mono text-slate-100 uppercase tracking-wider">
          THE HUNT HAS BEGUN
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-2">
          Perimeter breaches authorized. Capture the flags across all 5+ tracks.
        </p>
      </motion.div>
    );
  }

  const units = [
    { label: "DAYS", value: String(timeLeft.days).padStart(2, "0") },
    { label: "HOURS", value: String(timeLeft.hours).padStart(2, "0") },
    { label: "MINUTES", value: String(timeLeft.minutes).padStart(2, "0") },
    { label: "SECONDS", value: String(timeLeft.seconds).padStart(2, "0") },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 sm:my-8 px-2">
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {units.map((unit, index) => (
          <React.Fragment key={unit.label}>
            {/* Countdown Flip Card */}
            <div className="flex flex-col items-center flex-1 max-w-[110px]">
              <div className="relative w-full aspect-square sm:aspect-[4/5] rounded-xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md p-2 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.15)] group hover:border-cyan-400 transition-all duration-300">
                {/* Horizontal divider line representing flip crease */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyan-500/20 z-10" />

                {/* Subdued corner rivets */}
                <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-cyan-500/40" />
                <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-cyan-500/40" />
                <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-cyan-500/40" />
                <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-cyan-500/40" />

                {/* Digit Display */}
                <div className="relative z-0 overflow-hidden font-mono text-2xl sm:text-4xl md:text-5xl font-black text-cyan-300 tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={unit.value}
                      initial={{ y: -15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 15, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {unit.value}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* Label */}
              <span className="mt-2 text-[10px] sm:text-xs font-mono font-medium tracking-widest text-slate-400 uppercase">
                {unit.label}
              </span>
            </div>

            {/* Separator Colons */}
            {index < units.length - 1 && (
              <div className="flex flex-col gap-1.5 pb-5 text-cyan-400 font-mono text-xl sm:text-2xl font-bold select-none opacity-60">
                <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="text-center mt-3">
        <span className="text-[11px] font-mono text-slate-400 tracking-wider">
          TARGET: 21 NOV 2026 • 00:00 IST (UTC+05:30)
        </span>
      </div>
    </div>
  );
}
