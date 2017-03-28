var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const rootDir = path.resolve(__dirname, '..');

module.exports = {

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: ['ts-loader', 'angular2-template-loader'] // files will pass through right to left loaders template-loader --> typescript-loader
            },
            {
                test: /\.html$/,
                loader: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: ['file-loader?name=assets/[name].[hash].[ext]']
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        //The CommonsChunkPlugin removes all the multiple used chunks of code and uses it only once.
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        //The HtmlWebpackPlugin adds a script tag to our index.html for the each of the bundle created.
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}