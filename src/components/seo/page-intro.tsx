import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import type { Crumb } from "@/lib/seo";

type PageIntroProps = {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lede?: string;
};

export function PageIntro({ crumbs, eyebrow, title, lede }: PageIntroProps) {
  return (
    <div className="page-intro wrap">
      <Breadcrumbs crumbs={crumbs} />
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {lede ? <p className="lede">{lede}</p> : null}
    </div>
  );
}
