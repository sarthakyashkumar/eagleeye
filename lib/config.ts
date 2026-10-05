// ==============================================================================
// GARUDA CTF - CONFIG RE-EXPORTER (FOR BACKWARD COMPATIBILITY)
// Single Source of Truth lives in @/data/
// ==============================================================================

import {
  EVENT_DATE,
  EVENT_DETAILS,
  QUICK_METRICS,
  NAV_LINKS,
  CTF_FLAG,
  CTF_B64_HINT,
} from "@/data/event";
import { TRACKS, type TrackItem } from "@/data/tracks";
import { CONTACTS, type ContactPerson } from "@/data/contacts";
import { SPONSORS, SPONSOR_TIERS, type Sponsor } from "@/data/sponsors";

export {
  EVENT_DATE,
  EVENT_DETAILS,
  QUICK_METRICS,
  NAV_LINKS,
  CTF_FLAG,
  CTF_B64_HINT,
  TRACKS,
  type TrackItem,
  CONTACTS,
  type ContactPerson,
  SPONSORS,
  SPONSOR_TIERS,
  type Sponsor,
};

// Aliases for compatibility
export const EVENT_TARGET_DATE = EVENT_DATE;
