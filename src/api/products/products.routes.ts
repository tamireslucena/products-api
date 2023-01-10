/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import productsControllers from './products.controllers'

const router = Router()

router
  .post('/', productsControllers.createProduct)
  .get('/', productsControllers.listProducts)
  .get('/:id', productsControllers.getProduct)
  .put('/:id', productsControllers.updateProduct)
  .delete('/:id', productsControllers.deleteProduct)

export default router
