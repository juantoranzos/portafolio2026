'use client'
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const NavegacionComponent = () => {
  const itemsNavegacion = [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Contacto", href: "#contacto" },
  ];
  const {theme, setTheme} = useTheme()
  return (
    <div className="flex justify-between mx-40 ">
      <p className="p-2 m-2">Chiladev</p>
      <nav>
        <ul className="flex">
          {itemsNavegacion.map((i) => {
            return (
              <li className="flex">
                <Link
                  href={i.href}
                  className="p-2 m-2 text-gray-400 hover:text-white hover:text-[17px]"
                  key={i.label}
                >
                  {i.label}
                </Link>
                
              </li>
            );
          })}
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 m-2 rounded-full text-gray-400 hover:text-white transition"
              aria-label="Toggle theme"
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
  );
};

export default NavegacionComponent;
