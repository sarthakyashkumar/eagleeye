"use client";

import React, { useEffect, useRef } from "react";
import { useEasterEggs } from "@/context/EasterEggContext";
import { X, ShieldCheck } from "lucide-react";

export function KonamiOverlay() {
  const { isKonamiActive, setKonamiActive } = useEasterEggs();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isKonamiActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF$#><*!%";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(5, 7, 10, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff9c";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Auto dismiss after 7 seconds
    const timer = setTimeout(() => {
      setKonamiActive(false);
    }, 7000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  }, [isKonamiActive, setKonamiActive]);

  if (!isKonamiActive) return null;

  return (
    <div className="fixed inset-0 z-[9970] overflow-hidden bg-black/90 flex flex-col items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-80" />

      <div className="relative z-10 flex flex-col items-center text-center p-8 bg-black/80 border border-emerald-500/50 rounded-2xl shadow-[0_0_80px_rgba(0,255,156,0.3)] max-w-lg mx-4 backdrop-blur-md">
        <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 mb-4 animate-bounce">
          <ShieldCheck className="w-12 h-12" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          [KONAMI PROTOCOL BYPASS DETECTED]
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-100 uppercase tracking-tight mt-1 mb-2 font-mono">
          ACCESS <span className="text-emerald-400">GRANTED</span>
        </h2>
        <p className="text-sm font-mono text-slate-300 mb-6">
          Superuser privilege simulation active. You bypassed perimeter security with the ancient Konami sequence.
        </p>

        <button
          onClick={() => setKonamiActive(false)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,255,156,0.5)] cursor-pointer"
        >
          <X className="w-4 h-4" />
          Close Matrix Stream
        </button>
      </div>
    </div>
  );
}
