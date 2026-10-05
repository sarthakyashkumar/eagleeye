"use client";

import React, { useState, useRef, useEffect } from "react";
import { useEasterEggs } from "@/context/EasterEggContext";
import { CTF_FLAG } from "@/data/event";
import { playCyberTone } from "@/lib/utils";
import confetti from "canvas-confetti";
import { Terminal, X } from "lucide-react";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "error" | "success" | "accent";
  text: string;
}

export function TerminalModal() {
  const { isTerminalOpen, setTerminalOpen, unlockEgg } = useEasterEggs();
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: "init-1",
      type: "accent",
      text: "==================================================================",
    },
    {
      id: "init-2",
      type: "success",
      text: "[GARUDA CTF SECURE SHELL v3.0 - ACCESS GRANTED]",
    },
    {
      id: "init-3",
      type: "output",
      text: "Type 'help' to view available commands or 'submit <flag>' to claim CTF flag.",
    },
    {
      id: "init-4",
      type: "accent",
      text: "==================================================================",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isTerminalOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isTerminalOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  if (!isTerminalOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const newLines: TerminalLine[] = [
      ...lines,
      { id: Math.random().toString(), type: "input", text: `guest@garuda:~$ ${cmd}` },
    ];

    const args = cmd.split(" ");
    const commandName = args[0].toLowerCase();
    const commandArg = args.slice(1).join(" ");

    switch (commandName) {
      case "help":
        newLines.push({
          id: Math.random().toString(),
          type: "output",
          text: [
            "Available commands:",
            "  whoami       - Display current active user identity",
            "  ls           - List files in current directory",
            "  cat <file>   - Read contents of a file (e.g., cat flag.txt)",
            "  submit <flag>- Submit captured CTF flag format Garuda{...}",
            "  sudo         - Execute elevated superuser command",
            "  nmap         - Scan perimeter network ports",
            "  ping         - ICMP ping event gateway",
            "  date         - Print current system date and timezone",
            "  eggs         - Check unlocked easter eggs status",
            "  clear        - Clear the terminal screen",
            "  exit         - Terminate and close shell session",
          ].join("\n"),
        });
        playCyberTone("beep");
        break;

      case "whoami":
        newLines.push({
          id: Math.random().toString(),
          type: "output",
          text: "guest@garuda",
        });
        playCyberTone("beep");
        break;

      case "ls":
        newLines.push({
          id: Math.random().toString(),
          type: "output",
          text: "flag.txt  instructions.md  network_trace.pcap  .shadow_vault/",
        });
        playCyberTone("beep");
        break;

      case "cat":
        if (!commandArg) {
          newLines.push({
            id: Math.random().toString(),
            type: "error",
            text: "cat: missing file operand. Try 'cat flag.txt'",
          });
        } else if (commandArg === "flag.txt") {
          newLines.push({
            id: Math.random().toString(),
            type: "output",
            text: [
              "[FLAG REPOSITORY]",
              "You think a root flag is sitting unencrypted in plain text?",
              "Hint: Inspect the DOM HTML root comments. Then decode the base64 -> ROT13 cipher string.",
              "Format: Garuda{...}",
            ].join("\n"),
          });
        } else if (commandArg === "instructions.md") {
          newLines.push({
            id: Math.random().toString(),
            type: "output",
            text: "Garuda CTF is hosted by IIIT Ranchi on 18 November 2026. Stay sharp.",
          });
        } else {
          newLines.push({
            id: Math.random().toString(),
            type: "error",
            text: `cat: ${commandArg}: Permission denied or file not found`,
          });
        }
        playCyberTone("beep");
        break;

      case "sudo":
        newLines.push({
          id: Math.random().toString(),
          type: "error",
          text: "Nice try. This incident will be reported.",
        });
        playCyberTone("alert");
        break;

      case "nmap":
        newLines.push({
          id: Math.random().toString(),
          type: "output",
          text: [
            "Starting Nmap 7.94 ( https://nmap.org ) at garuda.iiitranchi.ac.in",
            "Nmap scan report for host (10.13.37.1)",
            "PORT     STATE SERVICE",
            "22/tcp   open  ssh (Garuda Secure Shell)",
            "80/tcp   open  http (Next.js Stealth Engine)",
            "443/tcp  open  https (TLS 1.3)",
            "1337/tcp open  ctf-daemon (CTFd Flag Validator)",
            "31337/tcp filtered elite-backdoor",
            "Nmap done: 1 IP address (1 host up) scanned in 0.42 seconds",
          ].join("\n"),
        });
        playCyberTone("beep");
        break;

      case "ping":
        newLines.push({
          id: Math.random().toString(),
          type: "output",
          text: [
            "PING ctf.iiitranchi.ac.in (10.13.37.1): 56 data bytes",
            "64 bytes from 10.13.37.1: icmp_seq=0 ttl=64 time=1.337 ms",
            "64 bytes from 10.13.37.1: icmp_seq=1 ttl=64 time=1.042 ms",
            "--- ctf.iiitranchi.ac.in ping statistics ---",
            "2 packets transmitted, 2 packets received, 0.0% packet loss",
          ].join("\n"),
        });
        playCyberTone("beep");
        break;

      case "date":
        newLines.push({
          id: Math.random().toString(),
          type: "output",
          text: new Date().toString(),
        });
        playCyberTone("beep");
        break;

      case "submit":
        if (commandArg.trim() === CTF_FLAG) {
          newLines.push({
            id: Math.random().toString(),
            type: "success",
            text: [
              "****************************************************************",
              "  [+] FLAG VERIFIED: YOU CAPTURED THE GARUDA ROOT FLAG!   ",
              "  [+] Flag: " + CTF_FLAG,
              "  [+] Status: CTF Master Solver Badge UNLOCKED",
              "****************************************************************",
            ].join("\n"),
          });
          playCyberTone("success");
          unlockEgg("ctf_flag");

          // Celebrate with cyber orange, amber, flame, and gold confetti
          try {
            confetti({
              particleCount: 140,
              spread: 90,
              origin: { y: 0.6 },
              colors: ["#f97316", "#ea580c", "#fb923c", "#f59e0b", "#fbbf24", "#ffffff"],
            });
          } catch {
            // Ignore if confetti fails
          }
        } else {
          newLines.push({
            id: Math.random().toString(),
            type: "error",
            text: `[-] Invalid Flag: '${commandArg}'. Follow the hint: DOM comment -> Base64 -> ROT13.`,
          });
          playCyberTone("alert");
        }
        break;

      case "eggs":
        newLines.push({
          id: Math.random().toString(),
          type: "output",
          text: "Check footer counter for real-time in-memory discoveries!",
        });
        playCyberTone("beep");
        break;

      case "clear":
        setLines([]);
        setInputVal("");
        return;

      case "exit":
        setTerminalOpen(false);
        return;

      default:
        newLines.push({
          id: Math.random().toString(),
          type: "error",
          text: `bash: ${commandName}: command not found. Type 'help' for available commands.`,
        });
        playCyberTone("beep");
        break;
    }

    setLines(newLines);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length > 0 && historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= history.length) {
          setHistoryIndex(-1);
          setInputVal("");
        } else {
          setHistoryIndex(nextIndex);
          setInputVal(history[nextIndex]);
        }
      }
    } else if (e.key === "Escape") {
      setTerminalOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9950] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
      onClick={() => setTerminalOpen(false)}
    >
      <div
        className="w-full max-w-3xl rounded-xl border border-orange-500/40 bg-slate-950/95 shadow-[0_0_50px_rgba(249,115,22,0.25)] overflow-hidden flex flex-col max-h-[85vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-orange-500/20 select-none">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 flex items-center gap-1.5 text-xs font-mono text-orange-400">
              <Terminal className="h-3.5 w-3.5" />
              root@garuda-ctf: ~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              [Press ESC or ` to close]
            </span>
            <button
              onClick={() => setTerminalOpen(false)}
              className="p-1 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors"
              aria-label="Close terminal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div
          className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-1.5 min-h-[320px] max-h-[550px] leading-relaxed select-text"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line) => (
            <div
              key={line.id}
              className={`whitespace-pre-wrap ${
                line.type === "input"
                  ? "text-orange-300 font-semibold"
                  : line.type === "error"
                  ? "text-rose-400 font-semibold"
                  : line.type === "success"
                  ? "text-emerald-400 font-bold"
                  : line.type === "accent"
                  ? "text-orange-500/70"
                  : "text-slate-300"
              }`}
            >
              {line.text}
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 pt-1 text-orange-400">
            <span className="shrink-0 font-semibold">guest@garuda:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-slate-100 outline-none border-none font-mono caret-orange-400 placeholder-slate-600"
              placeholder="type help, cat flag.txt, submit <flag>..."
              autoFocus
              spellCheck={false}
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
}
