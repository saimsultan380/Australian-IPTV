import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/blog-card";
import { blogIndex, getAllPosts } from "@/lib/blog";
import { canonicalUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `Blog | ${site.name}`,
  },
  description: blogIndex.lede,
  alternates: {
    canonical: canonicalUrl("/blog/"),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Blog | ${site.name}`,
    description: blogIndex.lede,
    url: canonicalUrl("/blog/"),
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="blog-page">
      <div className="wrap">
        <header className="blog-page-header">
          <h1>{blogIndex.title}</h1>
          <p className="lede">{blogIndex.lede}</p>
          <div className="blog-page-rule" aria-hidden="true" />
        </header>

        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
