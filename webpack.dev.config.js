var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var baseConfig = require('./webpack.base.config');

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
