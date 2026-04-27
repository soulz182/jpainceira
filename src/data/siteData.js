// ─── Datos del portfolio ─────────────────────────────────────────────────────
// Edita este archivo para actualizar todo el contenido de la web.

export const siteData = {
  name: 'Jesús Painceira',
  fullName: 'Jesús Manuel Painceira Pérez',
  role: 'Desarrollador Front-End',
  location: 'Valencia, España',
  email: 'hola@jesuspainceira.dev',
  available: true, // cambia a false si no estás disponible

  hero: {
    headline: 'Construyo\ninterfaces\nque importan.',
    subline:
      'Front-end developer con base sólida en HTML, CSS y JavaScript. Ahora con React en la mano y sin miedo a lo que viene.',
    cta: 'Ver mi trabajo',
    ctaSecondary: 'Hablemos',
  },

  about: {
    bio: [
      'Me llamo Jesús, tengo 27 años y vivo en Valencia. Llevo más de cuatro años construyendo interfaces web que funcionan de verdad: desde landings que convierten hasta tiendas WooCommerce con miles de productos.',
      'Mi punto fuerte no es solo escribir código que funciona, sino entender por qué debe funcionar así. Me obsesiona el detalle visual, la jerarquía tipográfica, el comportamiento en mobile y que todo cargue rápido.',
      'Fuera del código, hago música bajo el nombre Tantö. Esa doble vida entre lo técnico y lo artístico es lo que da forma a mi manera de entender el diseño: no como decoración, sino como lenguaje.',
    ],
    tags: ['Diseño UI/UX', 'Responsive', 'Accesibilidad', 'Performance', 'Figma → Código'],
  },

  stack: [
    {
      category: 'Sólido',
      color: 'var(--accent)',
      items: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'PHP', 'WordPress', 'WooCommerce', 'Shopify', 'PrestaShop', 'Figma', 'Git'],
    },
    {
      category: 'En evolución',
      color: 'var(--teal)',
      items: ['React', 'TypeScript', 'Next.js', 'Vite', 'REST APIs', 'Node.js'],
    },
    {
      category: 'Herramientas',
      color: '#a78bfa',
      items: ['VS Code', 'Webpack', 'Gulp', 'Postman', 'Vercel', 'cPanel', 'Trello', 'Notion'],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Tienda online de moda local',
      category: 'E-commerce · WooCommerce',
      description:
        'Diseño e integración completa de una tienda WooCommerce para una marca de moda valenciana. Tema custom desde cero con SCSS, filtros AJAX, pasarela de pago Redsys y rendimiento optimizado hasta 95 en PageSpeed.',
      tags: ['WordPress', 'WooCommerce', 'SCSS', 'PHP', 'Redsys'],
      year: '2023',
      color: '#c8a96e',
      featured: true,
    },
    {
      id: 2,
      title: 'Landing page para estudio de arquitectura',
      category: 'Landing · Maquetación',
      description:
        'Maquetación pixel-perfect desde Figma de una landing para un estudio de arquitectura. Animaciones CSS al scroll, galería con Swiper.js y formulario de contacto con PHP.',
      tags: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'Figma'],
      year: '2022',
      color: '#4ecdc4',
      featured: true,
    },
    {
      id: 3,
      title: 'Tantö — Proyecto musical personal',
      category: 'Web creativa · Identidad',
      description:
        'Web de mi proyecto musical: diseño propio, audio ambient en background, animaciones con CSS custom y canvas para visualizador de audio en JavaScript vanilla.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Canvas API', 'Web Audio API'],
      year: '2023',
      color: '#a78bfa',
      featured: true,
    },
    {
      id: 4,
      title: 'Dashboard de gestión para clínica',
      category: 'App web · PHP + JS',
      description:
        'Panel de administración interno para una clínica médica: gestión de citas, historial de pacientes y generación de informes PDF. Backend con PHP y MySQL, interfaz responsive.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'SCSS', 'PDF'],
      year: '2022',
      color: '#f87171',
      featured: false,
    },
    {
      id: 5,
      title: 'Migración Shopify — Tienda outdoor',
      category: 'E-commerce · Shopify',
      description:
        'Migración y rebranding completo de una tienda de equipamiento outdoor a Shopify. Liquid customizado, secciones de producto con upsells, integración con Klaviyo.',
      tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Klaviyo'],
      year: '2023',
      color: '#34d399',
      featured: false,
    },
    {
      id: 6,
      title: 'UI Kit de componentes responsive',
      category: 'Componentes · CSS',
      description:
        'Librería de componentes UI reutilizables construida en SCSS y Vanilla JS: botones, modales, tooltips, tablas paginadas, formularios validados y sistema de grid propio.',
      tags: ['HTML', 'SCSS', 'JavaScript', 'BEM', 'Storybook'],
      year: '2021',
      color: '#fbbf24',
      featured: false,
    },
  ],

  experience: [
    {
      company: 'Agencia Digital Valencia',
      role: 'Front-End Developer',
      period: '2022 — Actualidad',
      description:
        'Desarrollo de proyectos web para clientes de distintos sectores: e-commerce, hostelería, salud y moda. Responsable de maquetación, optimización y mantenimiento de más de 20 proyectos activos.',
      highlights: ['WordPress / WooCommerce', 'SCSS + JS Vanilla', 'Shopify', 'Figma → Código'],
    },
    {
      company: 'Freelance',
      role: 'Desarrollador Web',
      period: '2020 — 2022',
      description:
        'Proyectos propios y por encargo: landings, tiendas online, webs corporativas y herramientas internas. Gestión directa con el cliente desde la toma de requisitos hasta el despliegue.',
      highlights: ['HTML / CSS / PHP', 'PrestaShop', 'WordPress', 'Gestión de proyectos'],
    },
    {
      company: 'Formación autodidacta',
      role: 'Transición hacia React',
      period: '2024 — Hoy',
      description:
        'Aprendizaje activo de React, TypeScript y Next.js. Construyendo proyectos propios para consolidar el ecosistema moderno de front-end y adaptarme a equipos basados en componentes.',
      highlights: ['React', 'TypeScript', 'Next.js', 'APIs REST'],
    },
  ],

  services: [
    {
      icon: 'Monitor',
      title: 'Maquetación web',
      desc: 'Convierto diseños de Figma o Adobe XD en código real, limpio y responsive. Pixel-perfect cuando importa, adaptable cuando tiene que serlo.',
    },
    {
      icon: 'ShoppingCart',
      title: 'E-commerce',
      desc: 'Tiendas online en WooCommerce, Shopify o PrestaShop. Integración de pasarelas de pago, flujos de compra optimizados y rendimiento cuidado.',
    },
    {
      icon: 'Code2',
      title: 'Desarrollo JavaScript',
      desc: 'Lógica interactiva, formularios avanzados, peticiones a APIs, animaciones personalizadas. Vanilla o React, según lo que necesite el proyecto.',
    },
    {
      icon: 'Zap',
      title: 'Optimización y performance',
      desc: 'Auditorías de rendimiento, mejora de Core Web Vitals, lazy loading, compresión de assets y todo lo que hace que una web cargue rápido de verdad.',
    },
    {
      icon: 'Palette',
      title: 'Proyectos creativos',
      desc: 'Webs que van más allá del catálogo: identidades digitales, portfolios, proyectos artísticos. Algo de código, algo de arte, mucho detalle.',
    },
    {
      icon: 'Wrench',
      title: 'Mantenimiento WordPress',
      desc: 'Actualizaciones, backups, corrección de errores, nuevas secciones y mejoras continuas. Para que tu web no sea un problema que tienes que gestionar.',
    },
  ],

  social: [
    { name: 'GitHub', url: 'https://github.com/', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'Linkedin' },
    { name: 'Twitter / X', url: 'https://x.com/', icon: 'Twitter' },
  ],
}
