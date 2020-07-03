import { Response, Request } from 'express'

import { craw } from '../funcions/Crawler'

class CrawlerController {
  public async index(req: Request, res: Response): Promise<Response> {
    const info = await craw

    return res.json(info)
  }
}

export default new CrawlerController()
