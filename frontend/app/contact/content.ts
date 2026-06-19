export const contactContent = {
  header: {
    eyebrow: "Contact",
    title:
      "A direct and credible entry point for project, institutional, or collaboration inquiries.",
    description:
      "The first release keeps this page informational rather than form-driven, using the public details currently listed on Unicon's website.",
    asideTitle: "Inquiry Types",
    asideBody:
      "New commissions, planning studies, institutional consultations, research conversations, and early-stage feasibility discussions.",
  },
  contactSection: {
    label: "Get in Touch",
    title: "A simple contact panel is enough for v1.",
    description:
      "This draft uses Unicon's currently published office details while keeping the surrounding language easy to refine.",
    panel: {
      title: "Start an Inquiry",
      description:
        "Share a short note about the project, location, timeline, or collaboration context. This panel is designed to work for public, private, educational, and institutional clients alike.",
      email: "uniconconsulting@gmail.com",
      phone: "+92 42 35711390-93",
      address: ["34-A Main Gulberg", "Lahore", "Pakistan"],
    },
  },
  responseSection: {
    label: "Response",
    title: "Set expectations without building a full workflow.",
    description:
      "This area can later expand into office hours, project onboarding notes, or client submission guidance.",
    items: [
      "A future note here can explain expected response timing for new commissions, planning studies, and institutional inquiries.",
      "A second panel can clarify that the office is based in Lahore while the practice works across multiple regions and project types.",
      "A third panel can outline the kinds of architecture, planning, engineering, conservation, or project management commissions currently being prioritised.",
    ],
  },
} as const;
