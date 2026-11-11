import type { Metadata } from "next";
import { BlogPostPage, buildBlogPostMetadata } from "@/components/blog/blog-post-page";

const SLUG = "how-to-install-iptv-apps-on-compatible-devices";

export function generateMetadata(): Metadata {
  return buildBlogPostMetadata(SLUG);
}

export default function InstallIptvAppsPage() {
  return <BlogPostPage slug={SLUG} />;
}
