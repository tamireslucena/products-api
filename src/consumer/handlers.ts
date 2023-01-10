import productsDao from '../api/products/products.dao'
import { Product } from '../api/products/products.schemas'
import redis from '../services/redis'

export default {
  create: async (product: Product) => {
    await productsDao.createProduct(product)
  },
  update: async (product: Product) => {
    await productsDao.updateProductById(product.id, product)

    const productCacheKey = `products-${(product.id ?? 0).toString()}`
    await redis.delete(productCacheKey)
  },
  delete: async (product: Product) => {
    await productsDao.deleteProductById(product.id)

    const productCacheKey = `products-${(product.id ?? 0).toString()}`
    await redis.delete(productCacheKey)
  }
}
