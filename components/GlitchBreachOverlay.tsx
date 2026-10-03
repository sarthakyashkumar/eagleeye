"use client";

import React from "react";
import { useEasterEggs } from "@/context/EasterEggContext";
import { AlertTriangle } from "lucide-react";

export function GlitchBreachOverlay() {
  const { isBreachGlitch } = useEasterEggs();

  if (!isBreachGlitch) return null;

  return (
    <div className="fixed inset-0 z-[9960] pointer-events-none overflow-hidden flex flex-col items-center justify-center mix-blend-difference select-none">
      {/* Glitch Scanlines & Distortion */}
      <div className="absolute inset-0 bg-red-600/15 animate-pulse" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,0,0,0.15)_0px,transparent_2px,transparent_4px)]" />

      {/* Random Redacted Horizontal Bars */}
      <div className="absolute top-1/4 left-10 right-20 h-8 bg-red-500/80 animate-ping opacity-75" />
      <div className="absolute top-1/2 left-32 right-12 h-14 bg-black/90 border-y border-red-500/80" />
      <div className="absolute bottom-1/3 left-4 right-1/2 h-10 bg-red-600/70" />
      <div className="absolute top-16 right-1/4 w-72 h-6 bg-red-500" />
      <div className="absolute bottom-20 left-1/3 w-96 h-8 bg-black border border-red-500" />

      {/* Warning Center Banner */}
      <div className="relative z-10 px-8 py-5 bg-black/90 border-2 border-red-500 rounded-lg text-center shadow-[0_0_50px_rgba(239,68,68,0.7)]">
        <div className="flex items-center justify-center gap-3 text-red-500 mb-2">
          <AlertTriangle className="w-8 h-8 animate-bounce" />
          <span className="font-mono text-xl sm:text-2xl font-black uppercase tracking-wider">
            [SECURITY BREACH DETECTED]
          </span>
          <AlertTriangle className="w-8 h-8 animate-bounce" />
        </div>
        <p className="font-mono text-xs sm:text-sm text-red-400">
          INTRUSION VECTOR: CLIENT KEYLOG FREQUENCY &apos;HACK&apos; DETECTED
        </p>
        <p className="font-mono text-[11px] text-slate-400 mt-1">
          CONTAINMENT PROTOCOLS ACTIVE // RESTORING SYSTEM INTEGRITY...
        </p>
      </div>
    </div>
  );
}
