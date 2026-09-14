export type Lesson = {
  number: string;
  title: string;
  duration: string | null;
  provisional: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  consentConfirmed: boolean;
};

export type Downloadable = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  provisional?: boolean;
};

export const siteConfig = {
  locale: "es-AR",
  brandName: "Entrená con Lorena",
  shortBrandName: "Lorena",
  instructorName: "Lorena",
  siteUrl: "",
  seo: {
    title: "Entrená con Lorena | Curso online de entrenamiento",
    description:
      "Un curso digital de 10 videos para entrenar con técnica, control y constancia, a tu propio ritmo.",
    ogImage: "/assets/images/og-lorena.webp",
    themeColor: "#0E0F0D",
  },
  hero: {
    claim: "Técnica antes que intensidad",
    titleLead: ["Aprendé a", "entrenar bien,"],
    titleAccent: "no a entrenar más.",
    description:
      "Un curso online para aprender los movimientos y entrenar a tu ritmo, con videos y material descargable.",
    primaryCta: "Comprar el curso",
    secondaryCta: "Ver el programa",
    facts: ["10 videos", "Material descargable", "A tu ritmo", "Acceso digital"],
  },
  method: {
    title: "Tres principios para ordenar tu entrenamiento.",
    principles: [
      {
        number: "01",
        name: "Técnica",
        description:
          "Entender la ejecución antes de sumar dificultad o velocidad.",
        provisional: true,
      },
      {
        number: "02",
        name: "Control",
        description:
          "Cuidar la postura, el rango y el ritmo de cada repetición.",
        provisional: true,
      },
      {
        number: "03",
        name: "Constancia",
        description:
          "Armar sesiones que entren en una semana real y se puedan sostener.",
        provisional: true,
      },
    ],
  },
  course: {
    videoCount: 10,
    materialLabel: "Material descargable",
    price: null as string | null,
    priceLabel: "Precio a confirmar",
    checkoutUrl: "",
    paymentNote: "Medio de pago pendiente",
    accessNote: "La modalidad de entrega y la duración del acceso están por confirmar.",
    downloadables: [] as Downloadable[],
    lessons: Array.from({ length: 10 }, (_, index): Lesson => ({
      number: String(index + 1).padStart(2, "0"),
      title: `Título del video ${index + 1} — pendiente`,
      duration: null,
      provisional: true,
    })),
  },
  instructor: {
    heading: "Lorena, detrás del curso.",
    introduction:
      "Lorena creó y guía este curso. Su formación, su recorrido y el motivo detrás de esta propuesta se incorporan acá cuando estén validados por ella.",
    bioStatus: "Bio pendiente de aprobación",
    quote: null as string | null,
  },
  testimonials: {
    show: false,
    items: [] as Testimonial[],
  },
  purchase: {
    heading: "Todo lo que incluye el curso.",
    description:
      "Diez videos y material descargable. El precio y las condiciones de acceso se completan antes de habilitar la compra.",
    cardLabel: "Curso completo",
    features: ["10 videos", "Material descargable", "Acceso digital a tu ritmo"],
    cta: "Comprar el curso",
    unavailableCta: "Compra aún no habilitada",
  },
  faq: [
    {
      question: "¿Qué incluye el curso?",
      answer:
        "Incluye 10 videos y material descargable. Los títulos, las duraciones y el detalle final de los materiales se publicarán cuando estén confirmados.",
      provisional: true,
    },
    {
      question: "¿Necesito equipamiento?",
      answer:
        "La lista exacta está pendiente de confirmación. Va a figurar acá antes de habilitar la compra.",
      provisional: true,
    },
    {
      question: "¿Necesito experiencia previa?",
      answer:
        "El nivel recomendado y las posibles adaptaciones todavía tienen que ser confirmados por Lorena.",
      provisional: true,
    },
    {
      question: "¿Cuánto dura cada sesión?",
      answer:
        "Las duraciones van a aparecer junto a cada video en el programa. Se completan con el material final.",
      provisional: true,
    },
    {
      question: "¿Cómo recibo el curso y por cuánto tiempo tengo acceso?",
      answer:
        "La modalidad de entrega y el plazo de acceso todavía están por definirse. Van a estar informados junto al precio antes de habilitar el pago.",
      provisional: true,
    },
  ] as FaqItem[],
  finalCta: {
    marker: "Tu próximo paso",
    titleLead: "Tu próximo entrenamiento",
    titleAccent: "empieza acá.",
    cta: "Comprar el curso",
  },
  socialLinks: {
    instagram: "",
    contact: "",
  },
  legalLinks: {
    terms: "",
    privacy: "",
  },
  images: {
    hero: {
      desktop: "/assets/images/hero-training-1672.webp",
      desktopSmall: "/assets/images/hero-training-960.webp",
      mobile: "/assets/images/hero-training-mobile-1122.webp",
      mobileSmall: "/assets/images/hero-training-mobile-720.webp",
    },
    method: {
      large: "/assets/images/method-movement-2170.webp",
      small: "/assets/images/method-movement-1080.webp",
    },
    instructor: {
      large: "/assets/images/instructor-placeholder-1122.webp",
      small: "/assets/images/instructor-placeholder-720.webp",
      isPlaceholder: true,
    },
    final: {
      large: "/assets/images/final-training-1672.webp",
      small: "/assets/images/final-training-960.webp",
    },
  },
} as const;

export const hasCheckout = Boolean(
  siteConfig.course.price?.trim() && siteConfig.course.checkoutUrl.trim(),
);
export const commercialHref = hasCheckout ? siteConfig.course.checkoutUrl : "#comprar";
export const priceDisplay = siteConfig.course.price ?? siteConfig.course.priceLabel;
