import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";
import { seoPages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return seoPages.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
