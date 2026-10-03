# The EagleEye — Cybersecurity CTF by IIIT Ranchi

> A high-performance, production-quality single-page website for **The EagleEye**, an offensive cybersecurity Capture The Flag (CTF) competition hosted by the Indian Institute of Information Technology Ranchi (IIIT Ranchi).

---

## ⚡ Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom cyber color variables and dark glassmorphic components
- **Motion & Interactions**: Framer Motion + Lenis Smooth Scrolling
- **FX & Easter Eggs**: HTML5 Canvas Particle Grid, Web Audio API cyber synth tones, Canvas Confetti

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start

```bash
npm run build
npm run start
```

---

## ⚙️ Configuration & Customization

All event metadata, date, tracks, contacts, and sponsors are decoupled into a single configuration file:
👉 **[`lib/config.ts`](lib/config.ts)**

- **Target Countdown Date**:
  ```ts
  export const EVENT_TARGET_DATE = "2026-11-21T00:00:00+05:30"; // 21 November 2026, 00:00 IST
  ```
- **Contacts**: Update names, phone numbers, and IIIT Ranchi emails in `CONTACTS`.
- **Tracks**: Edit the 7 bento grid challenges (Web, Forensics, OSINT, Reverse Engineering, Boot2Root, Cryptography, Misc) in `TRACKS`.
- **Partners / Sponsors**: Add partners (Bugthrive) and sponsors in `SPONSORS`.
- **CTF Secrets**: Customize the root cipher flag in `CTF_FLAG` and `CTF_B64_HINT`.

---

## 🧩 Cybersecurity Easter Eggs (Client-Side & Harmless)

The site includes 10 embedded cybersecurity easter eggs. A real-time in-memory counter is displayed in the footer (`Easter eggs found: X/8`):

1. **Konami Code**:
   Type the sequence `↑ ↑ ↓ ↓ ← → ← → B A` anywhere on your keyboard to trigger the full-screen matrix-rain "ACCESS GRANTED" overlay.
2. **Interactive Terminal Modal**:
   Press the backtick (`` ` `` or `~`) key or click the terminal prompt in the footer to open the root shell (`root@eagleeye-ctf`).
   - Supported commands: `help`, `whoami`, `ls`, `cat flag.txt`, `sudo`, `nmap`, `ping`, `date`, `clear`, `exit`, `submit <flag>`.
   - `sudo` responds: `"Nice try. This incident will be reported."`
   - `cat flag.txt` prints a clue directing you to the root DOM source.
3. **DevTools Console Recon**:
   Open browser Developer Tools (F12 / Cmd+Opt+I) to inspect an ASCII Eagle and secret CTF system log with hints.
4. **CTF Cryptographic Flag Puzzle**:
   - Inspect the HTML comments at the root of `app/layout.tsx`.
   - Extract the Base64 payload: `Um50eXJSbHJ7cGxvM2VfaTFmMTBhX2hheTBweDNxfQ==`
   - Base64-decode to obtain the ROT13 string: `RntyrRlr{plo3e_i1f10a_hay0px3q}`
   - Decode ROT13 to obtain: `EagleEye{cyb3r_v1s10n_unl0ck3d}`
   - Enter `submit EagleEye{cyb3r_v1s10n_unl0ck3d}` in the interactive terminal to unlock confetti and the Master Solver badge!
5. **Inverted Hacker Mode**:
   Click the Eagle Eye logo 5 times in rapid succession to invert the site into matrix-green monospace hacker overdrive for 10 seconds.
6. **Glitch Breach Simulation**:
   Type the letters `h-a-c-k` anywhere on the page (outside input fields) to trigger a red alert breach warning with random redacted glitch bars.
7. **Radar Scan Wave Pulse**:
   Double-click the Eagle Eye logo in the navbar to emit an expanding concentric radar pulse across the entire viewport.
8. **Cursor-Tracking Iris**:
   Hovering over the Eagle Eye SVG logo causes the cyber pupil to smoothly track the operator's cursor.
9. **Custom 404 Route Tracer**:
   Navigating to an invalid route (e.g. `/404-check`) displays a cyber "404: Target Not Found" screen with a live diagnostic traceroute animation.
10. **Harmless Recon Policies**:
    View `/robots.txt` and `/.well-known/security.txt` for RFC 9116 security contact information and easter egg clues.

---

## 📱 Mobile & Accessibility Polish

- **Mobile First**: Fluid layouts, responsive typography, and mobile drawer navigation tested from 375px screens to 1440px+ 4K displays.
- **Prefers Reduced Motion**: Automatically disables custom cursor, smooth scrolling, and reduces canvas particle loops when reduced-motion is requested.
- **Synthesized Web Audio**: Retro terminal beeps and success tones generated purely via the browser's Web Audio API—zero asset downloads or blocking network requests.
- **Performance**: Heavy particle canvas pauses when the tab is hidden or when the hero is scrolled out of view.
