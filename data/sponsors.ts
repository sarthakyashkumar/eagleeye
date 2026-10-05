// ==============================================================================
// GARUDA CTF - SPONSORS & PARTNERS DATA
// ==============================================================================

export type Sponsor = {
  name: string;
  tier: string;          // must match an id in SPONSOR_TIERS
  url?: string;
  logo?: string;         // optional, e.g. "/sponsors/frautect.svg" (file in public/sponsors/)
};

// Order here = display order on the page
export const SPONSOR_TIERS = [
  { id: "official-partner", label: "Official CTF Partner" },
  { id: "associate",        label: "Associate Sponsor" },
];

export const SPONSORS: Sponsor[] = [
  {
    name: "Bugthrive",
    tier: "official-partner",
    url: "https://bugthrive.com/",
    logo: "/sponsors/bugthrive.svg",
  },
  {
    name: "Frautect",
    tier: "associate",
    url: "https://frautect.com/",
    logo: "/sponsors/frautect.svg",
  },
];
