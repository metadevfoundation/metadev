var path = require('path');

// WEBPACK
var webpack = require('webpack');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE ||
    'false'
  ))
});


var providePlugin = new webpack.ProvidePlugin({
  _: "lodash"
});

var compiler = webpack({
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
  },
  plugins: [definePlugin, providePlugin]
});

compiler.watch(200, function (err, stats) {
  if (err) {
    console.error(err);
  }
});
