import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/blog-article";
import { JsonLd } from "@/components/seo/json-ld";
import { getPost } from "@/lib/blog";
import { canonicalUrl, site } from "@/lib/site";

export function buildBlogPostMetadata(slug: string): Metadata {
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: {
      absolute: post.seoTitle,
    },
    description: post.description,
    alternates: {
      canonical: canonicalUrl(post.path),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url: canonicalUrl(post.path),
      siteName: site.name,
      locale: "en_AU",
      type: "article",
      images: [
        {
          url: `${site.url}${post.coverImage}`,
          alt: post.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [`${site.url}${post.coverImage}`],
    },
  };
}

export function BlogPostPage({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: canonicalUrl(post.path),
    image: [`${site.url}${post.coverImage}`],
  };

  return (
    <main className="blog-page blog-post-page">
      <JsonLd data={articleLd} />
      <div className="wrap blog-post-wrap">
        <p className="blog-back">
          <Link href="/blog/">← Blog</Link>
        </p>
        <BlogArticle post={post} />
      </div>
    </main>
  );
}
