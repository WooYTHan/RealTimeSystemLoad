const path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query:
      {
        presets:['react']
      } }
    ]
  }
}