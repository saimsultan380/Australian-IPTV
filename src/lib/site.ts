export const site = {
  name: "Australians IPTV",
  /** Canonical origin — always non-www, no trailing slash */
  url: "https://australiansiptv.com",
  host: "australiansiptv.com",
  wwwHost: "www.australiansiptv.com",
} as const;

/** Build a canonical absolute URL with trailing slash (except bare origin → /). */
export function canonicalUrl(path = "/"): string {
  const cleaned = path.trim() || "/";
  if (cleaned === "/") return `${site.url}/`;
  const withLeading = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
  const withTrailing = withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
  return `${site.url}${withTrailing}`;
}
