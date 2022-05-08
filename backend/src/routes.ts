import { Router } from "express";
import { CreateFeedbackController } from "./modules/feedback/useCases/createFeedback/createFeedbackController";

export const router = Router()

const createFeedbackController = new CreateFeedbackController()

router.post('/feedbacks', createFeedbackController.handle)

