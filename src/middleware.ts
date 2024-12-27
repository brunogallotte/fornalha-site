import { NextRequest } from "next/server";
import { getUserSession, handleAuthenticateError } from "./lib/authenticate/lib";

export default async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    /* AUTHORIZE USER */
    if (pathname.includes("/admin" || "/platform")) {
        const user = await getUserSession(req);
  
        /* CHECK IF USER IS AUTHENTICATED */
        if (!user) return handleAuthenticateError(req);

        /* CHECK IF USER IS ADMIN */
        if (pathname.includes("/admin") && user?.role !== "admin") return handleAuthenticateError(req);
      }
}