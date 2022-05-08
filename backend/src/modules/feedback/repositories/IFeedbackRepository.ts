import { Feedback } from "@prisma/client"

export interface FeedbackCreateDTO {
    comment: string,
    type: string,
    screenshot?: string
}

export interface IFeedbackRepository {
    create({ comment, screenshot, type }: FeedbackCreateDTO): Promise<Feedback>
}