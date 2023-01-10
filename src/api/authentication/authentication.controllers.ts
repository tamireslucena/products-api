import { Request, Response } from 'express'
import authenticationBusiness from './authentication.business'
import { UserCredentials } from './authentication.schemas'

export default {
  authenticate: async (req: Request, res: Response) => {
    const userCredentials: UserCredentials = {
      email: req.body?.email,
      password: req.body?.password
    }

    try {
      const data = await authenticationBusiness.authenticate(userCredentials)

      res.status(200).json(data)
    } catch (err: any) {
      res.status(401).json({ error: err.message })
    }
  },
  createUser: async (req: Request, res: Response) => {
    const product: UserCredentials = {
      email: req.body?.email,
      password: req.body?.password
    }

    try {
      const data = await authenticationBusiness.createUser(product)

      res.status(201).send(data)
    } catch (err: any) {
      res.status(400).json({ error: err.message })
    }
  }
}
