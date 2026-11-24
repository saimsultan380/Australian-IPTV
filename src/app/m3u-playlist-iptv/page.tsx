import type { Metadata } from "next";
import { BlogPostPage, buildBlogPostMetadata } from "@/components/blog/blog-post-page";

const SLUG = "m3u-playlist-iptv";

export function generateMetadata(): Metadata {
  return buildBlogPostMetadata(SLUG);
}

export default function M3uPlaylistIptvPage() {
  return <BlogPostPage slug={SLUG} />;
}
