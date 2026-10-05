import type { Metadata, Viewport } from "next";
import "./globals.css";
import { EasterEggProvider } from "@/context/EasterEggContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { ToastContainer } from "@/components/ToastContainer";
import { TerminalModal } from "@/components/TerminalModal";
import { KonamiOverlay } from "@/components/KonamiOverlay";
import { GlitchBreachOverlay } from "@/components/GlitchBreachOverlay";
import { ScanWaveEffect } from "@/components/ScanWaveEffect";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { EVENT_DETAILS } from "@/data/event";

export const metadata: Metadata = {
  title: `${EVENT_DETAILS.name} | Cybersecurity CTF by IIIT Ranchi`,
  description:
    "Official Capture The Flag (CTF) offensive cybersecurity competition organized by IIIT Ranchi. Scheduled for 18 November 2026. 5+ Tracks including Web, Crypto, Forensics, Reverse, Boot2Root, and OSINT.",
  keywords: [
    "Garuda",
    "Garuda CTF",
    "IIIT Ranchi CTF",
    "Capture The Flag",
    "Cybersecurity Competition",
    "Ethical Hacking",
    "InfoSec India",
    "Bugthrive",
    "Frautect",
    "Offensive Security",
  ],
  authors: [{ name: "IIIT Ranchi Cybersecurity Team" }],
  creator: "IIIT Ranchi",
  openGraph: {
    title: `${EVENT_DETAILS.name} | Cybersecurity CTF by IIIT Ranchi`,
    description: "Hack. Decode. Capture. The premier collegiate CTF by IIIT Ranchi. 18 Nov 2026.",
    url: "https://garuda.iiitranchi.ac.in",
    siteName: "Garuda CTF",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_DETAILS.name} | Cybersecurity CTF by IIIT Ranchi`,
    description: "Hack. Decode. Capture. 5+ Tracks, Cash Rewards, 18 November 2026.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#080604",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/*
          ======================================================================
          [GARUDA CTF :: ROOT SOURCE CIPHER]
          ======================================================================
          Well done, operator. You inspect what others ignore.
          
          ENCODED PAYLOAD:
          VG5laHFue3BsbzNlX2kxZjEwYV9oYXkwcHgzcX0=
          
          INSTRUCTIONS:
          1. Base64-decode the payload above to extract an intermediate cipher.
          2. The intermediate cipher was shifted with ROT13.
          3. The resulting plaintext is the flag format Garuda{...}
          4. Submit in the terminal using: submit <flag>
          ======================================================================
        */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#080604] text-slate-100 antialiased font-sans min-h-screen selection:bg-orange-500/30 selection:text-orange-200 noise-bg">
        <EasterEggProvider>
          <SmoothScroll>
            <ScrollProgressBar />
            <CustomCursor />
            {children}
            <ToastContainer />
            <TerminalModal />
            <KonamiOverlay />
            <GlitchBreachOverlay />
            <ScanWaveEffect />
          </SmoothScroll>
        </EasterEggProvider>
      </body>
    </html>
  );
}
