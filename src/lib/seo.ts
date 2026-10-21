import type { Metadata } from "next";
import { canonicalUrl, site } from "@/lib/site";

export type SeoPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

/** All indexable routes — unique path, title, and description each. */
export const seoPages: SeoPage[] = [
  {
    slug: "home",
    path: "/",
    title: "IPTV Australia: Buy Australia IPTV Subscription at 70% Off",
    description:
      "Best IPTV Australia service with HD 4K streaming, sports, movies, entertainment & more. Get 12-month IPTV in Australia & save 100$. Instant IPTV Subscription",
    breadcrumbLabel: "Home",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    slug: "plans",
    path: "/plans/",
    title: "Australian IPTV Plans & Pricing | 1–12 Month Subscriptions",
    description:
      "Compare discounted Australian IPTV subscription plans from 1 to 12 months. Choose Basic, Standard, Premium or Super and activate quickly on compatible devices.",
    breadcrumbLabel: "Plans",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    slug: "devices",
    path: "/devices/",
    title: "IPTV Compatible Devices Australia | Firestick, Smart TV & More",
    description:
      "See which devices work with Australian IPTV and follow installation guides for Firestick, Samsung, LG, Android TV, Apple TV, phones and computers.",
    breadcrumbLabel: "Devices",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    slug: "watch",
    path: "/watch/",
    title: "What Can You Watch with IPTV in Australia? Live TV, Sports & Movies",
    description:
      "Explore live TV channels, sports, movies, TV series and international entertainment available with an Australian IPTV subscription.",
    breadcrumbLabel: "Watch",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    slug: "getting-started",
    path: "/getting-started/",
    title: "Getting Started with Australian IPTV | Setup Guide",
    description:
      "Learn how to start Australian IPTV step by step — choose a plan, pick a compatible device, install a player and begin streaming.",
    breadcrumbLabel: "Getting Started",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    slug: "buying-guide",
    path: "/buying-guide/",
    title: "Australian IPTV Buying Guide | How to Choose the Right Plan",
    description:
      "A practical buying guide for IPTV in Australia covering content, devices, pricing transparency, support and what to check before you subscribe.",
    breadcrumbLabel: "Buying Guide",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    slug: "reseller-panel",
    path: "/reseller-panel/",
    title: "Australian IPTV Reseller Panel | Start Your Own IPTV Business",
    description:
      "Explore the Australian IPTV reseller panel for managing customer subscriptions, renewals and packages. Contact us to discuss reseller access.",
    breadcrumbLabel: "Reseller Panel",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    slug: "internet-speed",
    path: "/internet-speed/",
    title: "Internet Speed for IPTV Australia | Streaming Requirements",
    description:
      "Find the recommended internet speeds for HD and 4K Australian IPTV streaming, plus tips to reduce buffering on your home connection.",
    breadcrumbLabel: "Internet Speed",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    slug: "faq",
    path: "/faq/",
    title: "Australian IPTV FAQs | Setup, Devices, VPN & Subscriptions",
    description:
      "Answers to common Australian IPTV questions about devices, M3U playlists, Xtream Codes, VPN use, trials and concurrent streams.",
    breadcrumbLabel: "FAQ",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    slug: "contact",
    path: "/contact/",
    title: "Contact Australians IPTV Support | WhatsApp Help",
    description:
      "Contact Australians IPTV for plan questions, activation help and setup support via WhatsApp. Start your IPTV Australia subscription today.",
    breadcrumbLabel: "Contact",
    changeFrequency: "yearly",
    priority: 0.6,
  },
];

export function getSeoPage(slug: string): SeoPage {
  const page = seoPages.find((item) => item.slug === slug);
  if (!page) throw new Error(`Unknown SEO page: ${slug}`);
  return page;
}

export function buildPageMetadata(slug: string, extras?: Partial<Metadata>): Metadata {
  const page = getSeoPage(slug);
  const url = canonicalUrl(page.path);

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: site.name,
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: `${site.url}/images/og-au-flag.png`,
          width: 1200,
          height: 630,
          alt: "Australian flag — Australians IPTV",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [`${site.url}/images/og-au-flag.png`],
    },
    ...extras,
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbTrail(slug: string): Crumb[] {
  const page = getSeoPage(slug);
  if (page.slug === "home") {
    return [{ name: page.breadcrumbLabel, path: "/" }];
  }
  return [
    { name: "Home", path: "/" },
    { name: page.breadcrumbLabel, path: page.path },
  ];
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: canonicalUrl("/"),
    logo: `${site.url}/favicon.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English"],
      url: canonicalUrl("/contact/"),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: canonicalUrl("/"),
    inLanguage: "en-AU",
  };
}
