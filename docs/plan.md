# Plan 1: Plantilla Portfolio

**Mi pregunta a IA:** "Crear primera plantilla portfolio minimalista"

**Respuesta IA (resumida):**
1. HTML: header, hero, proyectos, about, contact
2. CSS: base.css, components.css, responsive
3. Diseño: azul monocromático, grid flexible

**Implementé:**
- index.html estructura completa
- 5 archivos CSS 
- Navegación responsive

# Plan 2: Navegación Funcional


## **Prompt a IA:**

## **Plan de IA:**
1. **HTML:** `<nav>` con links `#contact`, `#about`, `#home`
2. **CSS:** Hover effects (opacity, scale, color)
3. **JS:** Smooth scroll para navegación interna
4. **Active states:** Link actual resaltado

## **Implementado:**
Links funcionales en `<nav>`  
Hover CSS: `opacity: 0.8`, `transform: scale(1.05)`  
Smooth scroll con `scroll-behavior: smooth`

# Plan 3: Animación Intro Inicial


## **Prompt a IA:**

## **Plan de IA:**
1. **Hero section:** Texto typing + partículas flotantes
2. **CSS Animations:** `@keyframes fadeInUp`, `scale`
3. **JavaScript:** Intersection Observer para scroll trigger
4. **GSAP (opcional):** Timeline secuencial

## **Implementado:**
Hero con `fadeInUp` animation  
Partículas CSS con `@keyframes float`  
Texto animado con `animation-delay`

# Plan 4: Botón Gmail Contacto


## **Prompt a IA:**

## **Plan de IA:**
1. **HTML:** `<a href="mailto:tu@email.com?subject=...">`
2. **CSS:** Botón estilo GitHub azul (`#0969da`)
3. **JS:** `window.location.href` fallback
4. **Responsive:** Full-width mobile

## **Implementado:**
 Botón `.contact-btn` en `components.css`  
`mailto:laura.altozano.2004@gmail.com`  
 Hover: `background: #0d5db7`, `transform: translateY(-2px)`  
Link directo Gmail compose
