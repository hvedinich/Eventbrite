const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    
    entry: {
        eventbrite: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './index.jsx',
        ]
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3000
    },

    module: {
        rules: [ 
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader/webpack', 'babel-loader'],
                // use: [
                //     'babel-loader',
                // ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot|ico)$/,
                loader: "file-loader",
            },
        ]
    },
    plugins: [
       // new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Eventbrite',
            hash: true,
            template: './index.html'
        }),
    ],

    // devtool: 'eval',
}