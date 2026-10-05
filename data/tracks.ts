// ==============================================================================
// GARUDA CTF - TRACKS DATA & DESCRIPTIONS
// ==============================================================================

export interface TrackItem {
  id: string;
  name: string;
  category: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Hard" | "Insane";
  iconName: string;
  tag: string;
  colSpan?: string;
}

export const TRACKS: TrackItem[] = [
  {
    id: "web",
    name: "Web Exploitation",
    category: "OFFENSIVE",
    description: "Break complex web architectures: SSRF, OAuth flaws, prototype pollution, zero-day injection vectors, and API flaws.",
    difficulty: "Intermediate",
    iconName: "Globe",
    tag: "OWASP Top 10+",
    colSpan: "lg:col-span-2",
  },
  {
    id: "crypto",
    name: "Cryptography",
    category: "DECRYPTION",
    description: "Crack weak RSA implementations, lattice-based attacks, elliptic curves, discrete log flaws, and bespoke ciphers.",
    difficulty: "Hard",
    iconName: "Lock",
    tag: "ECC & Ciphers",
    colSpan: "lg:col-span-1",
  },
  {
    id: "forensics",
    name: "Forensics & Memory",
    category: "INVESTIGATION",
    description: "Inspect PCAP network traffic, Volatility memory dumps, carve corrupted file headers, and uncover deep steganography.",
    difficulty: "Intermediate",
    iconName: "Search",
    tag: "PCAP & Memory",
    colSpan: "lg:col-span-1",
  },
  {
    id: "reverse",
    name: "Reverse Engineering",
    category: "ANALYSIS",
    description: "Dissect compiled x86-64/ARM binaries, unmask VM-based obfuscations, unpack anti-debugging routines, and bypass auth.",
    difficulty: "Insane",
    iconName: "Binary",
    tag: "Ghidra / IDA",
    colSpan: "lg:col-span-2",
  },
  {
    id: "boot2root",
    name: "Boot2Root",
    category: "ROOT SHELL",
    description: "Gain initial foothold through misconfigurations, escalate privileges, exploit kernel race conditions, and capture /root/flag.",
    difficulty: "Hard",
    iconName: "Terminal",
    tag: "PrivEsc & Shells",
    colSpan: "lg:col-span-1",
  },
  {
    id: "osint",
    name: "OSINT (Intelligence)",
    category: "SURVEILLANCE",
    description: "Track elusive digital footprints across the clear and dark web, geolocate clandestine satellite imagery, and reconstruct identities.",
    difficulty: "Intermediate",
    iconName: "Radar",
    tag: "Geoint & Recon",
    colSpan: "lg:col-span-1",
  },
  {
    id: "misc",
    name: "Miscellaneous & AI",
    category: "UNCONVENTIONAL",
    description: "Tackle esoteric puzzles, jailbreak adversarial LLMs, decode SDR radio signals, and hack unconventional embedded logic.",
    difficulty: "Hard",
    iconName: "Cpu",
    tag: "AI & Hardware",
    colSpan: "lg:col-span-2",
  },
];
