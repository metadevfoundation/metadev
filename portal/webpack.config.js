// WEBPACK
var path = require('path');


var config = {
	entry: path.join(__dirname, 'src/app.js'),

	output: {
		path: path.join(__dirname, 'static'),
		filename: './bundle.js',
	},

	module: {
		loaders: [{
			test: /\.ejs$/,
			loader: 'ejs-compiled'
		}, {
			test: /\.html$/,
			loader: 'html'
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, ]
	}
};

module.exports = config;
