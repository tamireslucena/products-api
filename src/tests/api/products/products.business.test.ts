import productsBusiness from '../../../api/products/products.business'

jest.mock('../../../services/redis/index.ts')
jest.mock('../../../api/products/products.dao.ts')

test('should return specific product', async () => {
  expect(await productsBusiness.getProduct(1)).toMatchObject({
    product: {
      id: 1,
      name: 'name',
      price: 100
    }
  })
})

test('should throw not found', async () => {
  expect(await productsBusiness.getProduct(2)).toThrow('Product not found')
})

test('should return all products', async () => {
  expect(await productsBusiness.listProducts()).toMatchObject({
    products: [{
      id: 1,
      name: 'name',
      price: 100
    }]
  })
})
