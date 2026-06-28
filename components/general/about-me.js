"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Server } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const CAPABILITY_ICONS = [
  <Layout className="h-5 w-5" aria-hidden="true" key="layout" />,
  <Server className="h-5 w-5" aria-hidden="true" key="server" />,
  <Database className="h-5 w-5" aria-hidden="true" key="database" />,
  <Code className="h-5 w-5" aria-hidden="true" key="code" />,
];

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
  },
};

const AboutMe = () => {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="sobre-mi" className="site-wrap section-block">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-12">
        {/* Left column: text + capabilities */}
        <div>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={FADE_UP}
            className="mono-label mb-6"
          >
            {t.eyebrow}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={FADE_UP}
            className="font-display font-bold text-text-1"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.015em",
              textWrap: "balance",
            }}
          >
            {t.heading}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={FADE_UP}
            className="mt-5 text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: "1.65", maxWidth: "54ch" }}
          >
            {t.body}
          </motion.p>

          {/* Capability cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {t.capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.08,
                      duration: 0.48,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="design-card p-5"
              >
                <div
                  className="mb-3 inline-flex items-center justify-center rounded-sm p-2 text-accent"
                  style={{ backgroundColor: "var(--accent-soft)" }}
                >
                  {CAPABILITY_ICONS[i]}
                </div>
                <h3
                  className="mb-1 font-display font-semibold text-text-1"
                  style={{ fontSize: "1rem" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="mb-3 text-text-2"
                  style={{ fontSize: "0.875rem", lineHeight: "1.55" }}
                >
                  {cap.description}
                </p>
                <span
                  className="mono-label rounded-sm px-2 py-0.5"
                  style={{ backgroundColor: "var(--surface-2)" }}
                >
                  {cap.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column: framed portrait */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center lg:items-end"
        >
          <div className="w-full max-w-sm">
            {/* Drawing frame */}
            <div
              className="relative p-3"
              style={{
                border: "1px solid var(--line-strong)",
                backgroundColor: "var(--surface-1)",
              }}
            >
              {/* Corner marks */}
              {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
                (pos, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className={`pointer-events-none absolute ${pos} h-3 w-3`}
                    style={{
                      borderTop: i < 2 ? "1px solid var(--accent)" : undefined,
                      borderBottom: i >= 2 ? "1px solid var(--accent)" : undefined,
                      borderLeft: i % 2 === 0 ? "1px solid var(--accent)" : undefined,
                      borderRight: i % 2 !== 0 ? "1px solid var(--accent)" : undefined,
                    }}
                  />
                )
              )}

              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/yoeditada.webp"
                  alt="Juan Toranzos, desarrollador Full Stack"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
                />
              </div>
            </div>

            {/* Caption — mono, like a drawing label */}
            <div
              className="mt-2 flex items-center justify-between px-1"
              style={{ borderTop: "1px solid var(--line)" }}
            >
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
