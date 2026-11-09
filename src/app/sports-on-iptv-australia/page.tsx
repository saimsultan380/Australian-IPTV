import type { Metadata } from "next";
import { BlogPostPage, buildBlogPostMetadata } from "@/components/blog/blog-post-page";

const SLUG = "sports-on-iptv-australia";

export function generateMetadata(): Metadata {
  return buildBlogPostMetadata(SLUG);
}

export default function SportsOnIptvAustraliaPage() {
  return <BlogPostPage slug={SLUG} />;
}
