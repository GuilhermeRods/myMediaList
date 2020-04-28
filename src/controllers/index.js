const Router = require("koa-router");

const rout = new Router();

rout.get('/',ctx => ctx.body="Bombouu");

module.exports = rout.routes();
