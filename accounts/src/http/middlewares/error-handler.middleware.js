import { BadRequestError } from "../errors/bad-request.error.js"

export const errorMiddleware = (error, request, response, next) => {
    if(error instanceof BadRequestError) {
        return response.status(error.status).json({
            status: error.status,
            message: error.message,
            errors: error.errors,
        });
    }
    console.log(error)

    return response.status(500).json({ message: 'Internal Server Error' });
}