import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "australiansiptv.com";

/**
 * Enforce HTTPS + non-www host. Trailing slash is handled by next.config trailingSlash.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase().split(":")[0] ?? "";
  const proto = request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "");
  const { pathname, search } = request.nextUrl;

  const needsHostFix = host === `www.${CANONICAL_HOST}`;
  const needsHttps = proto === "http" && host.endsWith(CANONICAL_HOST);

  if (needsHostFix || needsHttps) {
    const url = new URL(`https://${CANONICAL_HOST}${pathname}${search}`);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip Next internals and static assets.
     */
    "/((?!_next/static|_next/image|favicon.png|icon.png|apple-icon.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
