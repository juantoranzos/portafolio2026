"use client";

import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const STAGGER_CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const FADE_UP = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.56, ease: [0.16, 1, 0.3, 1] },
  },
};

const TYPE_SPEED = 65;
const ERASE_SPEED = 42;
const PAUSE_AFTER_TYPE = 2400;
const PAUSE_AFTER_ERASE = 350;

function TypewriterWord({ words, reduced }) {
  const [displayed, setDisplayed] = useState(words[0]);
  const timerRef = useRef(null);
  const wordIdxRef = useRef(0);

  useEffect(() => {
    // Reset when language changes
    wordIdxRef.current = 0;
    setDisplayed(words[0]);
  }, [words]);

  useEffect(() => {
    if (reduced) return;

    let cancelled = false;

    const sleep = (ms) =>
      new Promise((res) => {
        timerRef.current = setTimeout(res, ms);
      });

    async function erase(word) {
      for (let i = word.length - 1; i >= 0; i--) {
        if (cancelled) return;
        setDisplayed(word.slice(0, i));
        if (i > 0) await sleep(ERASE_SPEED);
      }
    }

    async function type(word) {
      for (let i = 1; i <= word.length; i++) {
        if (cancelled) return;
        setDisplayed(word.slice(0, i));
        if (i < word.length) await sleep(TYPE_SPEED);
      }
    }

    async function loop() {
      await sleep(PAUSE_AFTER_TYPE);
      while (!cancelled) {
        await erase(words[wordIdxRef.current]);
        if (cancelled) break;
        await sleep(PAUSE_AFTER_ERASE);
        if (cancelled) break;
        wordIdxRef.current = (wordIdxRef.current + 1) % words.length;
        await type(words[wordIdxRef.current]);
        if (cancelled) break;
        await sleep(PAUSE_AFTER_TYPE);
      }
    }

    loop();

    return () => {
      cancelled = true;
      clearTimeout(timerRef.current);
    };
  }, [reduced, words]);

  return (
    <span
      aria-live="polite"
      aria-label={words[wordIdxRef.current]}
      className={!reduced ? "typewriter-aura" : undefined}
    >
      {reduced ? words[0] : displayed}
      {!reduced && (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "0.08em",
            height: "0.85em",
            backgroundColor: "var(--accent)",
            marginLeft: "0.06em",
            verticalAlign: "text-bottom",
            animation: "cursor-blink 1s step-end infinite",
          }}
        />
      )}
    </span>
  );
}

const HeaderComponent = () => {
  const prefersReducedMotion = useReducedMotion();
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="inicio"
      className="relative site-wrap"
      style={{
        paddingTop: "clamp(7rem, 14vw, 10rem)",
        paddingBottom: "clamp(3.5rem, 7vw, 5rem)",
      }}
    >
      {/* Coordinate annotation */}
      <span
        aria-hidden="true"
        className="mono-label absolute hidden sm:block"
        style={{ top: "5rem", right: "calc(var(--gutter) + 0.75rem)" }}
      >
        — TUCUMÁN, AR
      </span>

      {/* Blueprint corner tick */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "5rem",
          left: "0",
          width: "12px",
          height: "12px",
          borderTop: "1px solid var(--line-strong)",
          borderLeft: "1px solid var(--line-strong)",
        }}
      />

      <motion.div
        variants={prefersReducedMotion ? undefined : STAGGER_CONTAINER}
        initial={prefersReducedMotion ? { opacity: 1 } : "hidden"}
        animate="show"
        className="max-w-3xl"
      >
        {/* Eyebrow */}
        <motion.p
          variants={prefersReducedMotion ? undefined : FADE_UP}
          className="mono-label mb-8"
        >
          {t.eyebrow}
        </motion.p>

        {/* Display headline */}
        <h1
          className="font-display font-extrabold text-text-1"
          style={{
            fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
            lineHeight: "0.95",
            letterSpacing: "-0.03em",
          }}
        >
          <motion.span
            variants={prefersReducedMotion ? undefined : FADE_UP}
            className="block"
          >
            {t.line1}
          </motion.span>
          <motion.span
            variants={prefersReducedMotion ? undefined : FADE_UP}
            className="block"
          >
            {t.line2}
          </motion.span>
          <motion.span
            variants={prefersReducedMotion ? undefined : FADE_UP}
            className="block text-accent"
          >
            <TypewriterWord words={t.words} reduced={!!prefersReducedMotion} />
          </motion.span>
        </h1>

        {/* Lede */}
        <motion.p
          variants={prefersReducedMotion ? undefined : FADE_UP}
          className="mt-8 max-w-xl text-text-2"
          style={{ fontSize: "1.0625rem", lineHeight: "1.65" }}
        >
          {t.lede}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={prefersReducedMotion ? undefined : FADE_UP}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link href="#proyectos" className="btn-primary">
            {t.cta1} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <a
            href="/Juan_Toranzos_CV_2026.pdf"
            download
            className="btn-secondary"
          >
            {t.cta2} <Download className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={prefersReducedMotion ? undefined : FADE_UP}
          className="mt-6 flex items-center gap-3"
        >
          <a
            href="https://github.com/juantoranzos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Juan Toranzos"
            className="btn-ghost-icon"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-toranzos-b46b77253/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Juan Toranzos"
            className="btn-ghost-icon"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeaderComponent;
