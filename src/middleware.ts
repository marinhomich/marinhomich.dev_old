import { NextResponse, NextRequest} from 'next/server'
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const path = url.pathname;
  const session = await getToken({ req });
  console.log(session)

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  if (!session && path !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && path == "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  // return NextResponse.rewrite(
  //   new URL(`/app${path === "/" ? "" : path}`, req.url),
  // );

}