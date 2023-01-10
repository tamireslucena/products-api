import * as path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') })

export default {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST ?? 'localhost',
    port: process.env.DB_PORT ?? 5432,
    database: process.env.DB_NAME ?? 'database',
    user: process.env.DB_USER ?? 'user',
    password: process.env.DB_PASSWORD ?? 'password'
  },
  migrations: {
    directory: path.join(__dirname, '/migrations')
  }
}
