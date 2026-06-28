export const translations = {
  es: {
    nav: {
      items: [
        { label: "Inicio", href: "#inicio" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Servicios", href: "#servicios" },
        { label: "Proceso", href: "#proceso" },
        { label: "Contacto", href: "#contacto" },
      ],
      available: "Disponible",
      availableLong: "Disponible para proyectos",
      closeMenu: "Cerrar menú",
      openMenu: "Abrir menú",
    },
    hero: {
      eyebrow: "Programador — React / Next.js",
      line1: "Construyo",
      line2: "experiencias web",
      words: ["modernas.", "rápidas."],
      lede: "Desarrollador Full Stack especializado en React y Next.js. Creo interfaces modernas, rápidas y con el mejor rendimiento",
      cta1: "Ver proyectos",
      cta2: "Descargar CV",
    },
    about: {
      eyebrow: "01 / Sobre mí",
      heading: "Paso ideas a productos digitales.",
      body: "Soy desarrollador Full Stack con foco en experiencias web que funcionan y se ven muy bien. Construyo desde el concepto hasta el deploy, priorizando rendimiento, accesibilidad y resultados reales.",
      capabilities: [
        {
          title: "Frontend",
          description: "UIs responsivas y accesibles con React y Tailwind.",
          tag: "React · Tailwind",
        },
        {
          title: "Backend",
          description: "APIs robustas y escalables con Node.js y Express.",
          tag: "Node.js · REST",
        },
        {
          title: "Database",
          description: "Diseño y optimización de bases SQL y NoSQL.",
          tag: "SQL · MongoDB",
        },
        {
          title: "Performance",
          description: "Interfaces rápidas, optimizadas y con métricas reales.",
          tag: "SOLID · DRY",
        },
      ],
    },
    projects: {
      eyebrow: "02 / Proyectos",
      heading: "Soluciones reales para clientes reales.",
      subtext: "Proyectos freelance con impacto medible.",
      featured: "Proyecto destacado",
      viewSite: "Ver sitio",
      viewSiteAria: (name) => `Ver sitio de ${name} (abre en nueva pestaña)`,
      imageAlt: (name) => `Captura de ${name}`,
      labels: {
        role: "ROL",
        stack: "STACK",
        impact: "IMPACTO",
      },
      items: [
        {
          description:
            "Landing moderna para contratista del sector minero: responsive, SEO optimizado y orientado a conversión.",
          impact: "+45% en ventas en los primeros 3 meses.",
          role: "Front end",
        },
        {
          description:
            "E-commerce de indumentaria con catálogo dinámico, pasarela de pagos integrada y panel de administración para stock y pedidos.",
          impact:
            "Tienda propia con checkout integrado: cero comisiones por venta y administración centralizada.",
          role: "Full Stack",
        },
        {
          description:
            "SaaS gastronómico: carta digital con QR fijo por mesa y modo de pedidos online desde el celular, sin necesidad de app ni cuenta.",
          impact:
            "Los locales arman su menú en minutos y reciben pedidos directo, sin app ni comisiones.",
          role: "Full Stack",
        },
      ],
    },
    services: {
      eyebrow: "03 / Servicios",
      heading: "¿Qué puedo hacer por ti?",
      subtext:
        "De la idea al producto: landings, tiendas, paneles y sistemas de diseño.",
      items: [
        {
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
      ],
    },
    process: {
      eyebrow: "04 / Proceso",
      heading: "Cómo trabajo.",
      items: [
        { titulo: "Descubrimiento", descripcion: "Entendemos tu visión y objetivos" },
        { titulo: "Wireframe", descripcion: "Diseñamos la estructura y flujos" },
        { titulo: "Desarrollo", descripcion: "Construimos tu idea" },
        { titulo: "QA & Testing", descripcion: "Probamos en todos los dispositivos" },
        { titulo: "Deploy", descripcion: "Lanzamos y monitoreamos" },
      ],
    },
    contact: {
      eyebrow: "05 / Contacto",
      heading: "Hablemos de tu próximo proyecto.",
      subtext: "¿Tenés una idea en mente? Te ayudo a hacerla realidad.",
      labels: {
        phone: "Teléfono",
        location: "Ubicación",
        email: "Email",
      },
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@email.com",
        messagePlaceholder: "Contame de tu proyecto...",
        submit: "Enviar mensaje",
        submitting: "Enviando...",
      },
      success: {
        heading: "¡Mensaje enviado!",
        body: "Gracias por contactarme. Te respondo a la brevedad.",
        again: "Enviar otro mensaje",
      },
      errors: {
        server: "No se pudo enviar. Intentá de nuevo.",
        connection: "Error de conexión. Revisá tu internet e intentá de nuevo.",
        nameRequired: "El nombre es requerido.",
        emailRequired: "El email es requerido.",
        emailInvalid: "Ingresá un email válido.",
        messageRequired: "El mensaje es requerido.",
      },
    },
    footer: {
      bio: "Desarrollador Full Stack creando experiencias digitales excepcionales.",
      nav: "Navegación",
      services: "Servicios",
      contact: "Contacto",
      navLinks: [
        { label: "Inicio", href: "#inicio" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Servicios", href: "#servicios" },
        { label: "Proceso", href: "#proceso" },
        { label: "Contacto", href: "#contacto" },
      ],
      serviceLinks: [
        "Landing Page de alto rendimiento",
        "E-commerce",
        "Dashboards & Admin Panels",
        "Design Systems & UI Kits",
      ],
      copyright: "© 2026 Juan Toranzos. Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      items: [
        { label: "Home", href: "#inicio" },
        { label: "Projects", href: "#proyectos" },
        { label: "Services", href: "#servicios" },
        { label: "Process", href: "#proceso" },
        { label: "Contact", href: "#contacto" },
      ],
      available: "Available",
      availableLong: "Available for projects",
      closeMenu: "Close menu",
      openMenu: "Open menu",
    },
    hero: {
      eyebrow: "Developer — React / Next.js",
      line1: "I build",
      line2: "web experiences",
      words: ["modern.", "fast."],
      lede: "Full Stack Developer specialized in React and Next.js. I create modern, fast interfaces with performance.",
      cta1: "View projects",
      cta2: "Download CV",
    },
    about: {
      eyebrow: "01 / About me",
      heading: "I turn ideas into digital products.",
      body: "I'm a Full Stack developer focused on web experiences that work and look great. I build from concept to deploy, prioritizing performance, accessibility, and real results.",
      capabilities: [
        {
          title: "Frontend",
          description: "Responsive and accessible UIs with React and Tailwind.",
          tag: "React · Tailwind",
        },
        {
          title: "Backend",
          description: "Robust and scalable APIs with Node.js and Express.",
          tag: "Node.js · REST",
        },
        {
          title: "Database",
          description: "SQL and NoSQL database design and optimization.",
          tag: "SQL · MongoDB",
        },
        {
          title: "Performance",
          description: "Fast, optimized interfaces with real metrics.",
          tag: "SOLID · DRY",
        },
      ],
    },
    projects: {
      eyebrow: "02 / Projects",
      heading: "Real solutions for real clients.",
      subtext: "Freelance projects with measurable impact.",
      featured: "Featured project",
      viewSite: "View site",
      viewSiteAria: (name) => `View ${name} site (opens in new tab)`,
      imageAlt: (name) => `Screenshot of ${name}`,
      labels: {
        role: "ROLE",
        stack: "STACK",
        impact: "IMPACT",
      },
      items: [
        {
          description:
            "Modern landing page for a mining contractor: responsive, SEO-optimized and conversion-focused.",
          impact: "+45% in sales in the first 3 months.",
          role: "Front end",
        },
        {
          description:
            "Clothing e-commerce with dynamic catalog, integrated payment gateway and admin panel for stock and orders.",
          impact:
            "Own store with integrated checkout: zero commission per sale and centralized management.",
          role: "Full Stack",
        },
        {
          description:
            "Gastronomic SaaS: digital menu with fixed QR per table and online ordering from mobile, no app or account needed.",
          impact:
            "Venues set up their menu in minutes and receive orders directly, with no app or commissions.",
          role: "Full Stack",
        },
      ],
    },
    services: {
      eyebrow: "03 / Services",
      heading: "What can I do for you?",
      subtext:
        "From idea to product: landing pages, stores, panels and design systems.",
      items: [
        {
          titulo: "High-performance Landing Page",
          descripcion:
            "Conversion-optimized pages with LCP < 2.5s, advanced SEO and impeccable responsive design.",
          entregables: [
            "Responsive design",
            "SEO optimization",
            "Smooth animations",
            "Validated forms",
          ],
        },
        {
          titulo: "E-commerce",
          descripcion:
            "Modern online stores with Next.js, optimized cart, integrated payments and exceptional shopping experience.",
          entregables: [
            "Payment integration",
            "Inventory management",
            "Admin panel",
            "Analytics",
          ],
        },
        {
          titulo: "Dashboards & Admin Panels",
          descripcion:
            "Intuitive management interfaces with real-time data visualization and scalable architecture.",
          entregables: [
            "Interactive charts",
            "User management",
            "REST API",
            "Secure authentication",
          ],
        },
        {
          titulo: "Design Systems & UI Kits",
          descripcion:
            "Consistent design systems with reusable components, complete documentation and design tokens.",
          entregables: [
            "React components",
            "Documentation (Storybook)",
            "Design tokens",
            "Usage guides",
          ],
        },
      ],
    },
    process: {
      eyebrow: "04 / Process",
      heading: "How I work.",
      items: [
        { titulo: "Discovery", descripcion: "We understand your vision and goals" },
        { titulo: "Wireframe", descripcion: "We design the structure and flows" },
        { titulo: "Development", descripcion: "We build your idea" },
        { titulo: "QA & Testing", descripcion: "We test across all devices" },
        { titulo: "Deploy", descripcion: "We launch and monitor" },
      ],
    },
    contact: {
      eyebrow: "05 / Contact",
      heading: "Let's talk about your next project.",
      subtext: "Have an idea in mind? I'll help you make it happen.",
      labels: {
        phone: "Phone",
        location: "Location",
        email: "Email",
      },
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@email.com",
        messagePlaceholder: "Tell me about your project...",
        submit: "Send message",
        submitting: "Sending...",
      },
      success: {
        heading: "Message sent!",
        body: "Thanks for reaching out. I'll get back to you shortly.",
        again: "Send another message",
      },
      errors: {
        server: "Could not send. Please try again.",
        connection: "Connection error. Check your internet and try again.",
        nameRequired: "Name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Enter a valid email.",
        messageRequired: "Message is required.",
      },
    },
    footer: {
      bio: "Full Stack Developer creating exceptional digital experiences.",
      nav: "Navigation",
      services: "Services",
      contact: "Contact",
      navLinks: [
        { label: "Home", href: "#inicio" },
        { label: "Projects", href: "#proyectos" },
        { label: "Services", href: "#servicios" },
        { label: "Process", href: "#proceso" },
        { label: "Contact", href: "#contacto" },
      ],
      serviceLinks: [
        "High-performance Landing Page",
        "E-commerce",
        "Dashboards & Admin Panels",
        "Design Systems & UI Kits",
      ],
      copyright: "© 2026 Juan Toranzos. All rights reserved.",
    },
  },
};
