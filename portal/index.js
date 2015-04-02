var koa = require('koa');
var serve = require('koa-static');
var path = require('path');
var winston = require('winston');
var webpack = require('webpack');

// KOA
var app = koa();

app.use(serve(path.join(__dirname, 'static/')));


function watcher() {

	var config = require('./webpack.config.js');

	webpack(config).run(function (err, stats) {
		if (err) {
			winston.log(err);
		}

		winston.log(stats);
	})
}

module.exports = function (watch) {
	if (watch) {
		watcher();
	}
	return app;
}
