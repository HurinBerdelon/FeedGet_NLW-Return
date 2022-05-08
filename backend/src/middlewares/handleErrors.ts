import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export async function handleErrors(error: Error, request: Request, response: Response, next: NextFunction) {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message
        })
    } else {
        return response.status(500).json({
            status: 'Internal Server Error',
            message: error.message
        })
    }
}