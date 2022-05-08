import 'reflect-metadata'
import { AppError } from '../../../../errors/appError'
import { IFeedbackRepository } from "../../repositories/IFeedbackRepository"
import { InMemoryFeedbackRepository } from "../../repositories/implementations/InMemoryFeedbackRepository"
import { CreateFeedbackUseCase } from "./createFeedbackUseCase"

const sendMailSpy = jest.fn()

let feedbackRepository: IFeedbackRepository
let createFeedbackUseCase: CreateFeedbackUseCase

describe('Create Feedback UseCase', () => {

    beforeEach(() => {
        feedbackRepository = new InMemoryFeedbackRepository()
        createFeedbackUseCase = new CreateFeedbackUseCase(
            feedbackRepository,
            { sendMail: sendMailSpy }
        )
    })

    it('should be able to create a new feedback', async () => {

        const feedback = await createFeedbackUseCase.execute({
            comment: 'new comment',
            type: 'BUG',
            screenshot: 'data:image/png;base64test.jpg'
        })

        expect(sendMailSpy).toHaveBeenCalled()
        expect(feedback).toHaveProperty('id')
    })

    it('should not be able to create a new feedback with invalid screenshot format', async () => {
        await expect(
            createFeedbackUseCase.execute({
                comment: 'new comment',
                type: 'BUG',
                screenshot: 'wrong:image/png;base64test.jpg'
            })
        ).rejects.toEqual(new AppError('Invalid screenshot format!', 400))
    })

    it('should not be able to create a new feedback without receiving comment and type', async () => {
        await expect(
            createFeedbackUseCase.execute({
                comment: undefined,
                type: 'BUG',
                screenshot: 'data:image/png;base64test.jpg'
            })
        ).rejects.toEqual(new AppError('Comment and Type fields are Needed!', 400))
    })

    it('should not be able to create a new feedback with invalid FeedbackType', async () => {
        await expect(
            createFeedbackUseCase.execute({
                comment: 'new comment',
                type: 'INSET',
                screenshot: 'data:image/png;base64test.jpg'
            })
        ).rejects.toEqual(new AppError('Type not found!', 404))
    })
})