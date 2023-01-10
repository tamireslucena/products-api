import { publish } from '../../services/rabbitmq'
import { Product } from './products.schemas'
import productsDao from './products.dao'
import redis from '../../services/redis'

export default {
  createProduct: async (product: Product) => {
    await publish('products', {
      action: 'CREATE',
      data: { product }
    })
  },
  listProducts: async (): Promise<{ products: Product[] }> => {
    const products = await productsDao.findProducts()

    return { products }
  },
  getProduct: async (productId: Number): Promise<{ product: Product }> => {
    const productCacheKey = `products-${productId.toString()}`
    const productCache: Product | undefined = await redis.get(productCacheKey)

    const product = productCache ?? await productsDao.findProductById(productId)
    if (product === undefined) throw new Error('Product not found')

    if (productCache === undefined) await redis.set(productCacheKey, product)

    return { product }
  },
  updateProduct: async (product: Product) => {
    await publish('products', {
      action: 'UPDATE',
      data: { product }
    })
  },
  deleteProduct: async (productId: Number) => {
    await publish('products', {
      action: 'DELETE',
      data: { product: { id: productId } }
    })
  }
}
