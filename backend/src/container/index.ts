import { container } from "tsyringe";
import { IFeedbackRepository } from "../modules/feedback/repositories/IFeedbackRepository";
import { PrismaFeedbackRepository } from "../modules/feedback/repositories/implementations/PrismaFeedbackRepository";
import { IMailProvider } from "../providers/IMailProvider";
import { NodemailerMailProvider } from "../providers/nodemailer/nodemailerMailProvider";

container.registerSingleton<IFeedbackRepository>(
    'FeedbackRepository',
    PrismaFeedbackRepository
)

container.registerSingleton<IMailProvider>(
    'NodemailerMailProvider',
    NodemailerMailProvider
)