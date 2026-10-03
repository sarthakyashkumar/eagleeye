"use client";

import React from "react";
import { useEasterEggs } from "@/context/EasterEggContext";
import { motion, AnimatePresence } from "framer-motion";

export function ScanWaveEffect() {
  const { isScanWaveActive } = useEasterEggs();

  return (
    <AnimatePresence>
      {isScanWaveActive && (
        <div className="fixed inset-0 z-[9940] pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Circular expanding radar wave */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0.9, borderWidth: 4 }}
            animate={{ scale: 35, opacity: 0, borderWidth: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="rounded-full border-cyan-400 bg-cyan-400/5 shadow-[0_0_80px_#22d3ee] w-24 h-24"
          />
          {/* Secondary harmonic ripple */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0.7, borderWidth: 2 }}
            animate={{ scale: 28, opacity: 0, borderWidth: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, delay: 0.15, ease: "easeOut" }}
            className="rounded-full border-violet-400 bg-violet-400/5 shadow-[0_0_60px_#8b5cf6] w-24 h-24"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
