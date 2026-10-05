import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'fr'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip public files, API routes, and static assets
  if (
    pathname.includes('.') || 
    pathname.startsWith('/api') || 
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images')
  ) {
    return NextResponse.next();
  }

  // Check if pathname starts with a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect to default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and public folder files
    '/((?!_next|images|favicon.ico).*)',
  ],
};
