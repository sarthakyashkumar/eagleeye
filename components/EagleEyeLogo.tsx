"use client";

import React, { useRef, useState, useEffect } from "react";
import { useEasterEggs } from "@/context/EasterEggContext";
import { playCyberTone } from "@/lib/utils";

interface EagleEyeLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function EagleEyeLogo({ className = "", size = 36, showText = true }: EagleEyeLogoProps) {
  const { setHackerMode, isHackerMode, unlockEgg, triggerScanWave } = useEasterEggs();
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);
  const eyeRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for the pupil
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;
      const dist = Math.hypot(deltaX, deltaY);
      const maxOffset = 5; // maximum pixels the iris moves

      if (dist === 0) {
        setPupilPos({ x: 0, y: 0 });
      } else {
        const offset = Math.min(dist / 30, maxOffset);
        setPupilPos({
          x: (deltaX / dist) * offset,
          y: (deltaY / dist) * offset,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Click handler: 5 quick clicks = Inverted hacker mode
  const handleLogoClick = () => {
    playCyberTone("beep");
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        setHackerMode(!isHackerMode);
        unlockEgg("hacker_mode");
        playCyberTone("alert");
        return 0;
      }
      return next;
    });

    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      setClickCount(0);
    }, 1200);
  };

  // Double click handler: triggers full-screen radar scan wave
  const handleDoubleClick = () => {
    triggerScanWave();
  };

  return (
    <div
      ref={eyeRef}
      onClick={handleLogoClick}
      onDoubleClick={handleDoubleClick}
      className={`group inline-flex items-center gap-2.5 cursor-pointer select-none transition-transform duration-300 hover:scale-105 ${className}`}
      title="EagleEye: Double-click to pulse scan | 5x click to hack"
    >
      <div
        className="relative flex items-center justify-center rounded-xl bg-orange-950/30 p-1.5 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:border-orange-400 group-hover:shadow-[0_0_22px_rgba(249,115,22,0.4)] transition-all duration-300"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
        >
          {/* Eagle Beak & Crest Silhouette */}
          <path
            d="M 6 24 C 14 10, 34 10, 42 24 C 34 38, 14 38, 6 24 Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors group-hover:stroke-orange-300"
          />
          {/* Eagle brow / geometric crest */}
          <path
            d="M 10 17 L 24 8 L 38 17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="opacity-70 group-hover:opacity-100 transition-opacity"
          />
          {/* Cyber reticle ticks */}
          <line x1="24" y1="12" x2="24" y2="15" stroke="currentColor" strokeWidth="1.5" />
          <line x1="24" y1="33" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="24" x2="15" y2="24" stroke="currentColor" strokeWidth="1.5" />
          <line x1="33" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="1.5" />

          {/* Iris Ring */}
          <circle
            cx="24"
            cy="24"
            r="8"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeDasharray="2 3"
            className="animate-spin"
            style={{ animationDuration: "12s" }}
          />

          {/* Dynamic Pupil following cursor */}
          <g transform={`translate(${pupilPos.x}, ${pupilPos.y})`}>
            <circle
              cx="24"
              cy="24"
              r="4.2"
              fill="#f97316"
              className="drop-shadow-[0_0_6px_#f97316]"
            />
            <circle cx="25.2" cy="22.8" r="1.2" fill="#ffffff" />
          </g>
        </svg>

        {/* Pulsing beacon glow dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className="text-base sm:text-lg font-bold tracking-wider text-slate-100 uppercase group-hover:text-orange-300 transition-colors">
              The <span className="text-orange-400">Eagle</span>Eye
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono mt-0.5">
            IIIT Ranchi CTF
          </span>
        </div>
      )}
    </div>
  );
}
