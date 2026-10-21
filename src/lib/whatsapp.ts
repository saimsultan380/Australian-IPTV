const NUMBER = "447532818129";

const messages = {
  default:
    "Hi! I'm interested in Australian IPTV. Please share available plans, pricing, and how to get started.",
  support:
    "Hi! I need help with my Australian IPTV subscription (setup, activation, or streaming). Please assist.",
  plan: (name: string, duration: string, price: string) =>
    `Hi! I'm interested in the ${name} plan (${duration} — ${price} AUD) for Australian IPTV. Please help me subscribe and activate.`,
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
  planHref(name: string, duration: string, price: string) {
    return buildHref(messages.plan(name, duration, price));
  },
};
