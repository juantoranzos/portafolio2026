"use client"

import { motion } from "framer-motion"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Redux Toolkit",
  "Framer Motion",
  "AWS",
  "Vercel",
  "Git",
  "REST APIs",
  "GraphQL",
  "Zustand",
  "Linux"
]

export function Carrusel() {
  return (
    <section className="py-12 overflow-hidden border-y border-[var(--color-border)]">
      <div className="relative">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="text-2xl md:text-3xl font-display font-bold text-muted-foreground/30 hover:text-[var(--color-primary)] transition-colors"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
