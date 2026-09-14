import { expect, test, type Page } from "@playwright/test";

async function openLanding(page: Page) {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  const response = await page.goto("/", { waitUntil: "networkidle" });
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1")).toHaveText(/Aprendé a entrenar bien,\s*no a entrenar más\./i);

  return errors;
}

test("carga sin errores críticos y conserva la estructura aprobada", async ({ page }) => {
  const errors = await openLanding(page);

  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("#contenidos .lesson")).toHaveCount(10);
  await expect(page.locator("[data-testimonials]")).toHaveCount(0);
  await expect(page.locator("astro-dev-toolbar")).toHaveCount(0);
  await expect(page.getByText("Contacto y legales pendientes")).toHaveCount(0);

  const brokenAnchors = await page.locator("a").evaluateAll((links) =>
    links
      .map((link) => link.getAttribute("href") ?? "")
      .filter((href) => href === "" || href === "#"),
  );
  expect(brokenAnchors).toEqual([]);

  expect(errors).toEqual([]);
});

test("los CTA llevan a la decisión de compra y el estado pendiente es honesto", async ({ page }) => {
  await openLanding(page);

  await page.locator("[data-hero] [data-commercial-cta]").click();
  await expect(page).toHaveURL(/#comprar$/);
  await expect(page.locator("#comprar")).toBeInViewport();

  const pendingPurchase = page.locator("#comprar [data-checkout-final]");
  await expect(pendingPurchase).toHaveText("Compra aún no habilitada");
  await expect(pendingPurchase).toHaveAttribute("type", "button");
  await pendingPurchase.click();
  const dialog = page.locator("[data-checkout-dialog]");
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText("Compra todavía no habilitada");
  await dialog.getByRole("button", { name: "Entendido" }).click();
  await expect(dialog).not.toBeVisible();
});

test("FAQ y navegación por anclas funcionan con estado accesible", async ({ page }) => {
  await openLanding(page);

  const question = page.getByRole("button", { name: "¿Qué incluye el curso?" });
  await expect(question).toHaveAttribute("aria-expanded", "false");
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#faq-panel-1")).toHaveAttribute("aria-hidden", "false");

  await page.getByRole("link", { name: "Ver el programa" }).first().click();
  await expect(page).toHaveURL(/#contenidos$/);
  await expect(page.locator("#contenidos")).toBeInViewport();
});

test("no hay desborde horizontal con contenido largo ni a escala equivalente a 200%", async ({ page }) => {
  await openLanding(page);

  await page.locator(".lesson__title").first().evaluate((element) => {
    element.textContent =
      "Movilidad, control postural y progresiones técnicas para entrenar con seguridad durante toda la semana";
  });
  await page.locator(".faq-answer p").first().evaluate((element) => {
    element.textContent =
      "Esta respuesta deliberadamente extensa comprueba que un texto validado de varias líneas conserve su lectura, su ritmo y el ancho de la página sin generar desplazamiento horizontal.";
  });
  await page.locator(".instructor__intro").evaluate((element) => {
    element.textContent =
      "Lorena creó esta propuesta después de años de práctica y enseñanza. Este texto de prueba agrega una trayectoria extensa, una explicación del método y una motivación personal para comprobar que el bloque soporte una biografía real mucho más larga.";
  });
  await page.locator(".lesson__title").nth(1).evaluate((element) => {
    element.textContent = "A";
  });

  const noOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
  );
  expect(noOverflow).toBe(true);

  await page.setViewportSize({ width: 360, height: 800 });
  await page.locator(".lesson__duration").first().evaluate((element) => {
    element.classList.remove("lesson__duration--pending");
    element.textContent = "120 minutos";
  });
  await page.locator(".sticky-buy__price strong").evaluate((element) => {
    element.textContent = "ARS 123.456,78 por persona";
  });
  const noOverflowWithCommercialCopy = await page.evaluate(
    () => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
  );
  expect(noOverflowWithCommercialCopy).toBe(true);

  await page.setViewportSize({ width: 720, height: 500 });
  const noOverflowAtEquivalentZoom = await page.evaluate(
    () => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
  );
  expect(noOverflowAtEquivalentZoom).toBe(true);

  await page.setViewportSize({ width: 320, height: 800 });
  const noOverflowAtReflowWidth = await page.evaluate(
    () => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
  );
  expect(noOverflowAtReflowWidth).toBe(true);
});

test("todas las imágenes resuelven y cargan", async ({ page }, testInfo) => {
  await openLanding(page);

  const images = page.locator("img");
  await expect(images).toHaveCount(4);
  for (let index = 0; index < await images.count(); index += 1) {
    const image = images.nth(index);
    await image.evaluate((item) => item.scrollIntoView({ block: "center", behavior: "instant" }));
    await expect
      .poll(() => image.evaluate((item) => {
        const imageElement = item as HTMLImageElement;
        return imageElement.complete && imageElement.naturalWidth > 0;
      }))
      .toBe(true);
  }
  const failures = await images.evaluateAll((items) =>
    items
      .filter((image) => {
        const imageElement = image as HTMLImageElement;
        return !imageElement.complete || imageElement.naturalWidth === 0;
      })
      .map((image) => image.getAttribute("src")),
  );
  expect(failures).toEqual([]);

  const media = await page.evaluate(() => {
    const [hero, method, instructor] = Array.from(document.images) as HTMLImageElement[];
    return {
      heroSrc: hero.currentSrc,
      heroRatio: hero.naturalWidth / hero.naturalHeight,
      methodRatio: method.naturalWidth / method.naturalHeight,
      instructorRatio: instructor.naturalWidth / instructor.naturalHeight,
      positions: [hero, method, instructor].map((image) => getComputedStyle(image).objectPosition),
    };
  });
  if (testInfo.project.name.includes("mobile")) {
    expect(media.heroSrc).toContain("hero-training-mobile");
    expect(media.heroRatio).toBeLessThan(1);
  } else {
    expect(media.heroSrc).not.toContain("hero-training-mobile");
    expect(media.heroRatio).toBeGreaterThan(1);
  }
  expect(media.methodRatio).toBeGreaterThan(2);
  expect(media.instructorRatio).toBeLessThan(1);
  expect(media.positions.every(Boolean)).toBe(true);
});

test("el video del hero reproduce, conserva el póster y puede pausarse", async ({ page }, testInfo) => {
  await openLanding(page);

  const media = page.locator("[data-hero-media]");
  const video = page.locator("[data-hero-video]");
  const toggle = page.locator("[data-hero-motion-toggle]");

  await expect(video).toHaveAttribute("autoplay", "");
  await expect(video).toHaveAttribute("muted", "");
  await expect(video).toHaveAttribute("loop", "");
  await expect(video).toHaveAttribute("playsinline", "");
  await expect(page.locator("[data-hero-poster] img")).toBeVisible();
  await expect(media).toHaveClass(/is-video-ready/);
  await expect(toggle).toBeVisible();

  const playing = await video.evaluate((element) => {
    const videoElement = element as HTMLVideoElement;
    return {
      currentSrc: videoElement.currentSrc,
      currentTime: videoElement.currentTime,
      paused: videoElement.paused,
      readyState: videoElement.readyState,
    };
  });
  expect(playing.currentSrc).toContain(
    testInfo.project.name.includes("mobile") ? "hero-training-mixkit-50972-mobile" : "hero-training-mixkit-50972.mp4",
  );
  expect(playing.currentTime).toBeGreaterThan(0);
  expect(playing.paused).toBe(false);
  expect(playing.readyState).toBeGreaterThanOrEqual(3);

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await expect(toggle).toHaveAttribute("aria-label", "Reanudar animación de fondo");
  const pausedAt = await video.evaluate((element) => (element as HTMLVideoElement).currentTime);
  await page.waitForTimeout(350);
  const stillAt = await video.evaluate((element) => (element as HTMLVideoElement).currentTime);
  expect(Math.abs(stillAt - pausedAt)).toBeLessThan(0.08);

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
  await expect
    .poll(() => video.evaluate((element) => (element as HTMLVideoElement).currentTime))
    .toBeGreaterThan(stillAt + 0.1);
});

test("el hero no descarga ni muestra video con movimiento reducido", async ({ page }) => {
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (request.resourceType() === "media") mediaRequests.push(request.url());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openLanding(page);

  await expect(page.locator("[data-hero-video]")).toHaveJSProperty("currentSrc", "");
  await expect(page.locator("[data-hero-motion-toggle]")).toBeHidden();
  await expect(page.locator("[data-hero-poster] img")).toBeVisible();
  expect(mediaRequests).toEqual([]);
});

test("el hero evita el video cuando el navegador pide ahorrar datos", async ({ page }) => {
  const mediaRequests: string[] = [];
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "connection", {
      configurable: true,
      value: { saveData: true, effectiveType: "4g" },
    });
  });
  page.on("request", (request) => {
    if (request.resourceType() === "media") mediaRequests.push(request.url());
  });
  await openLanding(page);

  await expect(page.locator("[data-hero-video]")).toHaveJSProperty("currentSrc", "");
  await expect(page.locator("[data-hero-poster] img")).toBeVisible();
  expect(mediaRequests).toEqual([]);
});

test("la navegación se convierte en un rail flotante al desplazarse", async ({ page }) => {
  await openLanding(page);

  const header = page.locator("[data-site-header]");
  await expect(header).not.toHaveClass(/is-solid/);
  await page.evaluate(() => window.scrollTo({ top: 96, behavior: "instant" }));
  await expect(header).toHaveClass(/is-solid/);

  const appearance = await header.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    const styles = getComputedStyle(element);
    return {
      width: rect.width,
      viewportWidth: window.innerWidth,
      top: rect.top,
      radius: Number.parseFloat(styles.borderRadius),
      backdrop: styles.backdropFilter,
      progress: Number.parseFloat(styles.getPropertyValue("--scroll-progress")),
    };
  });
  expect(appearance.width).toBeLessThan(appearance.viewportWidth);
  expect(appearance.top).toBeGreaterThan(0);
  expect(appearance.radius).toBeGreaterThan(0);
  expect(appearance.backdrop).not.toBe("none");
  expect(appearance.progress).toBeGreaterThan(0);
});

test("el hero conserva el CTA en el primer viewport móvil horizontal", async ({ page }) => {
  await page.setViewportSize({ width: 667, height: 375 });
  await openLanding(page);

  const state = await page.evaluate(() => {
    const cta = document.querySelector<HTMLElement>("[data-hero] .button");
    return {
      ctaBottom: cta?.getBoundingClientRect().bottom ?? Number.POSITIVE_INFINITY,
      viewportHeight: window.innerHeight,
      noOverflow: document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
    };
  });
  expect(state.ctaBottom).toBeLessThanOrEqual(state.viewportHeight + 1);
  expect(state.noOverflow).toBe(true);
});

test("la barra de compra móvil aparece después del hero y se retira al llegar al precio", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Comportamiento exclusivo de mobile");
  await openLanding(page);

  const sticky = page.locator("[data-sticky-buy]");
  const headerBuy = page.locator("[data-site-header] [data-commercial-cta]");
  await expect(sticky).not.toHaveClass(/is-visible/);

  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 1.25, behavior: "instant" }));
  await expect(sticky).toHaveClass(/is-visible/);
  await expect(sticky).not.toHaveAttribute("inert", "");
  await expect(headerBuy).toHaveCSS("visibility", "hidden");
  await expect.poll(() => page.locator("[data-site-header]").evaluate((element) => element.getBoundingClientRect().width)).toBeLessThan(180);

  await page.locator("#comprar").scrollIntoViewIfNeeded();
  await expect(sticky).not.toHaveClass(/is-visible/);
  await expect(sticky).toHaveAttribute("inert", "");
  await expect(headerBuy).toHaveCSS("visibility", "visible");
});
