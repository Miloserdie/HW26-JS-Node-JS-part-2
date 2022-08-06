const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	output: {
	  path: path.resolve(__dirname, 'dist'),
	  filename: ' bundle.js'
	},
	devServer: {
		static: {
		  directory: path.join(__dirname, 'src'),
		},
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new CleanWebpackPlugin(),
	],
	mode: 'production',
 }