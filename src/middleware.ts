import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.get("auth")?.value;
  const { pathname } = req.nextUrl;

  // allow login page
  if (pathname.startsWith("/login")) {
    if (auth) return NextResponse.redirect(new URL("/dashboard", req.url));
    return NextResponse.next();
  }

  // protect dashboard & admin routes
  if (!auth && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
