const Koa = require('koa');
const Router = require("koa-router");
const router = new Router();
const app = new Koa();
const indexController = require('./controllers/index.js');
const cors = require('@koa/cors');
// const knex = require('../knexfile.js')

// console.log(route);
router.use(indexController)


app.use(cors({origin: '*',
allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
exposeHeaders: ['X-Request-Id']}))
app.use(router.routes())

app.listen(3000,()=> console.log("Rodando!"));