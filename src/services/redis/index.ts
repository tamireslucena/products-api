import * as Keyv from 'keyv'

const keyv = new Keyv(process.env.REDIS_URL ?? 'redis://:@localhost:6379')

export default keyv
