export type TActionReturn = {
    statusCode: number
    status: "success" | "error"
    title?: string
    message?: string
}