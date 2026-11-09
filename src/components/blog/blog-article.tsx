import type { BlogBlock, BlogPost } from "@/lib/blog";
import { BlogFigure } from "@/components/blog/blog-figure";

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ol":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="blog-table-wrap">
          <table>
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "image":
      return <BlogFigure src={block.src} alt={block.alt} caption={block.caption} />;
    default:
      return null;
  }
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="blog-article">
      <header className="blog-article-header">
        <p className="blog-meta">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{post.dateLabel}</time>
        </p>
        <h1>{post.title}</h1>
        <p className="blog-article-lede">{post.excerpt}</p>
      </header>

      <BlogFigure src={post.coverImage} alt={post.coverAlt} />

      <div className="blog-prose">
        {post.blocks.map((block, index) => (
          <Block key={`${block.type}-${index}`} block={block} />
        ))}
      </div>
    </article>
  );
}
