import Router from 'koa-router'

import UsersController from '../controllers/usersController'

const router = new Router()

router.post('/users', UsersController.create)

export default router.routes()
