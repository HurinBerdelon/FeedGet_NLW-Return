import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import cors from 'cors'
import './container'
import { router } from './routes'
import { handleErrors } from './middlewares/handleErrors'

export const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

app.use(handleErrors)

