"use server"

import { TExpenseFormSchema } from "../components/ExpenseDialog/ExpenseForm"
import { error } from "@/utils/error"
import { getUserSessionFromCookies } from "@/lib/authenticate/lib"
import { prisma } from "@/lib/prisma/prisma"

export const registerNewExpense = async (props: TExpenseFormSchema) => {
    const body = props

    const user = await getUserSessionFromCookies()

    await prisma.transaction.create({
        data: {
            title: body.title,
            type: "expense",
            amount: body.amount,
            category: body.category,
            paymentMethod: body.paymentMethod,
            date: body.date,
            recurrence: body.recurrence,
            description: body.description,
            userId: user.id
        }
    })

    return error({
        statusCode: 201,
        status: "success",
        title: "Expense registered successfully",
    })
}