"use client";

import React, { useRef } from "react";
import { servicios, procesos } from "@/help/data";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
  },
};

function ServiceCard({ servicio, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.1,
            duration: 0.52,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className="design-card p-7 flex flex-col"
    >
      {/* Icon */}
      <div
        className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-sm text-accent"
        style={{ backgroundColor: "var(--accent-soft)" }}
      >
        {servicio.icon}
      </div>

      {/* Title */}
      <h3
        className="font-display font-bold text-text-1 mb-2"
        style={{ fontSize: "1.125rem", letterSpacing: "-0.01em" }}
      >
        {servicio.titulo}
      </h3>

      {/* Description */}
      <p
        className="text-text-2 mb-6"
        style={{ fontSize: "0.875rem", lineHeight: "1.65" }}
      >
        {servicio.descripcion}
      </p>

      {/* Deliverables checklist */}
      <ul className="mt-auto space-y-2">
        {servicio.entregables.map((entregable) => (
          <li key={entregable} className="flex items-center gap-2.5">
            <Check className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
            <span className="text-text-2" style={{ fontSize: "0.8125rem" }}>
              {entregable}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProcessTimeline({ tProcess }) {
  const railRef = useRef(null);
  const isInView = useInView(railRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="proceso" className="site-wrap section-block">
      {/* Section header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={FADE_UP}
        className="mb-16"
      >
        <p className="mono-label mb-5">{tProcess.eyebrow}</p>
        <h2
          className="font-display font-bold text-text-1"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            lineHeight: "1.05",
            letterSpacing: "-0.015em",
          }}
        >
          {tProcess.heading}
        </h2>
      </motion.div>

      {/* Desktop: horizontal timeline */}
      <div ref={railRef} className="relative hidden lg:block">
        {/* Animated rail */}
        <div
          className="absolute top-[1.1875rem] left-0 right-0 h-px"
          style={{ backgroundColor: "var(--line)" }}
          aria-hidden="true"
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-[1.1875rem] left-0 h-px"
          style={{
            backgroundColor: "var(--line-strong)",
            transformOrigin: "left center",
          }}
          initial={{ scaleX: 0 }}
          animate={
            prefersReducedMotion
              ? { scaleX: 1 }
              : isInView
              ? { scaleX: 1 }
              : { scaleX: 0 }
          }
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="grid grid-cols-5 gap-4">
          {procesos.map((p, i) => {
            const tItem = tProcess.items[i];
            return (
              <motion.div
                key={p.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.48,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="pt-8 group"
              >
                {/* Step node */}
                <div
                  className="mb-5 h-1.5 w-1.5 rounded-full transition-colors"
                  style={{
                    backgroundColor: "var(--text-3)",
                    marginTop: "-1.875rem",
                    marginBottom: "1.75rem",
                  }}
                />

                {/* Numeral */}
                <span
                  className="font-display font-extrabold block mb-3 transition-colors group-hover:text-accent"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                    lineHeight: "1",
                    letterSpacing: "-0.02em",
                    color: "var(--text-3)",
                  }}
                >
                  {p.fase}
                </span>

                <h3
                  className="font-display font-semibold text-text-1 mb-1.5"
                  style={{ fontSize: "1rem" }}
                >
                  {tItem.titulo}
                </h3>
                <p
                  className="text-text-3"
                  style={{ fontSize: "0.8125rem", lineHeight: "1.55" }}
                >
                  {tItem.descripcion}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical stepper */}
      <div className="lg:hidden space-y-0">
        {procesos.map((p, i) => {
          const tItem = tProcess.items[i];
          return (
            <motion.div
              key={p.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -12 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.07,
                    duration: 0.48,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="flex gap-5"
            >
              {/* Vertical rail */}
              <div className="flex flex-col items-center">
                <div
                  className="mt-1 h-3 w-3 shrink-0 rounded-full"
                  style={{
                    backgroundColor: "var(--text-3)",
                    border: "1px solid var(--line-strong)",
                  }}
                  aria-hidden="true"
                />
                {i < procesos.length - 1 && (
                  <div
                    className="mt-1 w-px flex-1"
                    style={{ backgroundColor: "var(--line)", minHeight: "3rem" }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <span
                  className="font-display font-extrabold block mb-1"
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--text-3)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.fase}
                </span>
                <h3
                  className="font-display font-semibold text-text-1 mb-1"
                  style={{ fontSize: "1rem" }}
                >
                  {tItem.titulo}
                </h3>
                <p
                  className="text-text-3"
                  style={{ fontSize: "0.875rem", lineHeight: "1.55" }}
                >
                  {tItem.descripcion}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

const ServiciosComponent = () => {
  const { lang } = useLanguage();
  const tServices = translations[lang].services;
  const tProcess = translations[lang].process;

  // Merge icons from data.js with translated text by index
  const mergedServicios = servicios.map((s, i) => ({
    ...tServices.items[i],
    icon: s.icon,
    id: s.id,
  }));

  return (
    <>
      {/* Services */}
      <section id="servicios" className="site-wrap section-block">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={FADE_UP}
          className="mb-12"
        >
          <p className="mono-label mb-5">{tServices.eyebrow}</p>
          <h2
            className="font-display font-bold text-text-1"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.015em",
            }}
          >
            {tServices.heading}
          </h2>
          <p
            className="mt-4 max-w-xl text-text-2"
            style={{ fontSize: "1.0625rem", lineHeight: "1.65" }}
          >
            {tServices.subtext}
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {mergedServicios.map((s, i) => (
            <ServiceCard key={s.id} servicio={s} index={i} />
          ))}
        </div>
      </section>

      {/* Process timeline — separate anchor */}
      <div style={{ borderTop: "1px solid var(--line)" }}>
        <ProcessTimeline tProcess={tProcess} />
      </div>
    </>
  );
};

export default ServiciosComponent;
