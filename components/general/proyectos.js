"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import construcciones from "@/public/construcciones.png";
import qartaqr from "@/public/qartaqr.png";
import nextlevel from "@/public/nextlevel.png";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const PROJECT_IMAGES = [construcciones, nextlevel, qartaqr];
const PROJECT_NAMES = ["Construcciones Civiles", "Next Level Argentina", "Qartaqr"];
const PROJECT_STACKS = [
  ["Next.js", "Tailwind CSS", "JavaScript"],
  ["Next.js", "Tailwind CSS", "JavaScript", "Mercado Pago", "Firebase"],
  ["Next.js", "Tailwind CSS", "JavaScript", "Firebase", "Server Actions"],
];
const PROJECT_URLS = [
  "https://www.construccionesciviles.com",
  "https://www.nextlevelargentina.store/",
  "https://www.qartaqr.com/",
];

function SpecRow({ label, value, accentValue }) {
  return (
    <div
      className="flex items-start gap-4 py-2.5"
      style={{ borderBottom: "1px solid var(--line)" }}
    >
      <span className="mono-label shrink-0 w-14">{label}</span>
      <span
        className={accentValue ? "text-accent font-semibold" : "text-text-2"}
        style={{ fontSize: "0.8125rem", lineHeight: "1.5" }}
      >
        {value}
      </span>
    </div>
  );
}

function StackChips({ stack }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {stack.map((tech) => (
        <span
          key={tech}
          className="mono-label rounded-sm px-2 py-0.5"
          style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--line)" }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function CrosshairMark({ position }) {
  const posStyle = {
    "top-right": { top: "1rem", right: "1rem" },
    "top-left": { top: "1rem", left: "1rem" },
  }[position];

  return (
    <span aria-hidden="true" className="corner-mark" style={{ ...posStyle }} />
  );
}

function FeaturedCard({ project, t }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.56, ease: [0.16, 1, 0.3, 1] }}
      className="group relative design-card overflow-hidden"
    >
      <CrosshairMark position="top-right" />

      <div className="grid lg:grid-cols-[1.4fr_1fr]">
        {/* Image — 16:10 */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
          {project.img ? (
            <Image
              src={project.img}
              alt={t.imageAlt(project.name)}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: "var(--surface-2)" }}
            >
              <span className="mono-label opacity-30">Imagen próximamente</span>
            </div>
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 60%, var(--surface-1))",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Spec block */}
        <div className="flex flex-col justify-center p-7 lg:p-8">
          <span className="mono-label mb-4">{t.featured}</span>

          <h3
            className="font-display font-bold text-text-1 mb-5"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {project.name}
          </h3>

          <p
            className="text-text-2 mb-6"
            style={{ fontSize: "0.875rem", lineHeight: "1.65" }}
          >
            {project.description}
          </p>

          {/* Title-block spec strip */}
          <div style={{ borderTop: "1px solid var(--line)" }}>
            <SpecRow label={t.labels.role} value={project.role} />
            <SpecRow label={t.labels.stack} value={project.stack.join(" · ")} />
            <SpecRow
              label={t.labels.impact}
              value={project.impact}
              accentValue
            />
          </div>

          <StackChips stack={project.stack} />

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-6 self-start"
            aria-label={t.viewSiteAria(project.name)}
          >
            {t.viewSite} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <span className="mono-label mt-4 block truncate opacity-60">
            {project.url.replace(/^https?:\/\/www\./, "")}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function StandardCard({ project, delay, t }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.52, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      className="group relative design-card overflow-hidden flex flex-col"
    >
      <CrosshairMark position="top-right" />

      {/* Framed image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        {project.img ? (
          <Image
            src={project.img}
            alt={t.imageAlt(project.name)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "var(--surface-2)" }}
          >
            <span className="mono-label opacity-30">Imagen próximamente</span>
          </div>
        )}
      </div>

      {/* Spec block */}
      <div className="flex flex-1 flex-col p-6">
        <h3
          className="font-display font-bold text-text-1 mb-1"
          style={{ fontSize: "1.1875rem", letterSpacing: "-0.015em" }}
        >
          {project.name}
        </h3>

        <p
          className="text-text-2 mb-5 mt-2"
          style={{ fontSize: "0.8125rem", lineHeight: "1.6" }}
        >
          {project.description}
        </p>

        {/* Title-block spec strip */}
        <div className="mt-auto" style={{ borderTop: "1px solid var(--line)" }}>
          <SpecRow label={t.labels.role} value={project.role} />
          <SpecRow
            label={t.labels.stack}
            value={project.stack.slice(0, 3).join(" · ")}
          />
          <SpecRow
            label={t.labels.impact}
            value={project.impact}
            accentValue
          />
        </div>

        <StackChips stack={project.stack} />

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-5 self-start"
          aria-label={t.viewSiteAria(project.name)}
        >
          {t.viewSite} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

const Proyectos = () => {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const projects = t.items.map((item, i) => ({
    id: i + 1,
    img: PROJECT_IMAGES[i],
    name: PROJECT_NAMES[i],
    role: item.role,
    description: item.description,
    impact: item.impact,
    stack: PROJECT_STACKS[i],
    url: PROJECT_URLS[i],
  }));

  const [featured, ...rest] = projects;

  return (
    <section id="proyectos" className="site-wrap section-block">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <p className="mono-label mb-5">{t.eyebrow}</p>
        <h2
          className="font-display font-bold text-text-1"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            lineHeight: "1.05",
            letterSpacing: "-0.015em",
          }}
        >
          {t.heading}
        </h2>
        <p
          className="mt-4 max-w-xl text-text-2"
          style={{ fontSize: "1.0625rem", lineHeight: "1.65" }}
        >
          {t.subtext}
        </p>
      </motion.div>

      {/* Featured project */}
      <FeaturedCard project={featured} t={t} />

      {/* Secondary projects grid */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <StandardCard
            key={project.id}
            project={project}
            delay={i * 0.12}
            t={t}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
