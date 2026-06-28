"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const NAV_LINK_STYLE = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6875rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const NavegacionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed left-0 top-0 z-50 w-full"
        style={{
          backgroundColor: isScrolled ? "var(--surface-1)" : "transparent",
          borderBottom: `1px solid ${isScrolled ? "var(--line)" : "transparent"}`,
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          transition: `background-color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), backdrop-filter var(--dur) var(--ease-out)`,
        }}
      >
        <div className="site-wrap flex items-center justify-between py-4">
          {/* Wordmark + availability */}
          <div className="flex items-center gap-4">
            <Link
              href="#inicio"
              className="font-display text-sm font-bold text-text-1 transition-colors hover:text-accent"
              style={{ letterSpacing: "-0.02em" }}
              onClick={() => setIsOpen(false)}
            >
              Juan Toranzos
            </Link>

            
          </div>

          {/* Desktop navigation */}
          <nav
            aria-label="Navegación principal"
            className="hidden sm:flex items-center gap-0.5"
          >
            {t.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={NAV_LINK_STYLE}
                className="rounded-sm px-3 py-2 text-text-3 transition-colors hover:text-text-1 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            ))}

            {/* Language switcher — desktop */}
            <div
              className="hidden sm:flex items-center gap-1 ml-3 pl-3"
              style={{ borderLeft: "1px solid var(--line-strong)" }}
            >
              <button
                onClick={() => setLang("es")}
                className="mono-label px-1.5 py-1 transition-colors"
                style={{
                  color: lang === "es" ? "var(--text-1)" : "var(--text-3)",
                }}
                aria-label="Cambiar a español"
              >
                ES
              </button>
              <span className="mono-label" style={{ color: "var(--text-3)" }}>
                /
              </span>
              <button
                onClick={() => setLang("en")}
                className="mono-label px-1.5 py-1 transition-colors"
                style={{
                  color: lang === "en" ? "var(--text-1)" : "var(--text-3)",
                }}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center rounded-sm p-2 text-text-2 transition-colors hover:text-text-1 sm:hidden"
            aria-label={isOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col sm:hidden"
            style={{ backgroundColor: "var(--surface-1)" }}
          >
            {/* Header strip */}
            <div
              className="flex h-16 items-center justify-between px-6"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              <span
                className="font-display text-sm font-bold text-text-1"
                style={{ letterSpacing: "-0.02em" }}
              >
                Juan Toranzos
              </span>
              <button
                className="p-2 text-text-2 hover:text-text-1"
                aria-label={t.closeMenu}
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links with stagger */}
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
              {t.items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-display text-3xl font-bold text-text-1 transition-colors hover:text-accent focus-visible:outline-accent"
                    style={{ letterSpacing: "-0.025em" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Language switcher — mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex items-center gap-1"
              >
                <button
                  onClick={() => setLang("es")}
                  className="mono-label px-1.5 py-1 transition-colors"
                  style={{
                    color: lang === "es" ? "var(--text-1)" : "var(--text-3)",
                  }}
                  aria-label="Cambiar a español"
                >
                  ES
                </button>
                <span className="mono-label" style={{ color: "var(--text-3)" }}>
                  /
                </span>
                <button
                  onClick={() => setLang("en")}
                  className="mono-label px-1.5 py-1 transition-colors"
                  style={{
                    color: lang === "en" ? "var(--text-1)" : "var(--text-3)",
                  }}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-6 flex items-center gap-2"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
                  aria-hidden="true"
                />
                <span className="mono-label">{t.availableLong}</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavegacionComponent;
