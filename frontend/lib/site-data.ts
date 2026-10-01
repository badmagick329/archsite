import { type UniconImageKey } from "@/lib/unicon-images";

export const siteUrl = "https://www.uniconconsulting.com";

export const contactDetails = {
  email: "uniconconsulting@gmail.com",
  phone: "+92 42 35711390-93",
  phoneHref: "tel:+924235711390",
  address: ["34-A Main Gulberg", "Lahore, Pakistan"],
} as const;

export type ProjectType = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  imageKey: UniconImageKey;
  projects: readonly {
    name: string;
    location: string;
    status: string;
    year: string;
    description: string;
  }[];
};

export const siteNavigation = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/projects", label: "Projects" },
  { href: "/research-publications", label: "Research & Publications" },
  { href: "/contact", label: "Contact" },
] as const;
