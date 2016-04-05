var path = require('path')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, 'browser'),
    filename: "bundle.js",
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