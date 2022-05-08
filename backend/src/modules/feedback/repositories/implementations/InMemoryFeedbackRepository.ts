import { Feedback } from "@prisma/client";
import { FeedbackCreateDTO, IFeedbackRepository } from "../IFeedbackRepository";

export class InMemoryFeedbackRepository implements IFeedbackRepository {

    private repository: Feedback[] = []

    async create({ comment, screenshot, type }: FeedbackCreateDTO): Promise<Feedback> {

        const feedback = {
            comment,
            screenshot: screenshot,
            type,
            createdAt: new Date(),
            updatedAt: new Date(),
            id: String(Math.random())
        }

        this.repository.push(feedback)

        return feedback
    }
}