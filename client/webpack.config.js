// WEBPACK
var path = require('path');


var config = {
  entry: path.join(__dirname, 'src/app.js'),

  output: {
    path: path.join(__dirname, 'static'),
    filename: './bundle.js',
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
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
