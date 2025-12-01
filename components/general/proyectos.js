"use client";
import React from "react";
import construcciones from "@/public/construcciones.png";
import ociobar from "@/public/ociobar.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import yoteimporto from "@/public/yoteimporto.webp";

const Proyectos = () => {
  const projects = [
    {
      id: 1,
      img: construcciones,
      name: "Construcciones Civiles",
      type: "Front end",
      description:
        "Landing page moderna para empresa contratista minera con diseño responsive, optimización seo y de conversión.",
      impacto: "Incremento las ventas un 45% en los primeros 3 meses",
      rectologias: ["Next js", "TailwindCSS", "JavaScript"],
      url: "https://www.construccionesciviles.com",
    },
    {
      id: 2,
      img: ociobar,
      name: "El Ociobar",
      type: "Front end",
      description:
        "Carta Digital con codigo QR fijo en cada mesa del bar, permitiendo a los clientes ver la carta desde su celular de forma rapida y sencilla.",
      impacto:
        "Increible aceptacion por parte de los clientes, aumentando la velocidad de atencion y reduciendo errores en los pedidos.",
      rectologias: ["Next js", "TailwindCSS", "JavaScript"],
      url: "https://www.elociocartabar.vercel.app",
    },
    {
      id: 3,
      img: yoteimporto,
      name: "Yo te importo",
      type: "Full Stack",
      description:
        "Ecomerce completo con panel de administracion para gestionar productos, categorias, pedidos y clientes. Tambien cuenta con mercado pago para pagos en linea.",
      impacto:
        "Increible aceptacion por parte de los clientes, aumentando la velocidad de atencion y reduciendo errores en los pedidos.",
      rectologias: ["Next js", "TailwindCSS", "JavaScript", "Firebase", "Mercado Pago", "Server Actions"],
      url: "https://yoteimporto.vercel.app/",
    },
  ];
  return (
    <section
      id="proyectos"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold sm:text-4xl">Proyectos reales freelance</h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          Soluciones reales que generan impacto, desde e-commerce hasta
          plataformas de contenido
        </p>
      </motion.div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/50 hover:shadow-lg sm:p-6"
          >
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg sm:h-56">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <Link href={project.url} className="text-2xl font-semibold group-hover:text-primary transition-colors" target="_blank">{project.name}</Link>
            <p className="mb-2 text-sm italic text-muted-foreground sm:text-base">
              {project.type}
            </p>
            <p className="mb-2 text-sm text-gray-300 sm:text-base">{project.description}</p>
            <p className="mb-3 font-bold text-foreground sm:text-lg">
              Impacto: <span className="text-primary">{project.impacto}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {project.rectologias.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
