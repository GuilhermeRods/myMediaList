import Router from 'koa-router'
import mediasRouter from './medias-router'


const router = new Router()
const api = new Router()


api.use(mediasRouter)

router.use(api.routes())

export default router
