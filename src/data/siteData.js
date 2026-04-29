// ─── Datos del portfolio ─────────────────────────────────────────────────────
// Edita este archivo para actualizar todo el contenido de la web.

export const siteData = {
  name: 'Jesús Painceira',
  fullName: 'Jesús Manuel Painceira Pérez',
  role: 'Desarrollador Front-End',
  location: 'Valencia, España',
  email: 'jesuspainceira@gmail.com',
  available: true,

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
      items: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'React', 'REST APIs', 'PHP', 'WordPress', 'WooCommerce', 'Shopify', 'PrestaShop', 'Figma', 'Git'],
    },
    {
      category: 'En evolución',
      color: 'var(--teal)',
      items: [ 'TypeScript', 'Next.js', 'Vite',  'Node.js'],
    },
    {
      category: 'Herramientas',
      color: '#818cf8',
      items: ['VS Code', 'Webpack', 'Gulp', 'Postman', 'Vercel', 'cPanel', 'Trello', 'Notion', 'Chrome DevTools'],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Aspai Obrador',
      category: 'E-commerce · WooCommerce · Wordpress',
      description: 'Desarrollo de la web para un obrador artesanal, implementando una interfaz responsive y optimizada. Trabajo en maquetación a medida, rendimiento y estructura de contenidos para mejorar la experiencia de usuario y la visibilidad del producto.',
      tags: ['WordPress', 'WooCommerce', 'CSS', 'PHP', 'HTML', 'Javascript'],
      year: '2022',
      color: '#4fa3e0',
      url: 'https://aspai.es/',
      image: '/aspai.webp',
      featured: true,
    },
    {
      id: 2,
      title: 'Web oficial Tantö',
      category: 'Web · Portfolio / Banda',
      description:
        'Desarrollo de la web oficial de Tantö utilizando React, Vite y Tailwind CSS. Creación de una interfaz moderna y responsive alineada con la identidad visual del proyecto, con estructura de componentes reutilizables, animaciones y optimización de rendimiento.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Frontend'],
      year: '2026',
      color: '#ff0033',
      url: 'https://tantobanda.com',
      image: '/tanto.webp',
      featured: true,
    },
    {
      id: 3,
      title: 'Igloo Holiday Homes',
      category: 'Web corporativa · Turismo',
      description:
        'Desarrollo de la web de Igloo, empresa especializada en alojamientos turísticos de lujo en Aviemore y el Cairngorm National Park. El proyecto consistió en construir una interfaz clara, rápida y orientada a conversión, facilitando la exploración de alojamientos y el proceso de reserva. Se trabajó especialmente la jerarquía visual, la experiencia en mobile y el rendimiento, asegurando una navegación fluida incluso con grandes volúmenes de contenido.',
      tags: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'Bootstrap'],
      year: '2023',
      color: '#145490',
      url: 'https://igloo.scot/',
      image: '/igloo.webp',
      featured: true,
    },
    {
      id: 4,
      title: 'Ayuntamiento de Aldaia',
      category: 'Web institucional · Accesibilidad · Servicio público',
      description:
        'Desarrollo de la web del Ayuntamiento de Aldaia orientada a organizar y hacer accesible la información municipal de forma clara y directa, centrando el trabajo en estructurar grandes volúmenes de contenido para facilitar la localización de trámites, noticias y servicios sin fricción, y priorizando una navegación sencilla, legible y estable adaptada a distintos perfiles de usuario y dispositivos.',
      tags: ['PHP', 'Wordpress', 'JavaScript', 'CSS', 'HTML'],
      year: '2022',
      color: '#5ED100',
      url: 'https://aldaia.es/es/inicio/',
      image: '/aldaia.webp',
      featured: true,
    },
    {
      id: 5,
      title: 'Home Holidays Rentals',
      category: 'Web corporativa · Turismo',
      description:
        'Desarrollo frontend de la web de Home Holidays Rentals, empresa especializada en alquiler vacacional e inmobiliaria en la Costa de Barcelona y Costa Brava, centrado en la construcción de la interfaz y la experiencia de usuario mediante una navegación clara y coherente, priorizando la estructura del contenido, la claridad de la información y la adaptación a distintos dispositivos para asegurar una experiencia fluida en todo el recorrido del usuario.',
      tags: ['HTML', 'SCSS', 'JavaScript', 'PHP', 'Bootstrap'],
      year: '2023',
      color: '#B2955D',
      url: 'https://www.homeholidays.rentals/',
      image: '/homeholidays.webp',
      featured: true,
    }
    
  ],

  experience: [
    {
      company: 'Avantio',
      role: 'Web Developer',
      period: 'Diciembre 2022 — Diciembre 2025',
      description:
        'Desarrollo y mantenimiento de interfaces web en una empresa de software para gestión de alquileres vacacionales. Trabajo con equipos multidisciplinares, maquetación de nuevas funcionalidades y optimización del producto.',
      highlights: ['HTML' ,'CSS' , 'JS', 'PHP' ,'WordPress', 'SCSS', 'Bootstrap' ],
    },
    {
      company: 'Ángel Martínez Disseny i Comunicació SL',
      role: 'Full Stack Developer',
      period: 'Mayo 2022 — Diciembre 2022',
      description:
        'Desarrollo full stack en agencia de diseño y comunicación. Maquetación de proyectos web para clientes, desarrollo de funcionalidades custom y mantenimiento de sitios WordPress.',
      highlights: ['HTML' , 'CSS' ,'WordPress', 'Shopify' , 'WooCommerce' , 'PHP', 'JavaScript', 'Bootstrap' , 'Diseño web'],
    },
    {
      company: 'Glintt España',
      role: 'Freelance Web Developer',
      period: 'Febrero 2022 — Mayo 2022',
      description:
        'Desarrollo web freelance para el sector farmacéutico, creando soluciones digitales para farmacias. Implementación de interfaces y componentes personalizados, integrando funcionalidades y optimizando la experiencia de usuario.',
      highlights: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Prestashop', 'Sencha', 'ExtJS'],
    },
    {
      company: 'Information Solutions For Telemedicine SL',
      role: 'Full-stack Developer',
      period: 'Marzo 2019 — Octubre 2019',
      description:
        'Desarrollo de plataformas web para la digitalización de servicios sanitarios, incluyendo portales de pacientes y herramientas de gestión clínica. Implementación de interfaces y funcionalidades conectadas con sistemas médicos y servicios backend.',
      highlights: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS', 'Java'],
    },
    {
      company: 'Hospital General Valencia',
      role: 'Técnico informático',
      period: 'Marzo 2016 — Julio 2016',
      description:
        'Soporte técnico y mantenimiento de sistemas informáticos en entorno hospitalario. Gestión de incidencias y asistencia a usuarios.',
      highlights: ['Soporte técnico', 'Redes', 'Sistemas'],
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
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'Linkedin' },
  ],
}
