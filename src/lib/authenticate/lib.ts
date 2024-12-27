import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { cookies as NextCookies } from "next/headers";
import { redirect } from "next/navigation";
export const handleAuthenticateError = (req: NextRequest) => {
    const res = NextResponse.redirect(new URL(`/auth/sign-in`, req.url));
    res.cookies.delete("session");
    return res;
};

export const getUserSession = async (req: NextRequest) => {
    const userToken = req?.cookies.get("session");
  
    if (!userToken?.value) return handleAuthenticateError(req);

    const user: any = await (await jwtVerify(userToken?.value, new TextEncoder().encode(process.env.JWT_KEY!))).payload?.user;

    return user;
}

export const getUserSessionFromCookies = async () => {
    const cookies = await NextCookies()
    const userToken = cookies.get("session");
  
    if (!userToken?.value) return redirect("/auth/sign-in")

    const user: any = await (await jwtVerify(userToken?.value, new TextEncoder().encode(process.env.JWT_KEY!))).payload?.user;

    return user;
}