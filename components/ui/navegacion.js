"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const NavegacionComponent = () => {
  const itemsNavegacion = [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Contacto", href: "#contacto" },
  ];
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 6);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition duration-300 ${isScrolled
        ? "border-b border-border  backdrop-blur-md"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <p className="text-lg font-semibold tracking-tight text-foreground">JuanDev</p>
        <div className="relative flex items-center gap-3 sm:gap-4">
          <button
            className="rounded-full p-2 text-muted-foreground transition hover:text-foreground sm:hidden"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <nav
            className={`${isOpen ? "flex" : "hidden"
              } fixed left-0 top-14 z-40 w-full flex-col gap-3 bg-background/95 px-6 py-6 backdrop-blur-md sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-1 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0`}
            id="nav-menu"
          >
            <ul className="flex flex-col items-center gap-2 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-1 sm:text-left">
              {itemsNavegacion.map((i) => {
                return (
                  <li className="flex" key={i.label}>
                    <Link
                      href={i.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground sm:text-base"
                    >
                      {i.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full px-3 py-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                  aria-label="Cambiar tema"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavegacionComponent;
