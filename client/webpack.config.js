var config = {
	context: __dirname,
	entry: './src/app.js',

	output: {
		path: 'static',
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.ejs$/,
			loader: 'ejs-compiled'
		}, {
			test: /\.html$/,
			loader: 'html'
		}, {
			test: /\.md$/,
			loader: 'html!markdown',
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, ]
	}
};

module.exports = config;
