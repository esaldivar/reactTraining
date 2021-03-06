/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
	entry: path.resolve(__dirname,'./src/index.js'),
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
		],
	},
	output: {
		path: path.resolve(__dirname,'./build'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,'index.html'),
		}),
	],

		devServer: {
			proxy: {
			  '/api': 'http://localhost:3000',
			},
			hot: true,
			historyApiFallback: true,
		  },
};