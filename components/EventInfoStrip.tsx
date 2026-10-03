"use client";

import React from "react";
import { Users, Flag, Trophy, Clock } from "lucide-react";
import { playCyberTone } from "@/lib/utils";

export function EventInfoStrip() {
  const metrics = [
    {
      icon: Users,
      value: "1 - 3",
      label: "Team Size",
      detail: "Fly solo or squad up",
      color: "from-cyan-500/20 to-cyan-500/5",
      accent: "text-cyan-400",
    },
    {
      icon: Flag,
      value: "5+",
      label: "Core Tracks",
      detail: "7 offensive domains",
      color: "from-violet-500/20 to-violet-500/5",
      accent: "text-violet-400",
    },
    {
      icon: Trophy,
      value: "TBA",
      label: "Prizes Pool",
      detail: "Cash rewards & swags",
      color: "from-amber-500/20 to-amber-500/5",
      accent: "text-amber-400",
    },
    {
      icon: Clock,
      value: "Soon",
      label: "Registration",
      detail: "Slots opening shortly",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-400",
    },
  ];

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              onMouseEnter={() => playCyberTone("beep")}
              className={`group relative rounded-2xl border border-slate-800 bg-gradient-to-b ${m.color} p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  {m.label}
                </span>
                <Icon className={`w-4 h-4 ${m.accent}`} />
              </div>

              <div>
                <div className="text-2xl sm:text-4xl font-black font-mono text-slate-100 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-1">
                  {m.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
