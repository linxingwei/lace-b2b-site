import { NextResponse, type NextRequest } from "next/server";

const canonicalHost = "www.veloracelace.com";

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  const isApexDomain = hostname === "veloracelace.com";
  const isProductionVercelAlias = process.env.VERCEL_ENV === "production" && hostname.endsWith(".vercel.app");

  if (!isApexDomain && !isProductionVercelAlias) return NextResponse.next();

  const canonicalUrl = request.nextUrl.clone();
  canonicalUrl.protocol = "https:";
  canonicalUrl.hostname = canonicalHost;
  canonicalUrl.port = "";
  canonicalUrl.searchParams.delete("_vercel_share");
  return NextResponse.redirect(canonicalUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
