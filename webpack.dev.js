const webpack = require( 'webpack' );
const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const {CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        libraryTarget: 'var',
        library: 'Hashtags'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }, 
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin( {
            template: './src/client/views/index.html',
            filename: './index.html'
        } ),
        new CleanWebpackPlugin( {
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}