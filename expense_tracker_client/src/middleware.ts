import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { tokenValidation } from "./utils/tokenValidation";

// token_huda_yo_chalna_vayena
const routesWithOutAuth = [""];

export function middleware(request: NextRequest, response: NextResponse) {
  const token: any = request.cookies.get("refresh_token")?.value ?? null;
  const { pathname } = request.nextUrl;
  const paths = pathname.split("/");
  const is_token_valid = tokenValidation(response, token);

  if (is_token_valid) {
    const accessToken = request.cookies.get("access_token")?.value;
    let decoded: any;
    decoded = jwtDecode(accessToken ? accessToken : "");

    if (routesWithOutAuth.includes(paths[1])) {
      return NextResponse.redirect(new URL("/dashboard/expenses", request.url));
    }
    if (paths[1] === "") {
      return NextResponse.redirect(new URL("/dashboard/expenses", request.url));
    }
    return NextResponse.next();
  } else if (pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
