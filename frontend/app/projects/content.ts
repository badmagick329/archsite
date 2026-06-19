import { type ProjectType } from "@/lib/site-data";

export const projectsContent = {
  header: {
    eyebrow: "Projects",
    title:
      "Selected work grouped by typology, using public project categories already visible on the current Unicon site.",
    description:
      "This page becomes the center of the redesign. The categories stay familiar to existing visitors, but the presentation is sharper, more legible, and easier to expand into future case studies.",
    asideTitle: "V1 Structure",
    asideBody:
      "One section per typology with a representative public project reference and restrained supporting text.",
  },
  projectTypes: [
    {
      slug: "architecture",
      title: "Architecture",
      label: "Built Work",
      summary:
        "Institutional, educational, commercial, and public buildings developed through architecture, planning, and multidisciplinary coordination.",
      project: {
        name: "SOS Junior School Lahore",
        location: "Lahore, Pakistan",
        status: "Educational Project",
        year: "Public Site Reference",
        description:
          "Used here as a placeholder architectural feature project drawn from the current site, helping anchor the category in a recognizable public example.",
      },
    },
    {
      slug: "urban-planning",
      title: "Urban Planning",
      label: "Frameworks",
      summary:
        "District-scale and city-scale planning work focused on development strategy, circulation, public realm, and implementation.",
      project: {
        name: "Beautification & Development Plan of Peshawar",
        location: "Peshawar, Pakistan",
        status: "Regional Planning",
        year: "Public Site Reference",
        description:
          "A public-facing planning reference from the current site that helps situate Unicon's urban and regional work within the broader portfolio.",
      },
    },
    {
      slug: "engineering-design",
      title: "Engineering Design",
      label: "Coordination",
      summary:
        "Integrated technical design across structure, environmental systems, electrical engineering, HVAC, and implementation support.",
      project: {
        name: "The Bank of Punjab",
        location: "Pakistan",
        status: "Engineering Coordination",
        year: "Public Site Reference",
        description:
          "A placeholder reference for commercially oriented work where building systems, structure, and technical coordination are central to delivery.",
      },
    },
    {
      slug: "conservation",
      title: "Conservation",
      label: "Adaptive Reuse",
      summary:
        "Conservation, restoration, and adaptive reuse work that balances historic fabric with contemporary use and public access.",
      project: {
        name: "Garrison Club",
        location: "Multan, Pakistan",
        status: "Conservation and Restoration",
        year: "ARCASIA Award Reference",
        description:
          "The current site highlights this project in relation to conservation and awards, making it a strong placeholder anchor for the category.",
      },
    },
    {
      slug: "interior-design",
      title: "Interior Design",
      label: "Spatial Detail",
      summary:
        "Interior projects shaped through atmosphere, material discipline, and the relationship between function and image.",
      project: {
        name: "Interior Design Portfolio Selection",
        location: "Various Projects",
        status: "Interior Category Placeholder",
        year: "Public Site Reference",
        description:
          "The current Unicon site includes a dedicated interior category. This placeholder keeps that distinction while leaving room for curated featured work later.",
      },
    },
    {
      slug: "project-management",
      title: "Project Management",
      label: "Delivery",
      summary:
        "Oversight across briefing, construction management, coordination, procurement, and implementation to keep complex work aligned.",
      project: {
        name: "USAID Schools in Bagh District",
        location: "Bagh District, AJK",
        status: "Implementation and Delivery",
        year: "Honor Award Reference",
        description:
          "A public project reference that can support language around delivery, coordination, implementation, and large multi-stakeholder programmes.",
      },
    },
  ] satisfies ProjectType[],
} as const;
