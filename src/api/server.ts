import * as path from 'path'
import * as dotenv from 'dotenv'
import * as express from 'express'
import app from './app'

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const expressApp = express()

expressApp.use(express.json())

app(expressApp)

expressApp.listen(process.env.PORT ?? 3333, () => {
  console.log(`Server running on port ${process.env.PORT ?? 3333}`)
})
