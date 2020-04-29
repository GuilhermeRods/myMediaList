'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Koa = require('koa');
var Router = require("koa-router");
var router = new Router();
var app = new Koa();
var indexController = require('./controllers/index.js');
var cors = require('@koa/cors');

router.use(indexController);

app.use(cors({ origin: '*',
  allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
  exposeHeaders: ['X-Request-Id'] }));
app.use(router.routes());

app.listen(3000, function () {
  return console.log("Rodando!");
});

exports.default = app;
//# sourceMappingURL=server.js.map