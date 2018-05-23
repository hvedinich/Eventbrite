const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 4000,
  },
  entry: {
    eventbrite: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:4000',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      './index.jsx',
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
});
