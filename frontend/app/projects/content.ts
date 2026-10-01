import { type ProjectType } from "@/lib/site-data";

export const projectsContent = {
  meta: {
    title: "Projects",
    description:
      "Selected Unicon projects across architecture design, urban planning, engineering design, conservation, interior design and project management.",
  },
  header: {
    eyebrow: "Projects",
    title:
      "Selected projects across six areas of practice.",
    description:
      "One approved representative project is shown for each category while the full project list is being prepared.",
    asideTitle: "Areas of Practice",
    asideBody:
      "Architecture Design, Urban Planning, Engineering Design, Conservation, Interior Design, and Project Management.",
  },
  projectTypes: [
    {
      slug: "architecture",
      title: "Architecture Design",
      label: "Built Work",
      imageKey: "architecture",
      summary:
        "Institutional, educational, commercial, and public buildings developed through architecture, planning, and multidisciplinary coordination.",
      projects: [{
        name: "SOS Junior School Lahore",
        location: "Lahore, Pakistan",
        status: "Educational Project",
        year: "Public Site Reference",
        description:
          "An educational project within Unicon's wider architectural portfolio.",
      }],
    },
    {
      slug: "urban-planning",
      title: "Urban Planning",
      label: "Frameworks",
      imageKey: "delivery",
      summary:
        "District-scale and city-scale planning work focused on development strategy, circulation, public realm, and implementation.",
      projects: [{
        name: "Beautification & Development Plan of Peshawar",
        location: "Peshawar, Pakistan",
        status: "Regional Planning",
        year: "Public Site Reference",
        description:
          "A planning reference reflecting Unicon's work at city and regional scale.",
      }],
    },
    {
      slug: "engineering-design",
      title: "Engineering Design",
      label: "Coordination",
      imageKey: "engineering",
      summary:
        "Integrated technical design across structure, environmental systems, electrical engineering, HVAC, and implementation support.",
      projects: [{
        name: "The Bank of Punjab",
        location: "Pakistan",
        status: "Engineering Coordination",
        year: "Public Site Reference",
        description:
          "Commercial work where building systems, structure, and technical coordination are central to delivery.",
      }],
    },
    {
      slug: "conservation",
      title: "Conservation",
      label: "Adaptive Reuse",
      imageKey: "conservation",
      summary:
        "Conservation, restoration, and adaptive reuse work that balances historic fabric with contemporary use and public access.",
      projects: [{
        name: "Garrison Club",
        location: "Multan, Pakistan",
        status: "Conservation and Restoration",
        year: "ARCASIA Award Reference",
        description:
          "A conservation and restoration project within the practice's recognised heritage work.",
      }],
    },
    {
      slug: "interior-design",
      title: "Interior Design",
      label: "Spatial Detail",
      imageKey: "interiors",
      summary:
        "Interior projects shaped through atmosphere, material discipline, and the relationship between function and image.",
      projects: [{
        name: "Interior Design Portfolio Selection",
        location: "Various Projects",
        status: "Interior Design",
        year: "Public Site Reference",
        description:
          "Interior projects shaped through material choices, atmosphere, and everyday use.",
      }],
    },
    {
      slug: "project-management",
      title: "Project Management",
      label: "Delivery",
      imageKey: "delivery",
      summary:
        "Oversight across briefing, construction management, coordination, procurement, and implementation to keep complex work aligned.",
      projects: [{
        name: "USAID Schools in Bagh District",
        location: "Bagh District, AJK",
        status: "Implementation and Delivery",
        year: "Honor Award Reference",
        description:
          "A multi-stakeholder programme involving coordination, implementation, and delivery support.",
      }],
    },
  ] satisfies ProjectType[],
} as const;
