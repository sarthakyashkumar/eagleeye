// ==============================================================================
// GARUDA CTF - CONTACTS DATA
// ==============================================================================

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
