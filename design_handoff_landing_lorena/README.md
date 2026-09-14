# Handoff — Landing "Entrená con Lorena"

Curso online de entrenamiento. Landing de **venta** (no institucional): el único objetivo es la compra del curso.
Tráfico esperado: Instagram (caliente) y tráfico pago (frío).

---

## 1. Qué hay en este paquete

```
design_handoff_landing_lorena/
├─ README.md                                   ← este documento (spec completa)
├─ design/
│  ├─ Landing Lorena.dc.html                   ← DISEÑO APROBADO (fuente de verdad)
│  ├─ Direcciones Visuales.dc.html             ← exploración A/B previa (contexto, no implementar)
│  ├─ image-slot.js                            ← placeholder de imagen usado en el prototipo (NO va a producción)
│  └─ support.js                               ← runtime del prototipo (NO va a producción)
├─ preview/
│  └─ Landing Lorena (standalone).html         ← abrir en el navegador, funciona offline
└─ referencias/
   ├─ propuesta-visual-aprobada.jpg            ← captura de la estética que la clienta aprobó
   └─ Propuesta_Entrena_con_Lorena.pdf         ← propuesta comercial (alcance, opciones 1 y 2)
```

### Sobre los archivos de diseño
Los HTML de este paquete son **referencias de diseño**: prototipos que muestran aspecto y comportamiento
esperados, **no código de producción para copiar y pegar**. La tarea es **recrear este diseño en el stack
del proyecto** con sus patrones habituales. Si todavía no hay stack, la recomendación para esta pieza es
**Astro o Next.js estático + CSS propio** (no hace falta framework de UI: la página es una sola ruta).

`support.js` e `image-slot.js` son andamiaje del entorno de prototipado — reemplazar por markup normal
(`<img>`, `<video>`, `<picture>`) en la implementación real.

### Fidelidad
**Alta (hifi).** Colores, tipografías, escalas, espaciados, estados e interacciones son definitivos.
Recrear con precisión. Lo único provisional es el **contenido** (ver §9).

---

## 2. Concepto y sistema visual

Dirección aprobada: **nocturno editorial**. Negro dominante tratado como campaña de marca, no como
plantilla fitness. La fotografía manda; la tipografía condensada funciona como titular impreso; los
recursos son reglas de 1 px y numeración, nunca tarjetas con sombra ni pills.

Reglas del sistema:
- Máximo dos fondos por página además del negro: **crema** (respiración) y **oliva** (un solo bloque).
- Dorado **sólo** en lo accionable (botones, numeración, subrayado de enlaces). Nunca en fondos.
- Nada rebota, gira ni escala con bounce. Todo son fundidos y desplazamientos de 12–20 px.
- Sin urgencia artificial, sin countdowns, sin badges de descuento.

---

## 3. Design tokens

### Color
| Token | Hex | Uso |
|---|---|---|
| `ink` | `#0E0F0D` | fondo principal, texto sobre crema invertido |
| `charcoal` | `#1D1F1B` | bloques secundarios sobre negro (PDF / modalidad) |
| `olive` | `#4A503C` | fondo del bloque Lorena (único uso como fondo) |
| `olive-light` | `#9AA377` | segunda línea de titulares |
| `cream` | `#EDE6D6` | fondo de bloques claros y texto sobre negro |
| `gold` | `#C8A45C` | CTA, numeración y etiquetas sobre fondo oscuro |
| `gold-hover` | `#DCBB79` | hover de botones dorados |
| `gold-dark` | `#7A5F1E` | etiquetas y numeración sobre crema (contraste AA) |
| `gold-olive` | `#DFC58A` | numeración sobre oliva |
| `text-cream-muted` | `rgba(237,230,214,.84)` | párrafos sobre negro |
| `text-cream-faint` | `rgba(237,230,214,.5)` | metadatos sobre negro |
| `text-dark` | `#121311` | titulares sobre crema |
| `text-dark-muted` | `#44443C` | párrafos sobre crema |
| `placeholder-dark` | `#5C5C53` | marcas `[pendiente]` sobre crema |
| `rule-dark` | `rgba(237,230,214,.16–.18)` | reglas sobre negro |
| `rule-light` | `rgba(18,19,17,.2)` | reglas sobre crema |
| `row-hover` | `#16180F` | fondo de fila del índice en hover |

**Contraste:** todos los pares verificados ≥ 4.5:1 para texto pequeño. No aclarar los dorados sobre crema
(`#7A5F1E` es el límite) ni oscurecer los dorados sobre negro por debajo de `#C8A45C`.

### Tipografía
- **Display / UI:** `Barlow Condensed` 600/700, `text-transform: uppercase`, `letter-spacing: -0.015em` a `-0.025em`.
- **Texto:** `Jost` 300/400, `line-height: 1.6–1.65`.
- **Etiquetas:** Barlow Condensed 12–13 px, `letter-spacing: .3em`, uppercase.
- Google Fonts: `Barlow+Condensed:wght@400;500;600;700` y `Jost:wght@300;400;500`.

Escala fluida (todas con `clamp`, mobile → desktop):

| Rol | Tamaño |
|---|---|
| H1 hero | `clamp(46px, 7.4vw, 108px)` / `line-height:.9` |
| H2 sección | `clamp(38px, 5.4vw, 76px)` / `.96–.98` |
| H2 CTA final | `clamp(44px, 7vw, 104px)` / `.9` |
| Cita Lorena | `clamp(26px, 3.2vw, 44px)` / `1.05` |
| Título de fila del índice | `clamp(22px, 2.4vw, 30px)` |
| Nombre de principio | `clamp(26px, 2.6vw, 34px)` |
| Precio | `clamp(56px, 7.4vw, 104px)` / `.86` |
| Cuerpo | `16–19px` |
| Etiqueta / metadato | `12–14.5px` |

### Espaciado y layout
- Ancho máximo de contenido: **1400 px**; FAQ **1000 px**.
- Padding lateral global: `clamp(16px, 4vw, 48px)`.
- Padding vertical de sección: `clamp(64px, 11vh, 132px)`; Contenidos arriba `clamp(104px, 17vh, 210px)`
  (deja lugar al solape de la foto del Método).
- **Sin border-radius en ningún elemento.** Sin sombras salvo las del propio prototipo (ninguna en producción).
- Duraciones: 240 ms (hover), 320 ms (fila del índice), 380 ms (FAQ), 400–620 ms (reveal / nav).
  Easing: `cubic-bezier(.22,.7,.3,1)`.

---

## 4. Arquitectura de la página (orden exacto)

1. Nav fija
2. Hero
3. `01 El método` — bloque crema
4. `02 Qué recibís` — índice de contenidos, negro
5. `03 Quién enseña` — Lorena, oliva
6. Testimonios — crema *(sección reservada, se puede ocultar)*
7. `04 Comprar` — precio, crema
8. FAQ — negro
9. `05 Tu próximo paso` — CTA final con foto
10. Footer
11. Barra de compra fija (mobile / scroll)

No agregar secciones. La brevedad es una decisión de diseño validada.

---

## 5. Detalle por sección

### 5.1 Nav (fija, `z-index:60`)
- Transparente sobre el hero; al pasar el **70 % del alto de viewport** cambia a `rgba(14,15,13,.94)` con
  borde inferior `rgba(237,230,214,.16)`. Transición 400 ms.
- Izquierda: `LORENA`, Barlow Condensed 600, `letter-spacing:.3em`.
- Derecha: `MÉTODO` · `CONTENIDOS` · `LORENA` (anclas; **ocultos por debajo de 860 px**) + botón `COMPRAR` dorado.
- El botón de compra está siempre visible, en todos los anchos.

### 5.2 Hero
- Alto: `min(94vh, 900px)`, contenido alineado abajo-izquierda.
- Fondo: **foto o loop de video a sangre** con zoom continuo muy lento (28 s, escala 1.06 → 1.12) y parallax de ±26 px.
- Overlay: `linear-gradient(97deg, rgba(14,15,13,.95) 0%, rgba(14,15,13,.8) 40%, rgba(14,15,13,.12) 80%, rgba(14,15,13,.5) 100%)`.
- Columna de texto: `max-width: min(760px, 92vw)` — **no usar `ch`**, la unidad se resuelve contra la fuente del
  contenedor y colapsa la columna.
- Orden: regla dorada 44×1 px + claim `TÉCNICA ANTES QUE INTENSIDAD` → H1 → párrafo → CTA dorado + enlace
  "Ver qué incluye" → línea de precio.
- H1 (variante principal): **"Aprendé a entrenar bien, / no a entrenar más"**, segunda línea en `olive-light`.
  Variante alternativa disponible en el prototipo: "Técnica antes que intensidad" como H1.
- Barra inferior a sangre, 4 columnas divididas por reglas: `10 VIDEOS` · `2 PDF` · `A TU RITMO` · `DESDE CASA*`.
  Grid `repeat(auto-fit, minmax(140px, 1fr))` → 2×2 en mobile.
- **Requisito de conversión:** el CTA y el precio deben quedar dentro del primer viewport incluso a 540 px de alto.

### 5.3 `01 El método` (crema)
- Grid de 2 columnas `repeat(auto-fit, minmax(min(100%,330px), 1fr))`, `gap: clamp(24px,5vw,90px)`, `align-items:start`.
- **Columna izquierda `position: sticky; top: clamp(76px,10vh,104px)`**: marcador `01 EL MÉTODO` + H2
  "No necesitás entrenar más. Necesitás entrenar mejor." (`max-width:13ch`).
  ⚠️ Ningún ancestro puede tener `overflow-x: hidden` o el sticky se anula.
- Columna derecha: 3 filas separadas por reglas — `01 TÉCNICA`, `02 CONTROL`, `03 CONSTANCIA`, cada una con
  numeral (`#7A5F1E`), nombre condensado y descripción. Debajo, enlace `VER LOS CONTENIDOS` subrayado en dorado.
- Cierre: **banda de foto a sangre** de `clamp(240px,42vh,420px)` que **monta sobre la sección negra siguiente**
  (`margin-bottom: calc(-1 * clamp(52px,9vh,120px))`, `z-index:2`, márgenes laterales negativos iguales al padding).
  Es el momento visual de la página; conservarlo.

### 5.4 `02 Qué recibís` — índice (negro)
- Encabezado: marcador + H2 "El curso, video por video" a la izquierda; `10 VIDEOS · 2 PDF` a la derecha.
- **10 filas** separadas por reglas superiores: numeral dorado en columna fija `clamp(38px,4vw,56px)`,
  título condensado uppercase, duración a la derecha con `font-variant-numeric: tabular-nums`.
- Hover de fila: texto → `#C8A45C`, fondo → `#16180F` (320 ms). El padding lateral de la fila se compensa
  con margen negativo para que el fondo del hover sangre más allá del texto.
- Debajo: dos bloques `#1D1F1B` separados por una regla de 1 px — `MATERIAL DESCARGABLE` (2 PDF) y
  `CÓMO SE VE` (modalidad de acceso).
- **No convertir en grilla de cards.** El formato índice es una decisión validada.

### 5.5 `03 Quién enseña` — Lorena (oliva)
- Grid a **ancho completo de pantalla** (sin contenedor de 1400): foto a sangre `min-height: clamp(420px,74vh,760px)`
  + columna de texto centrada verticalmente con padding `clamp(56px,11vh,130px) clamp(16px,5vw,90px)`.
- Marcador `03 QUIÉN ENSEÑA` → H2 "Entrenar es aprender a confiar en tu cuerpo" → bio → cita grande en crema
  firmada "— Lorena" (sin borde lateral, sin comillas decorativas).

### 5.6 Testimonios (crema) — sección reservada
- Hoy es un recuadro punteado con el espacio para 3 testimonios reales.
- **Debe poder ocultarse con un flag** (`showTestimonials`). Si al lanzar no hay testimonios con nombre y
  consentimiento, la sección se retira completa y la página sigue funcionando.
- Nunca completar con testimonios inventados.

### 5.7 `04 Comprar` — precio (crema)
- Grid de 2 columnas: texto a la izquierda ("Empezá cuando quieras" + condiciones), ficha de compra a la derecha.
- Ficha: fondo `ink`, **filete superior dorado de 2 px**, etiqueta `CURSO COMPLETO`, precio en escala display,
  "pago único · sin suscripción", 3 ítems separados por guiones dorados, botón `COMPRAR AHORA` a todo el ancho,
  y la leyenda "Pago con Mercado Pago".
- El precio aparece **tres veces** en el recorrido (hero, ficha, cierre) y en la barra fija. No sumar más.

### 5.8 FAQ (negro)
- Acordeón de 4 preguntas, ancho 1000 px, reglas de 1 px.
- Botón de pregunta en Barlow Condensed `clamp(19px,2vw,24px)`; indicador `+` dorado que **rota 45°** al abrir.
- Animación de altura 380 ms. Implementar con `<details>`/`<summary>` o con botón + `aria-expanded` y
  `region` asociada — debe abrirse con teclado.

### 5.9 `05 Tu próximo paso` — CTA final
- Foto a sangre con overlay lateral `linear-gradient(96deg, rgba(14,15,13,.93), rgba(14,15,13,.8) 46%, rgba(14,15,13,.35))`.
- Contenido **alineado a la izquierda** (no centrado): marcador → "Menos horas. / Mejor técnica." → CTA dorado → precio.

### 5.10 Footer
Una línea: `ENTRENÁ CON LORENA` a la izquierda; Instagram · Contacto · Términos a la derecha.

### 5.11 Barra de compra fija (`z-index:70`)
- Aparece pasado el **90 % del alto de viewport** y **se oculta al llegar a los últimos 240 px** de la página
  (para no tapar el CTA final ni el footer). Entra con `translateY(110% → 0)`, 420 ms.
- Contenido: precio + "pago único" a la izquierda, botón `COMPRAR` a la derecha.
- `padding-bottom: max(16px, env(safe-area-inset-bottom))`.

---

## 6. Movimiento

| Efecto | Detalle |
|---|---|
| Zoom del hero | escala 1.06 → 1.12, 28 s, `ease-in-out`, infinito |
| Parallax | 4 fotos (hero ±26 px, resto ±34 px) según posición relativa al centro del viewport, vía `transform: translate3d` en rAF |
| Reveal | `opacity 0→1` + `translateY(16px→0)`, 620 ms, escalonado 40–60 ms dentro de un mismo grupo, una sola vez por elemento |
| Nav | cambio de fondo a 400 ms al 70 % del viewport |
| Barra de compra | slide 420 ms |
| FAQ | altura 380 ms + rotación del `+` 300 ms |
| Hover de fila | color + fondo 320 ms |

**Reglas no negociables**
1. `prefers-reduced-motion: reduce` desactiva **todas** las animaciones y transiciones.
2. **El contenido nunca puede depender de JS para ser visible.** En el prototipo el estado oculto sólo se aplica
   tras confirmar que el documento realmente está pintando, hay red de seguridad por timeout y re-sincronización
   en `visibilitychange`. En producción lo más simple es hacerlo con CSS (`animation-timeline` / `IntersectionObserver`
   que **añade** una clase de "visible" partiendo de contenido visible), nunca al revés.
3. En SSR/SSG el HTML debe renderizar completo y legible sin JS.

---

## 7. Accesibilidad

- Contraste verificado ≥ 4.5:1 en todo el texto pequeño (ver §3).
- `:focus-visible` con `outline: 2px solid #C8A45C; outline-offset: 3px` en enlaces y botones.
- Objetivos táctiles ≥ 44 px: botones dorados 44–50 px de alto, filas del índice ≥ 60 px.
- Acordeón operable con teclado y con estado anunciado.
- Cada `image-slot` del prototipo debe convertirse en `<img>`/`<video>` con `alt` real (decorativas: `alt=""`).
- El video del hero: `muted`, `playsinline`, `loop`, con póster; respetar reduced-motion mostrando sólo el póster.
- Idioma `es-AR`.

---

## 8. Implementación técnica (según propuesta comercial, ver PDF)

- **Opción 1 — Landing + venta y entrega automática:** checkout con **Mercado Pago**, entrega del curso por mail
  con enlace al material tras acreditarse el pago.
- **Opción 2 — Landing + área privada:** además, sección privada dentro del sitio con los 10 videos y los PDFs,
  acceso asociado al mail de compra, revocable ante anulación o devolución.

Notas para la implementación:
- Todos los CTA apuntan hoy al ancla `#comprar`; el botón final de la ficha debe apuntar al checkout real.
- Dominio y cuenta de Mercado Pago quedan a nombre de la clienta.
- SEO/Meta: título, descripción, OG image y favicon pendientes de definición.
- Medición: sin analítica configurada aún. Recomendado marcar eventos de clic en cada CTA identificando su
  posición (`hero`, `metodo`, `nav`, `ficha`, `barra_fija`, `cierre`) para saber cuál convierte.

---

## 9. Material que falta — pedir a la clienta

Nada de esto puede inventarse. Todo aparece marcado como `[pendiente]` / `[provisional]` en el diseño.

**Contenido**
1. Título definitivo y duración de **cada uno de los 10 videos**.
2. Los 10 videos (y dónde se alojan: Vimeo, Bunny, YouTube no listado…).
3. Los **2 PDF** y su título real.
4. **Precio** final y moneda; si hay más de una opción de pago, cuál.
5. Modalidad de entrega y **duración del acceso** (permanente o por tiempo).
6. Texto de los **3 principios** del método, con las palabras de Lorena.
7. **Bio de Lorena**: formación, trayectoria y por qué enseña así. Sin credenciales inventadas.
8. Una **cita textual** de Lorena para el bloque de autor.
9. Respuestas de las 4 FAQ: equipamiento necesario, duración de cada sesión, si sirve para quien nunca entrenó,
   cómo se recibe el curso.
10. Confirmar si el curso requiere **equipamiento** (el hero dice "DESDE CASA*", el asterisco depende de esto).
11. **Testimonios** reales con nombre y consentimiento — o confirmación de que la sección se retira.
12. Enlaces de footer: Instagram, contacto, términos y condiciones / política de reembolso.

**Fotografía y video** (todas las imágenes actuales son placeholders)
13. **Hero**: loop de video de ~6 s o foto apaisada — plano medio, luz lateral dura, fondo oscuro, mirada fuera de cámara.
14. **Banda del Método**: foto apaisada de ejecución técnica, encuadre recortado.
15. **Lorena**: retrato vertical a sangre, fondo oscuro, luz lateral.
16. **Cierre**: foto apaisada en movimiento, alto contraste.
17. Logo en vectorial (SVG) si existe; hoy la marca es puramente tipográfica.

Dirección de arte para la sesión de fotos: luz lateral dura sobre fondo oscuro, sombras cerradas, piel cálida,
cuerpo entero o detalle muy recortado. Gesto técnico en mitad del movimiento; sin sonrisa a cámara, sin
poses de gimnasio, sin equipamiento pesado.

---

## 10. Qué NO cambiar

- La arquitectura de 8 bloques y su orden.
- El formato índice de los contenidos (no convertirlo en cards).
- El claim "Técnica antes que intensidad" como firma de marca sobre el H1.
- El solape de la banda de foto del Método sobre la sección negra.
- El uso restringido del dorado y la ausencia total de border-radius.
- La cantidad de CTA: seis puntos de compra en todo el recorrido. Sumar más resta claridad.
