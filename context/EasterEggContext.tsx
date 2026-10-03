"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { playCyberTone } from "@/lib/utils";

export interface EasterEgg {
  id: string;
  name: string;
  description: string;
}

export const EASTER_EGGS_LIST: EasterEgg[] = [
  { id: "konami", name: "Konami Matrix Bypass", description: "Executed the legendary sequence (↑↑↓↓←→←→BA)" },
  { id: "terminal", name: "Root Shell Spawned", description: "Accessed the secret interactive cyber terminal" },
  { id: "console", name: "Console Reconnaissance", description: "Inspected the browser DevTools matrix" },
  { id: "ctf_flag", name: "CTF Flag Captured", description: "Cracked the base64/ROT13 puzzle & submitted the flag" },
  { id: "hacker_mode", name: "Inverted Hacker Mode", description: "Rapid-clicked the eagle eye 5 times" },
  { id: "breach", name: "Glitch Breach Simulation", description: "Typed 'hack' into the terminal frequency" },
  { id: "scan_wave", name: "Ocular Radar Pulse", description: "Double-clicked the Eagle Eye to emit a radar wave" },
  { id: "inspect_dom", name: "DOM Cryptographic Secret", description: "Examined the root source comments" },
];

export const TOTAL_EGGS = EASTER_EGGS_LIST.length; // 8 Easter Eggs

interface ToastItem {
  id: string;
  title: string;
  message: string;
  type: "success" | "egg" | "info" | "alert";
}

interface EasterEggContextType {
  unlockedEggs: string[];
  totalEggs: number;
  unlockEgg: (id: string) => void;
  isHackerMode: boolean;
  setHackerMode: (val: boolean) => void;
  isBreachGlitch: boolean;
  setBreachGlitch: (val: boolean) => void;
  isKonamiActive: boolean;
  setKonamiActive: (val: boolean) => void;
  isTerminalOpen: boolean;
  setTerminalOpen: (val: boolean) => void;
  isScanWaveActive: boolean;
  triggerScanWave: () => void;
  toasts: ToastItem[];
  showToast: (title: string, message: string, type?: ToastItem["type"]) => void;
  removeToast: (id: string) => void;
}

const EasterEggContext = createContext<EasterEggContextType | undefined>(undefined);

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  // Stored strictly in-memory (React state, not localStorage as requested)
  const [unlockedEggs, setUnlockedEggs] = useState<string[]>([]);
  const [isHackerMode, setIsHackerMode] = useState<boolean>(false);
  const [isBreachGlitch, setIsBreachGlitch] = useState<boolean>(false);
  const [isKonamiActive, setIsKonamiActive] = useState<boolean>(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isScanWaveActive, setIsScanWaveActive] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((title: string, message: string, type: ToastItem["type"] = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const unlockEgg = useCallback(
    (id: string) => {
      const egg = EASTER_EGGS_LIST.find((e) => e.id === id);
      if (!egg) return;

      setUnlockedEggs((prev) => {
        if (prev.includes(id)) return prev;
        const next = [...prev, id];
        playCyberTone("unlock");
        showToast(`🥚 Easter Egg [${next.length}/${TOTAL_EGGS}]`, egg.name, "egg");
        return next;
      });
    },
    [showToast]
  );

  const triggerScanWave = useCallback(() => {
    setIsScanWaveActive(true);
    unlockEgg("scan_wave");
    playCyberTone("alert");
    setTimeout(() => {
      setIsScanWaveActive(false);
    }, 1800);
  }, [unlockEgg]);

  // Console Easter Egg trigger on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const asciiEagle = `
  %c  ███████╗ █████╗  ██████╗ ██╗     ███████╗███████╗██╗   ██╗███████╗
  ██╔════╝██╔══██╗██╔════╝ ██║     ██╔════╝██╔════╝╚██╗ ██╔╝██╔════╝
  █████╗  ███████║██║  ███╗██║     █████╗  █████╗   ╚████╔╝ █████╗  
  ██╔══╝  ██╔══██║██║   ██║██║     ██╔══╝  ██╔══╝    ╚██╔╝  ██╔══╝  
  ███████╗██║  ██║╚██████╔╝███████╗███████╗███████╗   ██║   ███████╗
  ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝
    `;

    console.log(
      asciiEagle,
      "color: #22d3ee; font-weight: bold; font-family: monospace; font-size: 11px;"
    );
    console.log(
      "%c[THE EAGLEEYE CTF :: SYSTEM LOG]\n" +
        "%c>> Welcome, Operator. Looking for vulnerabilities?\n" +
        ">> HINT 1/3: Check the DOM HTML comment in the root source code.\n" +
        ">> HINT 2/3: Press the backtick (`) key or click the footer prompt to open the root terminal.\n" +
        ">> HINT 3/3: Submit decoded flags using 'submit <flag>' in the terminal.\n" +
        ">> Run whoami, help, or ls in the secret terminal to begin.",
      "color: #00ff9c; font-weight: bold; font-size: 13px;",
      "color: #94a3b8; font-size: 11px;"
    );

    unlockEgg("console");
  }, [unlockEgg]);

  // Global key listener for Konami code, backtick terminal, and "hack" typing
  useEffect(() => {
    if (typeof window === "undefined") return;

    const konamiSequence = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;
    let hackBuffer = "";

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently inside an input, textarea, or contentEditable
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      // Backtick toggles terminal modal (even when not in other inputs)
      if (e.key === "`" || e.key === "~") {
        if (!isInput || isTerminalOpen) {
          e.preventDefault();
          setIsTerminalOpen((prev) => {
            const next = !prev;
            if (next) {
              unlockEgg("terminal");
              playCyberTone("beep");
            }
            return next;
          });
          return;
        }
      }

      if (isInput) return;

      // Konami code check
      const expectedKey = konamiSequence[konamiIndex];
      if (e.key.toLowerCase() === expectedKey.toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          konamiIndex = 0;
          setIsKonamiActive(true);
          unlockEgg("konami");
          playCyberTone("success");
        }
      } else {
        konamiIndex = 0;
        // Check if current key starts sequence
        if (e.key.toLowerCase() === konamiSequence[0].toLowerCase()) {
          konamiIndex = 1;
        }
      }

      // "hack" sequence check
      if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
        hackBuffer = (hackBuffer + e.key.toLowerCase()).slice(-4);
        if (hackBuffer === "hack") {
          hackBuffer = "";
          setIsBreachGlitch(true);
          unlockEgg("breach");
          playCyberTone("glitch");
          setTimeout(() => {
            setIsBreachGlitch(false);
          }, 3200);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTerminalOpen, unlockEgg]);

  // Inverted hacker mode auto-revert timer (10 seconds)
  useEffect(() => {
    if (!isHackerMode) return;
    const timer = setTimeout(() => {
      setIsHackerMode(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, [isHackerMode]);

  return (
    <EasterEggContext.Provider
      value={{
        unlockedEggs,
        totalEggs: TOTAL_EGGS,
        unlockEgg,
        isHackerMode,
        setHackerMode: setIsHackerMode,
        isBreachGlitch,
        setBreachGlitch: setIsBreachGlitch,
        isKonamiActive,
        setKonamiActive: setIsKonamiActive,
        isTerminalOpen,
        setTerminalOpen: setIsTerminalOpen,
        isScanWaveActive,
        triggerScanWave,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </EasterEggContext.Provider>
  );
}

export function useEasterEggs() {
  const context = useContext(EasterEggContext);
  if (!context) {
    throw new Error("useEasterEggs must be used within an EasterEggProvider");
  }
  return context;
}
