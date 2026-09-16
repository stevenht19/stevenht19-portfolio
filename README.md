<div align="center">
  <img src="./src/assets/logo.png" alt="Martín Hernández Logo" width="80" height="80" />
  <h1>Martín Hernández</h1>
  <p><strong>Desarrollador Fullstack</strong> · Lima, Perú (Disponible para trabajo remoto)</p>
  <p>Portafolio profesional desarrollado con Astro, Tailwind CSS, Preact y GSAP, enfocado en rendimiento extremo, diseño moderno e interacciones fluidas.</p>

  <p>
    <a href="https://www.martinstevenht.com"><strong>Sitio Web Oficial »</strong></a>
    <br />
    <a href="https://github.com/stevenht19">GitHub</a> ·
    <a href="https://www.linkedin.com/in/martin-hernández-torres-4778a3267/">LinkedIn</a> ·
    <a href="mailto:mstvdev19@gmail.com">Contacto</a>
  </p>
</div>

---

## ✨ Características Principales

- ⚡ **Rendimiento Excepcional**: Generación estática optimizada con Astro 5 y Vite.
- 🎨 **Diseño Moderno & Glassmorphism**: Paleta cuidada con acentos en verde lima/neón (`#d4ff00`), tipografía display *Cabinet Grotesk* y sistema tipográfico *Plus Jakarta Sans*.
- 🪄 **Micro-interacciones y Animaciones GSAP**:
  - Animaciones de entrada escalonadas y sincronizadas al scroll con `ScrollTrigger`.
  - Efecto de perspectiva e inclinación 3D magnética en tarjetas (`setupCardTilt`).
  - Lienzo interactivo canvas con partículas y cuadrícula de puntos dinámica (`DotGrid`).
  - Detección automática de accesibilidad `prefers-reduced-motion` y ahorro de recursos cuando las secciones salen del viewport (`pauseWhenOutOfView`).
- 📱 **Totalmente Responsivo**: Experiencia fluida y consistente en móviles, tablets y monitores ultrawide.
- 🔍 **SEO Técnico & Datos Estructurados**:
  - Etiquetas canónicas y directivas de rastreo para motores de búsqueda.
  - Open Graph y Twitter Cards completas para previsualizaciones en redes sociales.
  - Datos estructurados Schema.org (`Person` y `WebSite`) en formato JSON-LD.
  - Generación de `sitemap.xml` y archivo `robots.txt`.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Framework Base** | [Astro](https://astro.build/) |
| **Componentes Interactivos** | [Preact](https://preactjs.com/) |
| **Estilos & UI** | [Tailwind CSS v4](https://tailwindcss.com/) + Vanilla CSS |
| **Animaciones & Motion** | [GSAP](https://gsap.com/) & ScrollTrigger |
| **Tipografía** | Plus Jakarta Sans Variable & Cabinet Grotesk |
| **Optimización de Imágenes** | Sharp & Astro Assets |

---

## 📂 Estructura del Proyecto

```text
stevenht19-portfolio/
├── public/                # Archivos estáticos públicos (favicon, robots.txt, sitemap.xml, fuentes)
├── src/
│   ├── assets/            # Imágenes, fotos y logotipos optimizados por Astro
│   ├── components/
│   │   ├── Header/        # Navegación principal, dock flotante y menú móvil
│   │   ├── Hero/          # Presentación principal, métricas y portrait interactivo
│   │   ├── Services/      # Catálogo de servicios profesionales y banners CTA
│   │   ├── Projects/      # Proyectos destacados, tarjetas con efectos y partículas
│   │   ├── Experience/    # Línea de tiempo de trayectoria laboral y stack utilizado
│   │   ├── About/         # Sección sobre mí, tarjeta 3D con código e historia
│   │   ├── Contact/       # Llamado a la acción directo con enlaces a WhatsApp y redes
│   │   ├── Footer/        # Pie de página y navegación secundaria
│   │   └── ui/            # Componentes atómicos (Button, DotGrid, TechIcon, etc.)
│   ├── data/              # Datos desacoplados (proyectos, experiencia, servicios, métricas)
│   ├── layouts/           # Plantilla base HTML con metadatos SEO y JSON-LD
│   ├── pages/             # Rutas del sitio (index.astro)
│   ├── styles/            # Estilos globales y temas Tailwind
│   ├── types/             # Definiciones e interfaces de TypeScript modulares
│   └── utils/             # Helpers de animación (GSAP, scroll, tilt, observer)
├── astro.config.mjs       # Configuración de Astro, Tailwind e integraciones
└── package.json
```

---

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- **Node.js**: v18.17.1 o superior
- **pnpm**: v8 o superior (`npm install -g pnpm`)

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/stevenht19/stevenht19-portfolio.git
   cd stevenht19-portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

4. **Compilar para producción:**
   ```bash
   pnpm build
   ```

5. **Previsualizar la compilación de producción:**
   ```bash
   pnpm preview
   ```

---

## 📬 Contacto

- **Nombre**: Martín Hernández
- **Rol**: Desarrollador Fullstack
- **Sitio Web**: [martinstevenht.com](https://www.martinstevenht.com)
- **LinkedIn**: [Martín Hernández Torres](https://www.linkedin.com/in/martin-hern%C3%A1ndez-torres-4778a3267/)
- **GitHub**: [@stevenht19](https://github.com/stevenht19)
- **Email**: [mstvdev19@gmail.com](mailto:mstvdev19@gmail.com)

---

<div align="center">
  <sub>Diseñado y desarrollado por Martín Hernández. Todos los derechos reservados.</sub>
</div>
