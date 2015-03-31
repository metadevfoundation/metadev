var koa = require('koa');
var render = require('koa-ejs');
var path = require('path');
var serve = require('koa-static');

var locals = {
	design: {
		radial: false
	}
};

module.exports = function (app) {
	// Serve static files
	render(app, {
		root: path.join(__dirname, 'templates'),
		layout: false,
		viewExt: 'html',
		cache: false,
		debug: true,
		locals: locals,
		filters: {}
	});


	var app = koa();

	app.use(serve(path.join(__dirname, 'static')));

	app.use(function* () {
		yield this.render('00-base');
	});

	return app;
};
