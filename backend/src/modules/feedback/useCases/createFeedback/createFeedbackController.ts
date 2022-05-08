import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFeedbackUseCase } from "./createFeedbackUseCase";

export class CreateFeedbackController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { comment, type, screenshot } = request.body

        const createFeedbackUseCase = container.resolve(CreateFeedbackUseCase)

        const result = await createFeedbackUseCase.execute({
            comment,
            type,
            screenshot
        })

        return response.status(201).json(result)
    }
}