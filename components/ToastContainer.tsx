"use client";

import React from "react";
import { useEasterEggs } from "@/context/EasterEggContext";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Terminal, Sparkles, X, ShieldAlert } from "lucide-react";

export function ToastContainer() {
  const { toasts, removeToast } = useEasterEggs();

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto flex items-start gap-3 rounded-xl border border-cyan-500/40 bg-slate-950/90 p-3.5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(34,211,238,0.25)] text-slate-100"
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === "egg" && (
                <Sparkles className="h-5 w-5 text-amber-400 animate-pulse" />
              )}
              {toast.type === "success" && (
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              )}
              {toast.type === "alert" && (
                <ShieldAlert className="h-5 w-5 text-rose-400" />
              )}
              {toast.type === "info" && (
                <Terminal className="h-5 w-5 text-cyan-400" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-300">
                {toast.title}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5 break-words">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-slate-100 transition-colors p-1"
              aria-label="Dismiss notification"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
