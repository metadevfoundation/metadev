var koa = require('koa');
var route = require('koa-route');
var parse = require('co-body');
var thunkify = require('thunkify');
var winston = require('winston');

var quip = require('./lib/api.js');
var conf = require('./config.js');


var app = koa();

var client = new quip.Client({
	accessToken: conf.token
});

var routes = {
	create: function* () {
		// var user = yield auth();
		var params = yield parse.json(this);
		var result = yield newDocument({
			title: params.title,
			content: params.content,
			memberIds: ['NeHAOAMJ92Z']
		});

		this.assert(result, 401, 'Unable to Connect with Quip API :(');
		this.body = 'Cellphones Successfully Vibrated.';
	}
}

// Route
app.use(route.post('/create', routes.create));

module.exports = app;


// Quip Thunk Wrappers
function auth() {
	return function (cb) {
		client.getAuthenticatedUser(cb);
	}
}

function newDocument(options) {
	return function (cb) {
		client.newDocument(options, cb);
	}
}
