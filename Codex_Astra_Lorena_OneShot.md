# CODEX 6 ASTRA — LORENA SALES LANDING
## Autonomous one-shot production build

Actuá como **Lead Product Engineer + Creative Director + Release Owner** de este proyecto.

Tenés adjunto el proyecto completo proveniente de Claude Design, incluyendo el diseño/prototipo que ya pasó por varias iteraciones.

## MISIÓN

Tu misión no es hacer una demo.

Tu misión es devolverme una **web terminada**.

Quiero poder dejarte trabajando, irme durante varias horas y volver con una versión que razonablemente podría mostrarle al cliente o publicar después de reemplazar únicamente el material que todavía no existe.

**No optimices por velocidad.**  
**No busques terminar rápido.**  
**No declares éxito después de una primera implementación.**

Usá el presupuesto de cómputo y los agentes disponibles para:

- analizar;
- construir;
- generar assets;
- probar;
- criticar;
- corregir;
- volver a probar;
- pulir;
- y recién entonces cerrar.

No hagas esperas artificiales, sleeps, loops inútiles ni trabajo ficticio para consumir tiempo.

Si llegás temprano a una versión aparentemente buena, invertí el tiempo restante en auditorías independientes, visual QA, responsive QA, performance, accesibilidad, copy, edge cases y una nueva pasada de refinamiento.

---

# 0. REGLAS DE AUTONOMÍA

Trabajá de manera autónoma.

**No me preguntes cosas salvo que exista un bloqueo absoluto que haga técnicamente imposible continuar.**

Si falta información del cliente:

1. buscala primero en todos los archivos adjuntos;
2. diferenciá información confirmada de contenido provisional;
3. tomá una decisión reversible;
4. dejá el dato centralizado y fácil de reemplazar;
5. seguí trabajando.

No te detengas esperando:

- fotos finales;
- textos finales;
- checkout final;
- títulos finales;
- dominio;
- testimonios;
- precio definitivo;
- PDFs definitivos.

Todo eso puede quedar preparado/configurable.

Quiero una web completa aunque ciertos datos finales sean placeholders controlados.

No inventes información que pueda engañar al cliente o al comprador.

En particular, no inventes:

- credenciales de Lorena;
- años de experiencia;
- certificaciones;
- resultados clínicos;
- testimonios reales;
- número de alumnas;
- transformaciones corporales;
- garantías;
- descuentos falsos;
- urgencia falsa;
- cupos falsos.

---

# 1. CONTEXTO DEL PRODUCTO

La página vende un curso digital de entrenamiento creado por Lorena.

Información razonablemente confirmada:

- es una landing / sales page;
- el objetivo principal es la **compra**;
- hay aproximadamente 10 videos;
- hay 1 o 2 PDFs/materiales complementarios;
- debe explicarse quién es Lorena;
- debe explicarse el método/propuesta;
- debe mostrarse qué recibe la persona;
- debe existir precio;
- debe existir flujo claro hacia compra;
- debe funcionar muy bien en desktop y mobile;
- el material definitivo de fotografía/video todavía puede no estar disponible;
- parte del copy del prototipo es provisional.

La clienta ya reaccionó positivamente a la dirección visual actual.

Por lo tanto:

- **no quiero una nueva identidad de marca**;
- **no quiero una nueva búsqueda estética desde cero**;
- **no quiero convertirlo en una web distinta sólo para “mejorarla”**.

Quiero llevar **esta dirección** a nivel producción.

---

# 2. DIRECCIÓN VISUAL YA APROBADA

El proyecto adjunto es el **gold standard visual**.

No necesariamente es gold standard de implementación.

Preservar el ADN:

- negro / charcoal casi total;
- crema cálido;
- verde oliva apagado;
- dorado / mostaza sobrio como acento;
- fotografía atlética protagonista;
- composición editorial;
- contraste fuerte;
- títulos display condensados;
- sensación premium;
- fuerza sin agresividad;
- fitness sin estética de gimnasio genérico;
- femenino sin caer en “wellness rosa”;
- sobriedad;
- técnica;
- control;
- movimiento;
- intención.

Conceptualmente:

**“Técnica antes que intensidad”**

funciona como claim de marca.

El H1 actual:

**“Aprendé a entrenar bien, no a entrenar más”**

es una dirección válida y actualmente preferida.

No cambies esto gratuitamente.

Sí corregí cualquier repetición conceptual inmediatamente posterior.

Por ejemplo, evitá que Hero diga:

> Aprendé a entrenar bien, no a entrenar más

y Método vuelva a decir inmediatamente:

> No necesitás entrenar más, necesitás entrenar mejor.

Eso es redundante.

La sección Método tiene que agregar una nueva capa de información.

---

# 3. ARQUITECTURA GENERAL A CONSERVAR

La arquitectura objetivo es aproximadamente:

1. Hero
2. Método
3. Contenidos / Programa
4. Lorena
5. Testimonios — sólo si hay material real
6. Precio / Compra
7. FAQ
8. CTA final + Footer

No agregues quince secciones.

No hagas una landing de 40 pantallas.

No repitas la misma propuesta de valor con palabras distintas.

Buscá una página relativamente corta, pero suficientemente completa como para vender tráfico frío.

---

# 4. ORQUESTACIÓN DE AGENTES

Tenés libertad total para decidir cómo repartir el trabajo entre agentes/subagentes.

**No sigas una topología fija de agentes sólo porque yo la sugiera.** Elegí dinámicamente los especialistas que mejor convengan según lo que encuentres en el repo, el estado del diseño y los problemas que aparezcan.

Podés crear agentes en paralelo, reutilizarlos, reemplazarlos o crear nuevos especialistas cuando lo consideres útil.

Lo importante no es qué agentes uses sino que, antes de declarar `DONE`, hayan sido cubiertas de forma independiente estas capacidades:

- auditoría técnica del repo/export de Claude Design;
- dirección de arte y fidelidad visual;
- frontend de producción;
- UX/CRO de sales landing;
- revisión de copy;
- generación/selección de imágenes y eventualmente video;
- responsive/mobile;
- accesibilidad;
- performance;
- visual QA mediante screenshots reales;
- testing funcional;
- release/handoff.

Para las revisiones críticas, intentá que **el agente que evalúa no sea el mismo que implementó esa parte**, cuando el sistema de agentes lo permita.

Vos, como Astra/orquestador principal, decidí qué combinación de agentes logra mejor resultado y reasigná trabajo según los hallazgos.

No crees agentes por cumplir una lista. Crealos cuando aporten una perspectiva o capacidad real.

---

# 5. PRIMERA FASE: NO TOCAR NADA

Antes de modificar código:

**Inspeccioná todo.**

Recorré el árbol completo.

Leé:

- `package.json`;
- configs;
- CSS;
- JS/TS;
- componentes;
- HTML;
- assets;
- manifests;
- fuentes;
- README;
- variables;
- scripts;
- archivos generados;
- cualquier design spec.

Detectá particularmente artefactos típicos del export de Claude Design como:

- `x-dc`;
- runtimes propios;
- scripts bundleados;
- `image-slot`;
- lógica de preview;
- hacks de scroll;
- wrappers innecesarios;
- scripts de unbundling;
- estilos inline gigantes;
- lógica específica del host de artifacts.

Importante:

El export de Claude Design es una **referencia de diseño**.

No copies ciegamente su infraestructura si existe una implementación más limpia.

Documentá internamente:

- `KEEP`
- `REIMPLEMENT`
- `REMOVE`
- `PENDING`

---

# 6. GENERAR UNA BASELINE VISUAL

Antes de modificar la UI:

renderizá la versión actual.

Sacá screenshots de referencia en:

- 1440×1000
- 1920×1080
- 1280×800
- 768×1024
- 430×932
- 390×844
- 375×812
- 360×800

Si Playwright está disponible, usalo.

Guardá estas capturas como **BASELINE**.

No dependas de tu memoria visual.

Después de cada fase importante, generá nuevas capturas y comparalas.

---

# 7. EXTRAER DESIGN SYSTEM

Derivá un pequeño design system del proyecto actual.

Centralizá:

- colors;
- type;
- space;
- max widths;
- buttons;
- borders;
- radius;
- motion;
- z-index;
- breakpoints.

Ejemplo conceptual, no obligatorio:

```css
--charcoal
--cream
--olive
--gold
--text
--muted
```

No quiero 39 tonos accidentalmente distintos.

Revisá contraste WCAG.

No destruyas la paleta por cumplir ratios: ajustá de forma mínima.

---

# 8. FOTOGRAFÍA E IMÁGENES

La fotografía va a definir gran parte del resultado.

Necesito assets de transición suficientemente buenos para que la web pueda mostrarse.

Generá, si hace falta, **varias opciones**.

No te quedes con la primera imagen que produzca el modelo.

## Hero

Buscamos:

- atleta mujer adulta;
- entrenamiento técnico;
- fuerza controlada;
- movimiento creíble;
- ambiente cinematográfico;
- fondos oscuros;
- iluminación lateral;
- negro;
- oliva;
- luces cálidas muy moderadas;
- composición editorial;
- espacio negativo suficiente para copy;
- no mirar sonriente a cámara;
- no pose publicitaria;
- no musculación extrema;
- no culturismo;
- no estética “influencer fitness”;
- no texto dentro de la imagen;
- no logos.

Generar al menos 3 conceptos visuales si la herramienta lo permite.

Un revisor visual independiente debe seleccionar el mejor.

## Muy importante sobre Lorena

**No uses una mujer sintética y la presentes como si fuera Lorena.**

Si no tenemos fotos reales de Lorena:

la sección “Sobre Lorena” debe usar:

- un placeholder claramente reemplazable;
- una composición neutra;
- o material existente real.

Una atleta generada puede servir como **imagen de campaña**.

No puede servir para fingir ser la clienta.

## Método

Evaluar una banda panorámica:

- movimiento;
- fuerza;
- movilidad;
- control corporal;
- detalle de manos/barra/zapatillas/postura;
- incluso planos sin rostro.

Eso reduce la dependencia de identidad.

## Otras secciones

No llenes cada sección de imágenes.

Menos assets, mejores assets.

---

# 9. HERO VIDEO — EVALUACIÓN SERIA

Quiero que evalúes si realmente podemos mejorar el hero usando video.

Si hay herramienta adecuada de video:

hacer pruebas.

Objetivo:

loop cinematográfico de 4–8 segundos.

Características:

- silencioso;
- autoplay;
- muted;
- playsinline;
- loop;
- movimiento lento/controlado;
- entrenamiento realista;
- no cambios de cámara violentos;
- sin logos;
- sin textos;
- posibilidad de overlay;
- zona oscura para H1;
- fotograma inicial fuerte.

Generar poster.

Optimizar formato:

- WebM si tiene sentido;
- fallback MP4 cuando corresponda.

No subir un archivo ridículamente pesado.

Objetivo razonable: el menor peso posible conservando calidad visual.

Si video empeora:

- performance;
- legibilidad;
- LCP;
- claridad;
- sensación premium;

**descartarlo**.

Una excelente foto gana contra un video mediocre.

Tomar una decisión explícita.

---

# 10. HERO FINAL

Tiene que contestar rápidamente:

- ¿Qué es?
- ¿Por qué debería importarme?
- ¿Qué recibo?
- ¿Cómo compro?

Sin parecer un banner de ecommerce barato.

Conservar:

**Claim:**

> TÉCNICA ANTES QUE INTENSIDAD

**H1 principal:**

> APRENDÉ A ENTRENAR BIEN,  
> NO A ENTRENAR MÁS.

Revisar subtítulo.

CTA principal.

Puede existir CTA secundario “Ver programa” si suma.

Mostrar información compacta tipo:

- 10 videos
- material complementario
- a tu ritmo

Pero no afirmar 2 PDFs si todavía son 1 o 2.

Usar algo como:

- 10 videos
- material descargable
- acceso digital

si eso es más seguro.

No afirmar:

- “acceso para siempre” si no está confirmado;
- “acceso inmediato” si todavía no sabemos el flujo definitivo.

---

# 11. SECCIÓN MÉTODO

Actualmente es una sección visualmente fuerte.

Preservar su peso.

Resolver repetición del H1.

Usar un headline distinto, por ejemplo conceptualmente:

> Tres principios para entrenar con intención.

Sólo usar copy final si está respaldado.

Los tres principios actuales pueden servir provisionalmente:

- Técnica
- Control
- Constancia

pero tratarlos como configurables.

Mantener:

- asimetría;
- columna dominante;
- números;
- buena tipografía;
- imagen/banda;
- quiebre de ritmo.

No hacer tres cards SaaS.

---

# 12. PROGRAMA / LOS 10 VIDEOS

Esta sección tiene que vender tangibilidad.

Quiero que el visitante piense:

> Ah, esto es exactamente lo que voy a recibir.

La solución tipo **índice** es actualmente preferida a 10 cards.

Mantener esa idea.

Cada fila puede tener:

- número;
- título;
- duración.

Opcional:
microdescripción si realmente aporta.

Pero no convertir cada video en un párrafo.

## Stress test obligatorio

Antes de cerrar el componente:

testear con títulos artificialmente largos.

Ejemplos:

- “Movilidad de tren inferior y control del rango de movimiento”
- “Fuerza de tren superior con foco en técnica y estabilidad”
- “Sesión completa de cuerpo entero para días de poco tiempo”

No dejar esos textos si son ficticios.

Usalos exclusivamente para test.

El componente tiene que funcionar en:

- 1440
- 768
- 430
- 390
- 360

---

# 13. SOBRE LORENA

Esta es una sección **humana**.

No una bio corporativa.

Necesito:

- foto real cuando exista;
- nombre;
- presentación breve;
- por qué creó el curso;
- enfoque.

No inventar:

- títulos;
- certificaciones;
- trayectoria;
- frases textuales.

Si la cita actual no fue dicha realmente por ella:
marcarla provisional.

Visualmente:

foto con mucho peso.

No encerrarla dentro de cinco cajas decorativas.

El diseño a sangre / 50-50 / oliva es una buena base.

---

# 14. TESTIMONIOS

Si no existen testimonios reales:

**no inventarlos.**

La implementación debe permitir algo como:

```ts
showTestimonials = false
```

o equivalente.

Cuando está desactivado:

la sección desaparece completamente, sin huecos.

Si existen testimonios reales en adjuntos:
usarlos únicamente si se identifica claramente que son reales.

---

# 15. PRECIO Y COMPRA

Esta sección debe ser extremadamente clara.

No experimental.

Necesito:

- qué recibe;
- precio;
- CTA;
- información mínima necesaria.

Toda configuración comercial debe estar **centralizada**.

Por ejemplo:

```ts
course.price
course.checkoutUrl
course.materialCount
course.videoCount
```

No buscar y reemplazar `$120.000` en 17 archivos.

Si el precio no está confirmado:
usar placeholder controlado.

Los CTA deben funcionar.

Si checkout URL no existe:

usar una constante claramente marcada:

```ts
CHECKOUT_URL = ""
```

y definir un comportamiento de desarrollo elegante.

No mandar a `#` sin explicación si puede evitarse.

---

# 16. STICKY BUY BAR

Evaluar y conservar si funciona bien.

Comportamiento deseable:

- no aparece instantáneamente;
- aparece después de superar hero;
- muestra precio si está confirmado;
- CTA comprar;
- no tapa contenido;
- respeta safe-area de iPhone;
- desaparece o deja de competir visualmente cerca del bloque de compra/final;
- navegación por teclado;
- touch target correcto.

No usar un `requestAnimationFrame` infinito porque el prototipo de Claude lo necesitaba.

Implementarlo limpiamente.

---

# 17. FAQ

FAQ corta.

Entre 4 y 7 preguntas.

No 20.

Temas:

- nivel necesario;
- equipamiento;
- duración;
- dónde entrenar;
- contenido;
- acceso;
- dudas antes de comprar.

No responder información no confirmada.

Centralizar contenido.

Implementar accordion accesible.

Usar:

- `button`
- `aria-expanded`
- `aria-controls`

Animación simple.

---

# 18. CTA FINAL

Debe cerrar la narrativa.

Mantener sensación editorial.

Evitar la típica:

> ¿Estás listo para transformar tu vida?

El claim:

> MENOS HORAS.  
> MEJOR TÉCNICA.

puede funcionar visualmente, pero verificar que no esté repitiendo demasiado el hero.

Si se conserva:
que funcione como cierre corto, no como nueva explicación.

---

# 19. FOOTER

Minimalista.

Preparar:

- nombre/marca;
- Instagram si existe;
- contacto si existe;
- términos;
- privacidad;
- copyright.

Si links no están disponibles:
dejarlos configurables.

No inventar handles.

---

# 20. MOTION SYSTEM

Definir un motion system coherente.

No animar todo.

Permitido:

- pequeños reveals;
- opacity;
- translate 10–20 px;
- imágenes con movimiento leve;
- hover;
- microinteracciones;
- banda/marquee muy discreto si ya es parte del diseño.

Evitar:

- objetos persiguiendo cursor;
- scroll hijacking;
- GSAP gigante sin necesidad;
- animaciones de 2 segundos;
- texto volando;
- parallax exagerado;
- elementos entrando desde todos lados.

## `prefers-reduced-motion`

Obligatorio.

Cuando está activo:

- remover parallax;
- remover transforms no esenciales;
- reducir duration;
- mostrar contenido inmediatamente.

---

# 21. IMPLEMENTACIÓN DE SCROLL

No copiar el hack del prototipo si tiene:

- `requestAnimationFrame` infinito para consultar scroll;
- listeners redundantes;
- timeouts de seguridad extraños;
- polling de layout.

Preferencias:

- `IntersectionObserver`
- CSS `position: sticky`
- scroll listener pasivo sólo si es realmente necesario
- `requestAnimationFrame` únicamente para batching controlado

Objetivo:

simple, predecible y performante.

---

# 22. RESPONSIVE — NO NEGOCIABLE

Diseñar individualmente:

- desktop;
- tablet;
- mobile.

Breakpoints razonables.

## 1440+

No estirar texto a 2000 px.

Mantener max widths.

## Tablet

No dejar columnas demasiado angostas.

## 390

Es una viewport prioritaria.

El hero actual puede quedar en 3 líneas:

> APRENDÉ A  
> ENTRENAR BIEN,  
> NO A ENTRENAR MÁS

No lo fuerces a 2 líneas si 3 funciona mejor.

## 360

Tiene que seguir funcionando.

Nada debe:

- cortar;
- overflow horizontal;
- taparse;
- volverse ilegible.

---

# 23. ACCESSIBILITY PASS

Auditor independiente.

Revisar:

- HTML semántico;
- H1 único;
- jerarquía H2/H3;
- landmarks;
- alt text;
- contraste;
- focus visible;
- navegación por teclado;
- botones reales;
- links reales;
- ARIA sólo donde corresponde;
- FAQ;
- sticky CTA;
- reduced motion;
- tamaño mínimo touch;
- zoom 200%;
- textos sobre imágenes.

No busco certificación formal AA completa,
pero sí evitar problemas obvios.

---

# 24. PERFORMANCE PASS

Auditor independiente.

Revisar:

- bundle;
- dependencias;
- imágenes;
- formatos;
- video;
- fonts;
- preload;
- lazy loading;
- LCP;
- CLS;
- scripts;
- animation cost;
- hydration si aplica;
- console errors.

No agregar dependencias de 300 KB para una animación de opacity.

Hero asset:
prioridad.

Resto:
lazy.

Si cargamos varias fuentes:
revisar pesos realmente usados.

---

# 25. SEO / SOCIAL / METADATA

Preparar correctamente:

- `<title>`
- meta description
- viewport
- canonical configurable
- OpenGraph
- Twitter cards
- favicon placeholder/config
- theme-color

Si corresponde:
JSON-LD de Course/Product.

Pero no inventar ratings/reviews.

Agregar estructura razonable para:

- Course
- Offer

sólo con datos disponibles.

---

# 26. COPY PASS ANTI-AI

Una vez que la web esté visualmente completa:

hacer **una pasada entera dedicada exclusivamente al copy**.

El revisor debe leer la página de principio a fin.

Marcar cualquier frase que parezca:

- genérica;
- redundante;
- escrita por ChatGPT;
- grandilocuente;
- vacía;
- demasiado marketinera.

Regla:

si una frase podría estar en la landing de cualquier entrenadora,
probablemente necesita revisión.

Ejemplos de cosas a evitar:

- “Transformá tu vida”
- “Alcanzá tu mejor versión”
- “Desbloqueá tu potencial”
- “Un método diseñado para vos”
- “Resultados extraordinarios”
- “Tu viaje comienza hoy”

No reemplazar con otras frases igual de vacías.

Mejor:
concreto y breve.

---

# 27. CONTENT CONFIG

Quiero que después sea muy fácil reemplazar contenido.

Si la arquitectura lo permite, crear un módulo/config único:

- `siteConfig`
- `courseData`
- `content.ts`
- o equivalente.

Centralizar:

- brandName
- instructorName
- hero
- method
- videos
- downloadables
- price
- checkoutUrl
- socialLinks
- faq
- testimonials
- images
- video
- legalLinks

No sobrearquitecturar con CMS.

Sólo hacerlo fácil de modificar.

---

# 28. VISUAL TESTING

Después de implementar primera versión:

render screenshots de todas las viewports.

Comparar con baseline.

Un revisor visual independiente debe revisar screenshots.

No sólo DOM.

Necesito revisión visual real.

Generar capturas de:

- full page;
- hero;
- método;
- contenidos;
- Lorena;
- precio;
- final.

Desktop y mobile.

---

# 29. OBLIGATORIO: TRES CICLOS DE CRÍTICA

**No terminar después de primera versión.**

## Ciclo 1 — Visual / Brand

Revisar:

- identidad;
- ritmo;
- tipografía;
- fotografía;
- repetición;
- templateness;
- balance de color.

Aplicar sólo mejoras justificadas.

Volver a screenshots.

## Ciclo 2 — UX / Conversion / Mobile

Recorrer como:

- tráfico de Instagram;
- tráfico frío.

Encontrar:

- puntos muertos;
- repetición;
- fricción;
- CTA;
- precio;
- lectura;
- índice;
- FAQ.

Aplicar.

Volver a screenshots.

## Ciclo 3 — Release hardening

Revisar:

- performance;
- accesibilidad;
- QA;
- warnings;
- errores;
- overflow;
- focus;
- cargas;
- imágenes;
- video;
- console;
- build.

Corregir.

Volver a ejecutar todo.

Incluso si el Ciclo 1 dice “está excelente”:
ejecutar igual Ciclo 2 y Ciclo 3.

---

# 30. PRUEBAS AUTOMÁTICAS

Usar las herramientas disponibles.

Si existe Playwright:

crear una suite mínima.

Validar:

- página carga;
- no hay errores críticos de consola;
- CTA hero existe;
- CTA purchase existe;
- FAQ funciona;
- sticky CTA aparece cuando corresponde;
- menú funciona;
- anchors funcionan;
- testimonials se puede ocultar;
- mobile no tiene horizontal overflow;
- todas las imágenes resuelven;
- ruta principal devuelve 200;
- links principales no están rotos.

Testear al menos:

- 390×844
- 1440×1000

Idealmente más.

---

# 31. VISUAL EDGE CASE TESTS

Probar:

## Copy largo

- títulos largos de video;
- FAQ larga;
- bio más larga.

## Copy corto

- título mínimo;
- sin testimonios.

## Precio

- precio corto;
- precio largo.

## Imagen

- portrait;
- landscape;
- `object-position`.

## Mobile

- 360 px.

## Zoom

- 200%.

No hace falta conservar contenido artificial.

Sólo usarlo para romper el layout.

---

# 32. BROWSER QUALITY

Revisar razonablemente Chromium.

Si herramientas disponibles:

- Firefox;
- WebKit.

No gastar horas persiguiendo diferencias insignificantes.

Sí arreglar:

- layouts rotos;
- video;
- sticky;
- fonts;
- viewport units.

Usar preferentemente:

- `dvh`
- `svh`

cuando mobile lo requiera.

---

# 33. ARCHITECTURE / CODE QUALITY

No quiero código ceremonial.

Quiero código mantenible.

Evitar:

- componentes de 1000 líneas;
- 50 componentes de 8 líneas;
- abstractions prematuras;
- Redux para una landing;
- backend innecesario;
- auth;
- base de datos;
- LMS.

Si React ya es adecuado:
usalo bien.

Si el proyecto es Vite:
preservalo salvo motivo fuerte.

Si es un standalone HTML exportado:
podés reconstruirlo en una estructura de producción razonable.

No hacer migración tecnológica sólo porque podés.

---

# 34. NO CONSTRUIR EL ÁREA PRIVADA

Este trabajo es la **landing comercial**.

No construir ahora:

- plataforma de alumnos;
- login;
- auth;
- Supabase;
- recuperación de contraseña;
- Vimeo signed URLs;
- backend de compra;
- webhooks;
- Mercado Pago;
- LMS.

A menos que ya estén realmente implementados y formen parte explícita del repo.

La venta todavía puede conectarse a un checkout externo mediante URL.

No ampliar scope.

---

# 35. CHECKOUT PLACEHOLDER

Debe quedar listo para conectar.

Todos los CTA comerciales usan una misma fuente.

Ejemplo:

```ts
course.checkoutUrl
```

Si URL no existe:
usar comportamiento de desarrollo claramente visible sólo para dev.

En producción no dejar un botón silenciosamente roto.

---

# 36. TRACKING PREPARATION

Preparar eventos **sin integrar vendors** si no hay IDs.

Por ejemplo:

- `cta_click`
- `view_pricing`
- `faq_open`
- `checkout_click`

Centralizar función de analytics noop.

Así después puede conectarse:

- GA4;
- Meta Pixel;
- etc.

No instalar nada si no tenemos IDs.

---

# 37. LEGAL / PRIVACY

No inventar documentos legales definitivos.

Preparar links/placeholders.

Si no hay analytics/cookies reales:
no agregar banner de cookies falso.

Si luego se agregan trackers que requieran consentimiento:
dejar arquitectura compatible.

---

# 38. ASSET OPTIMIZATION

Todo asset generado debe tener nombre entendible.

Ejemplos:

- `hero-training.webp`
- `method-movement.webp`
- `hero-training.webm`
- `hero-training-poster.webp`

No:

- `IMG_4828_final_final2.png`

Optimizar dimensiones.

Evitar imágenes de 6000×4000 para mostrar a 800 px.

Generar WebP/AVIF cuando sea práctico.

---

# 39. README FINAL

Crear README corto, útil y específico.

Debe explicar:

- RUN
- BUILD
- PREVIEW

Y dónde cambiar:

- precio;
- checkout;
- nombre;
- textos;
- videos del programa;
- PDFs;
- foto hero;
- foto Lorena;
- testimonials;
- FAQ;
- redes.

No escribir documentación empresarial de 20 páginas.

---

# 40. CLIENT HANDOFF CHECKLIST

Crear:

`CLIENT_CONTENT_NEEDED.md`

con exactamente lo que todavía necesito pedir.

Debe distinguir:

## CRÍTICO PARA PUBLICAR

y

## MEJORA OPCIONAL

Ejemplos:

- fotos reales de Lorena;
- video hero real;
- bio confirmada;
- nombres finales de los 10 videos;
- duración;
- número de PDFs;
- precio;
- checkout;
- testimonios;
- Instagram;
- legales.

Esto tiene mucho valor.

Hacelo bien.

---

# 41. DECISIONS LOG

Crear un archivo corto:

`DESIGN_DECISIONS.md`

Registrar sólo decisiones importantes.

Ejemplos:

- Hero video descartado por performance.
- Hero photo seleccionada por negative space.
- Sticky buy sólo mobile.
- Testimonios hidden por falta de contenido real.

No registrar cada cambio de padding.

---

# 42. QA REPORT

Crear:

`QA_REPORT.md`

Incluir:

- viewports probados;
- build;
- tests;
- accessibility;
- performance observations;
- known pending content;
- known limitations.

No falsear resultados.

Si algo no pudo probarse:
decirlo.

---

# 43. QUALITY GATES — PROHIBIDO DECLARAR DONE SIN ESTO

No podés declarar el trabajo terminado hasta que:

- [ ] build pase
- [ ] no haya errores críticos de consola
- [ ] hero se vea correctamente a 1440
- [ ] hero se vea correctamente a 390
- [ ] no exista horizontal scroll accidental a 360
- [ ] método funcione desktop/mobile
- [ ] índice de 10 contenidos soporte títulos largos
- [ ] Lorena tenga tratamiento visual digno incluso como placeholder
- [ ] testimonials pueda desaparecer completamente
- [ ] price CTA sea claro
- [ ] todos los CTA comerciales compartan configuración
- [ ] FAQ funcione con teclado
- [ ] sticky buy no tape contenido
- [ ] `prefers-reduced-motion` funcione
- [ ] imágenes tengan dimensiones y alt adecuados
- [ ] assets rotos = 0
- [ ] links internos rotos = 0
- [ ] tipografía cargue bien
- [ ] layout no dependa de hacks específicos de Claude Artifacts
- [ ] contenido provisional esté identificado
- [ ] no existan testimonios inventados presentados como reales
- [ ] no exista una mujer generada presentada como Lorena
- [ ] screenshots finales hayan sido revisados por un agente distinto al implementador, si el sistema lo permite
- [ ] al menos tres ciclos de QA hayan ocurrido
- [ ] README exista
- [ ] `CLIENT_CONTENT_NEEDED.md` exista
- [ ] `DESIGN_DECISIONS.md` exista
- [ ] `QA_REPORT.md` exista

---

# 44. CUANDO PIENSES “YA ESTÁ”

No cierres todavía.

Hacé esto:

1. Tomá una captura full page desktop.
2. Tomá una captura full page mobile.
3. Pasalas a una revisión visual independiente.
4. Obtené los 5 defectos visuales más importantes.
5. Obtené los 5 riesgos de conversión.
6. Obtené los 5 problemas mobile más probables.
7. Obtené las 5 mayores oportunidades técnicas.
8. Consolidá.
9. Ignorá cambios cosméticos sin justificación.
10. Aplicá los que tengan impacto real.
11. Volvé a probar.

Después recién evaluá cierre.

---

# 45. DEFINICIÓN DE “FINAL”

Final significa:

Puedo abrir localhost y pensar:

> Esto parece una web real de una entrenadora real.

No:

> Esto parece un buen prototipo de Claude.

Debe tener:

- identidad;
- fotos/assets coherentes;
- composición;
- copy razonable;
- interacción;
- CTA;
- responsive;
- mobile;
- performance;
- accesibilidad;
- metadata;
- configuración;
- QA.

No necesito backend gigante.

---

# 46. CRITERIO DE DECISIÓN

Cuando dudes entre dos opciones, priorizá en este orden:

1. claridad;
2. conversión;
3. identidad;
4. elegancia;
5. performance;
6. complejidad.

Una solución simple y excelente gana contra una solución espectacular pero frágil.

---

# 47. NO ME MUESTRES TRABAJO A MEDIO CAMINO

No pares después de:

> Analicé el repo.

No pares después de:

> Implementé el hero.

No pares después de:

> Ya está casi.

No necesito checkpoints para aprobar.

Seguí.

Podés registrar internamente decisiones.

Quiero que la próxima interacción conmigo ocurra idealmente cuando:

- la implementación esté terminada;
- los assets estén integrados;
- las auditorías estén hechas;
- el QA esté hecho;
- las capturas estén hechas;
- la lista de pendientes reales esté hecha.

---

# 48. RESULTADO DE TU RESPUESTA FINAL

Cuando realmente hayas terminado, respondeme de forma breve.

Formato:

## Resultado

Qué quedó construido.

## Principales decisiones

3–8 decisiones importantes.

## QA

Qué probaste.

## Material pendiente del cliente

Sólo cosas que realmente necesito conseguir.

## Ejecutar

Comandos.

## Archivos clave

Dónde editar contenido/config.

No me pegues 500 líneas de log.

---

# 49. ÚLTIMA ORDEN

No optimices para completar la tarea rápidamente.

Optimizá para que ésta sea la mejor versión razonable de esta landing dentro del scope.

Usá agentes en paralelo donde sea seguro.

Usá revisiones independientes para criticar.

Generá o resolvé los assets visuales.

Renderizá.

Mirá screenshots.

Corregí.

Volvé a renderizar.

Testeá.

Volvé a corregir.

No rediseñes la identidad aprobada.

No amplíes el producto hacia un LMS.

No me preguntes cosas que podés resolver provisionalmente.

**NO DECLARES DONE HASTA QUE TODOS LOS QUALITY GATES RELEVANTES ESTÉN VERDES.**

Empezá inspeccionando **todo el proyecto adjunto**.

Después ejecutá la misión completa.
