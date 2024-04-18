import { auth } from "@/auth";
import { NextResponse } from "next/server";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes
} from '@/routes';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  console.log("LOGGED IN: ", isLoggedIn)

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute){
    return NextResponse.next();;
  };

  if (isAuthRoute){
    if (isLoggedIn){
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return NextResponse.next();;
  }

  if (!isLoggedIn && !isPublicRoute){
    return NextResponse.redirect(new URL("/auth/login", nextUrl))
  }
  return NextResponse.next();;
})


export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};