import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { canonicalUrl } from "@/lib/site";
import { getSeoPage } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = getSeoPage("home");
  const now = new Date();

  return [
    {
      url: canonicalUrl(home.path),
      lastModified: now,
      changeFrequency: home.changeFrequency,
      priority: home.priority,
    },
    {
      url: canonicalUrl("/blog/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...getAllPosts().map((post) => ({
      url: canonicalUrl(post.path),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
