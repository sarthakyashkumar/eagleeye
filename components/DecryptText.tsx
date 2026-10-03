"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEF0123456789!<>-_\\/[]{}—=+*^?#%&@";

interface DecryptTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "span" | "p" | "div";
}

export function DecryptText({
  text,
  className = "",
  speed = 35,
  delay = 0,
  as: Component = "span",
}: DecryptTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    let iteration = 0;
    let timer: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      timer = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(timer);
        }

        iteration += 1 / 2.2;
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [isInView, text, speed, delay]);

  return (
    <Component
      ref={containerRef as unknown as React.Ref<any>}
      className={`font-mono transition-colors ${className}`}
    >
      {displayText}
    </Component>
  );
}
