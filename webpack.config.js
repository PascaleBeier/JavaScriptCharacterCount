const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/javascript-character-count',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'javascript-character-count.min.js',
    library: 'characterCount',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
