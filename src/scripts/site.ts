type AnalyticsPayload = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
};

function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  const detail = { event, ...payload };
  window.dispatchEvent(new CustomEvent("lorena:analytics", { detail }));
  window.dataLayer?.push(detail);
}

function setupFaq() {
  const list = document.querySelector<HTMLElement>("[data-faq-list]");
  if (!list) return;

  list.dataset.enhanced = "true";
  const items = Array.from(list.querySelectorAll<HTMLElement>("[data-faq-item]"));

  for (const item of items) {
    const trigger = item.querySelector<HTMLButtonElement>("[data-faq-trigger]");
    const panel = item.querySelector<HTMLElement>("[data-faq-panel]");
    if (!trigger || !panel) continue;

    item.dataset.open = "false";
    trigger.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");

    trigger.addEventListener("click", () => {
      const open = item.dataset.open === "true";
      item.dataset.open = String(!open);
      trigger.setAttribute("aria-expanded", String(!open));
      panel.setAttribute("aria-hidden", String(open));
      if (!open) {
        const question = trigger.querySelector("span")?.textContent?.trim() ?? "";
        trackEvent("faq_open", { question });
      }
    });
  }
}

function setupCheckout() {
  const dialog = document.querySelector<HTMLDialogElement>("[data-checkout-dialog]");
  const closeButton = dialog?.querySelector<HTMLButtonElement>("[data-dialog-close]");

  document.addEventListener("click", (event) => {
    const target = event.target as Element | null;
    const cta = target?.closest<HTMLElement>("[data-commercial-cta]");
    if (!cta) return;

    const position = cta.dataset.ctaPosition ?? "unknown";
    const checkoutReady = cta.dataset.checkoutReady === "true";
    trackEvent("cta_click", { position, checkoutReady });

    if (checkoutReady) {
      trackEvent("checkout_click", { position });
      return;
    }

    if (cta.hasAttribute("data-checkout-final") && dialog) {
      event.preventDefault();
      dialog.showModal();
    }
  });

  closeButton?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function setupReveal() {
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
  );

  targets.forEach((target) => observer.observe(target));
}

function setupPricingView() {
  const pricing = document.querySelector<HTMLElement>("[data-pricing]");
  if (!pricing || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return;
      trackEvent("view_pricing");
      observer.disconnect();
    },
    { threshold: 0.3 },
  );
  observer.observe(pricing);
}

function setupHeroVideo() {
  const media = document.querySelector<HTMLElement>("[data-hero-media]");
  const video = document.querySelector<HTMLVideoElement>("[data-hero-video]");
  const toggle = document.querySelector<HTMLButtonElement>("[data-hero-motion-toggle]");
  const label = toggle?.querySelector<HTMLElement>("[data-hero-motion-label]");
  if (!media || !video || !toggle || !label) return;

  const reducedData = window.matchMedia("(prefers-reduced-data: reduce)");
  const mobileViewport = window.matchMedia("(max-width: 45rem)");
  const connection = (navigator as NavigatorWithConnection).connection;
  const constrainedConnection =
    connection?.saveData === true ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g";
  let sourceAssigned = false;
  let manuallyPaused = false;

  const motionAllowed = () => !reducedMotion.matches;
  const videoAllowed = () => motionAllowed() && !reducedData.matches && !constrainedConnection;

  const updateControl = () => {
    const paused = manuallyPaused || !motionAllowed();
    media.classList.toggle("is-paused", paused);
    toggle.hidden = !motionAllowed();
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.setAttribute(
      "aria-label",
      paused ? "Reanudar animación de fondo" : "Pausar animación de fondo",
    );
    label.textContent = paused ? "Reanudar fondo" : "Pausar fondo";
  };

  const playVideo = async () => {
    if (!sourceAssigned || manuallyPaused || !videoAllowed()) return;
    try {
      await video.play();
    } catch {
      media.classList.remove("is-video-ready");
    }
  };

  const loadVideo = () => {
    if (sourceAssigned || !videoAllowed()) return;
    const source = mobileViewport.matches ? video.dataset.srcMobile : video.dataset.srcDesktop;
    if (!source) return;

    sourceAssigned = true;
    video.src = source;
    video.load();
    void playVideo();
  };

  video.addEventListener("playing", () => {
    if (!manuallyPaused && motionAllowed()) media.classList.add("is-video-ready");
  });
  video.addEventListener("error", () => {
    media.classList.remove("is-video-ready");
    media.classList.add("is-video-failed");
  });

  toggle.addEventListener("click", () => {
    manuallyPaused = !manuallyPaused;
    if (manuallyPaused) video.pause();
    else void playVideo();
    updateControl();
    trackEvent("hero_motion_toggle", { paused: manuallyPaused });
  });

  const handleMotionPreference = () => {
    if (!motionAllowed()) {
      video.pause();
      media.classList.remove("is-video-ready");
    } else if (!manuallyPaused) {
      if (sourceAssigned) void playVideo();
      else loadVideo();
    }
    updateControl();
  };

  reducedMotion.addEventListener("change", handleMotionPreference);
  reducedData.addEventListener("change", () => {
    if (!reducedData.matches) loadVideo();
  });

  updateControl();
  const queueVideoLoad = () => window.requestAnimationFrame(loadVideo);
  if (document.readyState === "complete") queueVideoLoad();
  else window.addEventListener("load", queueVideoLoad, { once: true });
}

function setupScrollState() {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  const sticky = document.querySelector<HTMLElement>("[data-sticky-buy]");
  const pricing = document.querySelector<HTMLElement>("[data-pricing]");
  const finalCta = document.querySelector<HTMLElement>("[data-final-cta]");
  if (!header || !hero || !sticky || !pricing || !finalCta) return;

  let frame = 0;
  const update = () => {
    frame = 0;
    const y = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = document.documentElement.scrollHeight - viewportHeight;
    const scrollProgress = scrollableDistance > 0 ? Math.min(1, y / scrollableDistance) : 0;
    const headerSolid = y > 24;
    header.style.setProperty("--scroll-progress", String(scrollProgress));
    header.classList.toggle("is-solid", headerSolid);

    const heroPassed = y > hero.offsetHeight * 0.9;
    const pricingRect = pricing.getBoundingClientRect();
    const finalRect = finalCta.getBoundingClientRect();
    const overlapsDecisionArea =
      pricingRect.top < viewportHeight * 0.82 || finalRect.top < viewportHeight;
    const nearPageEnd = y + viewportHeight > document.documentElement.scrollHeight - 240;
    const shouldShow = heroPassed && !overlapsDecisionArea && !nearPageEnd;

    sticky.classList.toggle("is-visible", shouldShow);
    if (shouldShow) sticky.removeAttribute("inert");
    else sticky.setAttribute("inert", "");
  };

  const scheduleUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
}

setupFaq();
setupCheckout();
setupReveal();
setupPricingView();
setupHeroVideo();
setupScrollState();

reducedMotion.addEventListener("change", () => {
  document.querySelectorAll("[data-reveal]").forEach((element) => {
    element.classList.toggle("is-revealed", !reducedMotion.matches);
  });
});

export {};
