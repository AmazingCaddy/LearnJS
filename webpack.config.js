var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  mode: "development",
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};