import React from "react";
import construcciones from "@/public/construcciones.png";
import ociobar from "@/public/ociobar.png";

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
    },
    {
        id:2,
        img: ociobar ,
        name : "El Ociobar",
        type:"Front end",
        description:"Carta Digital con codigo QR fijo en cada mesa del bar, permitiendo a los clientes ver la carta desde su celular de forma rapida y sencilla.",
        impacto:"Increible aceptacion por parte de los clientes, aumentando la velocidad de atencion y reduciendo errores en los pedidos.",
        rectologias:["Next js", "TailwindCSS", "JavaScript"]
    }
  ];
  return (
    <div>
      <h2>Proyectos Destacados</h2>
      <p>
        Soluciones reales que generan impacto, desde e-commerce hasta
        plataformas de contenido
      </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {projects.map((project) => (
                <div key={project.id} className="border p-4 rounded-lg hover:shadow-lg transition">
                    <img src={project.img.src} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4"/>
                    <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-400 italic mb-2">{project.type}</p>
                    <p className="mb-2">{project.description}</p>
                    <p className="font-bold mb-2">Impacto: {project.impacto}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.rectologias.map((tech, index) => (
                            <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm">{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Proyectos;
