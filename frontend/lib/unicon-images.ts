export type UniconImage = {
  src: string;
  alt: string;
  position?: string;
};

export type UniconImageKey =
  | "architecture"
  | "conservation"
  | "interiors"
  | "engineering"
  | "delivery";

export const uniconImages = {
  logo: {
    src: "/images/unicon/logo-mark.webp",
    alt: "Unicon Consulting",
  },
  heroSlides: [
    {
      src: "/images/unicon/hero-brick-building.webp",
      alt: "Historic brick building and garden in Lahore",
      position: "center",
    },
    {
      src: "/images/unicon/interior-residence.webp",
      alt: "Warmly lit interior space with architectural detailing",
      position: "center",
    },
    {
      src: "/images/unicon/structure-site.webp",
      alt: "Construction site in a broad desert landscape",
      position: "center",
    },
  ],
  architecture: {
    src: "/images/unicon/architecture-auditorium.webp",
    alt: "Brick auditorium entrance with decorative metalwork",
    position: "center 42%",
  },
  conservation: {
    src: "/images/unicon/conservation-clock-tower.webp",
    alt: "Historic clock tower in Peshawar",
    position: "center 38%",
  },
  interiors: {
    src: "/images/unicon/interior-residence.webp",
    alt: "Interior living space with framed architectural work",
    position: "center",
  },
  engineering: {
    src: "/images/unicon/commercial-interior.webp",
    alt: "Commercial interior with glazed partitions and stair",
    position: "center",
  },
  delivery: {
    src: "/images/unicon/structure-site.webp",
    alt: "Construction foundations and site team",
    position: "center",
  },
} as const satisfies Record<string, UniconImage | readonly UniconImage[]>;
