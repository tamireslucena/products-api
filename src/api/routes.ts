
import { Router } from 'express'
import productsRoutes from './products/products.routes'
import authenticationRoutes from './authentication/authentication.routes'
import middlewares from './middlewares'

const router = Router()

router
  .use('/authentication', authenticationRoutes)
  .use('/products', middlewares.authorize, productsRoutes)

export default router
