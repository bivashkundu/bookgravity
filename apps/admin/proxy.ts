import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const tokenName = process.env.NEXT_APP_TOKEN_NAME || 'bookgravity_admin_token';
  const token = request.cookies.get(tokenName)?.value;

  const isAuthPage =
    request.nextUrl.pathname === '/login/' ||
    request.nextUrl.pathname === '/login' ||
    request.nextUrl.pathname === '/register/' ||
    request.nextUrl.pathname === '/register';

  // Redirect to login if token is missing and trying to access a protected page
  if (!token && !isAuthPage) {
    const loginUrl = new URL('/login/', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to home if token is present and trying to access login/register page
  if (token && isAuthPage) {
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|manifest.json|robot.txt|vercel.svg|offline).*)',
  ],
};
