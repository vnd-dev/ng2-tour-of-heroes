var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = webpackMerge(commonConfig, {

    //The devtool defines how the source map is created. The source maps help in debugging our applications in the browser.
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.resolve(rootDir, 'dist'),
        publicPath: 'http://localhost:8080',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        // The extract-text-webpack-plugin removes the compiled CSS from the bundle and emits is as a separate file.
        new ExtractTextPlugin('[name].css')
    ],

    devServer:{
        historyApiFallback: true,
        stats: 'minimal'
    }
})