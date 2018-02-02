const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    eventbrite: [
      'babel-polyfill',
      './index.jsx',
    ],
    vendors: './vendors.js',
  },

  output: {
    path: path.join(__dirname, 'built'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },

      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot|ico)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // Specify the common bundle's name.
    }),
    new HtmlWebpackPlugin({
      title: 'Eventbrite',
      hash: true,
      template: './index.html',
    }),
  ],
}
