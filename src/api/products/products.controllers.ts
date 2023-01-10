import { Request, Response } from 'express'
import productsBusiness from './products.business'
import { Product } from './products.schemas'

export default {
  createProduct: async (req: Request, res: Response) => {
    const product: Product = {
      name: req.body?.name,
      price: req.body?.price
    }

    await productsBusiness.createProduct(product)

    res.status(204).send()
  },
  listProducts: async (req: Request, res: Response) => {
    const data = await productsBusiness.listProducts()

    res.status(200).json(data)
  },
  getProduct: async (req: Request, res: Response) => {
    const productId = Number(req.params.id)

    try {
      const data = await productsBusiness.getProduct(productId)

      res.status(200).send(data)
    } catch (err) {
      res.status(404).send()
    }
  },
  updateProduct: async (req: Request, res: Response) => {
    const product: Product = {
      id: Number(req.params.id),
      name: req.body?.name,
      price: req.body?.price
    }

    await productsBusiness.updateProduct(product)

    res.status(204).send()
  },
  deleteProduct: async (req: Request, res: Response) => {
    const productId = Number(req.params.id)

    await productsBusiness.deleteProduct(productId)

    res.status(204).send()
  }
}
