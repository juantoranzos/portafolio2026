"use client";
import React from "react";
import { procesos, servicios } from "@/help/data";
import { motion } from "framer-motion";

const ServiciosComponent = () => {
  return (
    <div className="mx-auto mt-14 max-w-6xl px-4 sm:mt-16 sm:px-6 lg:mt-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-6 flex w-fit justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
      >
        <span>Servicios que brindo</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-3xl font-bold leading-tight md:text-4xl lg:text-7xl"
      >
        ¿Qué <span className="text-primary">puedo hacer</span> yo por ti?
      </motion.h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {servicios.map((s, index) => {
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mt-0 rounded-xl border border-border bg-card p-5 transition hover:border-primary/50 hover:shadow-lg sm:p-6"
            >
              <div className="m-2 flex w-10 justify-center rounded-xl bg-primary/20 p-2 text-primary">
                <span className="">{s.icon}</span>
              </div>
              <p className="p-2 text-xl font-bold text-foreground">{s.titulo}</p>
              <p className="p-2 text-muted-foreground">{s.descripcion}</p>
              {s.entregables.map((e) => (
                <ul
                  key={e}
                  className="list-disc p-2 text-muted-foreground marker:text-2xl marker:text-primary"
                >
                  <li className="mx-6 ">{e}</li>
                </ul>
              ))}
            </motion.div>
          );
        })}
      </div>

      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="p-2 text-xl font-bold md:text-3xl lg:text-5xl">Proceso de Trabajo</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {procesos.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition hover:border-primary/50"
            >
              <div className="mb-4 text-4xl font-bold text-primary/20">{p.fase}</div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{p.titulo}</h3>
              <p className="text-muted-foreground">{p.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiciosComponent;
