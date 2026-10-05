"use client";

import React, { useState, useEffect } from "react";
import { GarudaLogo } from "./GarudaLogo";
import { NAV_LINKS, EVENT_DETAILS } from "@/data/event";
import { useEasterEggs } from "@/context/EasterEggContext";
import { playCyberTone } from "@/lib/utils";
import { Terminal, Menu, X, Lock } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { setTerminalOpen, unlockedEggs, totalEggs, unlockEgg } = useEasterEggs();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTerminalOpen = () => {
    setTerminalOpen(true);
    unlockEgg("terminal");
    playCyberTone("beep");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#080604]/90 backdrop-blur-md border-b border-orange-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <GarudaLogo />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => playCyberTone("beep")}
              className="px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-mono text-slate-300 hover:text-orange-400 hover:bg-orange-950/30 transition-all duration-200 border border-transparent hover:border-orange-500/30"
            >
              <span className="text-orange-500/50 mr-1">//</span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Terminal Trigger Button */}
          <button
            onClick={handleTerminalOpen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-orange-500/30 text-orange-400 hover:bg-orange-950/50 hover:border-orange-400 text-xs font-mono transition-all shadow-[0_0_10px_rgba(249,115,22,0.12)] cursor-pointer"
            title="Open Interactive CTF Terminal (Hotkey: `)"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
            {unlockedEggs.length > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-orange-500/20 text-[10px] text-orange-300 font-bold">
                {unlockedEggs.length}/{totalEggs}
              </span>
            )}
          </button>

          {/* Register Button (Disabled with Tooltip) */}
          <div className="relative">
            <button
              disabled
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => playCyberTone("alert")}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-mono text-xs uppercase tracking-wider cursor-not-allowed opacity-80"
              aria-label="Registration status"
            >
              <Lock className="w-3.5 h-3.5 text-orange-400/70" />
              <span>Register</span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
            </button>

            {/* Custom Tooltip */}
            {showTooltip && (
              <div className="absolute top-full right-0 mt-2 z-50 whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-950 border border-orange-500/50 text-orange-300 text-[11px] font-mono shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-fadeIn">
                <span className="text-orange-400 mr-1.5">●</span>
                {EVENT_DETAILS.registrationTooltip}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleTerminalOpen}
            className="p-2 rounded-lg bg-slate-900 border border-orange-500/30 text-orange-400"
            aria-label="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-orange-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#080604]/95 border-b border-orange-500/30 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playCyberTone("beep");
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-lg text-sm font-mono text-slate-300 hover:text-orange-400 hover:bg-slate-900 border border-transparent hover:border-orange-500/30"
            >
              <span className="text-orange-400 mr-2">&gt;</span>
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              disabled
              className="w-full py-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed"
            >
              <Lock className="w-3.5 h-3.5 text-orange-400" />
              <span>Register (Starts Soon)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
