"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      <Link href={post.path} className="blog-card-media" aria-label={post.title}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage}
          alt=""
          loading="lazy"
          onError={(event) => {
            event.currentTarget.classList.add("is-missing");
          }}
        />
      </Link>
      <div className="blog-card-body">
        <p className="blog-meta">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{post.dateLabel}</time>
        </p>
        <h2>
          <Link href={post.path}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <Link className="blog-card-link" href={post.path}>
          Read guide
        </Link>
      </div>
    </article>
  );
}
