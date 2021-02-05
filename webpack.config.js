const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = env => {

	const environment = env.environment;
  const isProduction = environment === 'production';
  const isDevelopment = environment === 'development';

	return {
		mode: environment,
		entry: [
      path.join(PATH_SOURCE, './index.js'),
    ],
		output: {
			path: __dirname + '/dist',
			filename: 'js/[name].[hash].js',
			publicPath: '/'
		},
		module: {
			rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}
			},{
				test: /\.html$/,
				use: [{
					loader: "html-loader",
					options: { minimize: true }
				}]
			},{
				test: /\.scss$/,
				use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", "sass-loader"]
			},{
				test: /\.(png|jpg)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "images/"
					}
				}
			}]
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'React + Webpack :: Douglas Lira',
				template: __dirname + '/template/index.html',
				meta: {
					viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
				},
				hash: true
			}),
			new MiniCssExtractPlugin({
				filename: "css/[name].[hash].css"
			}),
			new CleanWebpackPlugin(),
		],
		devServer: {
			contentBase: PATH_DIST,
			historyApiFallback: true,
			overlay: {
        errors: true,
        warnings: true,
      },
		},
		externals: {
			config: JSON.stringify({
				apiUrl: 'http://localhost:10010'
			})
		}
	}
};
