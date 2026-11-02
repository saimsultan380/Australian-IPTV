import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";
import { getSeoPage } from "@/lib/seo";

/** Single-homepage site — only the root URL belongs in the sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const home = getSeoPage("home");

  return [
    {
      url: canonicalUrl(home.path),
      lastModified: new Date(),
      changeFrequency: home.changeFrequency,
      priority: home.priority,
    },
  ];
}
