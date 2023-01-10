import { Product } from '../products.schemas'

export default {
  findProducts: async (): Promise<Product[]> => {
    return [{
      id: 1,
      name: 'name',
      price: 100
    }]
  },
  findProductById: async (id: Number = 0): Promise<Product | undefined> => {
    if (id === 1) {
      return {
        id: 1,
        name: 'name',
        price: 100
      }
    }
    return undefined
  },
  createProduct: async (product: Product): Promise<Product> => {
    return {
      id: 1,
      ...product
    }
  },
  updateProductById: async (id: Number = 0, product: Product): Promise<Product> => {
    return {
      id,
      ...product
    }
  },
  deleteProductById: async (id: Number = 0): Promise<Product> => {
    return {
      id,
      name: 'name',
      price: 100
    }
  }
}
