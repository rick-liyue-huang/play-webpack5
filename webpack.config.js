
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const now = new Date();

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
	mode = "production";
	target = "browserslist";
}


module.exports = {
	mode: mode,
	target: target,
	entry: './src/index.tsx',
	output: {
		assetModuleFilename: "images/[hash][ext]",
		filename: `bundle-[hash].js`,
		path: path.resolve(__dirname, 'dist'),
		// clean: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/i,
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
			/*{
				test: /\.css$/i,
				// use: ['style-loader', 'css-loader'],
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},*/
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [/*'style-loader'*/MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				// type: 'asset/resource',
				// type: 'asset/inline',
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 30 * 1024
					}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				// type: 'asset/resource'
				type: 'asset/inline'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My Webpack 5',
			template: "./src/index.html"
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle-[hash].css'
		}),
		new CleanWebpackPlugin()
	],
	devServer: {
		static: './dist',
		port: 3000
	},
	devtool: "source-map",
	resolve: {
		extensions: ['.tsx', '.ts', '.js', 'jsx']
	}
}


