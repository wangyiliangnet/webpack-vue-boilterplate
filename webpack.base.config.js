var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build/static');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'app.js'),
        vendors: ['vue']
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                include: APP_PATH
            },
            {
                test: /\.html$/,
                loader: 'vue-html',
                include: APP_PATH
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks: ['app', 'vendors'],
            inject: 'body'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    devtool: 'eval-source-map'
};

