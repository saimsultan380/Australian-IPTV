import type { Metadata } from "next";
import { BlogPostPage, buildBlogPostMetadata } from "@/components/blog/blog-post-page";

const SLUG = "iptv-online-player";

export function generateMetadata(): Metadata {
  return buildBlogPostMetadata(SLUG);
}

export default function IptvOnlinePlayerPage() {
  return <BlogPostPage slug={SLUG} />;
}
