import type { Metadata } from "next";
import { Faq } from "@/components/sections/faq";
import { Closing } from "@/components/sections/closing";
import { PageIntro } from "@/components/seo/page-intro";
import { breadcrumbTrail, buildPageMetadata, getSeoPage } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("faq");

export default function FaqPage() {
  const page = getSeoPage("faq");
  return (
    <main>
      <section className="section page-hero">
        <PageIntro
          crumbs={breadcrumbTrail("faq")}
          eyebrow="Help"
          title={page.breadcrumbLabel}
          lede={page.description}
        />
      </section>
      <Faq />
      <Closing />
    </main>
  );
}
