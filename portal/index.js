var koa = require('koa');
var serve = require('koa-static');

// KOA
var app = koa();

app.use(serve(path.join(__dirname, 'static/')));

module.exports = app;
