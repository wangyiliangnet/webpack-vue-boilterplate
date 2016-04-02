var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var baseConfig = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('vue-style-loader', [
                'css-loader'
            ]),
            sass: ExtractTextPlugin.extract('vue-style-loader', [
                'css-loader',
                'sass-loader'
            ])
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
});
