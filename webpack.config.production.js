const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    eventbrite: [
      'babel-polyfill',
      './index.jsx',
    ],
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      },
    }),
  ],
});
