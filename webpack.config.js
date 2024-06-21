const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js)$/,
      loader: 'babel-loader',
      include: [path.resolve('src')]
    }],
  },
  output: {
    filename: 'index.js',
    path: path.resolve('dist'),
    publicPath: ''
  },
  devtool: 'source-map',
  optimization: {
    minimize: false
  }
};
