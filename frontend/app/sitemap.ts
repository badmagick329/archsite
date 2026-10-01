import type { MetadataRoute } from "next";

import { siteNavigation, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteNavigation.map((item) => ({ url: `${siteUrl}${item.href}` }));
}
