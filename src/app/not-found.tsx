import type { Metadata } from "next";
import Link from "next/link";
import { FlagMark } from "@/components/ui/flag-mark";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found on Australians IPTV.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: undefined,
  },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/plans/", label: "Plans" },
  { href: "/devices/", label: "Devices" },
  { href: "/watch/", label: "Watch" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="wrap not-found-inner">
        <FlagMark width={48} height={24} className="flag-mark" label="Australian flag" />
        <p className="eyebrow">Error 404</p>
        <h1>Page not found</h1>
        <p className="lede">
          This URL is not available. Use the links below to continue exploring Australian IPTV
          plans, setup guides and support.
        </p>
        <div className="actions">
          <Link className="btn btn-primary" href="/">
            Back to Home
          </Link>
          <Link className="btn btn-line" href="/contact/">
            Contact Support
          </Link>
        </div>
        <ul className="not-found-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
