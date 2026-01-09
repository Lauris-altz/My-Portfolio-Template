# Plan 5: movil responsive


## **Plan de IA:**
1. **HTML:** <meta name="viewport" content="width=device-width, initial-scale=1.0">  + clases responsive
2. **CSS:** Media queries  @media (max-width: 768px)  +  !important  overrides
3. **Layout:**  Mobile-first con  flex-direction: column  +  grid-template-columns: 1fr 
4. **Tipografia:** Full-width mobile. clamp()  fluid + breakpoints 320px-1920px

## **Implementado:**
Media queries en  layout.css  (final archivo)
Mobile-first responsive (390px iPhone 12)
Nav vertical  .main-nav { flex-direction: column !important; } 
Proyectos 1 columna  .projects-grid { grid-template-columns: 1fr !important; } 
Tipografía fluida  h1 { font-size: clamp(2rem, 8vw, 4rem) } 
Viewport meta en  <head> 
Testeado F12 → Toggle device → iPhone → Sin scroll horizontal
 @media (prefers-reduced-motion: reduce)  accessibility