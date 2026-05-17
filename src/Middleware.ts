import { NextRequest, NextResponse } from "next/server";

// Routes that don't need authentication
const PUBLIC_API_ROUTES = [
  "/api/users",      // login endpoints use ?action= params, handled inside
  "/api/curriculum", // public read handled inside route
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only check API routes
  if (!pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Allow all OPTIONS requests (CORS preflight)
  if (req.method === "OPTIONS") {
    return NextResponse.next();
  }

  // Add security headers to all API responses
  const response = NextResponse.next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: ["/api/:path*"],
};