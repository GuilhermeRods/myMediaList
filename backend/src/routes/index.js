import Router from 'koa-router'
import mediasRouter from './medias-router'
import usersRouter from './users-router'

const router = new Router()
const api = new Router()

api.use(mediasRouter)
api.use(usersRouter)
router.use(api.routes())

export default router
