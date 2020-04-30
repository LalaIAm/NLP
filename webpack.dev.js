const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		main: './src/client/index.js',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
        hot: true,
        proxy: {
            "/api": "http://localhost:4000"
        }
	},
	output: {
		libraryTarget: 'var',
		library: 'Hashtags',
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js',
	},
	target: 'web',
	module: {
		rules: [
			{
				test: '/\.js$/',
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.html$/,
				use: [{ loader: 'html-loader' }],
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/client/views/index.html',
			filename: './index.html',
			excludeChunks: ['server'],
		}),
		new CleanWebpackPlugin({
			dry: true,
			verbose: true,
			cleanStaleWebpackAssets: true,
			protectWebpackAssets: false,
		}),
	],
};
