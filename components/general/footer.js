"use client";

import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Juan Toranzos</h3>
                        <p className="text-sm text-muted-foreground">
                            Desarrollador Full Stack creando experiencias digitales excepcionales.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition hover:text-primary"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition hover:text-primary"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                            Navegación
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#inicio" className="text-muted-foreground transition hover:text-primary">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="#sobre-mi" className="text-muted-foreground transition hover:text-primary">
                                    Sobre Mí
                                </Link>
                            </li>
                            <li>
                                <Link href="#proyectos" className="text-muted-foreground transition hover:text-primary">
                                    Proyectos
                                </Link>
                            </li>
                            <li>
                                <Link href="#contacto" className="text-muted-foreground transition hover:text-primary">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                            Servicios
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <span className="text-muted-foreground">Desarrollo Web</span>
                            </li>
                            <li>
                                <span className="text-muted-foreground">Aplicaciones Móviles</span>
                            </li>
                            <li>
                                <span className="text-muted-foreground">UI/UX Design</span>
                            </li>
                            <li>
                                <span className="text-muted-foreground">Consultoría</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                            Contacto
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-muted-foreground">juandeveloper001@gmail.com</li>
                            <li className="text-muted-foreground">+54 9 3838602382</li>
                            <li className="text-muted-foreground">San Miguel de Tucumán, Argentina</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} Juan Toranzos. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
