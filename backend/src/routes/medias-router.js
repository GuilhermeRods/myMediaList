import Router from 'koa-router'

import MediasController from '../controllers/mediasController'

const router = new Router()

router.post('/medias', MediasController.create)

export default router.routes()
