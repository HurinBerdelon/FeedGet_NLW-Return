import { Feedback } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { FeedbackCreateDTO, IFeedbackRepository } from "../IFeedbackRepository";

export class PrismaFeedbackRepository implements IFeedbackRepository {

    private repository = prisma

    async create({ comment, screenshot, type }: FeedbackCreateDTO): Promise<Feedback> {

        const feedback = await this.repository.feedback.create({
            data: {
                comment,
                type,
                screenshot
            }
        })

        return feedback
    }

}