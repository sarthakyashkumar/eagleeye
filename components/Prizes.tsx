"use client";

import React, { useState } from "react";
import { DecryptText } from "./DecryptText";
import { Lock, Gift, Key } from "lucide-react";
import { playCyberTone } from "@/lib/utils";

export function Prizes() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="prizes" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-orange-400">
            <Gift className="w-4 h-4" />
            <span className="text-xs font-mono tracking-widest uppercase">
              // 04. BOUNTY VAULT
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-mono text-slate-100 uppercase tracking-tight">
            <DecryptText text="Prizes: To Be Announced" />
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans">
            A high-stakes reward pool is currently undergoing cryptographic seal. Cash bounties,
            hardware tokens, premium subscriptions, and verified winner credentials.
          </p>
        </div>

        {/* Blurred / Locked Prize Vault Card */}
        <div
          onMouseEnter={() => {
            setIsHovered(true);
            playCyberTone("beep");
          }}
          onMouseLeave={() => setIsHovered(false)}
          className="relative max-w-3xl mx-auto rounded-3xl border border-orange-500/30 bg-slate-950/70 p-8 sm:p-12 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_30px_rgba(249,115,22,0.15)] overflow-hidden"
        >
          {/* Background cyber grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f973160a_1px,transparent_1px),linear-gradient(to_bottom,#f973160a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Locked Badge Overlay */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Animated Padlock */}
            <div className="relative mb-6">
              <div
                className={`p-5 rounded-2xl bg-orange-950/40 border border-orange-500/40 text-orange-400 transition-all duration-500 shadow-[0_0_30px_rgba(249,115,22,0.25)] ${
                  isHovered ? "scale-110 border-orange-300 shadow-[0_0_40px_rgba(249,115,22,0.5)]" : ""
                }`}
              >
                <Lock
                  className={`w-12 h-12 transition-transform duration-300 ${
                    isHovered ? "rotate-6 text-orange-300" : ""
                  }`}
                />
              </div>

              {/* Glowing Pulse Rings */}
              <div className="absolute -inset-2 rounded-2xl border border-orange-400/20 animate-ping pointer-events-none" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-orange-500/30 text-orange-300 text-[11px] font-mono uppercase tracking-wider mb-6">
              <Key className="w-3.5 h-3.5" />
              <span>Vault Status: Encrypted with 4096-bit Key</span>
            </div>

            {/* Blurred Tier Placeholders */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* 1st Place */}
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md overflow-hidden">
                <div className="text-[10px] font-mono text-orange-400 uppercase tracking-widest mb-1">
                  1ST PLACE // CHAMPION
                </div>
                <div className="text-xl font-mono font-bold text-slate-100 filter blur-[6px] select-none">
                  ₹ 50,000 + TROPHY
                </div>
                <div className="text-xs text-slate-400 mt-2 filter blur-[4px] select-none">
                  Direct Internship & Swag
                </div>
                <div className="absolute inset-0 bg-orange-950/20 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-orange-300 bg-black/80 px-2 py-1 rounded border border-orange-500/30">
                    LOCKED
                  </span>
                </div>
              </div>

              {/* 2nd Place */}
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md overflow-hidden">
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-1">
                  2ND PLACE // RUNNER-UP
                </div>
                <div className="text-xl font-mono font-bold text-slate-100 filter blur-[6px] select-none">
                  ₹ 30,000 + MEDAL
                </div>
                <div className="text-xs text-slate-400 mt-2 filter blur-[4px] select-none">
                  Exclusive Partner Kits
                </div>
                <div className="absolute inset-0 bg-amber-950/20 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-amber-300 bg-black/80 px-2 py-1 rounded border border-amber-500/30">
                    LOCKED
                  </span>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md overflow-hidden">
                <div className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest mb-1">
                  3RD PLACE // BRONZE
                </div>
                <div className="text-xl font-mono font-bold text-slate-100 filter blur-[6px] select-none">
                  ₹ 15,000 + MEDAL
                </div>
                <div className="text-xs text-slate-400 mt-2 filter blur-[4px] select-none">
                  Cloud Vouchers & Merch
                </div>
                <div className="absolute inset-0 bg-yellow-950/20 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-yellow-300 bg-black/80 px-2 py-1 rounded border border-yellow-500/30">
                    LOCKED
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs font-mono text-slate-400">
              [!] Official prize distribution structure and sponsor bounty categories will be revealed closer to the event launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
