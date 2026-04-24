"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Server } from "lucide-react";
import Image from "next/image";

const AboutMe = () => {
    const features = [
        {
            icon: <Layout className="h-6 w-6" />,
            title: "Frontend Development",
            description: "Creación de interfaces responsivas y accesibles con React y Tailwind CSS.",
        },
        {
            icon: <Server className="h-6 w-6" />,
            title: "Backend Development",
            description: "Desarrollo de APIs robustas y escalables con Node.js y Express.",
        },
        {
            icon: <Database className="h-6 w-6" />,
            title: "Database Management",
            description: "Diseño y optimización de bases de datos SQL y NoSQL.",
        },
        {
            icon: <Code className="h-6 w-6" />,
            title: "Clean Code",
            description: "Compromiso con las buenas prácticas y código mantenible.",
        },
    ];

    return (
        <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                        <span>Sobre Mí</span>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                        Pasión por crear <span className="text-primary">soluciones digitales</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Soy un desarrollador apasionado por el software y la tecnología. Mi objetivo es transformar ideas en productos digitales funcionales y atractivos.
                    </p>
                    <p className="mt-4 text-base text-muted-foreground">
                        Tengo experiencia en el desarrollo full stack, me especializo en construir aplicaciones web modernas que se ven bien y funcionan a la perfección. Siempre estoy aprendiendo nuevas tecnologías para mantenerme al día con las últimas tendencias del sector.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-lg border border-border bg-card/50 p-4 transition hover:border-primary/50"
                            >
                                <div className="mb-2 text-primary">{feature.icon}</div>
                                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-center justify-center lg:justify-end"
                >
                    <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4 sm:p-8">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                        <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                            <Image
                                src="/yoeditada.webp"
                                alt="Foto de perfil"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 33vw"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
