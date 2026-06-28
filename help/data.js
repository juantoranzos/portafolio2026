import { LayoutDashboard, Palette, Rocket, ShoppingCart } from "lucide-react";

export const servicios = [
  {
    id: 1,
    icon: <Rocket />,
    titulo: "Landing Page de alto rendimiento",
    descripcion:
      "Páginas optimizadas para conversión con LCP < 2.5s, SEO avanzado y diseño responsive impecable.",
    entregables: [
      "Diseño responsive",
      "Optimización SEO",
      "Animaciones fluidas",
      "Formularios válidos",
    ],
  },
  {
    id: 2,
    icon: <ShoppingCart />,
    titulo: "E-commerce",
    descripcion:
      "Tiendas online modernas con Next.js, carrito optimizado, pagos integrados y experiencia de compra excepcional.",
    entregables: [
      "Integración de pagos",
      "Gestión de inventario",
      "Panel admin",
      "Analytics",
    ],
  },
  {
    id: 3,
    icon: <LayoutDashboard />,
    titulo: "Dashboards & Admin Panels",
    descripcion:
      "Interfaces de gestión intuitivas con visualización de datos en tiempo real y arquitectura escalable.",
    entregables: [
      "Gráficos interactivos",
      "Gestión de usuarios",
      "API REST",
      "Autenticación segura",
    ],
  },
  {
    id: 4,
    icon: <Palette />,
    titulo: "Design Systems & UI Kits",
    descripcion:
      "Sistemas de diseño consistentes con componentes reutilizables, documentación completa y tokens de diseño.",
    entregables: [
      "Componentes React",
      "Documentación (Storybook)",
      "Tokens de diseño",
      "Guías de uso",
    ],
  },
];

export const procesos = [
  {
    id: 1,
    fase: "01",
    titulo: "Descubrimiento",
    descripcion: "Entendemos tu visión y objetivos",
  },
  {
    id: 2,
    fase: "02",
    titulo: "Wireframe",
    descripcion: "Diseñamos la estructura y flujos",
  },
  {
    id: 3,
    fase: "03",
    titulo: "Desarrollo",
    descripcion: "Construimos tu idea",
  },
  {
    id: 4,
    fase: "04",
    titulo: "QA & Testing",
    descripcion: "Probamos en todos los dispositivos",
  },
  {
    id: 5,
    fase: "05",
    titulo: "Deploy",
    descripcion: "Lanzamos y monitoreamos",
  },
];
