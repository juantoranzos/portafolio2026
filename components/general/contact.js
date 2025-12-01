"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactComponent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formspree.io/f/mblnydoa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                e.target.reset();
            } else {
                const result = await response.json();
                setError(result.error || "Hubo un error al enviar el mensaje.");
            }
        } catch (err) {
            setError("Hubo un error de conexión. Por favor intenta nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contacto"
            className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="mx-auto mb-6 flex w-fit justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                    <span>Contacto</span>
                </div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                    Hablemos de tu <span className="text-primary">próximo proyecto</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    ¿Tienes una idea en mente? Estoy listo para ayudarte a hacerla realidad.
                </p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6"
                >
                    <div className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/50">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Email</h3>
                                <p className="text-muted-foreground">juandeveloper001@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/50">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Teléfono</h3>
                                <p className="text-muted-foreground">+54 9 3838602382</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/50">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Ubicación</h3>
                                <p className="text-muted-foreground">San Miguel de Tucumán, Argentina</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-xl border border-border bg-card p-6 sm:p-8"
                >
                    {isSuccess ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                                <CheckCircle className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">¡Mensaje Enviado!</h3>
                            <p className="mt-2 text-muted-foreground">
                                Gracias por contactarme. Te responderé a la brevedad.
                            </p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                Enviar otro mensaje
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                                        Nombre
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="¿En qué puedo ayudarte?"
                                />
                            </div>

                            {error && (
                                <div className="flex items-center gap-2 rounded-md bg-red-500/10 p-3 text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4" />
                                    <p>{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    "Enviando..."
                                ) : (
                                    <>
                                        Enviar Mensaje <Send className="ml-2 h-4 w-4" />
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
