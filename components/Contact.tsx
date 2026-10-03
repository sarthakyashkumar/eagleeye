"use client";

import React, { useState } from "react";
import { CONTACTS, ContactPerson } from "@/lib/config";
import { DecryptText } from "./DecryptText";
import { useEasterEggs } from "@/context/EasterEggContext";
import { playCyberTone } from "@/lib/utils";
import { Phone, Mail, Copy, Check, MessageSquare, ShieldCheck } from "lucide-react";

function ContactCard({ contact }: { contact: ContactPerson }) {
  const { showToast } = useEasterEggs();
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);

  const handleCopy = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    playCyberTone("success");
    showToast(
      "Copied to Clipboard",
      `${type === "phone" ? "Phone" : "Email"} for ${contact.name} copied successfully.`,
      "success"
    );

    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <div className="group relative rounded-2xl border border-slate-800 bg-slate-950/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400 transition-colors">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/30 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            {contact.role}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors">
          {contact.name}
        </h3>
        <p className="text-xs text-slate-400 font-sans mt-0.5">
          Indian Institute of Information Technology Ranchi
        </p>
      </div>

      {/* Contact Channels */}
      <div className="mt-6 space-y-3 pt-4 border-t border-slate-800/80 font-mono text-xs">
        {/* Phone */}
        <div className="flex items-center justify-between gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
          <a
            href={`tel:${contact.phone}`}
            onClick={() => playCyberTone("beep")}
            className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors truncate"
            title="Click to Call"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">{contact.phoneFormatted}</span>
          </a>
          <button
            onClick={() => handleCopy(contact.phone, "phone")}
            className="p-1 text-slate-400 hover:text-cyan-300 transition-colors shrink-0"
            title="Copy Phone Number"
            aria-label={`Copy phone for ${contact.name}`}
          >
            {copiedType === "phone" ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
          <a
            href={`mailto:${contact.email}`}
            onClick={() => playCyberTone("beep")}
            className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors truncate"
            title="Click to Email"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">{contact.email}</span>
          </a>
          <button
            onClick={() => handleCopy(contact.email, "email")}
            className="p-1 text-slate-400 hover:text-cyan-300 transition-colors shrink-0"
            title="Copy Email Address"
            aria-label={`Copy email for ${contact.name}`}
          >
            {copiedType === "email" ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-cyan-400">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-mono tracking-widest uppercase">
              // 05. DIRECT COMMS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-mono text-slate-100 uppercase tracking-tight">
            <DecryptText text="Contact Organizers" />
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans">
            Need technical clarifications, sponsorship inquiry, or institutional coordination? Reach
            out to the core organizing leads directly.
          </p>
        </div>

        {/* 4 Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTACTS.map((c) => (
            <ContactCard key={c.name} contact={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
