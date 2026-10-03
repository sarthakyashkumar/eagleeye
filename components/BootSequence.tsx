"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playCyberTone } from "@/lib/utils";

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [booting, setBooting] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const bootLines = [
    "[SYSTEM] Initializing EagleEye v2.6 Core Architecture...",
    "[SECURITY] Establishing TLS 1.3 handshake with IIIT Ranchi node...",
    "[MODULES] Loading Web, Forensics, OSINT, Reverse, Boot2Root, Crypto...",
    "[SCANNING] Performing memory integrity check... OK",
    "[STATUS] ACCESS GRANTED. Launching cyber battleground...",
  ];

  const handleFinish = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("eagleeye_booted", "true");
    }
    setBooting(false);
    onComplete();
  };

  useEffect(() => {
    // Check if user already booted this session
    if (typeof window !== "undefined") {
      const alreadyBooted = sessionStorage.getItem("eagleeye_booted");
      if (alreadyBooted === "true") {
        setBooting(false);
        onComplete();
        return;
      }
    }

    // Progress timer
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(handleFinish, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    // Step lines timer
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < bootLines.length - 1) {
          playCyberTone("beep");
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 380);

    const handleKeyOrClick = () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      handleFinish();
    };

    window.addEventListener("keydown", handleKeyOrClick);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      window.removeEventListener("keydown", handleKeyOrClick);
    };
  }, []);

  if (!booting) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070a] p-6 text-slate-100 font-mono select-none"
        onClick={handleFinish}
      >
        <div className="w-full max-w-lg border border-cyan-500/30 rounded-xl bg-slate-950/80 p-6 backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.15)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 text-xs text-cyan-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              BOOT PROTOCOL :: EAGLEEYE-OS
            </span>
            <span className="text-[10px] text-slate-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
              CLICK / ANY KEY TO SKIP
            </span>
          </div>

          {/* Terminal log messages */}
          <div className="space-y-2 min-h-[140px] text-xs">
            {bootLines.slice(0, stepIndex + 1).map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={idx === stepIndex ? "text-cyan-300 font-semibold" : "text-slate-400"}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6 space-y-1.5">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>SYSTEM BOOTSTRAP</span>
              <span className="text-cyan-400">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-cyan-900/50">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
