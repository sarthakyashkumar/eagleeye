"use client";

import React from "react";
import { GarudaLogo } from "./GarudaLogo";
import { NAV_LINKS, EVENT_DETAILS } from "@/data/event";
import { SPONSORS, SPONSOR_TIERS } from "@/data/sponsors";
import { useEasterEggs } from "@/context/EasterEggContext";
import { playCyberTone } from "@/lib/utils";
import { Terminal, Sparkles, ExternalLink } from "lucide-react";

export function Footer() {
  const { unlockedEggs, totalEggs, setTerminalOpen, unlockEgg } = useEasterEggs();

  const handlePromptClick = () => {
    setTerminalOpen(true);
    unlockEgg("terminal");
    playCyberTone("beep");
  };

  // Generate partner/sponsor lines from data/sponsors.ts
  const sponsorTierLines = SPONSOR_TIERS.map((tier) => {
    const sponsors = SPONSORS.filter((s) => s.tier === tier.id);
    return {
      label: tier.label,
      sponsors,
    };
  }).filter((item) => item.sponsors.length > 0);

  return (
    <footer className="relative bg-[#060402] border-t border-slate-900 pt-16 pb-12 overflow-hidden select-none">
      {/* Ambient background orange glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-slate-900">
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-2 space-y-4">
            <GarudaLogo size={42} />
            <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-sm leading-relaxed">
              {EVENT_DETAILS.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-ping" />
              <span>Host Node: {EVENT_DETAILS.hostShort}, Jharkhand, India</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold mb-4">
              // Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => playCyberTone("beep")}
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    &gt; {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Partnerships & Easter Eggs */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold mb-4">
              // Alliances
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              {/* Dynamically generated partner & sponsor lines from data/sponsors.ts */}
              {sponsorTierLines.map((tierGroup) =>
                tierGroup.sponsors.map((sponsor) => (
                  <div key={sponsor.name}>
                    <a
                      href={sponsor.url || "#"}
                      target={sponsor.url?.startsWith("http") ? "_blank" : undefined}
                      rel={sponsor.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() => playCyberTone("beep")}
                      className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-orange-300 transition-colors"
                    >
                      <span className="text-slate-500">{tierGroup.label}:</span>
                      <span className="font-semibold text-slate-300 group-hover:text-orange-400">
                        {sponsor.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                ))
              )}

              {/* Easter Eggs Counter Badge */}
              <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-orange-500/30 font-mono text-xs">
                <div className="flex items-center justify-between text-orange-400 mb-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-orange-300" />
                    Easter Eggs Discovered
                  </span>
                  <span className="font-bold">
                    {unlockedEggs.length}/{totalEggs}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 transition-all duration-500"
                    style={{ width: `${(unlockedEggs.length / totalEggs) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  {unlockedEggs.length === totalEggs
                    ? "★ All cyber secrets discovered!"
                    : "Discover hidden keys, sequences & commands."}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Outlined Wordmark with Hover Reveal */}
        <div className="py-12 sm:py-16 text-center overflow-hidden">
          <h2
            onClick={handlePromptClick}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black tracking-tighter uppercase transition-all duration-500 cursor-pointer select-none text-transparent stroke-text hover:text-orange-400 hover:drop-shadow-[0_0_60px_rgba(249,115,22,0.5)] leading-none"
            title="Click to spawn command prompt"
          >
            GARUDA CTF
          </h2>
        </div>

        {/* Bottom Bar & Harmless Mystery Prompt */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>© 2026 {EVENT_DETAILS.name} • Organized by</span>
            <span className="text-slate-300 font-semibold">{EVENT_DETAILS.hostShort}</span>
          </div>

          {/* Interactive footer prompt */}
          <button
            onClick={handlePromptClick}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-900 border border-transparent hover:border-orange-500/30 text-slate-400 hover:text-orange-300 transition-all cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-orange-400 group-hover:animate-pulse" />
            <span className="text-[11px]">
              // nothing to see here... or is there? [Press ~ to launch terminal]
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
