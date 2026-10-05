// ==============================================================================
// GARUDA CTF - EVENT DATA & SINGLE SOURCE OF TRUTH
// ==============================================================================

/**
 * Target countdown date in ISO 8601 with timezone (IST: UTC+05:30).
 * Modify this single constant to change the target launch time across the site.
 */
export const EVENT_DATE = "2026-11-18T00:00:00+05:30";

export const EVENT_DETAILS = {
  name: "Garuda CTF",
  tagline: "Hack. Decode. Capture.",
  host: "Indian Institute of Information Technology Ranchi (IIIT Ranchi)",
  hostShort: "IIIT Ranchi",
  teamSize: "1 - 3 Members",
  tracksCount: "5+ Tracks",
  prizesText: "To Be Announced",
  registrationStatus: "Registration starts soon",
  registrationTooltip: "Registration starts soon",
  edition: "2026 Edition",
  statusBadge: "Registration Starts Soon",
  description:
    "A premier national-level Capture The Flag (CTF) competition curated by the cybersecurity minds at IIIT Ranchi. Inspired by the legendary mythical bird whose piercing vision leaves no shadow hidden, Garuda tests the mettle of hackers, cryptographers, forensicators, and reverse engineers across realistic and high-stakes offensive security challenges.",
};

export const QUICK_METRICS = [
  { label: "Team Size", value: "1 - 3", sub: "Collaborate or fly solo" },
  { label: "Core Tracks", value: "5+", sub: "Offensive & defensive domains" },
  { label: "Prize Pool", value: "TBA", sub: "Cash rewards & certifications" },
  { label: "Format", value: "Online", sub: "48-Hour Jeopardy CTF" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

/**
 * Easter Egg secrets & flag verification
 */
export const CTF_FLAG = "Garuda{cyb3r_v1s10n_unl0ck3d}";
// Base64 of ROT13("Garuda{cyb3r_v1s10n_unl0ck3d}"):
// "VG5laHFue3BsbzNlX2kxZjEwYV9oYXkwcHgzcX0=" -> b64decode gives "Tnehqn{plo3e_i1f10a_hay0px3q}" (ROT13 of Garuda{cyb3r_v1s10n_unl0ck3d})
export const CTF_B64_HINT = "VG5laHFue3BsbzNlX2kxZjEwYV9oYXkwcHgzcX0=";
