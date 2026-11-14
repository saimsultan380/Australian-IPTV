import type { Metadata } from "next";
import { BlogPostPage, buildBlogPostMetadata } from "@/components/blog/blog-post-page";

const SLUG = "australian-iptv-channels";

export function generateMetadata(): Metadata {
  return buildBlogPostMetadata(SLUG);
}

export default function AustralianIptvChannelsPage() {
  return <BlogPostPage slug={SLUG} />;
}
