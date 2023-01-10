import database from '../../database'
import { Product } from './products.schemas'

export default {
  findProducts: async (): Promise<Product[]> => {
    const products = await database.select('*').from('products')
    return products
  },
  findProductById: async (id: Number = 0): Promise<Product> => {
    const product = await database.select('*').from('products').where({ id }).first()
    return product
  },
  createProduct: async (product: Product): Promise<Product> => {
    const [createdproduct] = await database.table('products').insert(product).returning('*')

    return createdproduct
  },
  updateProductById: async (id: Number = 0, product: Product): Promise<Product> => {
    const [updatedproduct] = await database.table('products').where({ id }).update({
      ...product,
      updated_at: new Date()
    }).returning('*')

    return updatedproduct
  },
  deleteProductById: async (id: Number = 0): Promise<Product> => {
    const [deletedProduct] = await database.table('products').where({ id }).del().returning('*')

    return deletedProduct
  }
}
