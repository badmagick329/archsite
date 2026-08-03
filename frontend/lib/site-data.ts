export type ProjectType = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  imageKey: "architecture" | "conservation" | "interiors" | "engineering" | "delivery";
  project: {
    name: string;
    location: string;
    status: string;
    year: string;
    description: string;
  };
};

export const siteNavigation = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/projects", label: "Projects" },
  { href: "/research-publications", label: "Research & Publications" },
  { href: "/contact", label: "Contact" },
] as const;
