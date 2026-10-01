import { NextResponse, type NextRequest } from "next/server";

import { siteUrl } from "@/lib/site-data";

const productionHost = new URL(siteUrl).hostname;
const productionHosts = new Set([productionHost, productionHost.replace(/^www\./, "")]);

// Previews run the same build on other hosts. A runtime host check keeps them out of
// search results without a per-environment build, and lifts itself once the site
// serves from the production domain.
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (!productionHosts.has(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
