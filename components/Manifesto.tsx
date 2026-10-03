"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Target, Trophy, Building2, Terminal } from "lucide-react";
import { DecryptText } from "./DecryptText";

interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
}

function Word({ children, range, progress }: WordProps) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ["#475569", "#f8fafc"]);

  return (
    <span className="relative inline-block mx-1 my-0.5">
      <motion.span style={{ opacity, color }} className="transition-colors">
        {children}
      </motion.span>
    </span>
  );
}

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const manifestoText =
    "We believe true cybersecurity isn't forged in textbooks or compliance checklists—it is born in the heat of battle. Hosted by IIIT Ranchi, The EagleEye brings together student hackers, security researchers, and binary detectives from across the nation. Whether you break Web architectures, reverse-engineer obfuscated binaries, unravel memory traces, or crack cryptographic primitives, this is your proving ground. No artificial boundaries. Just pure offensive curiosity, resilient code, and the relentless pursuit of the root shell.";

  const words = manifestoText.split(" ");

  const quickFacts = [
    {
      icon: Users,
      label: "Team Size",
      val: "1 - 3 Members",
      sub: "Solo operators or cyber squads",
    },
    {
      icon: Target,
      label: "Challenge Tracks",
      val: "5+ Categories",
      sub: "From Web to Hardware & AI",
    },
    {
      icon: Trophy,
      label: "Prize Pool",
      val: "To Be Announced",
      sub: "Cash rewards & certifications",
    },
    {
      icon: Building2,
      label: "Organizer",
      val: "IIIT Ranchi",
      sub: "Flagship annual CTF edition",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background cyber accent lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute -left-40 top-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-8">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono tracking-widest uppercase text-cyan-400">
            // 01. THE MANIFESTO
          </span>
          <div className="h-[1px] flex-1 bg-cyan-500/20" />
        </div>

        <h2 className="text-2xl sm:text-4xl font-mono font-bold text-slate-100 uppercase tracking-tight mb-8">
          <DecryptText text="The EagleEye Protocol" />
        </h2>

        {/* Scroll-Reveal Words Manifesto Paragraph */}
        <div ref={containerRef} className="py-6 sm:py-10">
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-4.5xl font-sans font-medium leading-relaxed sm:leading-snug select-none">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} range={[start, end]} progress={scrollYProgress}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        {/* Quick Facts Bento Row */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative rounded-xl border border-slate-800 bg-slate-950/60 p-5 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-slate-900/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    [0{index + 1}]
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {fact.label}
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {fact.val}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {fact.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
