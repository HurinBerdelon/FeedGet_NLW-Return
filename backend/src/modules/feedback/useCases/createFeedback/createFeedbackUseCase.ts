import { Feedback } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import FeedbackTypes from '../../../../config/FeedbackTypes';
import { AppError } from '../../../../errors/appError';
import { IMailProvider } from '../../../../providers/IMailProvider';
import { IFeedbackRepository } from '../../repositories/IFeedbackRepository';

interface IRequest {
    comment: string,
    type: string,
    screenshot?: string
}

@injectable()
export class CreateFeedbackUseCase {

    constructor(
        @inject('FeedbackRepository')
        private prismaFeedbackRepository: IFeedbackRepository,
        @inject('NodemailerMailProvider')
        private mailProvider: IMailProvider
    ) { }

    async execute({ comment, type, screenshot }: IRequest): Promise<Feedback> {

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new AppError('Invalid screenshot format!', 400)
        }

        if (!comment || !type) {
            throw new AppError('Comment and Type fields are Needed!', 400)
        }

        if (!FeedbackTypes[type]) {
            throw new AppError('Type not found!', 404)
        }

        const feedback = await this.prismaFeedbackRepository.create({
            comment,
            type,
            screenshot
        })

        await this.mailProvider.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;>`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" />` : ``,
                `</div>`
            ].join('\n')
        })

        return feedback
    }
}