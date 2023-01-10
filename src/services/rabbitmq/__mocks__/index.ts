import { ConsumeMessage } from 'amqplib'

export const publish = async (queue: string, message: Object): Promise<void> => {

}

export const subscribe = async (queue: string, messageHandler: (msg: ConsumeMessage) => Promise<boolean>): Promise<void> => {

}
