import routes from './routes'
import { Express, json } from 'express'
import * as swaggerUi from 'swagger-ui-express'
import * as swaggerFile from './swagger.json'

export default (app: Express): void => {
  app.use(json())
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.use('/api/v1', routes)
}
