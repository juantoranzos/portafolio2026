"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer
      style={{ backgroundColor: "var(--surface-1)", borderTop: "1px solid var(--line)" }}
    >
      <div className="site-wrap py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + bio */}
          <div className="space-y-4 lg:col-span-1">
            <span
              className="font-display font-bold text-text-1 block"
              style={{ fontSize: "0.9375rem", letterSpacing: "-0.015em" }}
            >
              Juan Toranzos
            </span>
            <p className="text-text-2" style={{ fontSize: "0.8125rem", lineHeight: "1.65" }}>
              {t.bio}
            </p>
            <div className="flex gap-3 pt-1">
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
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="mono-label mb-5 block">{t.nav}</span>
            <ul className="space-y-2.5">
              {t.navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-2 transition-colors hover:text-text-1"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="mono-label mb-5 block">{t.services}</span>
            <ul className="space-y-2.5">
              {t.serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-text-3" style={{ fontSize: "0.875rem" }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="mono-label mb-5 block">{t.contact}</span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:juandeveloper001@gmail.com"
                  className="text-text-2 transition-colors hover:text-text-1 break-all"
                  style={{ fontSize: "0.875rem" }}
                >
                  juandeveloper001@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5493838602382"
                  className="text-text-2 transition-colors hover:text-text-1"
                  style={{ fontSize: "0.875rem" }}
                >
                  +54 9 3838 602382
                </a>
              </li>
              <li>
                <span className="text-text-3" style={{ fontSize: "0.875rem" }}>
                  San Miguel de Tucumán, AR
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 pt-7 sm:flex-row"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <p className="mono-label">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
