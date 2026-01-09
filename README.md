You can find the deployment site in here: https://github.com/Lauris-altz/My-Portfolio-Template


Description

Professional portfolio template for the WEB ATELIER course (UDIT) – Final Project. It demonstrates responsive design, CSS animations, semantic HTML, and professional deployment on GitHub Pages. Designed as a reusable base for future client projects.
Technical level: Vanilla Grade 1 (HTML5, CSS3, JavaScript ES6+ without frameworks).

Objective

The goal of my portfolio is to showcase how I think and work as a graphic designer, reflecting my style, creative process, and the value behind each project.

Tech stack used

	•	Frontend: HTML5 semántico, CSS3 (Custom Properties, Grid, Flexbox, Clamp fluid typography)
	•	Responsive: Mobile-first + Media queries (320px-1920px)
	•	Animaciones: CSS Keyframes + prefers-reduced-motion accessibility
	•	Despliegue: GitHub Pages
	•	Control versión: Git + tags semánticos (v1.0.0)
	•	Calidad código: Prettier formateado

Index

├── index.html          # Página principal
├── 404.html           # Error 404 custom
├── assets/
│   ├── css/           # base.css, layout.css
│   ├── js/            # main.js
│   └── images/        # Imágenes optimizadas
├── docs/              # Planes desarrollo AI
├── LICENSE            # MIT License
└── README.md          # Este archivo


Customization guide

Content: index.html:
- Línea 20-30: Cambiar nombre, bio
- Línea 80-120: Proyectos (títulos, links GitHub, demos)
- Línea 150: Contacto, redes sociales

Colours: assets/css/base.css::root {
  --primary: #tu-color;    /* Actual: azul */
  --accent: #otro-color;   /* Botones */
  --bg: #f8fafc;          /* Fondo */
}

Typography: assets/css/base.css:
--font-main: "Tu Font", system-ui;
Images:  assets/images/lorem.jpg, profile.jpg
Optimizar < 200KB (TinyPNG.com)

Credits and acknowledgments

Professor: Rubén Vega Balbás, PhD - WEB ATELIER (UDIT)
	•	Curso: Fullstack Development - UDIT 2025/2026
	•	Licencia contenido: CC BY-NC-SA 4.0
	•	Inspiración: Responsive Design Lesson
	•	Herramientas: VS Code, Chrome DevTools, Prettier, GitHub Pages
	•	AI asistente: Copilot and Perplexity AI (planes documentados en  /docs/plan1.md )

    © 2026 LAURA ALTOZANO. MIT License.