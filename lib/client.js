var koa = require('koa');
var render = require('koa-ejs');
var path = require('path');
var serve = require('koa-static');

var locals = {
  version: '0.0.1',
  now: function () {
    return new Date();
  }
};

var filters = {
  format: function (time) {
    return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
  }
};

var app = koa();


app.use(serve(path.join(__dirname, 'static')));

// Serve static files
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: true,
  locals: locals,
  filters: filters
});

app.use(function* () {
  yield this.render('index');
});


module.exports = app;
