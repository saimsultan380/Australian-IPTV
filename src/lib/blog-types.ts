export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  dateLabel: string;
  category: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  blocks: BlogBlock[];
};
