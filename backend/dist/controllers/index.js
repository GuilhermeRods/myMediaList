"use strict";

var Router = require("koa-router");

var rout = new Router();

rout.get('/', function (ctx) {
  return ctx.body = "Bombouu";
});

module.exports = rout.routes();
//# sourceMappingURL=index.js.map