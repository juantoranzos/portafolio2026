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
    <section
      id="habilidades"
      className="overflow-hidden border-y border-white/5 py-10 sm:py-12 bg-secondary/20"
    >
      <div className="relative">
        <motion.div
          className="flex gap-6 whitespace-nowrap sm:gap-8"
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
              className="text-lg font-bold text-muted-foreground transition-colors hover:text-primary sm:text-xl md:text-2xl"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
