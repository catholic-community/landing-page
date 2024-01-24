import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// @ts-ignore locales are readonly
const locales: string[] = ["pt", "en"];

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(
    languages,
    locales,
    'pt',
  );

  return locale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const searchParams = request.nextUrl.searchParams.toString();

  if (
    [
      "/manifest.json",
      "/favicon.ico",
      "/next.svg",
      "/vercel.svg",
      "/thirteen.svg",
      "/sitemap.xml",
      "/sitemap-0.xml",
      "/sitemap-*.xml",
      "/images/*.jpg",
      "/*.jpg",
      "/*.svg",
      "/*.png",
      "/og.jpg",
    ].includes(pathname)
  )
    return;

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    const newUrl = new URL(`/${locale}${pathname}${searchParams ? '?' + searchParams : ''}`, request.url);
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
