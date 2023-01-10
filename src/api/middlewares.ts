import * as jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

export default {
  authorize: (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization

    if (authorization === undefined) return res.status(401).send()

    const token = authorization.split(' ')[1]

    try {
      jwt.verify(token, process.env.JWT_KEY ?? 'xxx')
    } catch (err) {
      return res.status(401).send()
    }

    next()
  }
}
