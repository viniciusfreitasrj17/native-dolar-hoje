import { Router } from 'express'

import CrawlerController from './controllers/CrawlerController'

const routes = Router()

routes.get('/', CrawlerController.index)

export default routes
