var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {provider: "./index.js",
    util: "./util.js"
  },
  output: {
    path: path.join(__dirname, 'browser'),
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js",
    library: "Lib",
    libraryTarget: "var"
  },

  resolve: {
    extensions: ['', '.js', 'index.js', '.json', 'index.json']
  },

  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
    ],
    loaders: [
        { test: /\.js$/, loader: 'babel-loader', plugins: ['transform-remove-strict-mode'], query: {presets: ['es2015']}},
    ]
  },
  resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
        packageMains: ['json-loader']
  },
  devtool: '#eval'
}