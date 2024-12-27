"use server"

import { TFormSchema } from "../components/Form/Form"
import { prisma } from "@/lib/prisma/prisma";
import jwt from "jsonwebtoken"
import { hash } from "bcryptjs"
import { cookies as NextCookies } from "next/headers"
import { redirect } from "next/navigation";
import { error } from "@/utils/error";
import { TActionReturn } from "@/utils/types";

export const signUpAction = async (props: TFormSchema): Promise<TActionReturn> => {
    const body = props
    const cookies = await NextCookies()

    const emailExists = await prisma.user.findUnique({ where: { email: body.email } })
    const passwordIsValid = body.password === body.confirmPassword
    const passwordHashed = await hash(body.password, 6)

    if (emailExists) {
        error({
            statusCode: 400,
            status: "error",
            title: "Usuário já cadastrado",
            message: "O email já está cadastrado, tente outro."
        })
    }

    if (!passwordIsValid) {
        error({
            statusCode: 400,
            status: "error",
            title: "Senha inválida",
            message: "As senhas não correspondem, tente novamente."
        })
    }

    const user = await prisma.user.create({
        data: {
            email: body.email,
            name: body.name,
            password: passwordHashed,
            role: "user"
        }
    })

    const jwtToken = jwt.sign(
        {
            maxAge: 60 * 60 * 24 * 30,
            user: { email: user.email, id: user.id, role: user.role },
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

    redirect("/platform")
}


