import Koa from 'koa'
import Cors from '@koa/cors'
import Logger from 'koa-logger'
import koaJwt from 'koa-jwt'
import koaBody from 'koa-body'
import routes from './routes'
import { SECRET } from './config.js'

const app = new Koa()

app.use(
  Cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    exposeHeaders: ['X-Request-Id']
  })
)

app.use(Logger())
app.use(koaBody({ multipart: true }))

app.use(
  koaJwt({ secret: SECRET }).unless({ path: ['/login', '/signup', '/medias', '/users'] })
)

app.use(routes.routes())
app.use(routes.allowedMethods())

export default app
