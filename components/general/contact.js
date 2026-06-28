"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const CONTACT_ICONS = [
  <Mail className="h-4 w-4" aria-hidden="true" key="mail" />,
  <Phone className="h-4 w-4" aria-hidden="true" key="phone" />,
  <MapPin className="h-4 w-4" aria-hidden="true" key="mappin" />,
];

const CONTACT_VALUES = [
  { value: "juandeveloper001@gmail.com", href: "mailto:juandeveloper001@gmail.com" },
  { value: "+54 9 3838 602382", href: "tel:+5493838602382" },
  { value: "San Miguel de Tucumán, Argentina", href: null },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
  },
};

const FIELD_BASE =
  "w-full rounded-sm bg-transparent px-3.5 py-2.5 text-text-1 placeholder-text-3 transition-colors";

function validate(fields, errors) {
  const result = {};
  if (!fields.name.trim()) result.name = errors.nameRequired;
  if (!fields.email.trim()) {
    result.email = errors.emailRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    result.email = errors.emailInvalid;
  }
  if (!fields.message.trim()) result.message = errors.messageRequired;
  return result;
}

const ContactComponent = () => {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState(null);

  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const contactItems = [
    { icon: CONTACT_ICONS[0], label: t.labels.email, ...CONTACT_VALUES[0] },
    { icon: CONTACT_ICONS[1], label: t.labels.phone, ...CONTACT_VALUES[1] },
    { icon: CONTACT_ICONS[2], label: t.labels.location, ...CONTACT_VALUES[2] },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (e.target._gotcha.value) return;

    const validationErrors = validate(fields, t.errors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setServerError(null);

    try {
      const res = await fetch("https://formspree.io/f/mblnydoa", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        const result = await res.json();
        setServerError(result.error || t.errors.server);
        setStatus("error");
      }
    } catch {
      setServerError(t.errors.connection);
      setStatus("error");
    }
  };

  const inputStyle = (fieldName) => ({
    border: `1px solid ${errors[fieldName] ? "var(--accent)" : "var(--line-strong)"}`,
    fontSize: "0.9375rem",
    lineHeight: "1.5",
    borderRadius: "var(--r-sm)",
    backgroundColor: "var(--surface-2)",
    color: "var(--text-1)",
    outline: "none",
    transition: "border-color var(--dur-fast) var(--ease-out)",
  });

  return (
    <section id="contacto" className="site-wrap section-block">
      {/* Section header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={FADE_UP}
        className="mb-14"
      >
        <p className="mono-label mb-5">{t.eyebrow}</p>
        <h2
          className="font-display font-bold text-text-1"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            lineHeight: "1.05",
            letterSpacing: "-0.015em",
            textWrap: "balance",
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

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-md p-4"
              style={{
                border: "1px solid var(--line)",
                backgroundColor: "var(--surface-1)",
              }}
            >
              <div
                className="mt-0.5 shrink-0 rounded-sm p-2 text-accent"
                style={{ backgroundColor: "var(--accent-soft)" }}
              >
                {item.icon}
              </div>
              <div>
                <span className="mono-label block mb-1">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-text-2 transition-colors hover:text-text-1"
                    style={{ fontSize: "0.9375rem" }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-text-2" style={{ fontSize: "0.9375rem" }}>
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.52, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {status === "success" ? (
            <div
              className="flex flex-col items-center justify-center text-center rounded-md p-12"
              style={{
                border: "1px solid var(--line)",
                backgroundColor: "var(--surface-1)",
                minHeight: "24rem",
              }}
            >
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full text-accent"
                style={{ backgroundColor: "var(--accent-soft)" }}
              >
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3
                className="font-display font-bold text-text-1 mb-2"
                style={{ fontSize: "1.25rem" }}
              >
                {t.success.heading}
              </h3>
              <p className="text-text-2 mb-6" style={{ fontSize: "0.9375rem" }}>
                {t.success.body}
              </p>
              <button onClick={() => setStatus("idle")} className="btn-secondary">
                {t.success.again}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
              style={{ position: "relative" }}
            >
              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                defaultValue=""
                tabIndex={-1}
                aria-hidden="true"
                style={{ display: "none" }}
              />

              {/* Name */}
              <div>
                <label htmlFor="name" className="mono-label mb-2 block">
                  {t.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder={t.form.namePlaceholder}
                  className={FIELD_BASE}
                  style={inputStyle("name")}
                  onFocus={(e) => {
                    if (!errors.name) e.target.style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    if (!errors.name)
                      e.target.style.borderColor = "var(--line-strong)";
                  }}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1.5 text-accent"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mono-label mb-2 block">
                  {t.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                  className={FIELD_BASE}
                  style={inputStyle("email")}
                  onFocus={(e) => {
                    if (!errors.email)
                      e.target.style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    if (!errors.email)
                      e.target.style.borderColor = "var(--line-strong)";
                  }}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1.5 text-accent"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mono-label mb-2 block">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  placeholder={t.form.messagePlaceholder}
                  className={`${FIELD_BASE} resize-none`}
                  style={inputStyle("message")}
                  onFocus={(e) => {
                    if (!errors.message)
                      e.target.style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    if (!errors.message)
                      e.target.style.borderColor = "var(--line-strong)";
                  }}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-accent"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Server error */}
              {status === "error" && serverError && (
                <div
                  className="flex items-start gap-2.5 rounded-sm p-3"
                  style={{
                    backgroundColor: "var(--accent-soft)",
                    border: "1px solid var(--accent)",
                    color: "var(--text-1)",
                  }}
                  role="alert"
                >
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <p style={{ fontSize: "0.875rem" }}>{serverError}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full justify-center"
                style={{ opacity: status === "loading" ? 0.7 : 1 }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    {t.form.submitting}
                  </>
                ) : (
                  <>
                    {t.form.submit} <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactComponent;
