export const homeContent = {
  hero: {
    titleAccent: "50 years",
    title: "of shaping places.",
    description:
      "Architecture, planning and engineering practice across Pakistan since 1975.",
    cta: "Explore Our Work",
  },
  intro: {
    paragraphs: [
      "Founded in Lahore in 1975, Unicon has worked across a wide range of scales and contexts — from individual buildings and historic sites to institutional campuses, infrastructure, urban development and regional planning.",
      "Over five decades, the practice has brought together architecture, planning, engineering and project implementation, working with public institutions, development organisations and private clients across Pakistan and beyond.",
    ],
    cta: "About Unicon",
  },
  practiceAreas: {
    description:
      "Integrated expertise across the built environment, from early planning and design through implementation and delivery.",
    items: [
      {
        title: "Architecture Design",
        disciplines: "Buildings · Institutional · Educational",
        imageKey: "architecture",
        href: "/projects#architecture",
        tone: "architecture",
      },
      {
        title: "Urban Planning",
        disciplines: "Regional · Master Planning · Urban Renewal",
        imageKey: "conservation",
        href: "/projects#urban-planning",
        tone: "planning",
      },
      {
        title: "Engineering Design",
        disciplines: "Civil · Structural · Infrastructure · Building Services",
        imageKey: "engineering",
        href: "/projects#engineering-design",
        tone: "engineering",
      },
      {
        title: "Conservation",
        disciplines: "Conservation · Restoration · Rehabilitation",
        imageKey: "interiors",
        href: "/projects#conservation",
        tone: "conservation",
      },
      {
        title: "Interior Design",
        disciplines: "Material · Spatial · Functional Detail",
        imageKey: "interiors",
        href: "/projects#interior-design",
        tone: "interiors",
      },
      {
        title: "Project Management",
        disciplines: "Construction · Coordination · Supervision",
        imageKey: "delivery",
        href: "/projects#project-management",
        tone: "delivery",
      },
    ],
  },
  featuredProjects: {
    description:
      "Selected work across the practice's six areas of expertise.",
    cta: "View All Projects",
    items: [
      {
        name: "SOS Junior School",
        location: "Lahore",
        disciplines: "Architecture · Education",
        recognition: "Nominated for the Aga Khan Award for Architecture.",
        imageKey: "architecture",
        href: "/projects#architecture",
      },
      {
        name: "Beautification & Development Plan of Peshawar",
        location: "Peshawar",
        disciplines: "Urban Planning",
        recognition: "Asian Townscape Award, 2016.",
        imageKey: "conservation",
        href: "/projects#urban-planning",
      },
      {
        name: "Hussain Agahi Urban Renewal",
        location: "Multan",
        disciplines: "Urban Renewal",
        recognition: "Nominated for the Aga Khan Award for Architecture.",
        imageKey: "architecture",
        href: "/projects#urban-planning",
      },
      {
        name: "Services Club",
        location: "Multan",
        disciplines: "Conservation & Restoration",
        recognition:
          "ARCASIA Award for Architectural Excellence in Conservation, 1999–2000.",
        imageKey: "interiors",
        href: "/projects#conservation",
      },
      {
        name: "USAID Schools",
        location: "Bagh District, AJK",
        disciplines: "Architecture · Education",
        recognition: "Design-Build Institute of America Honor Award, 2012.",
        imageKey: "delivery",
        href: "/projects#project-management",
      },
      {
        name: "Master Plan of Skardu & Khaplu",
        location: "Gilgit-Baltistan",
        disciplines: "Regional Planning",
        recognition:
          "Planning for settlements within the distinctive geographic and environmental context of northern Pakistan.",
        imageKey: "delivery",
        href: "/projects#urban-planning",
      },
    ],
  },
  collaborations: {
    label: "Clients / Collaborations",
    title: "A place to signal institutional clients and working relationships around the practice.",
    description:
      "Experience across public institutions, educational clients, financial organisations, planning authorities, and private-sector development.",
    items: [
      { label: "UNICEF", logo: "/images/unicon/clients/unicef.svg" },
      { label: "UNESCO", logo: "/images/unicon/clients/unesco.svg" },
      { label: "USAID", logo: "/images/unicon/clients/usaid.webp" },
      { label: "World Bank", logo: "/images/unicon/clients/world-bank.svg" },
      { label: "National Highway Authority" },
      { label: "Capital Development Authority" },
    ],
  },
  contact: {
    panel: {
      title: "Start a conversation.",
      description:
        "For project enquiries, collaborations or further information about our work, contact our Lahore office.",
    },
  },
} as const;
