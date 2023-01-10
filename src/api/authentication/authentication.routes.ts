/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import authenticationControllers from './authentication.controllers'

const router = Router()

router
  .post('/users', authenticationControllers.createUser)
  .post('/', authenticationControllers.authenticate)

export default router
