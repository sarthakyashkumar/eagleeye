"use client";

import React from "react";
import { DecryptText } from "./DecryptText";
import { SPONSORS, SPONSOR_TIERS, type Sponsor } from "@/data/sponsors";
import { ExternalLink, Handshake, Plus, ArrowDown } from "lucide-react";
import { playCyberTone } from "@/lib/utils";

export function Sponsors() {
  // Group sponsors by tier order defined in SPONSOR_TIERS
  const tierMap = new Map(SPONSOR_TIERS.map((t) => [t.id, t.label]));

  // Build marquee items with real sponsors + placeholder slots
  const marqueeItems = [
    ...SPONSORS.map((s) => ({
      type: "partner" as const,
      name: s.name.toUpperCase(),
      role: tierMap.get(s.tier) || s.tier,
      link: s.url || "#contact",
      logo: s.logo,
    })),
    {
      type: "slot" as const,
      name: "YOUR LOGO HERE",
      role: "Tier 1 Title Sponsor",
      link: "#contact",
      logo: undefined,
    },
    {
      type: "slot" as const,
      name: "INFRASTRUCTURE NODE",
      role: "Cloud Platform Slot",
      link: "#contact",
      logo: undefined,
    },
    {
      type: "slot" as const,
      name: "COMMUNITY ALLY",
      role: "Media & Outreach Partner",
      link: "#contact",
      logo: undefined,
    },
    {
      type: "slot" as const,
      name: "HARDWARE LABS",
      role: "Tooling & Platform Partner",
      link: "#contact",
      logo: undefined,
    },
  ];

  return (
    <section id="sponsors" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-orange-400">
            <Handshake className="w-4 h-4" />
            <span className="text-xs font-mono tracking-widest uppercase">
              // 03. SPONSORS & PARTNERS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-mono text-slate-100 uppercase tracking-tight">
            <DecryptText text="Alliances & Backers" />
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans">
            Backed by vanguard security organizations supporting ethical hacking talent at IIIT Ranchi.
          </p>
        </div>

        {/* Data-Driven Sponsor Cards grouped by SPONSOR_TIERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {SPONSOR_TIERS.map((tier) => {
            const sponsorsInTier = SPONSORS.filter((s) => s.tier === tier.id);
            if (sponsorsInTier.length === 0) return null;

            return sponsorsInTier.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url || "#contact"}
                target={sponsor.url?.startsWith("http") ? "_blank" : undefined}
                rel={sponsor.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => playCyberTone("beep")}
                className="group relative flex flex-col justify-between rounded-2xl border border-orange-500/30 bg-slate-950/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] text-center"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-300 text-[10px] font-mono uppercase tracking-wider mb-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-ping" />
                    {tier.label}
                  </div>

                  {/* Clean SVG Logo or Wordmark */}
                  <div className="flex items-center justify-center min-h-[64px] my-2">
                    {sponsor.logo ? (
                      <div className="relative h-12 w-48 transition-transform group-hover:scale-105 duration-300 flex items-center justify-center">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_12px_rgba(249,115,22,0.25)]"
                        />
                      </div>
                    ) : (
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase group-hover:text-orange-300 transition-colors font-mono">
                        {sponsor.name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs font-mono text-orange-400/80 group-hover:text-orange-300 transition-colors">
                  <span>Visit {sponsor.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ));
          })}
        </div>

        {/* Infinite Marquee Strip */}
        <div className="relative w-full overflow-hidden py-4 border-y border-slate-800/80 bg-slate-950/40">
          {/* Gradient fade on left and right edges */}
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#080604] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#080604] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 w-max animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl backdrop-blur-sm select-none ${
                  item.type === "partner"
                    ? "bg-orange-950/30 border border-orange-500/30 text-orange-300"
                    : "bg-slate-950/40 border border-dashed border-slate-800 text-slate-500"
                }`}
              >
                {item.type === "partner" ? (
                  <div className="h-2 w-2 rounded-full bg-orange-400" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-slate-600" />
                )}
                <div className="flex flex-col text-left">
                  <span className="font-mono text-xs font-bold tracking-wider uppercase">
                    {item.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            onClick={() => playCyberTone("beep")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 hover:border-orange-500/40 bg-slate-950 text-slate-400 hover:text-orange-300 text-xs font-mono transition-all group"
          >
            <span>Become a sponsor, reach out below</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-orange-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
