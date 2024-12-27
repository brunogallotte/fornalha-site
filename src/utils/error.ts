export const error = (props: TErrorProps): TErrorProps => {
    return {
        statusCode: props.statusCode ?? 400,
        status: props.status ?? "error",
        title: props.title ?? "Usuário não encontrado",
        message: props.message
    }
}

type TErrorProps = {
    statusCode?: number
    status?: string
    title?: string
    message?: string
}