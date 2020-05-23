import Router from 'koa-router'
import mediasRouter from './medias-router'
import usersRouter from './users-router'
import loginRouter from './login-router'

const router = new Router()
const api = new Router()

api.use(mediasRouter)
api.use(usersRouter)
api.use(loginRouter)

router.use(api.routes())

export default router
