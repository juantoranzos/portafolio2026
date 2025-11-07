import { Download, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  const tecnologias = [
    {
      name: "React",
    },
    { name: "Next JS" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "Redux Toolkit" },
    { name: "AWS" },
  ];
  return (
    <header>
      <div className="text-center mt-4 border m-auto w-fit px-2  rounded-full ">
        <span>Disponible para proyectos</span>
      </div>
      <h1 className="text-5xl text-center pt-2 mt-2 mb-2 pb-2">
        Construyo{" "}
        <span className="text-blue-400">Experiencias Web Modernas</span>
      </h1>
      <p className="text-2xl text-center text-gray-400">
        Desarrollador Full Stack especializado en React y Next.js, <br />{" "}
        creando interfaces modernas con código limpio y rendimiento excepcional.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <Link
          href="#proyectos"
          className="bg-blue-300 p-2 m-2 rounded text-black flex"
        >
          Ver Proyectos <MoveRight className="mx-2" />
        </Link>
        <Link
          href="#proyectos"
          className="bg-transparent  p-2 m-2 rounded text-white border flex"
        >
          Descargar CV <Download className="mx-2" />{" "}
        </Link>
      </div>
      <section className="flex justify-center gap-3">
        {tecnologias.map((t) => {
          return (
            <div key={t.name} className="text-center bg-blue-950 p-2 border rounded">
              <p className="mx-2">{t.name}</p>
            </div>
          );
        })}
      </section>
    </header>
  );
};

export default HeaderComponent;
