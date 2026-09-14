# QA report — Entrená con Lorena

Fecha: 14 de septiembre de 2026

## Estado

La implementación está lista como demo premium y artefacto técnico. El build, las interacciones y el responsive pasan. **No está lista para publicación comercial** hasta completar los datos enumerados en `CLIENT_CONTENT_NEEDED.md`, especialmente precio y checkout.

## Viewports probados

Capturas baseline y finales:

- 1920×1080
- 1440×1000
- 1280×800
- 768×1024
- 430×932
- 390×844
- 375×812
- 360×800

Pruebas adicionales:

- 1440×540: CTA del hero visible; borde inferior del CTA en 480 px.
- 667×375 horizontal: CTA del hero visible; borde inferior en 323 px y hero en 375 px.
- 320×800: reflow sin desplazamiento horizontal.
- Equivalente de layout a zoom 200% y estrés de contenido largo.

Las capturas base se tomaron desde la compilación de producción con Browser/IAB sobre Chromium y override nativo de viewport. Están en `qa/screenshots/final/`; hay capturas directas de hero, método, programa, Lorena, compra y cierre en `qa/screenshots/final/sections/`. La actualización de video y navegación del 14/09 se verificó con Chrome mediante Playwright porque Browser/IAB no estaba disponible en esa sesión.

## Build y tests

- `pnpm build`: **PASS** — Astro check con 0 errores, 0 warnings y 0 hints; 1 ruta estática generada.
- `pnpm test`: **PASS** — 21 pruebas aprobadas y 1 skip esperado porque el caso de sticky es exclusivo de mobile.
- `pnpm audit --prod --audit-level high`: **PASS** — sin vulnerabilidades conocidas.
- Artefacto limpio: 7.037.575 bytes totales; 30.293 bytes de CSS; 4.464 bytes de JavaScript; 14 fuentes latinas por 233.104 bytes; 11 imágenes WebP por 548.172 bytes y dos videos MP4 por 6.203.831 bytes.

La suite valida carga y estado 200, consola, estructura, CTA, estado de compra pendiente, anclas, FAQ, sticky, ausencia de testimonios, imágenes responsive, reproducción/pausa del video, fallback por movimiento reducido y ahorro de datos, navegación flotante, enlaces, overflow, 320 px, 360 px, 667×375, contenido largo/corto, precio largo y crops portrait/landscape.

## Browser QA manual

En producción:

- título y H1 correctos;
- 10 filas de programa;
- 0 testimonios renderizados;
- 0 IDs duplicados;
- 0 imágenes sin atributo `alt`;
- 0 botones sin nombre;
- 0 enlaces vacíos;
- 0 overflow horizontal en 390 px;
- sin toolbar ni overlay de desarrollo;
- CTA de hero lleva a compra;
- la acción pendiente es un `button`, abre un diálogo honesto, enfoca “Entendido”, cierra con Escape y devuelve el foco;
- FAQ alterna `aria-expanded` y `aria-hidden` correctamente;
- sticky mobile aparece después del hero, mide 63 px, deja de ser `inert` sólo cuando está visible y se oculta cerca de compra; el CTA duplicado del header desaparece durante ese tramo.
- el video del hero reproduce realmente, usa el archivo responsive correspondiente, conserva la fotografía debajo y responde al control pausar/reanudar;
- la navegación pasa a un rail flotante de 1.152 px en viewport 1440 y a 378 px en viewport 390; cuando aparece el sticky mobile se contrae a una insignia de marca de 118 px.

## Accessibility

- Landmark `main`, navegación, regiones rotuladas y un único H1.
- Skip link con destino enfocable.
- Foco visible; en superficies claras usa un tono con contraste superior a 3:1.
- Controles táctiles de al menos 44 px.
- FAQ con botones reales, relación control/panel y fallback visible sin JavaScript.
- Diálogo nativo con retorno de foco.
- Sticky oculto marcado `inert`; margen de scroll inferior mientras está activo.
- `prefers-reduced-motion` desactiva animaciones y smooth scroll.
- El video no se descarga con movimiento reducido, ahorro de datos, `prefers-reduced-data` o conexión 2G; el control de movimiento tiene nombre y estado accesibles.
- Imágenes de campaña decorativas usan `alt=""`; la imagen de método sí tiene texto alternativo descriptivo.
- Reflow verificado a 320 px sin scroll horizontal.

No se ejecutó un lector de pantalla real ni Safari/iOS físico. Firefox y WebKit no estaban instalados en el entorno; se probó Chrome/Chromium.

## Performance

- Salida estática Astro, sin runtime React del prototipo.
- Fuentes autocontenidas y limitadas al subset latino.
- Hero WebP responsive con carga prioritaria; imágenes posteriores lazy y decodificación asíncrona.
- Video MP4 progresivo: 5.113.779 bytes en escritorio y 1.090.052 bytes en mobile. Usa `preload="none"`, se solicita después del evento `load` y nunca elimina el póster de respaldo.
- Sticky actualizado por eventos pasivos y un `requestAnimationFrame` sólo cuando cambia el scroll, sin loop continuo.
- Build limpia `dist/` antes de generar para no conservar assets obsoletos.

No se ejecutó Lighthouse con red simulada ni una medición de Core Web Vitals en hosting real.

## Tres ciclos de QA

1. **Visual y marca:** se eliminaron toolbar/runtime de prototipo, se fijó el H1 móvil en tres líneas, se afinó el scrim y encuadre, se redujo el placeholder de Lorena y se resolvió el índice mobile.
2. **UX/CRO/mobile:** se redujo copy repetitivo, se evitó una promesa de dispositivo no validada, se preparó retrato mobile 4:5, se probó precio/títulos largos, se mejoró microtipografía y se controló la competencia entre CTA.
3. **Release hardening:** build/check/tests/audit, limpieza del artefacto, fuentes latinas, readiness conjunto de precio+checkout, skip link, metadatos dependientes de dominio y revisión manual de producción.

4. **Video + navegación flotante:** clip local con licencia registrada, carga condicionada, control de pausa, rail oliva con progreso, contracción mobile, screenshots desktop/mobile y pruebas de reproducción/fallback.

Una auditoría final independiente de screenshots listó 5 defectos visuales, 5 riesgos CRO, 5 riesgos mobile y 5 oportunidades técnicas. Se aplicaron los fixes materiales disponibles: estado de compra delineado y explícito, footer sin notas internas, sticky más compacto, CTA de header oculto durante el sticky, encuadre/scrim mobile, compra más compacta y evento FAQ sin el símbolo visual. Los restantes dependen del cliente.

## Fidelity ledger

- **Copy nuclear:** claim y H1 coinciden exactamente con el handoff aprobado.
- **Orden:** navegación → hero → método → programa → Lorena → compra → FAQ → cierre → footer.
- **Sistema visual:** carbón, crema, oliva y latón con reglas rectas en el contenido; únicamente los controles flotantes usan radios, transparencia y sombra para separarse del fondo.
- **Tipografía:** Barlow Condensed para display/UI y Jost para lectura, servidas localmente.
- **Programa:** 10 filas editoriales; no cards y sin reducir la promesa de 10 videos.
- **Media:** fotografía nocturna y clip monocromo con contraste direccional y espacio negativo coherentes con la referencia; ninguna persona sintética o de stock se presenta como Lorena.
- **Responsive:** H1 controlado, facts 2×2, índice sin duración pendiente en mobile, retrato real preparado a 4:5 y sticky sólo bajo 860 px.

Desviaciones deliberadas: video de stock demostrativo en lugar de material real de Lorena; estudio vacío en lugar de retrato inventado; testimonios ocultos; precio/programa/acceso como estados pendientes; sin secciones extra del moodboard. El copy no bloqueado se ajustó para eliminar repeticiones y afirmaciones no validadas.

## Contenido y limitaciones pendientes

Ver `CLIENT_CONTENT_NEEDED.md`. Además:

- sin dominio, se omiten canonical, `og:url`, `og:image` y `twitter:image` para no emitir URLs relativas inválidas;
- headers CSP/HSTS, protección de frames y política de referrer dependen del hosting elegido;
- no se probó un checkout externo porque no existe URL real;
- la credibilidad final seguirá limitada hasta incorporar foto y bio autorizadas de Lorena y el programa real.
