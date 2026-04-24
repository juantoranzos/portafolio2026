"use client";
import { Download, MoveRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeaderComponent = () => {
  const tecnologias = [
    { name: "React" },
    { name: "Next JS" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "Redux Toolkit" },
    { name: "AWS" },
    { name: "Vercel" },
    { name: "Git" },
    { name: "REST APIs" },
    { name: "Zustand" },
    { name: "Linux" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <header
      id="inicio"
      className="mx-auto mt-14 max-w-6xl px-4 text-center sm:mt-16 sm:px-6 lg:mt-20 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
      >
        <span>Disponible para proyectos</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Construyo{" "}
        <span className="text-primary">
          Experiencias Web <br /> Modernas
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl"
      >
        Desarrollador Full Stack especializado en React y Next.js, <br />{" "}
        creando interfaces modernas con código limpio y rendimiento excepcional.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Link
          href="#proyectos"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:w-auto sm:text-base"
        >
          Ver Proyectos <MoveRight className="h-4 w-4" />
        </Link>
        <a
          href="/Juan_Toranzos_CV_ES_2.pdf"
          download
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary sm:w-auto sm:text-base"
        >
          Descargar CV <Download className="h-4 w-4" />{" "}
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 flex items-center justify-center gap-4"
      >
        <a
          href="https://github.com/juantoranzos"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-card p-3 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-toranzos-b46b77253/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-card p-3 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </motion.div>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        {tecnologias.map((t) => {
          return (
            <motion.div
              variants={item}
              key={t.name}
              className="rounded-lg border border-border bg-card/50 px-4 py-2 text-sm backdrop-blur-sm transition hover:border-primary/50 hover:bg-card sm:px-5 sm:py-2.5 sm:text-base"
            >
              <p className="font-medium text-muted-foreground hover:text-foreground transition-colors">{t.name}</p>
            </motion.div>
          );
        })}
      </motion.section>
    </header>
  );
};

export default HeaderComponent;
