/*jshint esversion: 6 */

const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: ['./main.js'],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    }, ],
  },
  devServer: {
    port: 3000
  }
};