import type { Metadata } from "next";
import { BlogPostPage, buildBlogPostMetadata } from "@/components/blog/blog-post-page";

const SLUG = "iptv-australia-beginners-guide";

export function generateMetadata(): Metadata {
  return buildBlogPostMetadata(SLUG);
}

export default function BeginnersGuidePage() {
  return <BlogPostPage slug={SLUG} />;
}
