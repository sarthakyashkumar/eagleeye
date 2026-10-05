"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, ShieldAlert, ArrowLeft } from "lucide-react";
import { playCyberTone } from "@/lib/utils";

export default function NotFound() {
  const [hops, setHops] = useState<string[]>([]);

  useEffect(() => {
    const traceSteps = [
      "traceroute to garuda.ctf/404-sector (10.13.37.404), 30 hops max, 60 byte packets",
      " 1  core-gateway.iiitranchi.ac.in (10.13.37.1)  0.312 ms  0.289 ms  0.344 ms",
      " 2  perimeter-defense.garuda (10.13.37.254)  0.941 ms  0.887 ms  1.021 ms",
      " 3  sec-firewall-01.internal (172.16.42.1)  1.423 ms  1.388 ms  1.402 ms",
      " 4  * * * Request timed out.",
      " 5  * * * Request timed out.",
      " 6  [ERROR 404: DESTINATION UNREACHABLE - PACKET DROPPED BY STEALTH POLICY]",
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < traceSteps.length) {
        setHops((prev) => [...prev, traceSteps[current]]);
        playCyberTone("beep");
        current++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#080604] text-slate-100 font-mono flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f973160a_1px,transparent_1px),linear-gradient(to_bottom,#f973160a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl bg-slate-950/90 border border-rose-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_50px_rgba(244,63,94,0.15)]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-rose-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs text-rose-400 font-semibold flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              DIAGNOSTIC STATUS :: 404 ROUTE FAILURE
            </span>
          </div>
          <span className="text-[10px] text-slate-400">HOST: ctf.iiitranchi.ac.in</span>
        </div>

        {/* 404 Big Glitch */}
        <div className="mb-6">
          <h1 className="text-6xl sm:text-7xl font-black text-rose-400 tracking-tight">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-slate-100 mt-1">
            TARGET NOT FOUND
          </h2>
          <p className="text-xs text-slate-400 font-sans mt-2">
            The requested cyber vector or file descriptor does not exist on the Garuda network.
          </p>
        </div>

        {/* Traceroute Output Box */}
        <div className="bg-black/70 border border-rose-950/60 rounded-xl p-4 text-[11px] sm:text-xs leading-relaxed space-y-1.5 min-h-[180px] max-h-[240px] overflow-y-auto mb-6">
          <div className="text-orange-400 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>root@garuda-gateway:~# traceroute -m 6 target-host</span>
          </div>
          {hops.map((hop, index) => (
            <div
              key={index}
              className={
                hop.includes("ERROR")
                  ? "text-rose-400 font-bold"
                  : hop.includes("*")
                  ? "text-amber-400"
                  : "text-slate-400"
              }
            >
              {hop}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-900">
          <Link
            href="/"
            onClick={() => playCyberTone("beep")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Mission Control</span>
          </Link>

          <span className="text-[11px] text-slate-400">
            Node: IIIT Ranchi [Online]
          </span>
        </div>
      </div>
    </div>
  );
}
