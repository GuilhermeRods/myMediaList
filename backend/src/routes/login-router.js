import Router from 'koa-router'
import loginControler from '../controllers/loginController'

const router = new Router()

router.post('/login', loginControler.login)
export default router.routes()
