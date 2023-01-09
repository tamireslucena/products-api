/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { connect as amqpConnect, Channel, ConsumeMessage } from 'amqplib'

let channelInstance: any

const connect = async (): Promise<Channel> => {
  if (channelInstance !== undefined) return channelInstance

  const connection = await amqpConnect(process.env.RABBITMQ_URL ?? 'amqp://localhost:5673')
  const channel = await connection.createChannel()
  await channel.assertQueue(process.env.RABBITMQ_QUEUE ?? 'products')

  return channel
}

export const publish = async (queue: string, message: Object): Promise<void> => {
  const channel = await connect()
  await channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)))
}

export const subscribe = async (queue: string, messageHandler: (msg: ConsumeMessage) => Promise<boolean>): Promise<void> => {
  const channel = await connect()
  await channel.consume(queue, async (message) => {
    if (message == null) return
    const success = await messageHandler(message)
    if (success) channel.ack(message)
  })
}
