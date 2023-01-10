import { ConsumeMessage } from 'amqplib'
import { subscribe } from '../services/rabbitmq'
import { Product } from '../api/products/products.schemas'
import handlers from './handlers'

subscribe(process.env.RABBITMQ_QUEUE ?? 'products', async (message: ConsumeMessage) => {
  try {
    const {
      action,
      data: { product }
    }: { action: string, data: { product: Product } } = JSON.parse(message.content.toString())

    if (action === 'CREATE') await handlers.create(product)
    if (action === 'UPDATE') await handlers.update(product)
    if (action === 'DELETE') await handlers.delete(product)

    return true
  } catch (err) {
    console.error(err)
    return false
  }
})
  .catch(console.error)
