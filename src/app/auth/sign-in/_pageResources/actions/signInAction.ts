"use server"

import { z } from "zod";
import { TFormSchema } from "../components/Form/Form"
import { prisma } from "@/lib/prisma/prisma";
import jwt from "jsonwebtoken"
import { compare } from "bcryptjs"
import { cookies as NextCookies } from "next/headers"
import { redirect } from "next/navigation";

export const signInAction = async (props: TFormSchema): Promise<TSignInActionReturn> => {
    const body = signInActionSchema.parse(props)
    const cookies = await NextCookies()

    const hasUser = await prisma.user.findUnique({ where: { email: body.email } })

    if (!hasUser) {
        return error
    }

    const passwordMatch = await compare(props.password, hasUser.password)

    if (!passwordMatch) {
        return error
    }

    const jwtToken = jwt.sign(
        {
            maxAge: 60 * 60 * 24 * 30,
            user: { email: hasUser.email, id: hasUser.id, role: hasUser.role },
        },
        process.env.JWT_KEY!
    )

    cookies.set("session", jwtToken, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24 * 30,
    });

    redirect("/admin")
}

const error: TSignInActionReturn = {
    statusCode: 400,
    status: "error",
    title: "Usuário não encontrado",
    message: "As credenciais são inválidas, tente novamente."
}

const signInActionSchema = z.object({
    email: z
      .string({ required_error: "Digite seu email" })
      .email("Email inválido"),
    password: z
      .string({ required_error: "Digite sua senha" })
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
});

type TSignInActionReturn = {
    statusCode: number
    status: "success" | "error"
    title?: string
    message?: string
}