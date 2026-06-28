"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";

const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Zustand",
  "Redux Toolkit",
  "Framer Motion",
  "AWS",
  "Vercel",
  "Git",
];

export function Carrusel() {
  const prefersReducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="overflow-hidden border-y border-line py-7"
      aria-label="Stack tecnológico"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="marquee-track flex gap-5 whitespace-nowrap"
        aria-hidden="true"
        style={{
          animation: prefersReducedMotion
            ? "none"
            : `marquee-scroll 32s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-2 rounded-sm border border-line px-3 py-1.5 mono-label"
            style={{ backgroundColor: "var(--surface-2)" }}
          >
            <span
              className="text-text-3 opacity-50 select-none"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem" }}
            >
              +
            </span>
            {tech}
          </span>
        ))}
      </div>

      {/* Visible list for screen readers */}
      <ul className="sr-only">
        {TECH_STACK.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
