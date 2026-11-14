import type { Metadata } from "next";
import { BlogPostPage, buildBlogPostMetadata } from "@/components/blog/blog-post-page";

const SLUG = "iptv-subscription-australia";

export function generateMetadata(): Metadata {
  return buildBlogPostMetadata(SLUG);
}

export default function IptvSubscriptionAustraliaPage() {
  return <BlogPostPage slug={SLUG} />;
}
