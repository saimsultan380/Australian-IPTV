import { site } from "@/lib/site";

const NUMBER = "447532818129";
const SITE_TAG = `Website: ${site.url}`;

function withSite(message: string) {
  return `${message}\n\n${SITE_TAG}`;
}

const messages = {
  default: withSite("I need IPTV Australia free trial"),
  support: withSite("I need help with IPTV Australia (setup, activation, or streaming)"),
  plan: (name: string, duration: string, price: string) => {
    const durationLabel =
      duration === "12 Months"
        ? "1 year"
        : duration === "1 Month"
          ? "1 month"
          : duration.toLowerCase();

    return withSite(
      `I need IPTV Australia ${durationLabel} subscription (${name} — ${price} AUD)`,
    );
  },
} as const;

function buildHref(text: string) {
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;
}

export const whatsapp = {
  number: NUMBER,
  display: "+44 7532 818129",
  message: messages.default,
  href: buildHref(messages.default),
  supportHref: buildHref(messages.support),
  trialHref: buildHref(messages.default),
  planHref(name: string, duration: string, price: string) {
    return buildHref(messages.plan(name, duration, price));
  },
};
