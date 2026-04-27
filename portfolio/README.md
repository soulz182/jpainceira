# Jesús Painceira — Portfolio

Portfolio personal de Jesús Manuel Painceira Pérez, desarrollador front-end en Valencia.

## Stack

- **React 18** + Vite
- **CSS Modules** — estilos encapsulados por componente
- **Lucide React** — iconos ligeros
- **Google Fonts** — Playfair Display + DM Sans + JetBrains Mono

Sin dependencias de UI externas, sin Bootstrap, sin Tailwind. Todo construido a medida.

---

## Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables (Navbar, Footer, Cursor)
├── sections/         # Secciones de la página (Hero, About, Stack…)
├── hooks/            # Hooks propios (useScrollReveal)
├── data/
│   └── siteData.js   # ← Edita aquí todo el contenido
├── styles/
│   ├── global.css    # Variables CSS, reset, utilidades
│   └── reveal.css    # Clases de animación al scroll
└── main.jsx
```

---

## Instalación y desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar en local
npm run dev
# Abre http://localhost:5173
```

## Build de producción

```bash
npm run build
# La carpeta dist/ contiene el sitio listo para desplegar
```

## Despliegue en Vercel

### Opción A — Vercel CLI

```bash
npm install -g vercel
vercel
# Sigue las instrucciones. Detecta Vite automáticamente.
```

### Opción B — Interfaz web de Vercel

1. Sube el proyecto a un repositorio de GitHub / GitLab.
2. Entra en [vercel.com](https://vercel.com) → **Add New Project**.
3. Importa el repositorio.
4. Vercel detecta Vite solo. Pulsa **Deploy**.
5. Cada push a `main` redespliega automáticamente.

---

## Personalización

Todo el contenido vive en **`src/data/siteData.js`**:
- Cambia textos, proyectos, experiencia y servicios sin tocar otros archivos.
- Para añadir o quitar proyectos, edita el array `projects`.
- Para cambiar los colores, modifica las variables CSS en `src/styles/global.css` (sección `:root`).

### Conectar el formulario de contacto

El formulario está preparado para enviar datos. Para activarlo, elige una de estas opciones:

- **[Formspree](https://formspree.io/)** — pon tu endpoint en el `action` del formulario.
- **[EmailJS](https://www.emailjs.com/)** — integración directa desde el front.
- **Serverless function en Vercel** — crea `api/contact.js` con Nodemailer.

---

## Proyecto musical Tantö

El proyecto Tantö está referenciado como proyecto destacado. Para enlazar a su propia web cuando esté lista, actualiza el campo `url` del proyecto en `siteData.js`.
