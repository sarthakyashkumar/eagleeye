// ==============================================================================
// THE EAGLEEYE - CONFIGURATION & SINGLE SOURCE OF TRUTH
// ==============================================================================

/**
 * Target countdown date in ISO 8601 with timezone (IST: UTC+05:30).
 * Modify this single constant to change the target launch time across the site.
 */
export const EVENT_TARGET_DATE = "2026-11-21T00:00:00+05:30";

export const EVENT_DETAILS = {
  name: "The EagleEye",
  tagline: "Hack. Decode. Capture.",
  host: "Indian Institute of Information Technology Ranchi (IIIT Ranchi)",
  hostShort: "IIIT Ranchi",
  registrationStatus: "Registration Starts Soon",
  registrationTooltip: "Registration starts soon",
  edition: "2026 Edition",
  statusBadge: "Registration Starts Soon",
  description:
    "A premier national-level Capture The Flag (CTF) competition curated by the cybersecurity minds at IIIT Ranchi. Designed to test the mettle of hackers, cryptographers, forensicators, and reverse engineers across realistic and high-stakes offensive security challenges.",
};

export const QUICK_METRICS = [
  { label: "Team Size", value: "1 - 3", sub: "Collaborate or fly solo" },
  { label: "Core Tracks", value: "5+", sub: "Offensive & defensive domains" },
  { label: "Prize Pool", value: "TBA", sub: "Cash rewards & certifications" },
  { label: "Format", value: "Online", sub: "48-Hour Jeopardy CTF" },
];

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

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  phoneFormatted: string;
  email: string;
}

export const CONTACTS: ContactPerson[] = [
  {
    name: "Aakash Soni",
    role: "Lead Coordinator",
    phone: "+917568934944",
    phoneFormatted: "+91 75689 34944",
    email: "aakash.2024ug1075@iiitranchi.ac.in",
  },
  {
    name: "Gyan Prakash",
    role: "Technical Head",
    phone: "+916206052476",
    phoneFormatted: "+91 62060 52476",
    email: "gyan.2023ug1091@iiitranchi.ac.in",
  },
  {
    name: "Md. Anaam",
    role: "Operations Head",
    phone: "+919390241734",
    phoneFormatted: "+91 93902 41734",
    email: "anaamuddin.2025ug2062@iiitranchi.ac.in",
  },
  {
    name: "Sahil Kumar",
    role: "Outreach & Logistics",
    phone: "+917056247115",
    phoneFormatted: "+91 70562 47115",
    email: "sahil.2022ug1067@iiitranchi.ac.in",
  },
];

export const SPONSORS = [
  {
    name: "Bugthrive",
    tier: "Official Security Partner",
    url: "https://bugthrive.com/",
    description: "Next-gen vulnerability management & ethical hacking ecosystem.",
    isPartner: true,
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Prizes", href: "#prizes" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

/**
 * Easter Egg secrets & flag verification
 */
export const CTF_FLAG = "EagleEye{cyb3r_v1s10n_unl0ck3d}";
// Phase 1 base64 string that yields hint/ROT13 for the flag:
// "Um50eXJSbHJ7cGxvM2VfaTFmMTBhX2hheTBweDNxfQ==" -> b64decode gives "RntyrRlr{plo3e_i1f10a_hay0px3q}" (ROT13 of EagleEye{cyb3r_v1s10n_unl0ck3d})
export const CTF_B64_HINT = "Um50eXJSbHJ7cGxvM2VfaTFmMTBhX2hheTBweDNxfQ==";
