import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    const handleError = () => {
        const res = NextResponse.redirect(new URL(`/auth/sign-in`, req.url));
        res.cookies.delete("session");
        return res;
      };

    /* AUTHORIZE USER */
    if (pathname.includes("/admin")) {
        const userToken = req?.cookies.get("session");
  
        if (!userToken?.value) return handleError();
  
        const user: any = await (await jwtVerify(userToken?.value, new TextEncoder().encode(process.env.JWT_KEY!))).payload?.user;
  
        if (!user) return handleError();

        console.log(user)
  
        /* CHECK IF USER IS ADMIN */
        if (pathname.includes("/admin") && user?.role !== "admin") return handleError();
      }
}