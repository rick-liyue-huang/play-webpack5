
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const now = new Date();

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		filename: `bundle-[contenthash].js`,
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				// use: ['style-loader', 'css-loader'],
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [/*'style-loader'*/MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My Webpack 5'
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle-[contenthash].css'
		})
	],
	devServer: {
		static: './dist',
		port: 3000
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
}


