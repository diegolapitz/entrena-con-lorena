# Entrená con Lorena

Landing estática de venta construida con Astro a partir del handoff visual aprobado. No depende de React ni conserva el runtime del prototipo.

## Ejecutar

Requiere Node.js `>=22.12.0` y pnpm.

```bash
pnpm install
pnpm dev
```

Abrir `http://localhost:4321`.

## Validar y compilar

```bash
pnpm build
pnpm test
pnpm preview
```

La salida de producción queda en `dist/`.

## Completar contenido comercial

Todo el contenido, precio, checkout, enlaces y flags viven en `src/config/site.ts`. La compra sólo se habilita cuando existen **precio y checkout**; mientras falta alguno, la ficha muestra un aviso honesto y no simula un pago.

- Nombre, SEO y dominio: `brandName`, `instructorName`, `siteUrl` y `seo`. El dominio también puede inyectarse como `PUBLIC_SITE_URL` al compilar.
- Precio, checkout, acceso, videos y PDFs: `course`. Reemplazar `lessons` por los 10 títulos/duraciones reales y cargar cada descargable en `course.downloadables`.
- Textos: bloques `hero`, `method`, `instructor`, `purchase` y `finalCta`.
- Hero, Lorena y demás fotos: bloque `images`.
- Testimonios: `testimonials.items`; activar `testimonials.show` sólo con consentimiento.
- Preguntas: `faq`.
- Redes y legales: `socialLinks` y `legalLinks`.

Las imágenes están en `public/assets/images/`. El retrato real de Lorena puede reemplazar los dos archivos `instructor-placeholder-*` manteniendo sus nombres, o actualizarse desde la misma configuración.

Los PDFs finales pueden guardarse en `public/assets/downloads/` y vincularse desde `course.downloadables`.

Antes de publicar, revisar `CLIENT_CONTENT_NEEDED.md`. Las decisiones de implementación están documentadas en `DESIGN_DECISIONS.md` y la evidencia de pruebas en `QA_REPORT.md`.

## Estructura clave

- `src/pages/index.astro`: composición de la página.
- `src/components/`: secciones independientes.
- `src/config/site.ts`: fuente única de contenido y configuración comercial.
- `src/styles/`: sistema visual y responsive.
- `src/scripts/site.ts`: FAQ, navegación, sticky de compra y eventos analíticos.
- `tests/landing.spec.ts`: pruebas de navegación, compra, FAQ, imágenes y responsive.
- `qa/screenshots/`: baseline, ciclos de revisión y capturas finales.
