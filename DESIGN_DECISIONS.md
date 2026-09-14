# Decisiones de diseño e implementación

## Dirección adoptada

- Se tomó `design_handoff_landing_lorena/design/Landing Lorena.dc.html` como fuente estructural y `referencias/propuesta-visual-aprobada.jpg` como referencia de clima, no como una página para copiar literalmente.
- Se respetaron la paleta carbón/crema/oliva/latón, Barlow Condensed para títulos y Jost para lectura, reglas finas, bordes rectos y composición editorial.
- Se conservó el orden pedido: navegación, hero, método, programa, Lorena, compra, FAQ, CTA final y footer. Testimonios se renderizan sólo cuando hay datos y consentimiento.
- El programa sigue siendo un índice de 10 filas; no se convirtió en tarjetas ni se redujo la cantidad prometida.

## Decisiones de conversión

- El hero conserva exactamente “TÉCNICA ANTES QUE INTENSIDAD” y “APRENDÉ A ENTRENAR BIEN, NO A ENTRENAR MÁS.” En mobile usa tres cortes controlados para evitar palabras huérfanas.
- La primera pantalla muestra propuesta, CTA, programa y cuatro datos verificables. No muestra un precio inexistente.
- Precio y checkout tienen una sola fuente de configuración. Sin URL real, la ficha abre un aviso accesible y explícito en lugar de simular el pago.
- En estado borrador, la acción final es un botón delineado “Compra aún no habilitada”; al completar precio y checkout vuelve a ser un enlace de compra activo.
- La barra móvil aparece después del hero y se retira al entrar en la zona de compra o el cierre, para no tapar decisiones importantes.
- Mientras la barra móvil está visible, el CTA duplicado del header se oculta y el foco conserva margen inferior.
- El método usa un título diferente al hero para evitar repetición: “Tres principios para ordenar tu entrenamiento.”
- El cierre usa una invitación concreta —“Tu próximo entrenamiento empieza acá.”— en vez de atribuir resultados o ahorro de tiempo no validados.

## Imágenes

- Se generó una familia editorial coherente para hero, método y cierre. Son imágenes de campaña transitorias y no representan a Lorena.
- La imagen de la sección Lorena es deliberadamente un estudio vacío con rótulo discreto de estado. Nunca se presenta una persona sintética como la instructora.
- Se evaluó video para el hero y se descartó en esta entrega: no había material real autorizado y una animación sintética empeoraba credibilidad, peso y estabilidad visual. La fotografía responsive es más fiel y más rápida.
- Las imágenes se exportaron en WebP con variantes de escritorio/móvil. El hero carga con prioridad; el resto, de forma diferida.

## Arquitectura

- Se reimplementó como Astro estático, sin `support.js`, `image-slot.js` ni el runtime React/Claude del prototipo.
- Las fuentes se sirven desde el proyecto. No hay dependencias de Google Fonts ni solicitudes a servicios de terceros durante la carga.
- FAQ, diálogo, navegación y barra móvil funcionan con JavaScript progresivo; el contenido principal queda visible si el script falla.
- Los eventos `cta_click`, `checkout_click`, `faq_open` y `view_pricing` están preparados como eventos locales y `dataLayer` opcional, sin conectar un proveedor ni crear cookies.

## Desviaciones deliberadas

- No se publican testimonios, credenciales, precio, cuotas, acceso “inmediato”, duración total, equipamiento ni política de devolución hasta recibir datos reales.
- Los enlaces de contacto y legales no aparecen en el footer hasta tener destinos reales; sus faltantes quedan en el checklist del cliente.
- No se añadieron secciones del moodboard que no forman parte del handoff estructural.
- Los placeholders críticos son explícitos y están concentrados en programa, ficha de compra y sección Lorena; el detalle completo vive en `CLIENT_CONTENT_NEEDED.md`.
