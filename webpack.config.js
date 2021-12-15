
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const now = new Date();

let mode = "development";
if (process.env.NODE_ENV === "production") {
	mode = "production"
}

module.exports = {
	mode: mode,
	entry: './src/index.ts',
	output: {
		filename: `bundle-[contenthash].js`,
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
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
				use: [/*'style-loader'*/MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
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
	devtool: "source-map",
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
}


