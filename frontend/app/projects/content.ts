import { type ProjectType } from "@/lib/site-data";

export const projectsContent = {
  header: {
    eyebrow: "Projects",
    title:
      "Selected work grouped by typology, using public project categories already visible on the current Unicon site.",
    description:
      "A selection of work across architecture, planning, engineering, conservation, interiors, and project delivery.",
    asideTitle: "Project Types",
    asideBody:
      "One section per typology with a representative public project reference and restrained supporting text.",
  },
  projectTypes: [
    {
      slug: "architecture",
      title: "Architecture",
      label: "Built Work",
      imageKey: "architecture",
      summary:
        "Institutional, educational, commercial, and public buildings developed through architecture, planning, and multidisciplinary coordination.",
      project: {
        name: "SOS Junior School Lahore",
        location: "Lahore, Pakistan",
        status: "Educational Project",
        year: "Public Site Reference",
        description:
          "An educational project within Unicon's wider architectural portfolio.",
      },
    },
    {
      slug: "urban-planning",
      title: "Urban Planning",
      label: "Frameworks",
      imageKey: "delivery",
      summary:
        "District-scale and city-scale planning work focused on development strategy, circulation, public realm, and implementation.",
      project: {
        name: "Beautification & Development Plan of Peshawar",
        location: "Peshawar, Pakistan",
        status: "Regional Planning",
        year: "Public Site Reference",
        description:
          "A planning reference reflecting Unicon's work at city and regional scale.",
      },
    },
    {
      slug: "engineering-design",
      title: "Engineering Design",
      label: "Coordination",
      imageKey: "engineering",
      summary:
        "Integrated technical design across structure, environmental systems, electrical engineering, HVAC, and implementation support.",
      project: {
        name: "The Bank of Punjab",
        location: "Pakistan",
        status: "Engineering Coordination",
        year: "Public Site Reference",
        description:
          "Commercial work where building systems, structure, and technical coordination are central to delivery.",
      },
    },
    {
      slug: "conservation",
      title: "Conservation",
      label: "Adaptive Reuse",
      imageKey: "conservation",
      summary:
        "Conservation, restoration, and adaptive reuse work that balances historic fabric with contemporary use and public access.",
      project: {
        name: "Garrison Club",
        location: "Multan, Pakistan",
        status: "Conservation and Restoration",
        year: "ARCASIA Award Reference",
        description:
          "A conservation and restoration project within the practice's recognised heritage work.",
      },
    },
    {
      slug: "interior-design",
      title: "Interior Design",
      label: "Spatial Detail",
      imageKey: "interiors",
      summary:
        "Interior projects shaped through atmosphere, material discipline, and the relationship between function and image.",
      project: {
        name: "Interior Design Portfolio Selection",
        location: "Various Projects",
        status: "Interior Design",
        year: "Public Site Reference",
        description:
          "Interior projects shaped through material choices, atmosphere, and everyday use.",
      },
    },
    {
      slug: "project-management",
      title: "Project Management",
      label: "Delivery",
      imageKey: "delivery",
      summary:
        "Oversight across briefing, construction management, coordination, procurement, and implementation to keep complex work aligned.",
      project: {
        name: "USAID Schools in Bagh District",
        location: "Bagh District, AJK",
        status: "Implementation and Delivery",
        year: "Honor Award Reference",
        description:
          "A multi-stakeholder programme involving coordination, implementation, and delivery support.",
      },
    },
  ] satisfies ProjectType[],
} as const;
